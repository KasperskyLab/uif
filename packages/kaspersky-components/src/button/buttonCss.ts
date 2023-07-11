import { css } from 'styled-components'
import { ButtonCssConfig } from './types'
import { getFromProps } from '../../helpers/getFromProps'
import { useThemedButton } from './useThemedButton'
import { SPACES } from '@design-system/theme/themes/variables'

const fromProps = getFromProps<ButtonCssConfig, ReturnType<typeof useThemedButton>>()

export const groupCss = css`
  gap: 6px;

  &.ant-btn-group > .ant-btn:first-child:not(:last-child){
    border-radius: 7px 0 0 7px;
  }

  &.ant-btn-group > .ant-btn:not(:last-child):not(:first-child){
    border-radius: 0;
  }

  &.ant-btn-group > .ant-btn:last-child:not(:first-child){
    border-radius: 0 7px 7px 0;
  }
`
export const buttonCss = css`
  &.ant-btn {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${SPACES[4]}px;
    box-shadow: unset;
    border: unset;

    height: ${fromProps('height')};
    min-width: ${fromProps('height')};
    max-width: 100%;
    padding: ${fromProps('padding')};
    border-radius: ${fromProps('borderRadius')};

    background-color: ${fromProps('normal.background')};
    color: ${fromProps('normal.color')};
    box-shadow: ${fromProps('normal.border')};

    &:not([disabled]):hover {
      color: ${fromProps('hover.color')};
      background-color: ${fromProps('hover.background')};
    }

    &:active,
    &:active:focus {
      color: ${fromProps('active.color')};
      background-color: ${fromProps('active.background')};
      box-shadow: ${fromProps('active.border')};
    }

    &:active:focus:focus-visible {
      color: ${fromProps('active.color')};
      background-color: ${fromProps('active.background')};
      box-shadow: ${fromProps('focus.border')};
    }

    &:hover:focus-visible,
    &:focus-visible {
      color: ${fromProps('focus.color')};
      background-color: ${fromProps('focus.background')};
      box-shadow: ${fromProps('focus.border')};
    }

    &[disabled] {
      box-shadow: ${fromProps('disabled.border')};
      background-color: ${fromProps('disabled.background')};
      color: ${fromProps('disabled.color')};
      svg {
        color: ${fromProps('disabled.color')};
      }
    }

    & > span:not(.anticon):not([role=img]) {
      font-family: ${fromProps('fontFamily')};
      font-size: ${fromProps('fontSize')};
      line-height: ${fromProps('lineHeight')};
      font-weight: ${fromProps('fontWeight')};
      font-style: ${fromProps('fontStyle')};
      letter-spacing: ${fromProps('letterSpacing')};
    }
    & > .anticon {
      line-height: 0;
    }

    & > .ant-btn-loading-icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) !important;
      transition: opacity .3s;
      & > span {
        padding-right: 0;
      }
    }

    &::before {
      opacity: 0;
    }

    &.ant-btn-icon-only {
      width: ${fromProps('height')};
      padding: unset;
      line-height: unset;
    }

    & > .kl-components-button-text {
      opacity: ${props => props.loading ? 0 : 1};
      transition: opacity .3s;
      max-width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`
