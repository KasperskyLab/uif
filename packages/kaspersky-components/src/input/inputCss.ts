import { css } from 'styled-components'
import { InputCssConfig, TextboxViewProps } from './types'
import { getFromProps } from '@helpers/getFromProps'
import { getTextSizes, MonoTextTypes, TextSizes } from '@design-system/tokens'

const fromProps = getFromProps<InputCssConfig>()

export const inputAddonStyles = css<TextboxViewProps>`
  ${({ addonAfter }) => {
    return addonAfter
      ? `
          & .ant-input,
          & .ant-input-affix-wrapper {
            border-right: none;
            max-height: ${fromProps('height')};
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
          height: ${fromProps('height')};
          background-color: ${fromProps('normal.background')};
          border-radius: ${fromProps('borderRadius')};
        }
      
        & .ant-input {
          border-color: ${fromProps('normal.borderColor')};
          border-radius: ${fromProps('borderRadius')};
        }
      `
      : ''
  }}
`

export const inputStyles = css`
  &&& {
    height: ${fromProps('height')};
    padding: ${fromProps('padding')};
    outline: unset;
    width: 100%;

    // font styles
    &, & input {
      font-family: ${fromProps('fontFamily')};
      font-size: ${fromProps('fontSize')};
      line-height: ${fromProps('lineHeight')};
      font-weight: ${fromProps('fontWeight')};
      font-style: ${fromProps('fontStyle')};
      letter-spacing: ${fromProps('letterSpacing')};
      color: ${fromProps('normal.color')};
      background-color: ${fromProps('normal.background')};

      ::placeholder {
        color: ${fromProps('normal.placeholderColor')};
      }
    }

    // normal
    border-radius: ${fromProps('borderRadius')};
    background-color: ${fromProps('normal.background')};
    border: 1px solid ${fromProps('normal.borderColor')};
    box-shadow: unset;

    // hover
    &:hover {
      border-color: ${fromProps('hover.borderColor')};
    }

    // active & focus
    &:focus-within {
      box-shadow: ${fromProps('focus.boxShadow')};
      border-color: ${fromProps('normal.borderColor')};
    }

    // invalid & valid
    &:not(.kl-disabled):not(.kl-readonly) {
      &, &:hover, &:active, &:focus-within {
        &.invalid {
          box-shadow: none;
          border-color: ${fromProps('invalid.borderColor')};
        }

        &.valid {
          box-shadow: none;
          border-color: ${fromProps('valid.borderColor')};
        }
      }
    }

    // disabled & readonly
    &.kl6-textbox-disabled, &.kl6-textbox-readonly {
      background-color: ${fromProps('disabled.background')};
      color: ${fromProps('disabled.color')};
      border-color: ${fromProps('disabled.borderColor')};

      &:hover {
        border-color: ${fromProps('disabled.borderColor')};
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
      border-radius: ${fromProps('borderRadius')} !important;
    }

    // Fix Autocomplete Styles in WebKit Browsers
    // https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/
    & {
      --autofill-color: ${fromProps('normal.color')};
      --autifill-bg-color: ${fromProps('normal.background')};

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
  && input, && input::placeholder {
    font-family: ${inputPasswordFont.fontFamily};
    font-size: ${inputPasswordFont.fontSize};
    line-height: ${inputPasswordFont.lineHeight};
    font-weight: ${inputPasswordFont.fontWeight};
    font-style: ${inputPasswordFont.fontStyle};
    letter-spacing: ${inputPasswordFont.letterSpacing};
  }
  && input {
    color: ${fromProps('normal.color')};
  }
  svg {
    color: ${fromProps('normal.color')};
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
      color: ${fromProps('normal.color')};
      
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

export const inputTextareaContainerStyles = css`
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
    background-color: ${fromProps('normal.background')};
  }
`
