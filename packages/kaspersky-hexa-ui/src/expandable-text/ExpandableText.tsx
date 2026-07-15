import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useResizeObserver } from '@helpers/useResizeObserver'
import { Text } from '@src/typography'
import cn from 'classnames'
import React, { useLayoutEffect, useRef, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import styled from 'styled-components'

import { expandableGradientCss, expandableTextCss } from './expandableTextCss'
import { isEllipsisActive } from './helpers'
import { TextExpander } from './TextExpander'
import { ExpandableTextProps, ExpandableTextViewProps } from './types'
import { useThemedExpandableText } from './useThemedExpandableText'

const StyledText = styled(Text).withConfig<ExpandableTextViewProps>({
  shouldForwardProp: (prop) => !['cssConfig', 'clipped', 'expanded'].includes(prop as string)
})`${expandableTextCss}`

export const ExpandableText: React.FC<ExpandableTextProps> = (rawProps: ExpandableTextProps) => {
  const themedProps = useThemedExpandableText(rawProps)
  const props = useTestAttribute(themedProps)
  return <ExpandableTextView {...props} />
}

const GradientWrapper = styled(StyledText)`
  ${expandableGradientCss}
`

const ExpandableTextView = ({
  type = 'BTR3',
  testAttributes,
  onExpand = () => {},
  useGradient = false,
  className,
  ...props
}: ExpandableTextViewProps) => {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const [clipped, setClipped] = useState<boolean>(false)
  const [expanded, setExpanded] = useState<boolean>(false)
  const contentWidth = useRef<number>(0)

  const dimensions = useResizeObserver(ref, 150)

  useLayoutEffect(() => {
    const element = ref.current?.childNodes[0]
    if (!element || !dimensions) return

    const ellipsisState = isEllipsisActive(element as HTMLElement, contentWidth, expanded)
    setClipped(ellipsisState)
  }, [contentWidth, dimensions])

  useLayoutEffect(() => {
    const { current: element } = ref
    if (!element) return

    element.title = clipped
      ? props.altText ?? typeof props.children === 'string' ? String(props.children) : ''
      : ''

    if (!clipped) {
      setExpanded(false)
      onExpand(false)
    }
  }, [clipped, props.altText])

  const expand = React.useCallback(() => {
    if (expanded) {
      setExpanded(false)
      onExpand(false)
      setClipped(true)
      return
    }

    if (ref.current) {
      contentWidth.current = ref.current.scrollWidth
    }

    setExpanded(true)
    onExpand(true)
  }, [expanded])

  const ResolvedComponent = useGradient
    ? GradientWrapper
    : StyledText

  return (
    <ResolvedComponent
      className={cn(
        { 'expandable-text-clipped': clipped },
        { 'expandable-text-expanded': expanded },
        { 'expandable-gradient': useGradient }
      )}
      ref={ref}
      clipped={clipped}
      expanded={expanded}
      data-hide={expanded || !clipped ? true : undefined}
      type={type}
      tabIndex={0}
      {...testAttributes}
      {...props}
    >
      <div className="inner-text-wrapper">{props.children}</div>
      <TextExpander onClick={expand} className="hexa-ui-expander" />
    </ResolvedComponent>
  )
}