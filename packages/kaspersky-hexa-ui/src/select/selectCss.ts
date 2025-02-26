import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { ValidationStatus } from '@helpers/typesHelpers'
import styled, { css } from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { SelectCssConfig } from './types'

const fromProps = getFromProps<SelectCssConfig>()

const selectTextSizes = getTextSizes(textLevels.BTR3)

function encodeForCSS (content: string) {
  return content.replace(/"/g, '\\"').replace(/\n/g, '\\A')
}

export const SelectWrapper = styled.div`
  width: 100%;
`

type SelectCssProps = {
  cssConfig: SelectCssConfig,
  validationStatus: ValidationStatus
}

export const selectCss = css<SelectCssProps>`
  width: 100%;

  .ant-select-selector {
    font-family: ${selectTextSizes.fontFamily};
    font-size: ${selectTextSizes.fontSize};
    line-height: ${selectTextSizes.lineHeight};
    font-weight: ${selectTextSizes.fontWeight};
    font-style: ${selectTextSizes.fontStyle};
    letter-spacing: ${selectTextSizes.letterSpacing};

    .ant-select-selection-overflow {
      gap: 4px;
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
        background-color: ${fromProps('enabled.background')};
      }
    }
  }

  // color states
  &&:not(.ant-select-customize-input) {
    // enabled
    &:not(.ant-select-disabled) {
      .ant-select-selector {
        background-color: ${fromProps('enabled.background')};
        border: 1px solid ${fromProps('enabled.border')};
      }

      .ant-select-selection-search-input {
        color: ${fromProps('enabled.color')};
      }

      .ant-select-selection-item {
        color: ${fromProps('enabled.color')};
        opacity: 1;
      }

      .ant-select-selection-placeholder {
        color: ${fromProps('enabled.placeholder.color')};
      }

      .select-chevron,
      .ant-select-arrow {
        color: ${fromProps('enabled.color')};
      }

      .ant-select-clear {
        background-color: ${fromProps('enabled.background')};
      }

      // validation status
      ${(props) => `
      .ant-select-selector {
        border-color: ${fromProps(`${props.validationStatus}.border`)(props)};
      }`}

      // focused
      &.ant-select-focused .ant-select-selector {
        box-shadow: ${fromProps('focus.boxShadow')};
        background-color: ${fromProps('enabled.background')};
      }

      // open
      &.ant-select-open .ant-select-selector {
        box-shadow: ${fromProps('focus.boxShadow')};
        background-color: ${fromProps('enabled.background')};
      }

      // hover
      &:hover .ant-select-selector {
        border-color: ${fromProps('hover.border')};
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

    &.kl6-select-readonly {
      .ant-select-selector {
        cursor: auto;
        
        .ant-select-selection-item {
          color: ${fromProps('readonly.color')};
        }
        input {
          cursor: auto;
        }
      }

      .ant-select-selection-placeholder {
        color: ${fromProps('readonly.color')};
      }
    }

    .select-chevron {
      color: ${fromProps('disabled.color')};
    }
  }

  .ant-select-selector {
    border-radius: 8px !important;

    > .ant-select-selection-placeholder {
      opacity: 1;
      line-height: 20px;
    }

    > .ant-select-selection-item {
      display: inline-block;
      line-height: 20px;
    }
  }

  &.ant-select-open:not(.select-show-search) .ant-select-arrow {
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
    border-radius: 8px;
    margin-top: 0;
  }

  .dropdown-custom { // duplicate for TreeSelect
    background-color: ${fromProps('enabled.dropdown.background')};
    border-radius: 4px;
    box-shadow: ${fromProps('enabled.dropdown.boxShadow')};

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

type DropdownStylesProps = {
  cssConfig: SelectCssConfig,
  isMultiSelect: boolean,
  t: (key: string) => string
}

const dropdownCss = css<DropdownStylesProps>`
  .ant-select-item-option {
    color: ${fromProps('enabled.option.color')};
    position: relative;
    padding-right: 30px;

    .ant-select-item-option-state {
      color: ${fromProps('enabled.option.color')} !important;
      position: absolute;
      height: 16px;
      width: 16px;
      top: 50%;
      right: 13px;
      transform: translateY(-50%);
    }

    .ant-select-item-option-content {
      display: flex;
      align-items: center;

      .dropdown-v6-multi-checkbox {
        margin-right: 5px;
      }
    }

    .ant-select-item-option-content > span {
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis
    }

    .ant-select-item-option-content .dropdown-v6-multi-checkbox + span {
      max-width: calc(100% - 23px);
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

  .ant-select-item-group {
    padding: 10px 12px 6px 12px;
    color: ${fromProps('enabled.placeholder.color')};
    ${getTextSizes(textLevels.BTM4)}
  }

  ${props => props.isMultiSelect && css`
    .ant-select-item-option-state {
      display: none;
    }
    
    .ant-select-item:not([label]) {
      &:not(.ant-select-item-option-selected) {
        background: ${fromProps('selected.option.background')};
      }
      
      .ant-select-item-option-content {
        &, &:before {
          color: ${fromProps('selected.option.color')};
        }
      }
      
      &:not(.ant-select-item-option-selected) .ant-select-item-option-content:before {
        content: "${encodeForCSS(props.t('select.tags.addPrefix'))}";
      }
      
      &.ant-select-item-option-selected .ant-select-item-option-content:before {
        content: "${encodeForCSS(props.t('select.tags.removePrefix'))}";
      }

      .ant-select-item-option-content:after {
        content: "${encodeForCSS(props.t('select.tags.addRemovePostfix'))}";
      }
    }
  `}
`

export const DropdownContent = styled.div.withConfig({
  shouldForwardProp: (prop) => !['cssConfig', 'isMultiSelect', 't'].includes(prop)
})<DropdownStylesProps>`
  ${dropdownCss}
`

export function getSelectGlobalStyles (cssConfig: SelectCssConfig, rootHashClass: string): string {
  return `
  .${rootHashClass} {
    background-color: ${cssConfig.enabled.dropdown.background};
    border-radius: 4px;
    box-shadow: ${cssConfig.enabled.dropdown.boxShadow};
  }
  
  .${rootHashClass}.dropdown-loading {
    min-height: 64px;
  }
  `
}

export const StyledErrorWrapper = styled.div<{ cssConfig: SelectCssConfig }>`
  display: flex;
  color: ${fromProps('enabled.loadingError.color')};

  > svg {
   margin-top: 2px;
   margin-right: 4px;
  }

  > div {
   flex: 1;
  }
`
