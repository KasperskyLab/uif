import { css } from 'styled-components'
import { ToggleCssConfig } from './types'
import { getFromProps } from '../../helpers/getFromProps'

const fromProps = getFromProps<ToggleCssConfig>()

export const toggleCss = css`
  background-color: ${fromProps('normal.bgOff')};
  box-shadow: none;
  order: 1;
  
  & .ant-switch-handle::before {
    &::before {
      box-shadow: unset;
      background-color: ${fromProps('normal.dotColorOff')};
    }
  }
  &.ant-switch-checked {
    background-color: ${fromProps('normal.bgOn')};
    & .ant-switch-handle::before {
      box-shadow: unset;
      background-color: ${fromProps('normal.dotColorOn')};
    }
  }
  & .ant-click-animating-node{
    display: none; // disable animation
  }

  // hover
  &:hover,
  .ant-toggle-wrapper:hover & {
    background-color: ${fromProps('hover.bgOff')};
    &.ant-switch-checked {
      background-color: ${fromProps('hover.bgOn')};
    }
  }

  // active
  &:hover:active,
  &:active,
  .ant-toggle-wrapper:active &,
  .ant-toggle-wrapper:hover:active & {
    background-color: ${fromProps('active.bgOff')};
    &.ant-switch-checked{
      background-color: ${fromProps('active.bgOn')};
    }
  }
  &:not(.ant-switch-disabled):active .ant-switch-handle::before,
  &:not(.ant-switch-disabled):active.ant-switch-checked .ant-switch-handle::before{
    right: 0;
    left: 0;
  }

  // focus
  &:focus-visible {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: -2px;
      border-radius: 100px;
      box-shadow: ${fromProps('focus.outline')};
    }
    box-shadow: none;
    background-color: ${fromProps('focus.bgOff')};
    &.ant-switch-checked {
      box-shadow: none;
      background-color: ${fromProps('focus.bgOn')};
      &::before {
        box-shadow: ${fromProps('focus.outline')};
      }
    }
  }
  // disabled
  &.ant-switch-disabled, &:disabled {
    background-color: ${fromProps('disabled.bgOff')};
    & .ant-switch-handle::before {
      background-color: ${fromProps('disabled.dotColorOff')};
    }
    &.ant-switch-checked{
      background-color: ${fromProps('disabled.bgOn')};
      & .ant-switch-handle::before {
        background-color: ${fromProps('disabled.dotColorOn')};
      }
    }
  }

  &.ant-switch-disabled ~ .ant-switch-label {
    color: ${fromProps('disabled.color')};
  }
`
export const toggleLabelCss = css`
 &&{
  display: inline-block;
  font-family: ${fromProps('fontFamily')};
  font-size: ${fromProps('fontSize')};
  line-height: ${fromProps('lineHeight')};
  font-weight: ${fromProps('fontWeight')};
  font-style: ${fromProps('fontStyle')};
  letter-spacing: ${fromProps('letterSpacing')};
  margin: 0 0 0 8px;
  order: 2;
   
  &.ant-switch-label-before {
    order: 0;
    margin: 0 8px 0 0;
  }

  &[disabled] {
    cursor: not-allowed;
    color: ${fromProps('disabled.color')};
  }
}`
