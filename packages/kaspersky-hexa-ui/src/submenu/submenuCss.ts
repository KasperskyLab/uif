import { getFromProps } from '@helpers/getFromProps'
import { ActionButton } from '@src/action-button'
import { Divider } from '@src/divider'
import { Text } from '@src/typography/text'
import styled, { css } from 'styled-components'

import { SubmenuCssConfig } from './types'

const fromProps = getFromProps<SubmenuCssConfig>()

const TextReducerWrapper = css`
  flex: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const StyledRowBlock = styled.span``

export const StyledRowText = styled(Text)``

export const StyledRow = styled.div.withConfig<{
  cssConfig: SubmenuCssConfig,
  selected: boolean,
  disabled?: boolean,
  leftOffset: number,
  truncateText: boolean
}>({
  shouldForwardProp: (prop) => !['cssConfig', 'selected', 'disabled', 'leftOffset', 'truncateText'].includes(prop)
})`
  ${(props) => {
    const state = props.selected ? 'selected' : 'unselected'
    return css`
      display: flex;
      gap: 4px;
      cursor: pointer;
      border-radius: 8px;
      width: 232px;
      padding: 6px 8px;
      background: ${fromProps(`row.${state}.enabled.background`)};
      ${props.leftOffset && `padding-left: ${props.leftOffset}px;`}

      ${StyledRowText} {
        color: ${fromProps(`row.${state}.enabled.color`)};
        width: 100%;
        ${props.truncateText && TextReducerWrapper}
      }

      ${StyledRowBlock} {
        display: flex;
        align-items: center;
        height: 20px;
        color: ${fromProps(`row.${state}.enabled.icon`)};
      }

      &:hover {
        background: ${fromProps(`row.${state}.hover.background`)};
        ${StyledRowText} {
          color: ${fromProps(`row.${state}.hover.color`)};
        }
        ${StyledRowBlock} {
          color: ${fromProps(`row.${state}.hover.icon`)};
        }
      }

      &:active {
        background: ${fromProps(`row.${state}.active.background`)};
        ${StyledRowText} {
          color: ${fromProps(`row.${state}.active.color`)};
        }
        ${StyledRowBlock} {
          color: ${fromProps(`row.${state}.active.icon`)};
        }
      }

      &:focus-visible {
        box-shadow: ${fromProps('row.focus.boxShadow')};
        outline: none;
      }

      ${props.disabled && `
        &, &:hover, &:active, &:focus-visible {
          cursor: not-allowed;
          box-shadow: none;
          outline: none;
          background: ${fromProps(`row.${state}.disabled.background`)(props)};
          ${StyledRowText} {
            color: ${fromProps(`row.${state}.disabled.color`)(props)};
          }
          ${StyledRowBlock} {
            color: ${fromProps(`row.${state}.disabled.icon`)(props)};
          }
        }
      `}
    `
  }}
`

export const StyledTitleText = styled(Text).withConfig<{
  cssConfig: SubmenuCssConfig
}>({ shouldForwardProp: (prop) => !['cssConfig'].includes(prop.toString()) })`
  color: ${fromProps('title.color')};
  ${TextReducerWrapper}
`

export const StyledTitle = styled.div`
  display: flex;
  gap: 4px;
  width: 216px;
  height: 16px;
  margin: 0 8px;
  margin-top: 16px;
  justify-content: space-between;
`

export const StyledDivider = styled(Divider)`
  width: 216px;
  margin: 4px 8px;
  min-height: 1px;
`

export const StyledActionButton = styled(ActionButton)`
  margin: 0 2px;
`

export const SubmenuWrapper = styled.div`
  display: flex;
  height: 100%;
`

export const SubmenuContent = styled.div`
  padding: 24px;
  width: 100%;
  overflow-y: auto;
`

export const SubmenuItemsStack = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const SubmenuElementWrapper = styled.div<{
  fixToBottom?: boolean
}>`
  padding: 0 16px;
  ${(props) => props.fixToBottom && 'margin-top: auto;'}
`

export const submenuCss = css`
  display: flex;
  flex-direction: column;
  max-width: 281px;
  padding: 24px 0;
  gap: 24px;
  border-right: 1px solid ${fromProps('border')};
`
