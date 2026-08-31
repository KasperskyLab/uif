import { registry } from "../component-registry/registry.ts"
import { createEditorStore } from "./editor-store.ts"

export const editorStore = createEditorStore(registry)
