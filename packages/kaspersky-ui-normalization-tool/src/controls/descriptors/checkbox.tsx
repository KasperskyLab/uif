import { Checkbox, Text } from '@kaspersky/hexa-ui'
import { CheckedSquare } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { CheckboxControl } from '../../types/form-dsl'

export const checkboxDescriptor: ControlDescriptor<CheckboxControl> = {
  type: 'checkbox',
  label: 'Чекбокс',
  Icon: CheckedSquare,

  createDefault: () => ({
    type: 'checkbox',
    id: '',
    text: 'Чекбокс',
    checked: false,
  }),

  CanvasPreview: ({ control }) => (
    <Checkbox checked={control.checked} disabled={control.disabled}>
      {control.text ?? 'Чекбокс'}
    </Checkbox>
  ),

  PropsEditor: ({ control, onUpdate }) => (
    <>
      <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Подпись</Text>
      <input
        type="text"
        value={control.text ?? ''}
        onChange={(e) => onUpdate({ text: e.target.value || undefined })}
        placeholder="Подпись"
        style={{ width: '100%', padding: '6px 8px' }}
      />
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
        <input
          type="checkbox"
          checked={control.checked ?? false}
          onChange={(e) => onUpdate({ checked: e.target.checked })}
        />
        <Text type="BTR3">Выбран по умолчанию</Text>
      </label>
    </>
  ),
}
