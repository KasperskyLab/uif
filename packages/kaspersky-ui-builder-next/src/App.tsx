import {
  CheckCircle2,
  FilePlus2,
  Redo2,
  Save,
  Trash2,
  Undo2,
  X,
} from "./components/icons.tsx"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import type { DragPayload } from "./editor/dnd.ts"
import { Inspector } from "./editor/Inspector.tsx"
import { Palette } from "./editor/Palette.tsx"
import { SchemaView } from "./editor/SchemaView.tsx"
import { findElement } from "./editor/tree.ts"
import { deleteFormFile, loadForms, saveFormFile } from "./editor/forms-api.ts"
import { useEditorStore } from "./editor/use-editor-store.ts"
import {
  createElement,
  createForm,
  editorStore,
  formCatalog,
  registry,
} from "./editor/workspace.ts"
import { validateFormSemantics } from "./domain/semantic-validator.ts"
import { validateFormSchema } from "./domain/form-validator.ts"
import {
  normalizeFormSchema,
  normalizeSchemaNode,
} from "./domain/serialization.ts"
import type { SchemaNode } from "./domain/form-schema.ts"

export function App() {
  const state = useEditorStore(editorStore)
  const [formsOpen, setFormsOpen] = useState(false)
  const [forms, setForms] = useState(() => [...formCatalog])
  const [formsQuery, setFormsQuery] = useState("")
  const [notice, setNotice] = useState<string | null>(null)
  const activeTab = state.tabs.find((tab) => tab.form.id === state.activeFormId)
  const form = activeTab?.form
  const selectedNode =
    form && activeTab?.selectedElementId
      ? findElement(form.elements, activeTab.selectedElementId)?.node
      : undefined
  const diagnostics = useMemo(
    () =>
      form
        ? [
            ...validateFormSchema(form),
            ...validateFormSemantics(form, registry),
          ]
        : [],
    [form]
  )
  const filteredForms = useMemo(() => {
    const query = formsQuery.trim().toLowerCase()
    return forms.filter(
      (item) =>
        !query ||
        item.id.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query)
    )
  }, [forms, formsQuery])
  const formsManagerVisible = formsOpen || !form || !activeTab

  useEffect(() => {
    void loadForms()
      .then((loaded) => {
        if (loaded.length)
          setForms(loaded.map((item) => normalizeFormSchema(item, registry)))
      })
      .catch((error: Error) => setNotice(error.message))
  }, [])

  useEffect(() => {
    const handleHistoryShortcut = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey) || event.altKey) return
      const target = event.target as HTMLElement | null
      if (target?.matches("input, textarea, select, [contenteditable='true']"))
        return
      if (event.key.toLowerCase() !== "z") return
      event.preventDefault()
      if (event.shiftKey) editorStore.redo()
      else editorStore.undo()
    }
    window.addEventListener("keydown", handleHistoryShortcut)
    return () => window.removeEventListener("keydown", handleHistoryShortcut)
  }, [])

  const report = (
    result: { ok: true } | { ok: false; error: string },
    success?: string
  ) => {
    setNotice(result.ok ? (success ?? null) : result.error)
    window.setTimeout(() => setNotice(null), 2800)
  }

  const persistStoreForm = async (formId: string, previousId = formId) => {
    const tab = editorStore
      .getState()
      .tabs.find((candidate) => candidate.form.id === formId)
    if (!tab) throw new Error(`Form '${formId}' is not open`)
    await saveFormFile(tab.form, previousId)
    editorStore.markSaved(formId)
    setForms((current) => [
      ...current.filter(
        (item) => item.id !== formId && item.id !== previousId
      ),
      structuredClone(tab.form),
    ])
    setNotice("Форма сохранена")
  }

  const addComponent = (
    componentType: string,
    parentId: string | null = null,
    index?: number
  ) => {
    const node = createElement(componentType)
    const result = editorStore.addElement(node, parentId, index)
    if (result.ok) editorStore.selectElement(node.id)
    report(result, `${componentType} добавлен`)
  }

  const handleDrop = (
    payload: DragPayload | undefined,
    target: { parentId: string | null; index?: number }
  ) => {
    if (!payload) return
    if (payload.kind === "palette")
      addComponent(payload.componentType, target.parentId, target.index)
    else
      report(
        editorStore.moveElement(
          payload.elementId,
          target.parentId,
          target.index
        ),
        "Элемент перемещён"
      )
  }

  const closeTab = (formId: string) => {
    const result = editorStore.closeForm(formId)
    if (
      !result.ok &&
      window.confirm(
        "Форма содержит несохранённые изменения. Закрыть без сохранения?"
      )
    )
      editorStore.closeForm(formId, true)
  }

  const duplicateForm = async (source: (typeof forms)[number]) => {
    let suffix = 1
    let id = `${source.id}-copy`
    while (forms.some((item) => item.id === id))
      id = `${source.id}-copy-${++suffix}`
    const copy = normalizeFormSchema(
      {
        ...structuredClone(source),
        id,
        name: `${source.name} — копия`,
      },
      registry
    )
    await saveFormFile(copy)
    setForms((current) => [...current, copy])
    setNotice("Форма продублирована")
  }

  const removeForm = async (target: (typeof forms)[number]) => {
    if (!window.confirm(`Удалить форму «${target.name}»?`)) return
    await deleteFormFile(target.id)
    editorStore.closeForm(target.id, true)
    setForms((current) => current.filter((item) => item.id !== target.id))
    setNotice("Форма удалена")
  }

  return (
    <div className="builder-app">
      <header className="app-header">
        <div className="brand">
          <span>
            <strong>Form Builder</strong>
            <small>JSON schema editor</small>
          </span>
        </div>
        <div className="forms-menu-wrap">
          <Button
            aria-expanded={formsManagerVisible}
            onClick={() => setFormsOpen((value) => !value)}
            type="button"
            variant="outline"
          >
            Формы
          </Button>
        </div>
        <nav className="tabs" aria-label="Открытые формы">
          {state.tabs.map((tab) => (
            <button
              className={`tab ${tab.form.id === state.activeFormId ? "is-active" : ""}`}
              key={tab.form.id}
              onClick={() => editorStore.activateForm(tab.form.id)}
              type="button"
            >
              <span>
                {tab.form.name}
                {tab.dirty && <i />}
              </span>
              <X
                size={13}
                onClick={(event) => {
                  event.stopPropagation()
                  closeTab(tab.form.id)
                }}
              />
            </button>
          ))}
        </nav>
        <div className="header-actions">
          {formsManagerVisible ? (
            <Button
              onClick={() => {
                const next = createForm()
                setForms((current) => [...current, next])
                editorStore.openForm(next)
                void saveFormFile(next)
                setFormsOpen(false)
                setFormsQuery("")
              }}
              type="button"
            >
              Создать форму
            </Button>
          ) : (
            <>
              <Button
                disabled={!activeTab?.canUndo}
                onClick={() => editorStore.undo()}
                size="icon"
                title="Отменить"
                type="button"
                variant="outline"
              >
                <Undo2 size={16} />
              </Button>
              <Button
                disabled={!activeTab?.canRedo}
                onClick={() => editorStore.redo()}
                size="icon"
                title="Повторить"
                type="button"
                variant="outline"
              >
                <Redo2 size={16} />
              </Button>
              <Button
                disabled={!activeTab?.dirty || !form}
                onClick={() => {
                  if (!form) return
                  void persistStoreForm(form.id).catch((error: unknown) =>
                    setNotice(
                      error instanceof Error
                        ? error.message
                        : "Ошибка сохранения"
                    )
                  )
                }}
                type="button"
              >
                <Save data-icon="inline-start" size={15} />
                Сохранить
              </Button>
            </>
          )}
        </div>
      </header>
      {formsManagerVisible ? (
        <section className="forms-page">
          <div className="forms-page-header">
            <div>
              <span className="eyebrow">Forms manager</span>
              <h1>Формы</h1>
              <p>Откройте существующую форму или создайте новую.</p>
            </div>
            <input
              aria-label="Поиск форм"
              autoFocus
              className="forms-page-search"
              onChange={(event) => setFormsQuery(event.target.value)}
              placeholder="Поиск по ID или названию"
              value={formsQuery}
            />
          </div>
          <div className="forms-page-list">
            {filteredForms.map((catalogForm) => {
              const opened = state.tabs.some(
                (tab) => tab.form.id === catalogForm.id
              )
              const tab = state.tabs.find(
                (item) => item.form.id === catalogForm.id
              )
              const errors = validateFormSemantics(
                catalogForm,
                registry
              ).filter((item) => item.severity === "error").length
              return (
                <div
                  className="form-list-item"
                  key={catalogForm.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    editorStore.openForm(catalogForm)
                    setFormsOpen(false)
                    setFormsQuery("")
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      editorStore.openForm(catalogForm)
                      setFormsOpen(false)
                    }
                  }}
                >
                  <span>
                    <strong>{catalogForm.name}</strong>
                    <small>{catalogForm.id}</small>
                  </span>
                  <span className="form-list-status">
                    {errors > 0 && (
                      <span className="form-errors">{errors} ошибок</span>
                    )}
                    {tab?.dirty && (
                      <span className="form-dirty">Не сохранена</span>
                    )}
                    {opened && (
                      <span className="form-opened">
                        <CheckCircle2 size={15} />
                        Открыта
                      </span>
                    )}
                    <Button
                      aria-label={`Дублировать ${catalogForm.name}`}
                      onClick={(event) => {
                        event.stopPropagation()
                        void duplicateForm(catalogForm)
                      }}
                      size="icon-sm"
                      type="button"
                      variant="ghost"
                    >
                      <FilePlus2 />
                    </Button>
                    <Button
                      aria-label={`Удалить ${catalogForm.name}`}
                      onClick={(event) => {
                        event.stopPropagation()
                        void removeForm(catalogForm)
                      }}
                      size="icon-sm"
                      type="button"
                      variant="ghost"
                    >
                      <Trash2 />
                    </Button>
                  </span>
                </div>
              )
            })}
            {!filteredForms.length && (
              <div className="forms-page-empty">Формы не найдены</div>
            )}
          </div>
        </section>
      ) : form && activeTab ? (
        <div className="editor-grid">
          <Palette
            onAdd={(type) => {
              const selectedComponent =
                selectedNode &&
                registry.components.find(
                  (item) => item.type === selectedNode.type
                )
              addComponent(
                type,
                selectedComponent?.acceptsChildren && selectedNode
                  ? selectedNode.id
                  : null
              )
            }}
            registry={registry}
          />
          <SchemaView
            diagnostics={diagnostics}
            form={form}
            onDelete={(id) =>
              report(editorStore.removeElement(id), "Элемент удалён")
            }
            onDrop={handleDrop}
            onChangeForm={async (next) => {
              const result = editorStore.updateForm(() => next)
              if (!result.ok) throw new Error(result.error)
              await persistStoreForm(next.id, form.id)
            }}
            onSelect={(id) => editorStore.selectElement(id)}
            registry={registry}
            selectedElementId={activeTab.selectedElementId}
          />
          <Inspector
            availableForms={forms}
            diagnostics={diagnostics}
            form={form}
            onCancelElement={() => editorStore.selectElement(null)}
            onSaveElement={async (next: SchemaNode) => {
              if (!selectedNode) return
              const result = editorStore.updateElement(selectedNode.id, () =>
                normalizeSchemaNode(next, registry)
              )
              if (!result.ok) return report(result)
              try {
                await persistStoreForm(form.id)
              } catch (error) {
                setNotice(
                  error instanceof Error ? error.message : "Ошибка сохранения"
                )
              }
            }}
            onSaveForm={async (next) => {
              const normalized = normalizeFormSchema(next, registry)
              const result = editorStore.updateForm(() => normalized)
              if (!result.ok) return report(result)
              try {
                await persistStoreForm(normalized.id, form.id)
              } catch (error) {
                setNotice(
                  error instanceof Error ? error.message : "Ошибка сохранения"
                )
              }
            }}
            registry={registry}
            selectedNode={selectedNode}
          />
        </div>
      ) : null}
      {notice && <div className="toast">{notice}</div>}
    </div>
  )
}

export default App
