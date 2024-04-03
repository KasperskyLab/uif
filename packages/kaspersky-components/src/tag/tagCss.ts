import { css } from 'styled-components'
import { getFromProps } from '@helpers/getFromProps'
import { TagCssConfig } from './types'

const fromProps = getFromProps<TagCssConfig>()

export const tagCss = css<{ cssConfig: TagCssConfig, outlined?: boolean }>`
  ${({ outlined }) => {
    const fillState = outlined ? 'outlined' : 'filled'
    return css`
      display: inline-flex;
      height: ${fromProps('height')};
      align-items: center;
      border-radius: ${fromProps('borderRadius')};
      border: ${fromProps(`${fillState}.normal.border`)};
      padding: ${fromProps('padding')};
      gap: ${fromProps('gap')};
      background-color: ${fromProps(`${fillState}.normal.background`)};
      box-sizing: border-box;
      cursor: default;
      outline: none;
      box-shadow: none;

      .kl-components-tag-text, .kl-components-tag-icon {
        color: ${fromProps(`${fillState}.normal.color`)};
      }

      &&.ant-tag.uninteractive {
        &:focus,
        &:focus-visible {
          border: ${fromProps(`${fillState}.normal.border`)};
        }
      }

      &&.ant-tag.interactive {
        cursor: pointer;

        &:focus-visible {
          box-shadow: ${fromProps(`${fillState}.focus.boxShadow`)};
        }

        &:hover {
          color: ${fromProps(`${fillState}.hover.color`)};
          background: ${fromProps(`${fillState}.hover.background`)};
          border: ${fromProps(`${fillState}.hover.border`)};
        }

        &:active {
          color: ${fromProps(`${fillState}.active.color`)};
          background: ${fromProps(`${fillState}.active.background`)};
          border: ${fromProps(`${fillState}.active.border`)};
        }
      }

      &[disabled] {
        color: ${fromProps('disabled.color')};
        background: ${fromProps('disabled.background')};
        border: ${fromProps('disabled.border')};

        .kl-components-tag-text, .kl-components-tag-icon {
          color: ${fromProps('disabled.color')};
        }
      }

      &[readonly] {
          color: ${fromProps('readOnly.color')};
          background: ${fromProps('readOnly.background')};
          border: ${fromProps('readOnly.border')};
      }

      &.ant-tag.invalid {
        color: ${fromProps('invalid.color')};
        background: ${fromProps('invalid.background')};
        border: ${fromProps('invalid.border')};
    
        .tag-invalid-icon {
          color: ${fromProps('invalid.iconColor')};
        }
      }

      &.ant-tag-hidden {
        display: none;
      }
    `
  }}
`
