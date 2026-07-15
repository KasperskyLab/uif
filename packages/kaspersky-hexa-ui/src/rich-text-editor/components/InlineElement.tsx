import cn from 'classnames'
import React from 'react'
import { RenderLeafProps } from 'slate-react'

import styles from './InlineElement.module.scss'

type InlineElementProps = Pick<RenderLeafProps, 'attributes' | 'children'> & {
  className?: string;
  dataElement?: string;
}

export const InlineElement = ({
  attributes,
  children,
  className,
  dataElement
}: InlineElementProps) => (
  <span
    {...attributes}
    className={cn(className, styles.inlineElement)}
    data-rich-text-element={dataElement}
  >
    {children}
  </span>
)
