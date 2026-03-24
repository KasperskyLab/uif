import { Button, Text, Textbox, Space } from '@kaspersky/hexa-ui'
import { Cursor } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { ButtonControl } from '../../types/form-dsl'

export const buttonDescriptor: ControlDescriptor<ButtonControl> = {
  type: 'button',
  label: 'Кнопка',
  Icon: Cursor,

  createDefault: () => ({
    type: 'button',
    id: '',
    text: 'Кнопка',
    mode: 'primary',
  }),

  CanvasPreview: ({ control }) => (
    <Button
      mode={control.mode ?? 'primary'}
      size="small"
      text={control.text ?? 'Кнопка'}
      disabled={control.disabled}
      loading={control.loading}
    />
  ),

  PropsEditor: ({ control, onUpdate }) => (
    <Space size={12} direction="vertical" style={{ width: '100%' }}>
      <div>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Текст</Text>
        <Textbox
          value={control.text ?? ''}
          onChange={(v) => onUpdate({ text: v || undefined })}
          placeholder="Текст кнопки"
        />
      </div>
      <div>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Режим</Text>
        <select
          value={control.mode ?? 'primary'}
          onChange={(e) => onUpdate({ mode: e.target.value as ButtonControl['mode'] })}
          style={{ width: '100%', padding: '6px 8px' }}
        >
          <option value="primary">primary</option>
          <option value="secondary">secondary</option>
          <option value="tertiary">tertiary</option>
          <option value="dangerFilled">dangerFilled</option>
          <option value="dangerOutlined">dangerOutlined</option>
        </select>
      </div>
    </Space>
  ),
}
