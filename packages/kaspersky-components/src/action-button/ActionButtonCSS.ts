import { css } from 'styled-components'
import { getFromProps } from '@helpers/getFromProps'
import { ActionButtonCssConfig } from './types'
import { SPACES } from '@design-system/theme/themes/variables'

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
    background: ${fromProps('normal.background')};
    &, .kl-action-button-text {
      color: ${fromProps('normal.text')};
    }

    ${(props) => props.interactive && `
    &:hover {
      background: ${fromProps('hover.background')(props)};
    }

    &:active {
      background: ${fromProps('active.background')(props)};
    }`}
    
    &:focus-visible {
      box-shadow: ${fromProps('focus.boxShadow')};
    }
  }
  
  &:disabled {
    cursor: default;
    &, .kl-action-button-text {
      color: ${fromProps('disabled.text')};
    }
  }
`

export default ActionButtonCSS
