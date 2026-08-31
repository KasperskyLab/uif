import { useEffect, useMemo, useState } from "react"
import {
  deleteFormFile,
  loadForms,
  saveFormFile,
} from "../persistence-adapter/forms-api.ts"
import { editorStore } from "../history-store/store.ts"
import { formCatalog, createForm } from "./catalog.ts"
import { registry } from "../component-registry/registry.ts"
import { normalizeFormSchema } from "../schema-builder/serialization.ts"

export function useFormsManager() {
  const [formsOpen, setFormsOpen] = useState(false)
  const [forms, setForms] = useState(() => [...formCatalog])
  const [formsQuery, setFormsQuery] = useState("")
  const [notice, setNotice] = useState<string | null>(null)
  const filteredForms = useMemo(() => {
    const query = formsQuery.trim().toLowerCase()
    return forms.filter(
      (item) =>
        !query ||
        item.id.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query)
    )
  }, [forms, formsQuery])
  useEffect(() => {
    void loadForms()
      .then((loaded) => {
        if (loaded.length)
          setForms(loaded.map((item) => normalizeFormSchema(item, registry)))
      })
      .catch((error: Error) => setNotice(error.message))
  }, [])

  const persistStoreForm = async (formId: string, previousId = formId) => {
    const tab = editorStore
      .getState()
      .tabs.find((candidate) => candidate.form.id === formId)
    if (!tab) throw new Error(`Form '${formId}' is not open`)
    await saveFormFile(tab.form, previousId)
    editorStore.markSaved(formId)
    setForms((current) => [
      ...current.filter((item) => item.id !== formId && item.id !== previousId),
      structuredClone(tab.form),
    ])
    setNotice("Форма сохранена")
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

  const createNewForm = () => {
    const next = createForm()
    setForms((current) => [...current, next])
    editorStore.openForm(next)
    void saveFormFile(next).catch((error: Error) => setNotice(error.message))
    setFormsOpen(false)
    setFormsQuery("")
  }

  return {
    formsOpen,
    setFormsOpen,
    forms,
    setForms,
    formsQuery,
    setFormsQuery,
    notice,
    setNotice,
    filteredForms,
    persistStoreForm,
    closeTab,
    duplicateForm,
    removeForm,
    createNewForm,
  }
}
