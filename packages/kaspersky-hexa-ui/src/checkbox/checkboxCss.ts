import { BORDER_RADIUS, SPACES } from '@design-system/theme/themes/variables'
import { getFromProps } from '@helpers/getFromProps'
import { Checkbox as AntdCheckbox } from 'antd'
import styled, { css } from 'styled-components'

import { CheckboxCssConfig, CheckboxGroupProps } from './types'

const fromCheckboxProps = getFromProps<CheckboxCssConfig>()

export const getCheckboxCss = (fromProps: any) => css`
  color: ${fromProps('default.enabled.color')};
  line-height: ${SPACES[10]}px;

  && {
    position: relative;
    display: flex;
    align-items: flex-start;
  }

  &.ant-checkbox-wrapper {
    display: inline-flex;
    flex-direction: row;
    gap: 4px;
  }

  &.ant-checkbox-wrapper + &.ant-checkbox-wrapper {
    margin-left: 0;
  }

  .ant-checkbox {
    top: 3px;
  }

  .ant-checkbox + span {
    padding: 0;
    & .form-label {
      cursor: pointer;
    }
  }

  .ant-checkbox-inner {
    height: ${SPACES[7]}px;
    width: ${SPACES[7]}px;
    border-color: ${fromProps('default.enabled.border')};
    background-color: ${fromProps('default.enabled.background.unselected')};
    border-radius: ${BORDER_RADIUS[2]}px;
  }
  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-inner {
    border-color: ${fromProps('default.enabled.background.selected')};
    background-color: ${fromProps('default.enabled.background.selected')};
    &::after {
      border-color: ${fromProps('default.enabled.checkColor')};
      border-radius: 1px;
      border-bottom-left-radius: 2px;
      border-top-right-radius: 2px;
      width: 5px;
      height: 7.5px;
    }
  }
  .ant-checkbox-checked::after {
    border: none;
  }
  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: ${fromProps('default.enabled.checkColor')};
    width: ${SPACES[4]}px;
    height: ${SPACES[1]}px;
    border-radius: ${BORDER_RADIUS[2]}px;
  }

  // hover
  &:hover {
    .ant-checkbox-inner {
      background-color: ${fromProps('default.hover.background.unselected')};
      border-color: ${fromProps('default.hover.border')};
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${fromProps('default.hover.background.selected')};
      border-color: transparent;
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      border-color: ${fromProps('default.hover.checkColor')};
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${fromProps('default.hover.checkColor')};
    }
  }    

  // focus
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${fromProps('default.enabled.border')};
  }
  .ant-checkbox-checked .ant-checkbox-input:focus + .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: transparent;
  }
  .ant-checkbox-input:focus-visible + .ant-checkbox-inner {
    box-shadow: ${fromProps('focus.boxShadow')};
  }
  .ant-checkbox-checked .ant-checkbox-input:focus-visible + .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-input:focus-visible + .ant-checkbox-inner{
    background-color: ${fromProps('default.enabled.background.selected')};
  }
  .ant-checkbox-checked .ant-checkbox-input:focus-visible + .ant-checkbox-inner::after {
    border-color: ${fromProps('default.enabled.checkColor')};
  }
  .ant-checkbox-indeterminate .ant-checkbox-input:focus-visible + .ant-checkbox-inner::after {
    background-color: ${fromProps('default.enabled.checkColor')};
  }

  // active
  &:active {
    .ant-checkbox-inner {
      background-color: ${fromProps('default.active.background.unselected')};
      border-color: ${fromProps('default.active.border')};
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${fromProps('default.active.background.selected')};
      border-color: ${fromProps('default.active.border')};
      box-shadow: none;
    }
    .ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: ${fromProps('default.active.checkColor')};
    } 
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${fromProps('default.active.checkColor')};
    }
  }

  // invalid
  &&.kl6-checkbox-invalid {
    .ant-checkbox-inner {
      border-color: ${fromProps('invalid.enabled.border')};
      background-color: ${fromProps('invalid.enabled.background.unselected')};
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${fromProps('invalid.enabled.background.selected')};
      border-color: ${fromProps('invalid.enabled.border')};
    }
    .ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: ${fromProps('invalid.enabled.checkColor')};
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${fromProps('invalid.enabled.checkColor')};
    }
  }

  // disabled
  &.ant-checkbox-wrapper-disabled, .ant-checkbox-disabled {
    cursor: not-allowed;
  }
  .ant-checkbox-disabled {
    + span {
      color: ${fromProps('default.disabled.color')};
      cursor: default;
      & .form-label > span {
        cursor: default;
        color: ${fromProps('default.disabled.color')};
      }
    }
    .ant-checkbox-inner {
      background-color: ${fromProps('default.disabled.background.unselected')} !important;
      border-color: transparent !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner,
    &.ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${fromProps('default.disabled.background.selected')} !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: ${fromProps('default.disabled.checkColor')} !important;
    }
    &.ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${fromProps('default.disabled.checkColor')} !important;
    }
  }

  // readonly
  &.kl6-checkbox-readonly.ant-checkbox-wrapper-disabled,
  &.kl6-checkbox-readonly .ant-checkbox-disabled {
    cursor: default;
  }
  &.kl6-checkbox-readonly .ant-checkbox-disabled {
    + span {
      color: ${fromProps('default.readonly.color')};
      cursor: default;
      & .form-label > span {
        cursor: default;
        color: ${fromProps('default.readonly.color')};
      }
    }
    .ant-checkbox-inner {
      background-color: ${fromProps('default.readonly.background.unselected')} !important;
      border-color: transparent !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner,
    &.ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${fromProps('default.readonly.background.selected')} !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: ${fromProps('default.readonly.checkColor')} !important;
    }
    &.ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${fromProps('default.readonly.checkColor')} !important;
    }
  }
`

export const checkboxCss = getCheckboxCss(fromCheckboxProps)

export const StyledCheckboxGroup = styled(AntdCheckbox.Group)<CheckboxGroupProps>`
  &.kl6-checkbox-group-vertical {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${SPACES[4]}px;
  }
  
  &.kl6-checkbox-group-horizontal {
    display: flex;
    flex-direction: row;
    gap: ${SPACES[8]}px;
  }

  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
  }
`
