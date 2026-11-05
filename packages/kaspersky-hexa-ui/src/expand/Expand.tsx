import { getChildTestProps, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useWatchOverflow } from '@helpers/overflow/overflowWatcher'
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

  const collapsedHeightRef = useRef(collapsedHeight)
  collapsedHeightRef.current = collapsedHeight

  const measureOverflow = useCallback((element: Element) => (
    element.scrollHeight > collapsedHeightRef.current
  ), [])

  const onMeasured = useCallback((next: boolean) => {
    setVisible(current => (current === next ? current : next))
  }, [])

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
        {...getChildTestProps('body', testAttributes, false, true)}
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
          {...getChildTestProps('action-button', testAttributes, false, true)}
          onClick={() => setCollapsed(prevSate => !prevSate)}
          className="hexa-ui-expand-button"
        >
          {actionButtonText}
        </ActionButton>
      )}
    </StyledExpander>
  )
}
