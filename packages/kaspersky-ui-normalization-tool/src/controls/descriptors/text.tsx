import { Text } from '@kaspersky/hexa-ui'
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
  }),

  CanvasPreview: ({ control }) => (
    <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
      [{control.id || 'text'}]
    </Text>
  ),
}
