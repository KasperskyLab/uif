import { Text } from '@kaspersky/hexa-ui'
import { ArrangeGrid } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { FormControl, GridControl } from '../../types/form-dsl'

export const gridDescriptor: ControlDescriptor<GridControl> = {
  type: 'grid',
  label: 'Сетка',
  Icon: ArrangeGrid,

  createDefault: () => ({
    type: 'grid',
    id: '',
    children: [] as (FormControl | null)[],
  }),

  CanvasPreview: () => {
    return (
      <div style={{ padding: 4, border: '1px dashed #ccc', borderRadius: 6, minWidth: 120 }}>
        <Text type="BTR3" style={{ color: '#999', fontSize: 11 }}>
          Сетка: число столбцов/строк — только из form configHook
        </Text>
      </div>
    )
  },
}
