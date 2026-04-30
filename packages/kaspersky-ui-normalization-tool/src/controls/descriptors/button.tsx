import { Button } from '@kaspersky/hexa-ui'
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
  }),

  CanvasPreview: ({ control }) => (
    <Button
      mode="tertiary"
      size="small"
      text={`[${control.id || 'button'}]`}
      disabled
    />
  ),
}
