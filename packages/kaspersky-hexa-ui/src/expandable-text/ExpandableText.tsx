import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { EXPANDER_CLASS } from '@helpers/overflow/components/clipping'
import clippingStyles from '@helpers/overflow/components/clipping.module.scss'
import { textExpander } from '@helpers/overflow/components/textExpander'
import { useOverflowToggle } from '@helpers/overflow/useOverflowToggle'
import { Text } from '@src/typography'
import cn from 'classnames'
import React from 'react'

import styles from './ExpandableText.module.scss'
import { ExpandableTextProps } from './types'

export function ExpandableText ({
  type = 'BTR3',
  theme,
  altText,
  onExpand,
  useGradient = false,
  className,
  children,
  ...rawProps
}: ExpandableTextProps): JSX.Element {
  const { testAttributes, ...props } = useTestAttribute(rawProps)
  const { clipped, expanded, observedRef, onToggle } = useOverflowToggle<HTMLElement>({ onExpand })

  const title = altText ?? (typeof children === 'string' ? children : undefined)

  return (
    <Text
      {...props}
      {...testAttributes}
      className={cn(
        clippingStyles.expandableContainer,
        styles.expandableText,
        getClassNameWithTheme(className, theme),
        clipped && [styles.expandableTextClipped, 'expandable-text-clipped'],
        expanded && 'expandable-text-expanded',
        useGradient && [clippingStyles.expandableFade, styles.expandableGradient, 'expandable-gradient'],
        className
      )}
      ref={observedRef}
      title={clipped && !expanded ? title : undefined}
      data-hide={expanded || !clipped ? true : undefined}
      data-expanded={expanded ? true : undefined}
      type={type}
      tabIndex={0}
    >
      {children}
      {clipped && textExpander({ expanded, onToggle, className: EXPANDER_CLASS })}
    </Text>
  )
}
