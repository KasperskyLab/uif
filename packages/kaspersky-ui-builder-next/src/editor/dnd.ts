export const FORM_BUILDER_DRAG_TYPE = "application/x-form-builder"

export type DragPayload =
  | { kind: "palette"; componentType: string }
  | { kind: "element"; elementId: string }

export function writeDragPayload(event: React.DragEvent, payload: DragPayload): void {
  event.dataTransfer.effectAllowed = payload.kind === "palette" ? "copy" : "move"
  event.dataTransfer.setData(FORM_BUILDER_DRAG_TYPE, JSON.stringify(payload))
}

export function readDragPayload(event: React.DragEvent): DragPayload | undefined {
  const raw = event.dataTransfer.getData(FORM_BUILDER_DRAG_TYPE)
  if (!raw) return undefined
  try {
    const payload = JSON.parse(raw) as DragPayload
    return payload.kind === "palette" || payload.kind === "element" ? payload : undefined
  } catch {
    return undefined
  }
}
