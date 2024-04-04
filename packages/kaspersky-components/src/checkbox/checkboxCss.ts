import { Checkbox as AntdCheckbox } from 'antd'
import styled, { css } from 'styled-components'
import { getFromProps } from '@helpers/getFromProps'
import { SPACES, BORDER_RADIUS } from '@design-system/theme/themes/variables'
import { CheckboxCssConfig, CheckboxGroupProps } from './types'

const fromCheckboxProps = getFromProps<CheckboxCssConfig>()

export const getCheckboxCss = (fromProps: any) => css`
  color: ${fromProps('normal.color')};
  line-height: ${SPACES[10]}px;
  
  && {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
  }

  &.ant-checkbox-wrapper + &.ant-checkbox-wrapper {
    margin-left: 0;
  }

  .ant-checkbox {
    top: 3px;
  }

  .ant-checkbox + span {
    padding: 0;
    margin-left: 4px;
    & .form-label {
      cursor: pointer;
    }
  }

  .ant-checkbox-inner {
    height: ${SPACES[7]}px;
    width: ${SPACES[7]}px;
    border-color: ${fromProps('normal.borderColor')};
    background-color: ${fromProps('normal.bgColor')};
    border-radius: ${BORDER_RADIUS[2]}px;
  }
  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-inner {
    border-color: ${fromProps('normal.checkBgColor')};
    background-color: ${fromProps('normal.checkBgColor')};
    &::after {
      border-color: ${fromProps('normal.checkColor')};
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
    background-color: ${fromProps('normal.checkColor')};
    width: ${SPACES[4]}px;
    height: ${SPACES[1]}px;
    border-radius: ${BORDER_RADIUS[2]}px;
  }

  // hover
  &:hover {
    .ant-checkbox-inner {
      background-color: ${fromProps('hover.bgColor')};
      border-color: ${fromProps('hover.borderColor')};
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${fromProps('hover.checkBgColor')};
      border-color: transparent;
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      border-color: ${fromProps('hover.checkColor')};
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${fromProps('hover.checkColor')};
    }
  }    

  // focus
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${fromProps('normal.borderColor')};
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
    background-color: ${fromProps('normal.checkBgColor')};
  }
  .ant-checkbox-checked .ant-checkbox-input:focus-visible + .ant-checkbox-inner::after {
    border-color: ${fromProps('normal.checkColor')};
  }
  .ant-checkbox-indeterminate .ant-checkbox-input:focus-visible + .ant-checkbox-inner::after {
    background-color: ${fromProps('normal.checkColor')};
  }
  
  // active
  &:active {
    .ant-checkbox-inner {
      background-color: ${fromProps('active.bgColor')};
      border-color: ${fromProps('active.borderColor')};
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${fromProps('active.checkBgColor')};
      border-color: ${fromProps('active.borderColor')};
      box-shadow: none;
    }
    .ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: ${fromProps('active.checkColor')};
    } 
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${fromProps('active.checkColor')};
    }
  }
  
  // invalid
  &&.kl6-checkbox-invalid {
    .ant-checkbox-inner {
      border-color: ${fromProps('invalid.borderColor')};
      background-color: ${fromProps('invalid.bgColor')};
      box-shadow: none;
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${fromProps('invalid.checkBgColor')};
      border-color: ${fromProps('invalid.borderColor')};
    }
    .ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: ${fromProps('invalid.checkColor')};
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${fromProps('invalid.checkColor')};
    }
  }
  
  // disabled
  &.ant-checkbox-wrapper-disabled, .ant-checkbox-disabled {
    cursor: not-allowed;
  }
  .ant-checkbox-disabled {
    + span {
      color: ${fromProps('disabled.color')};
      cursor: default;
      & .form-label > span {
        cursor: default;
        color: ${fromProps('disabled.color')};
      }
    }
    .ant-checkbox-inner {
      background-color: ${fromProps('disabled.bgColor')} !important;
      border-color: transparent !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner,
    &.ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${fromProps('disabled.checkBgColor')} !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: ${fromProps('disabled.checkColor')} !important;
    }
    &.ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${fromProps('disabled.checkColor')} !important;
    }
  }

  // readonly
  &.kl6-checkbox-readonly.ant-checkbox-wrapper-disabled,
  &.kl6-checkbox-readonly .ant-checkbox-disabled {
    cursor: default;
  }
  &.kl6-checkbox-readonly .ant-checkbox-disabled {
    + span {
      color: ${fromProps('readonly.color')};
      cursor: default;
      & .form-label > span {
        cursor: default;
        color: ${fromProps('readonly.color')};
      }
    }
    .ant-checkbox-inner {
      background-color: ${fromProps('readonly.bgColor')} !important;
      border-color: transparent !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner,
    &.ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${fromProps('readonly.checkBgColor')} !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: ${fromProps('readonly.checkColor')} !important;
    }
    &.ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${fromProps('readonly.checkColor')} !important;
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
