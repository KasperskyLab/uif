import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { ActionButton } from '@src/action-button'
import { scrollbarCss } from '@src/scrollbar/browser/scrollbarCss'
import { ScrollbarCssConfig } from '@src/scrollbar/types'
import styled, { css } from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { CardCssConfig, CardSize } from './types'

type ScrollableContentProps = {
  $isScrollable: boolean
  cssConfig: ScrollbarCssConfig
  $size: CardSize
}

const fromProps = getFromProps<CardCssConfig>()

export const DnDActionButton = styled(ActionButton)``

export const CloseActionButton = styled(ActionButton)``

export const CardActionsWrapper = styled.div``

export const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`

export const CardTitle = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`

export const CardTitleElement = styled.span`
  display: flex;
  align-items: center;
  height: 24px;
`

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;

  .card-action-button {
    height: max-content;
  }
`

export const ScrollableContent = styled.div.withConfig({
  shouldForwardProp: (prop) => !['$isScrollable', 'cssConfig'].includes(prop)
})<ScrollableContentProps>`
  ${({ $isScrollable }) => $isScrollable && css`
    overflow: auto;
  `}

  ${({ $isScrollable, cssConfig, $size }) =>
    $isScrollable &&
    cssConfig &&
    css`
      ${scrollbarCss}
      margin-inline-end: ${$size === 'medium' ? '-15px' : '-19px'};
    `}
`

export const cardCss = css<{
  cssConfig: CardCssConfig,
  draggable?: boolean,
  interactive?: boolean
}>`
  ${getTextSizes(textLevels.BTR3)};
  position: relative;
  border-radius: 12px;
  padding: ${fromProps('padding')};
  background: ${fromProps('enabled.background')};
  color: ${fromProps('enabled.color')};
  border: 1px solid ${fromProps('enabled.border')};
  display: flex;
  gap: var(--spacing--gap_grouped);
  flex-direction: column;
  
  &.hexa-ui-card-scrollable {
    display: flex;
    flex: 1 1 auto;
    max-height: var(--max-height);
    flex-direction: column;
  }

  ${(props) => props.draggable && 'margin-left: 16px;'}

  ${(props) => props.interactive && `
  &:hover {
    background: ${fromProps('hover.background')(props)};
    border-color: ${fromProps('hover.border')(props)};
  }

  &:active {
    background: ${fromProps('active.background')(props)};
    border-color: ${fromProps('active.border')(props)};
  }`}

  &:focus-visible {
    box-shadow: none;
    outline: none;
  }

  ${DnDActionButton} {
    position: absolute;
    top: 6px;
    left: -16px;
  }

  ${CardActionsWrapper} {
    position: absolute;
    top: 4px;
    right: 4px;

    ${CardActions} {
      height: unset;
    }
  }
`
