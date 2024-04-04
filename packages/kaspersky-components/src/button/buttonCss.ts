import { css } from 'styled-components'
import { ButtonCssConfig, ButtonViewProps } from './types'
import { getFromProps } from '@helpers/getFromProps'
import { SPACES } from '@design-system/theme/themes/variables'

const fromProps = getFromProps<ButtonCssConfig, ButtonViewProps>()

export const groupCss = css`
  gap: 6px;

  &.ant-btn-group > .ant-btn:first-child:not(:last-child) {
    border-radius: 7px 0 0 7px;
  }

  &.ant-btn-group > .ant-btn:not(:last-child):not(:first-child) {
    border-radius: 0;
  }

  &.ant-btn-group > .ant-btn:last-child:not(:first-child) {
    border-radius: 0 7px 7px 0;
  }
`

export const buttonCss = css`
  &.ant-btn {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${SPACES[2]}px;
    outline: none;

    height: ${fromProps('height')};
    min-width: ${fromProps('minWidth')};
    max-width: 100%;
    padding: ${fromProps('padding')};
    border-radius: ${fromProps('borderRadius')};

    // normal
    background-color: ${({ isPressed }) => fromProps(`${isPressed ? 'active' : 'normal'}.background`)};
    color: ${fromProps('normal.color')};
    border: ${fromProps('normal.border')};
    box-shadow: none;

    .kl-components-button-text {
      max-width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;

      font-family: ${fromProps('fontFamily')};
      font-size: ${fromProps('fontSize')};
      line-height: ${fromProps('lineHeight')};
      font-weight: ${fromProps('fontWeight')};
      font-style: ${fromProps('fontStyle')};
      letter-spacing: ${fromProps('letterSpacing')};
    }

    &:not([disabled]) > span[role="img"] > svg {
      color: ${fromProps('normal.color')};
    }

    // focus
    &:focus-visible {
      box-shadow: ${fromProps('focus.boxShadow')};
    }

    // hover
    &:hover,
    &:hover:focus {
      color: ${fromProps('hover.color')};
      background-color: ${fromProps('hover.background')};
    }

    // active
    &:active,
    &:active:focus {
      background-color: ${fromProps('active.background')};
      border: ${fromProps('active.border')};
      transition-duration: .02s;
    }

    // disabled & loading
    &[disabled],
    &.ant-btn-loading {
      &,
      &:hover,
      &:active,
      &:focus {
        background-color: ${fromProps('disabled.background')};
        color: ${fromProps('disabled.color')};
        border: ${fromProps('disabled.border')};
        box-shadow: none;
        cursor: not-allowed;

        svg {
          color: ${fromProps('disabled.color')};
        }
      }
    }

    &.ant-btn-loading {
      & > span:not(.ant-btn-loading-icon) {
        visibility: ${(props) => (props.loading ? 'hidden' : 'visible')};
        overflow: hidden;
        transition: visibility 0.3s;
      }
    }

    .ant-btn-loading-icon {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: -8px;
      margin-left: -8px;
      transition: opacity 0.3s;
      color: ${fromProps('disabled.color')};

      svg {
        width: 16px;
        height: 16px;
      }

      span {
        padding-right: 0;
      }
    }

    // other
    .anticon {
      line-height: 0;
    }

    &::before {
      opacity: 0;
    }

    &.icon-only {
      width: ${fromProps('height')};
      min-width: ${fromProps('height')};
      padding: unset;
      line-height: unset;
    }
  }

  &[ant-click-animating-without-extra-node=true]::after,
  .ant-click-animating-node {
    display: none;
  }
`
