import { css } from 'styled-components'
import { getTextSizes, textLevels } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { ChipCssConfig } from './types'
import { SPACES } from '@design-system/theme'

const fromProps = getFromProps<ChipCssConfig>()

export const chipCss = css<{
  cssConfig: ChipCssConfig,
  disabled: boolean
}>`
  &.ant-tag-hidden {
    display: none;
  }

  ${getTextSizes(textLevels.BTR3)};
  display: flex;
  align-items: center;
  height: ${fromProps('height')};
  gap: ${SPACES[2]}px;
  margin: 0;
  padding: ${fromProps('padding')};
  border-radius: ${SPACES[10]}px;
  background: ${fromProps('normal.background')};
  color: ${fromProps('normal.color')};
  cursor: default;
  border: none;
  outline: none;

  .ant-tag-close-icon {
    margin: 1px ${SPACES[1]}px 0 ${SPACES[1]}px;
    color: ${fromProps('normal.crossColor')};
    cursor: pointer;
  }

  &:hover {
    background: ${fromProps('hover.background')};
  }
  &:active {
    background: ${fromProps('active.background')};
  }
  &:focus-visible {
    box-shadow: ${fromProps('focus.boxShadow')};
    outline: none;
  }

  ${props => props.disabled && `
  &, &:hover, &:active, &:focus-visible {
    background: ${fromProps('disabled.background')(props)};
    color: ${fromProps('disabled.color')(props)};
    box-shadow: none;
  }

  .ant-tag-close-icon {
    color: ${fromProps('disabled.crossColor')(props)};
    cursor: default;
  }`}
`
