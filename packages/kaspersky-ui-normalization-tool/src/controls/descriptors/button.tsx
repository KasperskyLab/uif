import { Button, Text } from '@kaspersky/hexa-ui'
import { Cursor } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { ButtonControl } from '../../types/form-dsl'
import { ConfigHookIdentityPropsEditor } from '../../components/ConfigHookIdentityPropsEditor'

export const buttonDescriptor: ControlDescriptor<ButtonControl> = {
  type: 'button',
  label: 'Кнопка',
  Icon: Cursor,

  createDefault: () => ({
    type: 'button',
    id: '',
  }),

  CanvasPreview: ({ control }) => (
    <Button
      mode="tertiary"
      size="small"
      text={`[${control.id || 'button'}]`}
      disabled
    />
  ),

  PropsEditor: ({ control, onUpdate, panelContext }) => (
    <ConfigHookIdentityPropsEditor
      id={control.id}
      configHook={control.configHook}
      onUpdate={onUpdate}
      configHookPlaceholder="handlers/button.config-hook.ts"
      formDirectoryHandle={panelContext?.formDirectoryHandle ?? null}
    />
  ),
}
