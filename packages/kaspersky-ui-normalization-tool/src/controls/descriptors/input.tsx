import { Textbox, Text } from '@kaspersky/hexa-ui'
import { ResizeInput } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { InputControl } from '../../types/form-dsl'

export const inputDescriptor: ControlDescriptor<InputControl> = {
  type: 'input',
  label: 'Поле ввода',
  Icon: ResizeInput,

  createDefault: () => ({
    type: 'input',
    id: '',
    placeholder: 'Поле ввода',
  }),

  CanvasPreview: ({ control }) => (
    <Textbox
      value={control.value ?? ''}
      placeholder={control.placeholder ?? control.text ?? 'Поле ввода'}
      readOnly
      style={{ minWidth: 160 }}
    />
  ),

  PropsEditor: ({ control, onUpdate }) => (
    <>
      <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Placeholder</Text>
      <Textbox
        value={control.placeholder ?? ''}
        onChange={(v) => onUpdate({ placeholder: v || undefined })}
        placeholder="Подсказка"
      />
    </>
  ),
}
