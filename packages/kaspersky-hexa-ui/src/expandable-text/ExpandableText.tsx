import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ExpandableContent } from './ExpandableContent'
import { Text } from '@src/typography'
import cn from 'classnames'
import React from 'react'

import styles from './ExpandableText.module.scss'
import { ExpandableTextProps } from './types'

/**
 * ExpandableContent rendered as a typography element.
 *
 * All of the clipping, the toggle and the gradient live in ExpandableContent; what
 * is added here is the text side of it — the typography root, word breaking, the
 * native tooltip carrying the full value, and the nested rules for links and fields
 * that end up inside a text cell.
 */
export function ExpandableText ({
  type = 'BTR3',
  theme,
  altText,
  onExpand,
  useGradient = false,
  className,
  ...rawProps
}: ExpandableTextProps): JSX.Element {
  const { testAttributes, ...props } = useTestAttribute(rawProps)

  return (
    <ExpandableContent
      {...props}
      {...testAttributes}
      as={Text}
      type={type}
      tabIndex={0}
      className={cn(styles.expandableText, getClassNameWithTheme(className, theme), className)}
      clippedClassName="expandable-text-clipped"
      expandedClassName="expandable-text-expanded"
      clippedTitle={altText ?? (typeof props.children === 'string' ? props.children : undefined)}
      useGradient={useGradient}
      onExpand={onExpand}
    />
  )
}
