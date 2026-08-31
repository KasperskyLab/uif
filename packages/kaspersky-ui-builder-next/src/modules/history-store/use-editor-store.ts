import { useSyncExternalStore } from "react"
import type { EditorState, EditorStore } from "./editor-store.ts"

export function useEditorStore(store: EditorStore): EditorState {
  return useSyncExternalStore(store.subscribe, store.getState, store.getState)
}
