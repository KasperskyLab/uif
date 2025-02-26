import { SPACES } from '@design-system/theme/themes/variables'
import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { ActionButtonCssConfig } from './types'

const fromProps = getFromProps<ActionButtonCssConfig>()

const ActionButtonCSS = css<{
  cssConfig: ActionButtonCssConfig,
  interactive?: boolean
}>`
  display: inline-flex;
  align-items: center;
  margin: 0;
  outline: ${SPACES[1]}px solid transparent;
  user-select: none;
  cursor: pointer;
  border: 0;
  border-radius: ${SPACES[1]}px;
  transition: all .15s ease-in;

  &.kl-action-button-w-label {
    padding: ${fromProps('paddingLabel')};
  }

  &.kl-action-button-w-icon {
    padding: ${fromProps('paddingIcon')};
  }

  &.kl-action-button-w-label.kl-action-button-w-icon {
    padding: ${fromProps('padding')};
    gap: ${fromProps('gap')};
  }
  
  &:not(:disabled) {
    background: ${fromProps('enabled.background')};
    &, .kl-action-button-text {
      color: ${fromProps('enabled.text')};
    }
    > svg {
      color: ${fromProps('enabled.icon')};
    }

    ${(props) => props.interactive && `
    &:hover {
      background: ${fromProps('hover.background')(props)};
      &, .kl-action-button-text {
        color: ${fromProps('hover.text')(props)};
      }
      > svg {
        color: ${fromProps('hover.icon')(props)};
      }
    }

    &:active {
      background: ${fromProps('active.background')(props)};
      &, .kl-action-button-text {
        color: ${fromProps('active.text')(props)};
      }
      > svg {
        color: ${fromProps('active.icon')(props)};
      }
    }`}
    
    &:focus-visible {
      box-shadow: ${fromProps('focus.boxShadow')};
    }
  }
  
  &:disabled {
    cursor: default;
    &, .kl-action-button-text {
      background: ${fromProps('disabled.background')};
      color: ${fromProps('disabled.text')};
      > svg {
        color: ${fromProps('disabled.icon')};
      }
    }
  }
`

export default ActionButtonCSS
