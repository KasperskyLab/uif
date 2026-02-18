import { getChildTestProps, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useLocalization } from '@helpers/localization/useLocalization'
import { useResizeObserver } from '@helpers/useResizeObserver'
import { ActionButton } from '@src/action-button'
import cn from 'classnames'
import React, { useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { ArrowDown1, ArrowUp1 } from '@kaspersky/hexa-ui-icons/16'

import ExpandCSS from './ExpandCSS'
import { ExpandProps } from './types'

const StyledExpander = styled('div')`
  ${ExpandCSS}
`

const DEFAULT_COLLAPSED_LINES = 64

export const Expand = ({
  collapsedHeight = DEFAULT_COLLAPSED_LINES,
  children,
  textToExpand = useLocalization('expand.toExpand'),
  textToCollapse = useLocalization('expand.toCollapse'),
  className,
  testId,
  klId,
  componentId,
  componentType
}: ExpandProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true)
  const { testAttributes } = useTestAttribute({ testId, klId, componentId, componentType })
  const collapsedCSS = collapsed ? { maxHeight: `${collapsedHeight}px` } : {}
  const actionButtonText = collapsed ? textToExpand : textToCollapse
  const actionButtonIcon = collapsed ? <ArrowDown1 /> : <ArrowUp1 />
  const textRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  const textRect = useResizeObserver(textRef, 150)

  useLayoutEffect(() => {
    const element = textRef.current
    if (!element || !textRect) return

    const isOverflow = element.scrollHeight > collapsedHeight
    setVisible(isOverflow)
  }, [collapsedHeight, textRect])
  
  return (
    <StyledExpander className={cn(
      'hexa-ui-expand',
      { 'hexa-ui-expand-collapsed': collapsed },
      className
    )} {...testAttributes}>
      <div
        className="hexa-ui-expand-container"
        style={collapsedCSS}
        { ...getChildTestProps('body', testAttributes) }
        ref={textRef}
      >
        {children}
      </div>
      {visible && 
        (<ActionButton
          mode="ghost"
          size="large"
          elementAfter={actionButtonIcon}
          interactive
          noIcon
          { ...getChildTestProps('action-button', testAttributes) }
          onClick={() => setCollapsed(prevSate => !prevSate)}
          className="hexa-ui-expand-button"
        >
          {actionButtonText}
        </ActionButton>)
      }
    </StyledExpander>
  )
}
