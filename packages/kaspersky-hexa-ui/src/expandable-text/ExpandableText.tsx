import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { useOverflowObserver } from '@helpers/hooks/useOverflowObserver'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Text } from '@src/typography'
import cn from 'classnames'
import React, { useLayoutEffect, useRef, useState } from 'react'

import styles from './ExpandableText.module.scss'
import { isEllipsisActive } from './helpers'
import { TextExpander } from './TextExpander'
import { ExpandableTextProps } from './types'

export function ExpandableText (rawProps: ExpandableTextProps): JSX.Element {
  const {
    type = 'BTR3',
    theme,
    testAttributes,
    onExpand,
    useGradient = false,
    className,
    ...props
  } = useTestAttribute(rawProps)
  const ref = useRef<HTMLParagraphElement | null>(null)
  const [expanded, setExpanded] = useState<boolean>(false)
  const contentWidth = useRef<number>(0)

  const [clipped, setClipped] = useOverflowObserver<HTMLParagraphElement>(ref, (element) => {
    const child = element.childNodes[0] as HTMLElement | undefined
    return child ? isEllipsisActive(child, contentWidth, expanded) : false
  }, [contentWidth], 150)

  useLayoutEffect(() => {
    const { current: element } = ref
    if (!element) return

    element.title = clipped
      ? props.altText ?? typeof props.children === 'string' ? String(props.children) : ''
      : ''

    if (!clipped) {
      setExpanded(false)
      onExpand?.(false)
    }
  }, [clipped, props.altText])

  const expand = React.useCallback(() => {
    if (expanded) {
      setExpanded(false)
      onExpand?.(false)
      setClipped(true)
      return
    }

    if (ref.current) {
      contentWidth.current = ref.current.scrollWidth
    }

    setExpanded(true)
    onExpand?.(true)
  }, [expanded])

  return (
    <Text
      className={cn(
        styles.expandableText,
        getClassNameWithTheme(className, theme),
        {
          'expandable-text-clipped': clipped,
          'expandable-text-expanded': expanded,
          'expandable-gradient': useGradient,
          [styles.expandableTextClipped]: clipped,
          [styles.expandableTextExpanded]: expanded,
          [styles.expandableGradient]: useGradient
        },
        className
      )}
      ref={ref}
      data-hide={expanded || !clipped ? true : undefined}
      type={type}
      tabIndex={0}
      {...testAttributes}
      {...props}
    >
      <div className={styles.innerTextWrapper}>{props.children}</div>
      <TextExpander onClick={expand} className="hexa-ui-expander" />
    </Text>
  )
}
