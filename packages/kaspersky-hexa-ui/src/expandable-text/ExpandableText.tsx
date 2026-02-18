import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useResizeObserver } from '@helpers/useResizeObserver'
import { Text } from '@src/typography'
import React, { useLayoutEffect, useRef, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import styled from 'styled-components'

import { expandableTextCss } from './expandableTextCss'
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
  position: relative;
  overflow: hidden;
  text-overflow: clip;

  &::after {
    content: '';
    position: absolute;
    inset: 0 0 0 auto;
    width: 80px;
    z-index: 1;
    pointer-events: none;
    background-color: var(--bg--global);
    mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, #000 75%);
    transition: background-color 0.3s;
  }

  &[data-hide]::after {
    display: none;
  }

  .hexa-ui-expander { 
    z-index: 2; 
  }
`

const ExpandableTextView = ({
  type = 'BTR3',
  testAttributes,
  onExpand = () => {},
  useGradient = false,
  ...props
}: ExpandableTextViewProps) => {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const [clipped, setClipped] = useState<boolean>(false)
  const [expanded, setExpanded] = useState<boolean>(false)
  const contentWidth = useRef<number>(0)

  const dimensions = useResizeObserver(ref, 150)

  useLayoutEffect(() => {
    const element = ref.current
    if (!element || !dimensions) return

    const ellipsisState = isEllipsisActive(element, contentWidth)
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

  return useGradient 
    ? (
        <GradientWrapper
          ref={ref}
          clipped={clipped}
          expanded={expanded}
          data-hide={expanded || !clipped ? true : undefined}
          data-expandable-gradient
          type={type}
          tabIndex={0}
          {...testAttributes}
          {...props}
        >
          {props.children}
          <TextExpander onClick={expand} className="hexa-ui-expander" />
        </GradientWrapper>
      ) 
    : ( 
        <StyledText
          ref={ref}
          clipped={clipped}
          expanded={expanded}
          data-expanded={expanded ? true : undefined}
          type={type}
          tabIndex={0}
          {...testAttributes}
          {...props}
        >
          {props.children}
          <TextExpander onClick={expand}/>
        </StyledText>
      )
}
