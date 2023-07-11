import { css } from 'styled-components'

import { SelectCssConfig } from './types'

import { getFromProps } from '../../helpers/getFromProps'

const fromProps = getFromProps<SelectCssConfig>()

export const selectCss = css`
  width: 100%;

  .ant-select-selector {
    padding: 8px !important;
    height: auto !important;
    padding-right: 66px !important;
    color: ${fromProps('normal.color')};
    font-family: ${fromProps('fontFamily')};
    font-size: ${fromProps('fontSize')};
    line-height: ${fromProps('lineHeight')};
    font-weight: ${fromProps('fontWeight')};
    font-style: ${fromProps('fontStyle')};
    letter-spacing: ${fromProps('letterSpacing')};
    
    & > .ant-select-selection-search > .ant-select-selection-search-input {
      height: 100%;
    }
  }

  &.ant-select-single > .ant-select-selector {
    padding: 6px 12px !important;
  }

  &:not(.ant-select-customize-input).ant-select-focused  > .ant-select-selector {
      border: none;
      box-shadow: 0 0 0 3px ${fromProps('normal.focusBorder')} !important;
      background-color: ${fromProps('selected.background')};
  }
  &:not(.ant-select-customize-input).ant-select-open > .ant-select-selector {
      border: none;
      box-shadow: 0 0 0 1px ${fromProps('normal.focusBorder')} !important;
      background-color: ${fromProps('normal.background')};
  }
  &:not(.ant-select-customize-input).ant-select-error .ant-select-selector {
    border-color: ${fromProps('error.borderColor')};
  }  
  &.ant-select-multiple.ant-select-focused  > .ant-select-selector,
  &.ant-select-multiple.ant-select-open  > .ant-select-selector {
      border: none;
      box-shadow: 0 0 0 3px ${fromProps('normal.focusBorder')} !important;
      background-color: ${fromProps('normal.background')};
  }
  &:not(.ant-select-customize-input) > .ant-select-selector {
    border-radius: ${fromProps('input.borderRadius')};
    background-color: ${fromProps('normal.background')};
    border: 1px solid ${fromProps('normal.borderColor')};
    & > .ant-select-selection-placeholder {
      color: ${fromProps('normal.placeholder.color')};
      opacity: 1;
    }
    & > .ant-select-selection-item {
      color: ${fromProps('selected.color')};
      opacity: 1;

      &::first-letter {
        text-transform: capitalize;
      }

      display: flex;
      align-items: center;
    }
  }

  & > .ant-select-arrow {
    color: ${fromProps('normal.placeholder.color')};
    width: 16px;
    height: 16px;
    right: 18px;
    margin-top: 0;
    transform: translateY(-50%);
  }

  & > .ant-select-clear {
    opacity: 1;
    right: 46px;
    top: 50%;
    width: 16px;
    height: 16px;
    margin-top: 0;
    transform: translateY(-50%);
  }

  &.ant-select-open {
    .ant-select-arrow {
      transform: translateY(-50%) rotate(0.5turn);
    }
  }

  &.ant-select-disabled {
    && .ant-select-selector {
      background-color: ${fromProps('disabled.background')};
      color: ${fromProps('disabled.color')};
      .ant-select-selection-item {
        color: inherit;
      }
    }
  }

  & .dropdown-custom {
    background-color: ${fromProps('normal.dropdown.background')};
    border-radius: ${fromProps('dropdown.borderRadius')};

    box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31);

    & .ant-select-item-option {
      color: ${fromProps('normal.option.color')};
      position: relative;
      padding-right: 30px;

      .ant-select-item-option-state {
        color: ${fromProps('normal.option.color')} !important;
        position: absolute;
        height: 16px;
        width: 16px;
        top: 50%;
        right: 13px;
        transform: translateY(-50%);
      }  

      .ant-select-item-option-content::first-letter {
        text-transform: capitalize;
      }

      .ant-select-item-option-content {
        display: flex;
        align-items: center;
      }
    }

    & .ant-select-item-option-active.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      background-color: ${fromProps('active.option.background')};
    }

    & .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      background-color: ${fromProps('selected.option.background')};
      font-weight: 400;
      color: ${fromProps('normal.option.color')};
    }

    & .ant-select-item-option-active {
      color: ${fromProps('hover.option.color')};
      background-color: ${fromProps('hover.option.background')};
    }

    &.dropdown-loading {
      min-height: 64px;
    }
  }

  .kl-components-tag-text::first-letter {
    text-transform: capitalize;
  }
  
  & .ant-select-selection-overflow-item-rest {
    & .ant-select-selection-item {
      background-color: ${fromProps('tags.background')};
      gap: ${fromProps('tags.gap')};
      border-radius: ${fromProps('tags.borderRadius')};
      padding:  ${fromProps('tags.padding')};
      border: 0;
      margin: 0;
      height: auto;
      
      & .ant-select-selection-item-content {
        font-family: ${fromProps('tags.fontFamily')};
        font-size: ${fromProps('tags.fontSize')};
        line-height: ${fromProps('tags.lineHeight')};
        font-weight: ${fromProps('tags.fontWeight')};
        font-style: ${fromProps('tags.fontStyle')};
        letter-spacing: ${fromProps('tags.letterSpacing')};
      }
    }
  }
`
