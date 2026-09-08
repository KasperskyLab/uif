import { StoryObj } from '@storybook/react'
import React from 'react'

import { RichTextEditorContainer as RichTextEditor } from '../RichTextEditorContainer'
import { RichTextEditorContainerProps, RichTextEditorTextareaProps } from '../types'

export type StoryRichTextEditorProps = RichTextEditorContainerProps & {
  'textarea.validationStatus': RichTextEditorTextareaProps['validationStatus'],
  'textarea.disabled': RichTextEditorTextareaProps['disabled'],
  'textarea.readOnly': RichTextEditorTextareaProps['readOnly'],
  'textarea.showCount': RichTextEditorTextareaProps['showCount']
}

export type Story = StoryObj<StoryRichTextEditorProps>

export const Basic = (args: StoryRichTextEditorProps) => (
  <RichTextEditor
    {...args}
    textareaMode={Boolean(args.textareaMode) && {
      validationStatus: args['textarea.validationStatus'],
      disabled: args['textarea.disabled'],
      readOnly: args['textarea.readOnly'],
      showCount: args['textarea.showCount']
    }}
  />
)
