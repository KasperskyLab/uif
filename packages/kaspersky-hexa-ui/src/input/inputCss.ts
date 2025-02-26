import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { validationStatuses } from '@helpers/typesHelpers'
import { css } from 'styled-components'

import { MonoTextTypes, TextSizes, TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { InputCssConfig, InputSizeConfig, TextboxViewProps } from './types'

const inputSize: InputSizeConfig = {
  padding: '6px 12px',
  height: '32px',
  borderRadius: '8px'
}

const fromProps = getFromProps<InputCssConfig>()

export const inputAddonStyles = css<TextboxViewProps>`
  ${({ addonAfter }) => {
    return addonAfter
      ? `
          & .ant-input,
          & .ant-input-affix-wrapper {
            border-right: none;
            max-height: ${inputSize.height};
          }
        `
      : ''
  }}

  ${({ addonBefore }) => {
    return addonBefore
      ? `
          & .ant-input,
          & .ant-input-affix-wrapper {
            border-left: none;
          }
        `
      : ''
  }}

  ${({ addonAfter, addonBefore }) => {
    return addonBefore || addonAfter
      ? `
        padding: 0;
        border: none !important;
        
        & .ant-input-affix-wrapper {
          height: ${inputSize.height};
          background-color: ${fromProps('enabled.background')};
          border-radius: ${inputSize.borderRadius};
        }
      
        & .ant-input {
          border-color: ${fromProps('enabled.border')};
          border-radius: ${inputSize.borderRadius};
        }
      `
      : ''
  }}
`

const inputFont: TextSizes = getTextSizes(TextTypes.BTR3)
export const inputStyles = css`
  &&& {
    height: ${inputSize.height};
    padding: ${inputSize.padding};
    outline: unset;
    width: 100%;

    // font styles
    &, & input {
      font-family: ${inputFont.fontFamily};
      font-size: ${inputFont.fontSize};
      line-height: ${inputFont.lineHeight};
      font-weight: ${inputFont.fontWeight};
      font-style: ${inputFont.fontStyle};
      letter-spacing: ${inputFont.letterSpacing};
      color: ${fromProps('enabled.color')};
      background-color: ${fromProps('enabled.background')};

      ::placeholder {
        color: ${fromProps('enabled.placeholderColor')};
      }
    }

    // normal
    border-radius: ${inputSize.borderRadius};
    background-color: ${fromProps('enabled.background')};
    border: 1px solid ${fromProps('enabled.border')};
    box-shadow: unset;

    // hover
    &:hover {
      border-color: ${fromProps('hover.border')};
    }

    // active & focus
    &:focus-within {
      box-shadow: ${fromProps('focus.boxShadow')};
      border-color: ${fromProps('enabled.border')};
    }

    // validation status
    &:not(.kl-disabled):not(.kl-readonly) {
      &, &:hover, &:active, &:focus-within {
        ${(props) => validationStatuses.map((status) => `
          &.${status} {
            box-shadow: none;
            border-color: ${fromProps(`${status}.border`)(props)};
          }
        `)}
      }
    }

    // disabled & readonly
    &.kl6-textbox-disabled, &.kl6-textbox-readonly {
      background-color: ${fromProps('disabled.background')};
      color: ${fromProps('disabled.color')};
      border: 1px solid transparent;

      &:hover {
        border-color: ${fromProps('disabled.border')};
      }

      svg {
        color: ${fromProps('disabled.color')};
      }

      &, & input {
        color: ${fromProps('disabled.color')};

        ::placeholder {
          color: ${fromProps('disabled.color')};
        }
      }

      & input {
        background-color: transparent;
      }
    }

    &.kl6-textbox-readonly {
      color: ${fromProps('readonly.color')};

      &:focus-within {
        box-shadow: none;
      }

      &, & input {
        color: ${fromProps('readonly.color')};

        &::placeholder {
          color: ${fromProps('readonly.color')};
        }
      }
    }

    // other
    & .ant-input-group-addon {
      padding: 0;
    }

    & .ant-input-group-wrapper {
      border-radius: ${inputSize.borderRadius} !important;
    }

    // Fix Autocomplete Styles in WebKit Browsers
    // https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/
    & {
      --autofill-color: ${fromProps('enabled.color')};
      --autifill-bg-color: ${fromProps('enabled.background')};

      [readonly],
      :disabled {
        --autofill-color: ${fromProps('disabled.color')};
        --autifill-bg-color: ${fromProps('disabled.background')};
      }

      :-webkit-autofill,
      :-webkit-autofill:hover,
      :-webkit-autofill:focus {
        -webkit-text-fill-color: var(--autofill-color);
        caret-color: var(--autofill-color);

        -webkit-box-shadow: 0 0 0 1000px var(--autifill-bg-color) inset !important;
        box-shadow: 0 0 0 1000px var(--autifill-bg-color) inset !important;
        transition: background-color 5000s ease-in-out 0s;
      }
    }
  }
`

const inputPasswordFont: TextSizes = getTextSizes(MonoTextTypes.MTR3)
export const inputPasswordStyles = css`
  &&& input, &&& input::placeholder {
    font-family: ${inputPasswordFont.fontFamily};
    font-size: ${inputPasswordFont.fontSize};
    line-height: ${inputPasswordFont.lineHeight};
    font-weight: ${inputPasswordFont.fontWeight};
    font-style: ${inputPasswordFont.fontStyle};
    letter-spacing: ${inputPasswordFont.letterSpacing};
  }
  svg {
    color: ${fromProps('enabled.color')};
  }
  &.kl-disabled .ant-input-password-icon {
    cursor: not-allowed !important;
  }
`

export const inputNumberStyles = css`
  .ant-input-number-input {
    padding: unset;
    height: unset;
  }
  
  .ant-input-number-handler-wrap {
    opacity: 1;
    display: block;
    background: transparent;
    margin-right: 12px;
    width: max-content;
    border: none;
    
    &:hover {
      .ant-input-number-handler {
        height: 50% !important;
      }
    }
    
    .ant-input-number-handler {
      border: none;
      color: ${fromProps('enabled.color')};
      
      &:active {
        background: transparent;
      }
    }
  }
  
  &.kl-disabled, &.kl-readonly {
    .ant-input-number-handler {
      cursor: not-allowed;
      color: ${fromProps('disabled.color')};
    }
  } 
`

export const inputTextareaStyles = css`
  border: none;
  padding: 0;
  :focus {
    box-shadow: none;
  }
`

export const inputTextareaContainerStyles = css<{cssConfig: InputCssConfig, disabled?: boolean}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  textarea {
    padding: 6px 12px;
  }

  &.kl6-textbox-textarea-has-counter {
    textarea {
      padding-bottom: 26px; 
    }
  }

  .kl6-textbox-textarea-counter {
    width: calc(100% - 20px);
    position: absolute;
    bottom: 1px;
    left: 1px;
    border-radius: 8px;
    padding-top: 4px;
    padding-bottom: 5px;
    padding-left: 11px;
    transition: background-color 0.3s;
    background-color: ${fromProps('enabled.background')};
  }

  &[disabled] .kl6-textbox-textarea-counter {
    background-color: ${fromProps('disabled.background')};
  }
`
