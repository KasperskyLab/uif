import { useEffect } from "react"
import { createElement } from "../schema-builder/create-element.ts"
import { editorStore } from "../history-store/store.ts"
import type { DragPayload } from "./dnd.ts"
import type { StoreOperationResult } from "../history-store/editor-store.ts"

export function useFormControls(
  report: (result: StoreOperationResult, success?: string) => void
) {
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

  return { addComponent, handleDrop }
}
