import styled, { css } from 'styled-components'
import { SelectCssConfig } from './types'
import { getFromProps } from '@helpers/getFromProps'
import { BORDER_RADIUS, SPACES } from '@design-system/theme'
import { getTextSizes, textLevels } from '@design-system/tokens'

const fromProps = getFromProps<SelectCssConfig>()

const selectTextSizes = getTextSizes(textLevels.BTR3)

export const SelectWrapper = styled.div`
  width: 100%;
`

export const selectCss = css`
  width: 100%;

  .ant-select-selector {
    font-family: ${selectTextSizes.fontFamily};
    font-size: ${selectTextSizes.fontSize};
    line-height: ${selectTextSizes.lineHeight};
    font-weight: ${selectTextSizes.fontWeight};
    font-style: ${selectTextSizes.fontStyle};
    letter-spacing: ${selectTextSizes.letterSpacing};

    .ant-select-selection-overflow {
      gap: ${SPACES[2]}px;
      padding: 3px 0;

      .ant-tag {
        margin-right: 0;
      }
    }

    > .ant-select-selection-search > .ant-select-selection-search-input {
      height: 100%;
    }
  }

  &.ant-select-single {
    .ant-select-selector {
      padding: 6px 36px 6px 12px;
    }

    &.ant-select-show-arrow {
      .ant-select-selection-placeholder,
      .ant-select-selection-item {
        padding-right: 0;
      }
    }
  }

  &.ant-select-multiple {
    .ant-select-selector {
      padding: 0 64px 0 12px;
    }

    .ant-select-selection-search {
      margin-inline-start: 0;
      line-height: 20px;
    }

    &.ant-select-focused,
    &.ant-select-open {
      .ant-select-selector {
        border: none;
        box-shadow: ${fromProps('focus.boxShadow')};
        background-color: ${fromProps('normal.background')};
      }
    }
  }

  // color states
  &&:not(.ant-select-customize-input) {
    // enabled
    &:not(.ant-select-disabled) {
      .ant-select-selector {
        background-color: ${fromProps('normal.background')};
        border: 1px solid ${fromProps('normal.borderColor')};
      }

      .ant-select-selection-search-input {
        color: ${fromProps('normal.color')};
      }

      .ant-select-selection-item {
        color: ${fromProps('normal.color')};
        opacity: 1;
      }

      .ant-select-selection-placeholder {
        color: ${fromProps('normal.placeholder.color')};
      }

      .select-chevron,
      .ant-select-arrow {
        color: ${fromProps('normal.color')};
      }

      .ant-select-clear {
        background-color: ${fromProps('normal.background')};
      }

      // error
      &.ant-select-error .ant-select-selector {
        border-color: ${fromProps('error.borderColor')};
      }

      // focused
      &.ant-select-focused .ant-select-selector {
        box-shadow: ${fromProps('focus.boxShadow')};
        background-color: ${fromProps('normal.background')};
      }

      // open
      &.ant-select-open .ant-select-selector {
        box-shadow: ${fromProps('focus.boxShadow')};
        background-color: ${fromProps('normal.background')};
      }

      // hover
      &:hover .ant-select-selector {
        border-color: ${fromProps('hover.borderColor')};
      }
    }

    // disabled
    &.ant-select-disabled {
      .ant-select-selector {
        background-color: ${fromProps('disabled.background')};
        border: 1px solid transparent;

        .ant-select-selection-item {
          color: ${fromProps('disabled.color')};
        }
      }

      .ant-select-selection-placeholder {
        color: ${fromProps('disabled.placeholder.color')};
      }
    }

    .select-chevron {
      color: ${fromProps('disabled.color')};
    }
  }

  .ant-select-selector {
    border-radius: ${BORDER_RADIUS[4]}px !important;

    > .ant-select-selection-placeholder {
      opacity: 1;
      line-height: 20px;
    }

    > .ant-select-selection-item {
      &::first-letter {
        text-transform: capitalize;
      }

      display: flex;
      align-items: center;
    }
  }

  &.ant-select-open .ant-select-arrow {
    transform: rotate(0.5turn);
  }

  > .ant-select-arrow {
    width: 16px;
    height: 16px;
    right: 12px;
    margin-top: 0;
    transform: none;
    top: 8px;
  }

  > .ant-select-clear {
    opacity: 1;
    right: 32px;
    top: 8px;
    bottom: 1px;
    width: 16px;
    height: 16px;
    border-radius: ${BORDER_RADIUS[4]}px;
    margin-top: 0;
  }

  .dropdown-custom { // duplicate for TreeSelect
    background-color: ${fromProps('normal.dropdown.background')};
    border-radius: ${BORDER_RADIUS[2]}px;
    box-shadow: ${fromProps('normal.dropdown.boxShadow')};

    &.dropdown-loading {
      min-height: 64px;
    }
  }

  .ant-select-selection-overflow-item-rest .ant-select-selection-item {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
  }
`

export const DropdownContent = styled.div.withConfig({
  shouldForwardProp: (prop) => !['cssConfig', 'isMultiSelect'].includes(prop)
})<{ cssConfig: SelectCssConfig, isMultiSelect: boolean }>`
  .ant-select-item-option {
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

    &:focus-visible {
      background-color: ${fromProps('hover.option.background')};
      outline: none;
    }
  }

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: ${fromProps('selected.option.background')};
    color: ${fromProps('selected.option.color')};
    font-weight: ${selectTextSizes.fontWeight};
  }

  .ant-select-item-option-active:not(.ant-select-item-option-disabled):not(.ant-select-item-option-selected) {
    &, &:hover {
      background-color: ${fromProps('hover.option.background')};
    }
  }

  .ant-select-item-option-selected {
    color: ${fromProps('hover.option.color')};
    background-color: ${fromProps('selected.option.background')};
  }

  .ant-select-item-option-disabled {
    color: ${fromProps('disabled.option.color')};
  }

  ${props => props.isMultiSelect && `
    .ant-select-item-option-state {
      display: none;
    }
    
    .ant-select-item {
      order: 1;

      &:not([label]) {
        order: 2;
        color: ${fromProps('normal.addButton.color')(props)};

        &:not(.ant-select-item-option-selected) .ant-select-item-option-content:before {
          content: "Add:  ‟";
        }
        
        &.ant-select-item-option-selected .ant-select-item-option-content:before {
          content: "Remove: ‟";
        }

        .ant-select-item-option-content:after {
          content: "”";
        }
      }
    }
    `
  }}
`

export function getSelectGlobalStyles (cssConfig: SelectCssConfig, rootHashClass: string): string {
  return `
  .${rootHashClass} {
    background-color: ${cssConfig.normal.dropdown.background};
    border-radius: ${BORDER_RADIUS[2]}px;
    box-shadow: ${cssConfig.normal.dropdown.boxShadow};
  }
  
  .${rootHashClass}.dropdown-loading {
    min-height: 64px;
  }
  `
}
