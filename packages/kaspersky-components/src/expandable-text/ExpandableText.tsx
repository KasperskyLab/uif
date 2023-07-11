import React, { useLayoutEffect, useRef, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import styled from 'styled-components'
import { TextExpander } from './TextExpander'
import { Text } from '../typography'
import { expandableTextCss } from './expandableTextCss'
import { IExpandableTextProps } from './types'
import { isEllipsisActive, resizeThrottle } from './helpers'

const StyledText = styled(Text)`
  ${expandableTextCss}
`

export const ExpandableText = ({
  type = 'BTR3',
  ...props
}: IExpandableTextProps) => {
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
      ? props.altText ?? String(props.children)
      : ''

    if (!clipped) setExpanded(false)
  }, [clipped, props.altText])

  const childrenWithExpander = [
    ...React.Children.toArray(props.children),
    <TextExpander style={{ visibility: (clipped && !expanded) ? 'visible' : 'hidden' }} onClick={(e) => {
      e.stopPropagation()
      if (ref.current) {
        contentWidth.current = ref.current.scrollWidth
      }
      setExpanded(true)
    }} />
  ]

  return <StyledText
    {...props}
    ref={ref}
    clipped={clipped}
    expanded={expanded}
    children = {childrenWithExpander}
    type={type}
  />
}
