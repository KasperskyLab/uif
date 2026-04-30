import { Text, Select } from '@kaspersky/hexa-ui'
import { Menu } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { RowControl } from '../../types/form-dsl'

export const rowDescriptor: ControlDescriptor<RowControl> = {
  type: 'row',
  label: 'Ряд',
  Icon: Menu,

  createDefault: () => ({
    type: 'row',
    id: '',
    gap: 8,
    align: 'center',
    children: [],
  }),

  CanvasPreview: ({ control }) => (
    <div style={{ padding: 4, minHeight: 32 }}>
      <Text type="BTR3" themedColor="secondary">
        Ряд ({control.children.length} эл.) {control.gap != null ? `gap=${control.gap}` : ''}
      </Text>
    </div>
  ),

  PropsEditor: ({ control, onUpdate, selectCloseKey, onSelectClose }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
      <div>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Отступ (gap, px)</Text>
        <input
          type="number"
          min={0}
          value={control.gap ?? 8}
          onChange={(e) => onUpdate({ gap: Number(e.target.value) || 0 } as Partial<RowControl>)}
          style={{ width: '100%', padding: '4px 8px', border: '1px solid var(--tagsoutlined--neutral-border, #ccc)', borderRadius: 4 }}
        />
      </div>
      <div>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Выравнивание</Text>
        <Select
          key={selectCloseKey}
          value={control.align ?? 'center'}
          onSelect={(v) => { onUpdate({ align: String(v) } as Partial<RowControl>); onSelectClose?.() }}
        >
          <Select.Option value="start">По верху</Select.Option>
          <Select.Option value="center">По центру</Select.Option>
          <Select.Option value="end">По низу</Select.Option>
        </Select>
      </div>
    </div>
  ),
}
