import { CheckCircle2, FilePlus2, Trash2 } from "../../components/icons.tsx"
import { Button } from "@/components/ui/button"
import { editorStore } from "../history-store/store.ts"
import { registry } from "../component-registry/registry.ts"
import { validateFormSemantics } from "../semantic-validator/semantic-validator.ts"
import type { EditorState } from "../history-store/editor-store.ts"
import type { useFormsManager } from "./use-forms-manager.ts"

type Props = Pick<
  ReturnType<typeof useFormsManager>,
  | "formsQuery"
  | "setFormsQuery"
  | "filteredForms"
  | "setFormsOpen"
  | "duplicateForm"
  | "removeForm"
> & { state: EditorState }

export function FormsManager({
  formsQuery,
  setFormsQuery,
  filteredForms,
  setFormsOpen,
  duplicateForm,
  removeForm,
  state,
}: Props) {
  return (
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
          const tab = state.tabs.find((item) => item.form.id === catalogForm.id)
          const errors = validateFormSemantics(catalogForm, registry).filter(
            (item) => item.severity === "error"
          ).length
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
                {tab?.dirty && <span className="form-dirty">Не сохранена</span>}
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
  )
}
