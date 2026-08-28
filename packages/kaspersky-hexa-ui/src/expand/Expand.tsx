import { getChildTestProps, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useWatchOverflow } from '@helpers/overflowWatcher'
import { ActionButton } from '@src/action-button'
import cn from 'classnames'
import React, { useCallback, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
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
  textToExpand,
  textToCollapse,
  className,
  testId,
  klId,
  componentType
}: ExpandProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true)
  const { t } = useTranslation()
  const { testAttributes } = useTestAttribute({ testId, klId, componentType })
  const collapsedCSS = collapsed ? { maxHeight: `${collapsedHeight}px` } : {}
  const actionButtonText = collapsed
    ? textToExpand ?? t('expand.toExpand')
    : textToCollapse ?? t('expand.toCollapse')
  const actionButtonIcon = collapsed ? <ArrowDown1 /> : <ArrowUp1 />
  const textRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  // Measured in the shared observer's read phase rather than from a layout
  // effect. The old shape kept a DOMRect in state purely as a "something
  // changed" token — no field of it was ever read — and then took its own
  // reading right after React had written to the DOM, which forces the engine
  // to redo style and layout on the spot.
  const collapsedHeightRef = useRef(collapsedHeight)
  collapsedHeightRef.current = collapsedHeight

  const measureOverflow = useCallback(
    (element: Element) => element.scrollHeight > collapsedHeightRef.current,
    []
  )
  const onMeasured = useCallback((next: boolean) => {
    setVisible(current => (current === next ? current : next))
  }, [])

  // collapsedHeight is a prop, so a resize notification cannot tell us it moved;
  // passing it as the remeasure key forces a fresh reading when it does.
  useWatchOverflow(textRef, onMeasured, measureOverflow, collapsedHeight)

  return (
    <StyledExpander className={cn(
      'hexa-ui-expand',
      { 'hexa-ui-expand-collapsed': collapsed },
      className
    )} {...testAttributes}>
      <div
        className="hexa-ui-expand-container"
        style={collapsedCSS}
        {...getChildTestProps('body', testAttributes)}
        ref={textRef}
      >
        {children}
      </div>
      {visible && (
        <ActionButton
          mode="ghost"
          size="large"
          elementAfter={actionButtonIcon}
          interactive
          noIcon
          {...getChildTestProps('action-button', testAttributes)}
          onClick={() => setCollapsed(prevSate => !prevSate)}
          className="hexa-ui-expand-button"
        >
          {actionButtonText}
        </ActionButton>
      )}
    </StyledExpander>
  )
}
