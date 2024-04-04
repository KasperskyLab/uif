import React, { useLayoutEffect, useRef, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import styled from 'styled-components'
import { TextExpander } from './TextExpander'
import { Text } from '@src/typography'
import { expandableTextCss } from './expandableTextCss'
import { ExpandableTextProps, ExpandableTextViewProps } from './types'
import { isEllipsisActive, resizeThrottle } from './helpers'
import { useThemedExpandableText } from './useThemedExpandableText'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledText = styled(Text).withConfig<ExpandableTextViewProps>({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop as string)
})`${expandableTextCss}`

export const ExpandableText: React.FC<ExpandableTextProps> = (rawProps: ExpandableTextProps) => {
  const themedProps = useThemedExpandableText(rawProps)
  const props = useTestAttribute(themedProps)
  return <ExpandableTextView {...props} />
}

export const ExpandableTextView = ({
  type = 'BTR3',
  testAttributes,
  ...props
}: ExpandableTextViewProps) => {
  const ref = useRef<HTMLParagraphElement>()
  const [clipped, setClipped] = useState<boolean>(false)
  const [expanded, setExpanded] = useState<boolean>(false)
  const contentWidth = useRef<number>(0)

  useLayoutEffect(() => {
    const { current: element } = ref
    if (!element) return

    const ro = new ResizeObserver(
      resizeThrottle(() => {
        const ellipsisState = isEllipsisActive(element, contentWidth)
        setClipped(ellipsisState)
      }, 150)
    )

    ro.observe(element)

    return () => {
      ro.unobserve(element)
    }
  }, [])

  useLayoutEffect(() => {
    const { current: element } = ref
    if (!element) return

    element.title = clipped
      ? props.altText ?? typeof props.children === 'string' ? String(props.children) : ''
      : ''

    if (!clipped) setExpanded(false)
  }, [clipped, props.altText])

  const expand = React.useCallback(() => {
    if (expanded) {
      setExpanded(false)
      setClipped(true)
      return
    }

    if (ref.current) {
      contentWidth.current = ref.current.scrollWidth
    }
    setExpanded(true)
  }, [expanded])

  return (
    <StyledText
      ref={ref}
      clipped={clipped}
      expanded={expanded}
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
