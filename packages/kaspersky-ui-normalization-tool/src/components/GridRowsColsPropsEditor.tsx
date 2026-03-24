import { Text, Textbox } from '@kaspersky/hexa-ui'
import type { GridControl } from '../types/form-dsl'

export interface GridRowsColsPropsEditorProps {
  control: GridControl
  onUpdate: (patch: Partial<GridControl>) => void
}

/** Редактор `rows` / `cols` с пересчётом `children` (как раньше в PropertiesPanel). */
export function GridRowsColsPropsEditor({
  control,
  onUpdate,
}: GridRowsColsPropsEditorProps) {
  const g = control
  return (
    <>
      <div style={{ width: '100%' }}>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
          Rows
        </Text>
        <Textbox
          value={String(g.rows)}
          onChange={(v) => {
            const n = parseInt(v, 10)
            if (!isNaN(n) && n >= 1 && n <= 12) {
              const newLen = n * g.cols
              const children = [...g.children]
              while (children.length < newLen) children.push(null)
              if (children.length > newLen) children.splice(newLen)
              onUpdate({ rows: n, children })
            }
          }}
          placeholder="2"
        />
      </div>
      <div style={{ width: '100%' }}>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
          Cols
        </Text>
        <Textbox
          value={String(g.cols)}
          onChange={(v) => {
            const n = parseInt(v, 10)
            if (!isNaN(n) && n >= 1 && n <= 12) {
              const newLen = g.rows * n
              const children = [...g.children]
              while (children.length < newLen) children.push(null)
              if (children.length > newLen) children.splice(newLen)
              onUpdate({ cols: n, children })
            }
          }}
          placeholder="2"
        />
      </div>
    </>
  )
}
