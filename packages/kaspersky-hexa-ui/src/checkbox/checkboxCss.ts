import AntdCheckbox from 'antd/es/checkbox'
import styled, { css } from 'styled-components'

import { CheckboxGroupProps } from './types'

export const getCheckboxCss = () => css`
  color: var(--checkbox--text--base--enabled);
  line-height: 20px;

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
    height: 14px;
    width: 14px;
    border-color: var(--checkbox--border--base--enabled);
    background-color: var(--checkbox--bg--base--enabled);
    border-radius: var(--radius--s);
  }
  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-inner {
    border-color: var(--checkbox--bg--base--enabled_selected);
    background-color: var(--checkbox--bg--base--enabled_selected);
    &::after {
      border-color: var(--checkbox--icon--base--enabled);
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
    background-color: var(--checkbox--icon--base--enabled);
    width: 8px;
    height: 2px;
    border-radius: var(--radius--s);
  }

  // hover
  &:hover {
    .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--hover);
      border-color: var(--checkbox--border--base--hover);
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--hover_selected);
      border-color: transparent;
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      border-color: var(--checkbox--icon--base--hover);
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: var(--checkbox--icon--base--hover);
    }
  }    

  // focus
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: var(--checkbox--border--base--enabled);
  }
  .ant-checkbox-checked .ant-checkbox-input:focus + .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: transparent;
  }
  .ant-checkbox-input:focus-visible + .ant-checkbox-inner {
    box-shadow: 0px 0px 0px 2px var(--focus--stroke);
  }
  .ant-checkbox-checked .ant-checkbox-input:focus-visible + .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-input:focus-visible + .ant-checkbox-inner{
    background-color: var(--checkbox--bg--base--enabled_selected);
  }
  .ant-checkbox-checked .ant-checkbox-input:focus-visible + .ant-checkbox-inner::after {
    border-color: var(--checkbox--icon--base--enabled);
  }
  .ant-checkbox-indeterminate .ant-checkbox-input:focus-visible + .ant-checkbox-inner::after {
    background-color: var(--checkbox--icon--base--enabled);
  }

  // active
  &:active {
    .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--active);
      border-color: var(--checkbox--border--base--active);
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--active_selected);
      border-color: var(--checkbox--border--base--active);
      box-shadow: none;
    }
    .ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: var(--checkbox--icon--base--active);
    } 
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: var(--checkbox--icon--base--active);
    }
  }

  // invalid
  &&.kl6-checkbox-invalid {
    .ant-checkbox-inner {
      border-color: var(--checkbox--border--danger--enabled);
      background-color: var(--checkbox--bg--danger--enabled);
    }
    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: var(--checkbox--bg--danger--enabled_selected);
      border-color: var(--checkbox--border--danger--enabled);
    }
    .ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: var(--checkbox--icon--danger--enabled);
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: var(--checkbox--icon--danger--enabled);
    }
  }

  // disabled
  &.ant-checkbox-wrapper-disabled, .ant-checkbox-disabled {
    cursor: not-allowed;
  }
  .ant-checkbox-disabled {
    + span {
      color: var(--checkbox--text--base--disabled);
      cursor: default;
      & .form-label > span {
        cursor: default;
        color: var(--checkbox--text--base--disabled);
      }
    }
    .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--disabled) !important;
      border-color: transparent !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner,
    &.ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--disabled_selected) !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: var(--checkbox--icon--base--disabled) !important;
    }
    &.ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: var(--checkbox--icon--base--disabled) !important;
    }
  }

  // readonly
  &.kl6-checkbox-readonly.ant-checkbox-wrapper-disabled,
  &.kl6-checkbox-readonly .ant-checkbox-disabled {
    cursor: default;
  }
  &.kl6-checkbox-readonly .ant-checkbox-disabled {
    + span {
      color: var(--checkbox--text--base--readonly);
      cursor: default;
      & .form-label > span {
        cursor: default;
        color: var(--checkbox--text--base--readonly);
      }
    }
    .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--readonly) !important;
      border-color: transparent !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner,
    &.ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: var(--checkbox--bg--base--readonly_selected) !important;
    }
    &.ant-checkbox-checked .ant-checkbox-inner::after {
      border-color: var(--checkbox--icon--base--readonly) !important;
    }
    &.ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: var(--checkbox--icon--base--readonly) !important;
    }
  }
`

export const checkboxCss = getCheckboxCss()

export const StyledCheckboxGroup = styled(AntdCheckbox.Group)<CheckboxGroupProps>`
  &.kl6-checkbox-group-vertical {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing--gap_related);
  }
  
  &.kl6-checkbox-group-horizontal {
    display: flex;
    flex-direction: row;
    gap: var(--spacing--gap_grouped);
  }

  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
  }
`
