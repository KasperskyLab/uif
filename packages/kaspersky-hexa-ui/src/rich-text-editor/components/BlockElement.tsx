import cn from 'classnames'
import React from 'react'
import { RenderElementProps } from 'slate-react'

import { RichTextEditorTextareaProps } from '../types'

import styles from './Element.module.scss'

type BlockElementProps = RichTextEditorTextareaProps & Pick<RenderElementProps, 'attributes' | 'children'> & {
  className?: string;
  dataElement?: string;
}

export const BlockElement = ({
  disabled,
  readOnly,
  attributes,
  children,
  className,
  dataElement
}: BlockElementProps) => (
  <div
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
  </div>
)
