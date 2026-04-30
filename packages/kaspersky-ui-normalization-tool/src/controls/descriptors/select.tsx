import { Select, Text } from '@kaspersky/hexa-ui'
import { ArrowDown1 } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { SelectControl } from '../../types/form-dsl'
import { SelectWithOptionWidth } from '../../components/SelectWithOptionWidth'

const defaultOptions = [
  { label: 'Опция 1', value: '1' },
  { label: 'Опция 2', value: '2' },
]

export const selectDescriptor: ControlDescriptor<SelectControl> = {
  type: 'select',
  label: 'Выпадающий список',
  Icon: ArrowDown1,

  createDefault: () => ({
    type: 'select',
    id: '',
    options: [...defaultOptions],
    placeholder: 'Выберите...',
  }),

  CanvasPreview: ({ control }) => (
    <SelectWithOptionWidth options={control.options?.length ? control.options : defaultOptions}>
      <Select
        options={control.options?.length ? control.options : defaultOptions}
        value={control.value}
        placeholder={control.placeholder ?? 'Выберите...'}
        disabled={control.disabled}
        getPopupContainer={() => document.body}
      />
    </SelectWithOptionWidth>
  ),

  PropsEditor: ({ control, onUpdate }) => (
    <>
      <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Placeholder</Text>
      <input
        type="text"
        value={control.placeholder ?? ''}
        onChange={(e) => onUpdate({ placeholder: e.target.value || undefined })}
        placeholder="Подсказка"
        style={{ width: '100%', padding: '6px 8px' }}
      />
    </>
  ),
}
