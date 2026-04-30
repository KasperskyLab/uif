import { Toggle, Text } from '@kaspersky/hexa-ui'
import { OnlineOfflineToggle } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { ToggleControl } from '../../types/form-dsl'

export const toggleDescriptor: ControlDescriptor<ToggleControl> = {
  type: 'toggle',
  label: 'Переключатель',
  Icon: OnlineOfflineToggle,

  createDefault: () => ({
    type: 'toggle',
    id: '',
    text: 'Переключатель',
    checked: false,
    labelPosition: 'after',
  }),

  CanvasPreview: ({ control }) => (
    <Toggle
      text={control.text ?? 'Переключатель'}
      checked={control.checked ?? false}
      disabled={control.disabled}
      labelPosition={control.labelPosition ?? 'after'}
    />
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
        <Text type="BTR3">Включен по умолчанию</Text>
      </label>
    </>
  ),
}
