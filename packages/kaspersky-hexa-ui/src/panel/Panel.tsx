import { getChildTestAttr, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import cn from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import PanelCSS from './PanelCSS'
import { PanelTitle } from './PanelTitle'
import { PanelProps } from './types'

const StyledPanel = styled.div`
  ${PanelCSS}
`

const DIRECTIONS = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
} as const

export const Panel = ({
  children,
  className,
  testId,
  klId,
  componentId,
  componentType,
  resizeHandle = 'left',
  resizable = false,
  closable = true,
  onClose,
  open = true,
  title,
  titleSize = 'large',
  sectionBottom,
  elementAfter,
  initialSize,
  padding = 'large',
  parentLayout
}: PanelProps): JSX.Element => {
  const [hidden, setHidden] = useState(!open)
  const { testAttributes } = useTestAttribute({ testId, klId, componentId, componentType })
  const panelRef = useRef<HTMLDivElement | null>(null)

  const direction = ['left', 'right'].includes(resizeHandle) ? DIRECTIONS.VERTICAL : DIRECTIONS.HORIZONTAL
  

  useEffect(() => { setHidden(!open) }, [open])

  useEffect(() => {
    initialSize && panelRef.current?.style.setProperty('--panel-size', `${initialSize}px`)
  }, [initialSize])

  const closePanel = () => {
    setHidden(true)
    onClose?.()
  }

  const handleMouseDown: React.MouseEventHandler<HTMLElement> = (event) => {
    if (!panelRef.current) return

    const startPos = {
      x: event.clientX,
      y: event.clientY
    }

    const styles = window.getComputedStyle(panelRef.current)
    const panelWidth = parseInt(styles.width, 10)
    const panelHeight = parseInt(styles.height, 10)
    const mouseMoveDirection = ['right', 'bottom'].includes(resizeHandle) ? 1 : -1

    const handleMouseMove = (event: MouseEvent) => {
      if (direction === DIRECTIONS.VERTICAL) {
        panelRef.current?.style.setProperty('--panel-size', `${panelWidth + ((event.clientX - startPos.x) * mouseMoveDirection)}px`)
      } else {
        panelRef.current?.style.setProperty('--panel-size', `${panelHeight + (event.clientY - startPos.y) * mouseMoveDirection}px`)
      }
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    if (resizable) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }
  }

  return (
    <StyledPanel
      className={cn(
        'hexa-ui-panel',
        className,
        {'panel-horizontal': direction === DIRECTIONS.HORIZONTAL},
        {'panel-resizable': resizable},
        {'panel-not-resizable': !resizable},
        {'panel-hidden': hidden},
        {'panel-medium': padding === 'medium'},
        {'panel-parent': parentLayout}
      )}
      ref={panelRef}
      {...testAttributes}
    >
      <div
        className={cn(
          'hexa-ui-panel-handle',
          {'handle-left': resizeHandle === 'left'},
          {'handle-right': resizeHandle === 'right'},
          {'handle-top': resizeHandle === 'top'},
          {'handle-bottom': resizeHandle === 'bottom'}
        )}
        onMouseDown={handleMouseDown}
      />
      {!parentLayout && <div className="hexa-ui-panel-header">
        {title && <div className="hexa-ui-panel-header-title"><PanelTitle text={title} size={titleSize}/></div>}
        {elementAfter && <div className="hexa-ui-panel-header-after">{elementAfter}</div>}
        {closable && !parentLayout && <ActionButton className="hexa-ui-panel-close" size="large" onClick={closePanel} />}
      </div>}
      <div
        className={cn('hexa-ui-panel-container')}
        { ...getChildTestAttr('body', testAttributes) }
      >
        {children}
      </div>
      {sectionBottom && !parentLayout && <div className="hexa-ui-panel-bottom">{sectionBottom}</div>}
    </StyledPanel>
  )
}
