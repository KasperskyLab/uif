import { SPACES } from '@design-system/theme'
import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { ChipCssConfig } from './types'

const fromProps = getFromProps<ChipCssConfig>()

export const chipCss = css<{
  cssConfig: ChipCssConfig,
  disabled: boolean
}>`
  &.ant-tag-hidden {
    display: none;
  }

  ${getTextSizes(textLevels.BTM3)};
  display: flex;
  align-items: center;
  height: ${fromProps('height')};
  gap: ${SPACES[2]}px;
  margin: 0;
  padding: ${fromProps('padding')};
  border-radius: ${SPACES[10]}px;
  background: ${fromProps('enabled.background')};
  color: ${fromProps('enabled.color')};
  cursor: default;
  border: none;
  outline: none;

  .ant-tag-close-icon {
    margin: 0;
    display: flex;
    align-items: center;
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
  }`}
`
