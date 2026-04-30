import { Markdown, Text } from '@kaspersky/hexa-ui'
import { Document } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { MarkdownControl } from '../../types/form-dsl'

export const markdownDescriptor: ControlDescriptor<MarkdownControl> = {
  type: 'markdown',
  label: 'Markdown',
  Icon: Document,

  createDefault: () => ({
    type: 'markdown',
    id: '',
    content: '**Текст** с _разметкой_',
  }),

  CanvasPreview: ({ control }) => (
    <Markdown value={control.content ?? '**Текст** с _разметкой_'} />
  ),

  PropsEditor: ({ control, onUpdate }) => (
    <>
      <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Содержимое (Markdown)</Text>
      <textarea
        value={control.content ?? ''}
        onChange={(e) => onUpdate({ content: e.target.value || undefined })}
        placeholder="Markdown..."
        rows={4}
        style={{ width: '100%', padding: '6px 8px', resize: 'vertical' }}
      />
    </>
  ),
}
