import { getFromProps } from '@helpers/getFromProps'
import { Button } from '@src/button'
import styled, { css } from 'styled-components'

import { AnchorLinkCssConfig } from '../AnchorLink/types'

const fromProps = getFromProps<AnchorLinkCssConfig>()

const style = css`
  &&&&&.ant-btn {
    &:not([disabled]):focus-visible {
      box-shadow: ${fromProps('focus.boxShadow')};
    }
  }

  &&&.ant-btn {
    &:not([disabled]) {
      &:hover {
        background-color: ${fromProps('default.hover.background')};
      }
      &:active {
        background-color: ${fromProps('default.pressed.background')};
      }
    }

    &.ant-dropdown-open, &.ant-dropdown-open:hover {
      background-color: ${fromProps('default.pressed.background')};
    }

    &.active {
      &,
      :not([disabled]):hover,
      :not([disabled]):active {
        background: ${fromProps('active.background')};
        box-shadow: ${fromProps('boxShadow')};
      }
    }
  }
`

export const StyledMoreButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${style}
`
