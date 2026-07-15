import cn from 'classnames'
import React from 'react'
import { RenderElementProps } from 'slate-react'

import styles from './BlockElement.module.scss'

type BlockElementProps = Pick<RenderElementProps, 'attributes' | 'children'> & {
  className?: string;
  dataElement?: string;
}

export const BlockElement = ({
  attributes,
  children,
  className,
  dataElement
}: BlockElementProps) => (
  <div
    {...attributes}
    className={cn(className, styles.blockElement)}
    data-rich-text-element={dataElement}
  >
    {children}
  </div>
)
