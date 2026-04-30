import { Radio, Text } from '@kaspersky/hexa-ui'
import { RadioButton } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { RadioControl } from '../../types/form-dsl'

const defaultOptions = [
  { label: 'Вариант 1', value: '1' },
  { label: 'Вариант 2', value: '2' },
]

export const radioDescriptor: ControlDescriptor<RadioControl> = {
  type: 'radio',
  label: 'Радио',
  Icon: RadioButton,

  createDefault: () => ({
    type: 'radio',
    id: '',
    options: [...defaultOptions],
    value: '1',
  }),

  CanvasPreview: ({ control }) => (
    <Radio
      options={control.options?.length ? control.options : defaultOptions}
      value={control.value ?? '1'}
      disabled={control.disabled}
      vertical={control.vertical}
    />
  ),

  PropsEditor: () => (
    <Text type="BTR3" style={{ color: 'var(--text--secondary, #666)' }}>
      Опции редактируются в JSON (options, value).
    </Text>
  ),
}
