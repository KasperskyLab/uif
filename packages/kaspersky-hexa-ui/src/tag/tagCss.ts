import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { TagCssConfig } from './types'

const fromProps = getFromProps<TagCssConfig>()

export const tagCss = css<{ cssConfig: TagCssConfig, outlined?: boolean }>`
  ${({ outlined }) => {
    const fillState = outlined ? 'outlined' : 'filled'
    return css`
      max-width: 100%;
      display: inline-flex;
      height: ${fromProps('height')};
      align-items: center;
      border-radius: ${fromProps('borderRadius')};
      border: ${fromProps(`${fillState}.enabled.border`)};
      padding: ${fromProps('padding')};
      gap: ${fromProps('gap')};
      background: ${fromProps(`${fillState}.enabled.background`)};
      box-sizing: border-box;
      cursor: default;
      outline: none;
      box-shadow: none;

      .kl-components-tag-text {
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${fromProps(`${fillState}.enabled.color`)};
      }
      .kl-components-tag-icon {
        color: ${fromProps(`${fillState}.enabled.icon`)};
      }

      &&.ant-tag.uninteractive {
        &:focus,
        &:focus-visible {
          border: ${fromProps(`${fillState}.enabled.border`)};
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

        .kl-components-tag-text {
          color: ${fromProps('disabled.color')};
        }
        .kl-components-tag-icon {
          color: ${fromProps('disabled.icon')};
        }
      }

      &[readonly] {
        color: ${fromProps('readOnly.color')};
        background: ${fromProps('readOnly.background')};
        border: ${fromProps('readOnly.border')};

        .kl-components-tag-text {
          color: ${fromProps('readOnly.color')};
        }
        .kl-components-tag-icon {
          color: ${fromProps('readOnly.icon')};
        }
      }

      &.ant-tag.invalid {
        color: ${fromProps('invalid.color')};
        background: ${fromProps('invalid.background')};
        border: ${fromProps('invalid.border')};
    
        .tag-invalid-icon {
          color: ${fromProps('invalid.iconStatus')};
        }
      }

      &.ant-tag-hidden {
        display: none;
      }

      &[ant-click-animating-without-extra-node=true]::after,
      .ant-click-animating-node {
        display: none;
      }
    `
  }}
`
