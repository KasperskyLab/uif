import { Text, Textbox, Space } from '@kaspersky/hexa-ui'
import { Text as TextIcon } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { TextControl } from '../../types/form-dsl'

export const textDescriptor: ControlDescriptor<TextControl> = {
  type: 'text',
  label: 'Текст',
  Icon: TextIcon,

  createDefault: () => ({
    type: 'text',
    id: '',
    text: 'Текст',
  }),

  CanvasPreview: ({ control }) => (
    <Text type="BTR3">{control.text ?? 'Текст'}</Text>
  ),

  PropsEditor: ({ control, onUpdate }) => (
    <Space size={12} direction="vertical" style={{ width: '100%' }}>
      <Textbox
        value={control.text ?? ''}
        onChange={(v) => onUpdate({ text: v || undefined })}
        placeholder="Текст"
      />
    </Space>
  ),
}
