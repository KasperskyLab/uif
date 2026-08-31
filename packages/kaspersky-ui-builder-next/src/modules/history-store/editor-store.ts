import type { ComponentRegistry } from "../component-registry/types.ts"
import type { FormSchema, FormSettings, SchemaNode } from "../schema-model/form-schema.ts"
import {
  collectElementIds,
  containsElement,
  findElement,
  insertElement,
  placementError,
  removeElement,
  updateElement,
} from "../form-controls/tree.ts"

export interface EditorTabState {
  form: FormSchema
  selectedElementId: string | null
  dirty: boolean
  canUndo: boolean
  canRedo: boolean
}

export interface EditorState {
  tabs: EditorTabState[]
  activeFormId: string | null
}

export type StoreOperationResult =
  | { ok: true }
  | { ok: false; error: string }

interface HistoryEntry {
  form: FormSchema
  label: string
}

interface InternalTab {
  form: FormSchema
  selectedElementId: string | null
  savedSnapshot: string
  past: HistoryEntry[]
  future: HistoryEntry[]
}

const HISTORY_LIMIT = 100

function cloneForm(form: FormSchema): FormSchema {
  return structuredClone(form)
}

function cloneNode(node: SchemaNode): SchemaNode {
  return structuredClone(node)
}

function snapshot(form: FormSchema): string {
  return JSON.stringify(form)
}

function publicTab(tab: InternalTab): EditorTabState {
  return {
    form: tab.form,
    selectedElementId: tab.selectedElementId,
    dirty: snapshot(tab.form) !== tab.savedSnapshot,
    canUndo: tab.past.length > 0,
    canRedo: tab.future.length > 0,
  }
}

export class EditorStore {
  readonly #registry: ComponentRegistry
  readonly #listeners = new Set<() => void>()
  #tabs: InternalTab[] = []
  #activeFormId: string | null = null
  #publicState: EditorState = { tabs: [], activeFormId: null }

  constructor(registry: ComponentRegistry) {
    this.#registry = registry
  }

  subscribe = (listener: () => void): (() => void) => {
    this.#listeners.add(listener)
    return () => this.#listeners.delete(listener)
  }

  getState = (): EditorState => this.#publicState

  openForm(form: FormSchema): StoreOperationResult {
    const existing = this.#tab(form.id)
    if (existing) {
      this.#activeFormId = form.id
      this.#emit()
      return { ok: true }
    }
    const copy = cloneForm(form)
    this.#tabs = [...this.#tabs, {
      form: copy,
      selectedElementId: null,
      savedSnapshot: snapshot(copy),
      past: [],
      future: [],
    }]
    this.#activeFormId = form.id
    this.#emit()
    return { ok: true }
  }

  closeForm(formId: string, force = false): StoreOperationResult {
    const tab = this.#tab(formId)
    if (!tab) return { ok: false, error: `Form '${formId}' is not open` }
    if (!force && snapshot(tab.form) !== tab.savedSnapshot) {
      return { ok: false, error: "Форма содержит несохранённые изменения" }
    }
    const index = this.#tabs.indexOf(tab)
    this.#tabs = this.#tabs.filter((candidate) => candidate !== tab)
    if (this.#activeFormId === formId) {
      this.#activeFormId = this.#tabs[Math.min(index, this.#tabs.length - 1)]?.form.id ?? null
    }
    this.#emit()
    return { ok: true }
  }

  activateForm(formId: string): StoreOperationResult {
    if (!this.#tab(formId)) return { ok: false, error: `Form '${formId}' is not open` }
    this.#activeFormId = formId
    this.#emit()
    return { ok: true }
  }

  selectElement(elementId: string | null, formId = this.#activeFormId): StoreOperationResult {
    const tab = this.#tab(formId)
    if (!tab) return { ok: false, error: "Active form is not available" }
    if (elementId !== null && !findElement(tab.form.elements, elementId)) {
      return { ok: false, error: `Element '${elementId}' was not found` }
    }
    tab.selectedElementId = elementId
    this.#emit()
    return { ok: true }
  }

  addElement(node: SchemaNode, parentId: string | null = null, index?: number, formId = this.#activeFormId): StoreOperationResult {
    const tab = this.#tab(formId)
    if (!tab) return { ok: false, error: "Active form is not available" }
    const existingIds = collectElementIds(tab.form.elements)
    for (const id of collectElementIds([node])) {
      if (existingIds.has(id)) return { ok: false, error: `Element ID '${id}' already exists` }
    }
    const error = placementError(tab.form.elements, node, parentId, this.#registry)
    if (error) return { ok: false, error }
    return this.#change(tab, "Добавление элемента", (form) => ({
      ...form,
      elements: insertElement(form.elements, cloneNode(node), parentId, index),
    }), node.id)
  }

  removeElement(elementId: string, formId = this.#activeFormId): StoreOperationResult {
    const tab = this.#tab(formId)
    if (!tab) return { ok: false, error: "Active form is not available" }
    const operation = removeElement(tab.form.elements, elementId)
    if (!operation.removed) return { ok: false, error: `Element '${elementId}' was not found` }
    const selected = tab.selectedElementId && containsElement(operation.removed, tab.selectedElementId)
      ? null
      : tab.selectedElementId
    return this.#change(tab, "Удаление элемента", (form) => ({ ...form, elements: operation.elements }), selected)
  }

  moveElement(elementId: string, parentId: string | null, index?: number, formId = this.#activeFormId): StoreOperationResult {
    const tab = this.#tab(formId)
    if (!tab) return { ok: false, error: "Active form is not available" }
    const operation = removeElement(tab.form.elements, elementId)
    if (!operation.removed) return { ok: false, error: `Element '${elementId}' was not found` }
    if (parentId && containsElement(operation.removed, parentId)) {
      return { ok: false, error: "Нельзя переместить элемент внутрь собственного поддерева" }
    }
    const error = placementError(operation.elements, operation.removed, parentId, this.#registry)
    if (error) return { ok: false, error }
    return this.#change(tab, "Перемещение элемента", (form) => ({
      ...form,
      elements: insertElement(operation.elements, operation.removed as SchemaNode, parentId, index),
    }))
  }

  updateElement(elementId: string, updater: (node: SchemaNode) => SchemaNode, formId = this.#activeFormId): StoreOperationResult {
    const tab = this.#tab(formId)
    if (!tab) return { ok: false, error: "Active form is not available" }
    if (!findElement(tab.form.elements, elementId)) return { ok: false, error: `Element '${elementId}' was not found` }
    try {
      return this.#change(tab, "Изменение элемента", (form) => ({
        ...form,
        elements: updateElement(form.elements, elementId, updater),
      }))
    } catch (error) {
      return { ok: false, error: error instanceof Error ? error.message : String(error) }
    }
  }

  updateSettings(updater: (settings: FormSettings | undefined) => FormSettings | undefined, formId = this.#activeFormId): StoreOperationResult {
    const tab = this.#tab(formId)
    if (!tab) return { ok: false, error: "Active form is not available" }
    return this.#change(tab, "Изменение настроек формы", (form) => ({ ...form, settings: updater(form.settings) }))
  }

  updateForm(updater: (form: FormSchema) => FormSchema, formId = this.#activeFormId): StoreOperationResult {
    const tab = this.#tab(formId)
    if (!tab) return { ok: false, error: "Active form is not available" }
    return this.#change(tab, "Изменение формы", updater)
  }

  undo(formId = this.#activeFormId): StoreOperationResult {
    const tab = this.#tab(formId)
    if (!tab) return { ok: false, error: "Active form is not available" }
    const entry = tab.past.at(-1)
    if (!entry) return { ok: false, error: "История undo пуста" }
    tab.past = tab.past.slice(0, -1)
    tab.future = [{ form: cloneForm(tab.form), label: entry.label }, ...tab.future]
    tab.form = cloneForm(entry.form)
    if (tab.selectedElementId && !findElement(tab.form.elements, tab.selectedElementId)) tab.selectedElementId = null
    this.#emit()
    return { ok: true }
  }

  redo(formId = this.#activeFormId): StoreOperationResult {
    const tab = this.#tab(formId)
    if (!tab) return { ok: false, error: "Active form is not available" }
    const entry = tab.future[0]
    if (!entry) return { ok: false, error: "История redo пуста" }
    tab.future = tab.future.slice(1)
    tab.past = [...tab.past, { form: cloneForm(tab.form), label: entry.label }].slice(-HISTORY_LIMIT)
    tab.form = cloneForm(entry.form)
    if (tab.selectedElementId && !findElement(tab.form.elements, tab.selectedElementId)) tab.selectedElementId = null
    this.#emit()
    return { ok: true }
  }

  markSaved(formId = this.#activeFormId): StoreOperationResult {
    const tab = this.#tab(formId)
    if (!tab) return { ok: false, error: "Active form is not available" }
    tab.savedSnapshot = snapshot(tab.form)
    this.#emit()
    return { ok: true }
  }

  #change(
    tab: InternalTab,
    label: string,
    updater: (form: FormSchema) => FormSchema,
    selectedElementId = tab.selectedElementId,
  ): StoreOperationResult {
    const previous = cloneForm(tab.form)
    const next = updater(cloneForm(tab.form))
    const duplicateTab = this.#tabs.find((candidate) => candidate !== tab && candidate.form.id === next.id)
    if (duplicateTab) return { ok: false, error: `Form '${next.id}' is already open` }
    if (snapshot(previous) === snapshot(next) && selectedElementId === tab.selectedElementId) return { ok: true }
    tab.past = [...tab.past, { form: previous, label }].slice(-HISTORY_LIMIT)
    tab.future = []
    tab.form = next
    tab.selectedElementId = selectedElementId
    if (this.#activeFormId === previous.id) this.#activeFormId = next.id
    this.#emit()
    return { ok: true }
  }

  #tab(formId: string | null): InternalTab | undefined {
    return formId ? this.#tabs.find((tab) => tab.form.id === formId) : undefined
  }

  #emit(): void {
    this.#publicState = {
      tabs: this.#tabs.map(publicTab),
      activeFormId: this.#activeFormId,
    }
    for (const listener of this.#listeners) listener()
  }
}

export function createEditorStore(registry: ComponentRegistry): EditorStore {
  return new EditorStore(registry)
}
