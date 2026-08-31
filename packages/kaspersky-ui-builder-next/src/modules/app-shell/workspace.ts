import { editorStore } from "../history-store/store.ts"
import { formCatalog } from "../forms-manager/catalog.ts"

editorStore.openForm(formCatalog[0])
editorStore.openForm(formCatalog[1])
editorStore.activateForm(formCatalog[0].id)
