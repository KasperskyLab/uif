import { Redo2, Save, Undo2 } from "../../components/icons.tsx"
import { Button } from "@/components/ui/button"
import { editorStore } from "../history-store/store.ts"
import type { EditorTabState } from "../history-store/editor-store.ts"

export function FormControls({
  activeTab,
  onSave,
}: {
  activeTab?: EditorTabState
  onSave: () => void
}) {
  return (
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
      <Button disabled={!activeTab?.dirty} onClick={onSave} type="button">
        <Save data-icon="inline-start" size={15} />
        Сохранить
      </Button>
    </>
  )
}
