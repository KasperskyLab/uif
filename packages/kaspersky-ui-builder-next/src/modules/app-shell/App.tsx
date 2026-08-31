import "./workspace.ts"
import { FormsManager } from "../forms-manager/FormsManager.tsx"
import { useFormsManager } from "../forms-manager/use-forms-manager.ts"
import { FormControls } from "../form-controls/FormControls.tsx"
import { useFormControls } from "../form-controls/use-form-controls.ts"
import { X } from "../../components/icons.tsx"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Inspector } from "../inspector/Inspector.tsx"
import { Palette } from "../component-palette/Palette.tsx"
import { SchemaView } from "../schema-view/SchemaView.tsx"
import { findElement } from "../form-controls/tree.ts"
import { useEditorStore } from "../history-store/use-editor-store.ts"
import { editorStore } from "../history-store/store.ts"
import { registry } from "../component-registry/registry.ts"
import { validateFormSemantics } from "../semantic-validator/semantic-validator.ts"
import { validateFormSchema } from "../schema-validator/form-validator.ts"
import {
  normalizeFormSchema,
  normalizeSchemaNode,
} from "../schema-builder/serialization.ts"
import type { SchemaNode } from "../schema-model/form-schema.ts"

export function App() {
  const state = useEditorStore(editorStore)
  const {
    formsOpen,
    setFormsOpen,
    forms,
    setFormsQuery,
    notice,
    setNotice,
    formsQuery,
    filteredForms,
    persistStoreForm,
    closeTab,
    duplicateForm,
    removeForm,
    createNewForm,
  } = useFormsManager()
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
  const formsManagerVisible = formsOpen || !form || !activeTab

  const report = (
    result: { ok: true } | { ok: false; error: string },
    success?: string
  ) => {
    setNotice(result.ok ? (success ?? null) : result.error)
    window.setTimeout(() => setNotice(null), 2800)
  }

  const { addComponent, handleDrop } = useFormControls(report)

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
            <Button onClick={createNewForm} type="button">
              Создать форму
            </Button>
          ) : (
            <FormControls
              activeTab={activeTab}
              onSave={() => {
                if (form)
                  void persistStoreForm(form.id).catch((error: unknown) =>
                    setNotice(
                      error instanceof Error
                        ? error.message
                        : "Ошибка сохранения"
                    )
                  )
              }}
            />
          )}
        </div>
      </header>
      {formsManagerVisible ? (
        <FormsManager
          {...{
            formsQuery,
            setFormsQuery,
            filteredForms,
            setFormsOpen,
            duplicateForm,
            removeForm,
            state,
          }}
        />
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
