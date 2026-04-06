import { Text } from '@kaspersky/hexa-ui'
import { Table as TableIcon } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { FormControl, TableControl } from '../../types/form-dsl'

export const tableDescriptor: ControlDescriptor<TableControl> = {
  type: 'table',
  label: 'Таблица',
  Icon: TableIcon,

  createDefault: () => ({
    type: 'table',
    id: '',
    children: [] as (FormControl | null)[],
  }),

  CanvasPreview: () => {
    return (
      <div
        style={{
          padding: 4,
          border: '1px dashed #ccc',
          borderRadius: 6,
          minWidth: 120,
        }}
      >
        <Text type="BTR3" style={{ color: '#999', fontSize: 11 }}>
          Таблица: размер матрицы — длины массивов dataSource и columns в хуке (контракт
          Hexa); остальные пропсы Table тоже из form configHook
        </Text>
      </div>
    )
  },

  PropsEditor: () => null,
}
