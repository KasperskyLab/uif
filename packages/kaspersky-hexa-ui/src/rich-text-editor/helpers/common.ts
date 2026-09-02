import { Descendant } from 'slate'

import { CustomFormats } from '../customTypes'
import styles from '../richText.module.scss'
import { RichTextEditorProps } from '../types'

export const defaultInitialValue: Descendant[] = [
  {
    type: CustomFormats.PARAGRAPH,
    children: [{ text: '' }]
  }
]

type EditorStateProps = Pick<RichTextEditorProps, 'readOnly' | 'textareaMode'> & {
  mode: 'readOnly' | 'textareaDisabled' | 'textareaReadOnly'
}

export const editorState = ({ readOnly, textareaMode, mode }: EditorStateProps) => {
  const textareaDisabled = typeof textareaMode !== 'boolean' && textareaMode?.disabled
  const textareaReadOnly = typeof textareaMode !== 'boolean' && textareaMode?.readOnly

  switch (mode) {
    case 'readOnly':
      return (readOnly && !textareaMode) || textareaDisabled || textareaReadOnly
    case 'textareaDisabled':
      return textareaDisabled
    case 'textareaReadOnly':
      return textareaReadOnly
  }
}

export const validationStatusClassName = ({ textareaMode }: Pick<RichTextEditorProps, 'textareaMode'>) =>
  typeof textareaMode !== 'boolean' && textareaMode?.validationStatus && [styles[textareaMode.validationStatus]] ||
  textareaMode && styles.default

export const showCounter = ({
  readOnly,
  textareaMode,
  limitTextSize
}: Pick<RichTextEditorProps, 'readOnly' | 'limitTextSize' | 'textareaMode'>) => (
  limitTextSize &&
  typeof textareaMode !== 'boolean' &&
  textareaMode?.showCount &&
  !editorState({ mode: 'readOnly', readOnly, textareaMode })
)
