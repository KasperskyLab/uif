import cn from 'classnames'
import React from 'react'
import { RenderLeafProps } from 'slate-react'

import { RichTextEditorTextareaProps } from '../types'

import styles from './Element.module.scss'

type InlineElementProps = RichTextEditorTextareaProps & Pick<RenderLeafProps, 'attributes' | 'children'> & {
  className?: string;
  dataElement?: string;
}

export const InlineElement = ({
  disabled,
  readOnly,
  attributes,
  children,
  className,
  dataElement
}: InlineElementProps) => (
  <span
    {...attributes}
    className={cn(
      className,
      styles.element,
      {
        [styles.disabled]: disabled,
        [styles.readOnly]: readOnly
      }
    )}
    data-rich-text-element={dataElement}
  >
    {children}
  </span>
)
