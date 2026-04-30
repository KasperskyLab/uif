import { Textbox } from '@kaspersky/hexa-ui'
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
  }),

  CanvasPreview: () => (
    <Textbox value="" placeholder="configHook → Textbox" readOnly style={{ minWidth: 160 }} />
  ),
}
