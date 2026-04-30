import { Text, Textbox } from '@kaspersky/hexa-ui'
import type { FormControl } from '../types/form-dsl'

/** Общее для grid/table: размерность матрицы и длина `children`. */
export type MatrixRowsColsShape = {
  rows: number
  cols: number
  children: (FormControl | null)[]
}

export interface GridRowsColsPropsEditorProps {
  control: MatrixRowsColsShape
  onUpdate: (patch: Partial<MatrixRowsColsShape>) => void
  rowLabel?: string
  colLabel?: string
}

/** Редактор `rows` / `cols` с пересчётом `children` (grid и table). */
export function GridRowsColsPropsEditor({
  control,
  onUpdate,
  rowLabel = 'Rows',
  colLabel = 'Cols',
}: GridRowsColsPropsEditorProps) {
  const g = control
  return (
    <>
      <div style={{ width: '100%' }}>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
          {rowLabel}
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
          {colLabel}
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
