import { css } from 'styled-components'
import { CheckboxCssConfig } from './types'
import { getFromProps } from '../../helpers/getFromProps'
import { SPACES } from '../../design-system/theme/themes/variables'

const fromCheckboxProps = getFromProps<CheckboxCssConfig>()

export const getCheckboxCss = (fromProps: any) => css`
  color:  ${fromProps('normal.color')};

  & .ant-checkbox-inner {
    height: ${SPACES[7]}px;
    width: ${SPACES[7]}px;
    border-color: ${fromProps('normal.borderColor')};
    background-color: ${fromProps('normal.bgColor')};
  }
  & .ant-checkbox-checked .ant-checkbox-inner,
  & .ant-checkbox-indeterminate .ant-checkbox-inner {
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
  & .ant-checkbox-checked::after {
    border: none;
  }
  & .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: ${fromProps('normal.checkColor')};
    width: ${SPACES[4]}px;
    height: ${SPACES[1]}px;
    border-radius: ${fromProps('normal.radius')};
  }
  // hover
  
  &.ant-checkbox-wrapper:hover .ant-checkbox-inner,
  & .ant-checkbox:hover .ant-checkbox-inner {
    border-color: ${fromProps('hover.borderColor')};
    background-color: ${fromProps('hover.bgColor')};
  }
  &.ant-checkbox-wrapper:hover .ant-checkbox-checked .ant-checkbox-inner,
  & .ant-checkbox-checked:hover .ant-checkbox-inner,
  & .ant-checkbox-indeterminate:hover .ant-checkbox-inner {
    background-color: ${fromProps('hover.checkBgColor')};
    border-color: transparent;
    &::after {
      border-color: ${fromProps('hover.iconColor')};
    }
  }
  &.ant-checkbox-wrapper-checked:hover .ant-checkbox-indeterminate .ant-checkbox-inner::after ,
  & .ant-checkbox-indeterminate:hover .ant-checkbox-inner::after  {
    background-color: ${fromProps('hover.checkColor')};
  }

  // active
  &.ant-checkbox-wrapper:active .ant-checkbox-inner,
  & .ant-checkbox-input:active + .ant-checkbox-inner {
    background-color: ${fromProps('active.bgColor')};
    border-color: ${fromProps('active.borderColor')};
  }
  
  &.ant-checkbox-wrapper:active .ant-checkbox-inner,
  &.ant-checkbox-wrapper:active:hover .ant-checkbox-inner,
  & .ant-checkbox-checked .ant-checkbox-input:active + .ant-checkbox-inner,
  & .ant-checkbox-checked .ant-checkbox-input:active:focus + .ant-checkbox-inner {
    background-color: ${fromProps('active.checkBgColor')};
    box-shadow: ${fromProps('active.outline')};
    border-color: ${fromProps('active.borderColor')};
    
    &::after {
      border-color: ${fromProps('active.checkColor')};
    }
  }
  
  &.ant-checkbox-wrapper:active .ant-checkbox-indeterminate .ant-checkbox-inner,
  &.ant-checkbox-wrapper:active:hover .ant-checkbox-indeterminate .ant-checkbox-inner,
  & .ant-checkbox-indeterminate .ant-checkbox-input:active + .ant-checkbox-inner {
    &:after {
      background-color: ${fromProps('active.checkColor')};
    }
  }
  // focus
  & .ant-checkbox-input:focus-visible + .ant-checkbox-inner {
    border-color: transparent;
    box-shadow: ${fromProps('focus.outline')};
  }
  & .ant-checkbox-checked .ant-checkbox-input:focus-visible + .ant-checkbox-inner {
    background-color: ${fromProps('focus.checkBgColor')};
    &::after {
      border-color: ${fromProps('focus.checkColor')};
    }
  }
  & .ant-checkbox-indeterminate .ant-checkbox-input:focus-visible + .ant-checkbox-inner::after {
    background-color: ${fromProps('focus.checkColor')};
  }
  // disabled
  & .ant-checkbox-disabled + span {
    color:  ${fromProps('disabled.color')};
  }
  & .ant-checkbox-disabled .ant-checkbox-inner {
    border-color: ${fromProps('disabled.borderColor')} !important;
    background-color: ${fromProps('disabled.bgColor')} !important;
  }
  & .ant-checkbox-checked.ant-checkbox-disabled .ant-checkbox-inner {
    background-color: ${fromProps('disabled.checkBgColor')} !important;
    &::after {
      border-color: ${fromProps('disabled.checkColor')} !important;
    }
  }
  & .ant-checkbox-disabled.ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: ${fromProps('disabled.checkColor')} !important;
  }
`
export const checkboxCss = getCheckboxCss(fromCheckboxProps)
