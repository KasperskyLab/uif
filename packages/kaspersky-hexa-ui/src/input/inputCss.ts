import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { validationStatuses } from '@helpers/typesHelpers'
import { css } from 'styled-components'

import { MonoTextTypes, TextSizes, TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { InputCssConfig, InputSizeConfig } from './types'

export const inputPaddingTop = 6

const inputSize: InputSizeConfig = {
  padding: `${inputPaddingTop}px 12px`,
  height: '32px',
  borderRadius: '8px'
}

const fromProps = getFromProps<InputCssConfig>()

const fontStyles = (font: TextSizes) => css`
  font-family: ${font.fontFamily};
  font-size: ${font.fontSize};
  line-height: ${font.lineHeight};
  font-weight: ${font.fontWeight};
  font-style: ${font.fontStyle};
  letter-spacing: ${font.letterSpacing};
`

const inputFont: TextSizes = getTextSizes(TextTypes.BTR3)

export const inputTextLineHeigt: number = +inputFont.lineHeight.slice(0, -2)

export const inputInnerStyles = css`
    height: ${inputSize.height};
    padding: ${inputSize.padding};
    outline: unset;
    width: 100%;

    // font styles
    &, & input {
      ${fontStyles(inputFont)}
      color: ${fromProps('enabled.color')};
      background-color: var(--bg--neutral--level_0);

      ::placeholder {
        color: ${fromProps('enabled.placeholderColor')};
      }
    }

    // normal
    border-radius: ${inputSize.borderRadius};
    background-color: var(--bg--neutral--level_0);
    border: 1px solid ${fromProps('enabled.border')};
    box-shadow: unset;

    // hover
    &:hover {
      border-color: ${fromProps('hover.border')};
    }

    // active & focus
    &:focus-visible,
    &:not(input):has(:focus-visible) {
      box-shadow: ${fromProps('focus.boxShadow')};
      border-color: ${fromProps('enabled.border')};
    }

    &:not(.kl6-textbox-disabled):not(.kl6-textbox-readonly) {
      &, &:hover, &:active {
        &:is(input, textarea):not(:focus-visible),
        &:not(input):not(:has(:focus-visible)) {
          ${props => validationStatuses.map(status => status !== 'default' && `
            &.${status} {
              border-color: ${fromProps(`${status}.border`)(props)};
            }
          `).filter(Boolean)}
        }
      }
    }

    // disabled & readonly
    &.kl6-textbox-disabled, &.kl6-textbox-readonly {
      background-color: var(--bg--neutral--level_2);
      color: ${fromProps('disabled.color')};
      border: 1px solid ${fromProps('disabled.border')};

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
      --autifill-bg-color: var(--bg--neutral--level_0);

      [readonly],
      :disabled {
        --autofill-color: ${fromProps('disabled.color')};
        --autifill-bg-color: var(--bg--neutral--level_2);
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
`

export const inputStyles = css`
  &&& {
    ${inputInnerStyles}
  }
`

const inputPasswordFont: TextSizes = getTextSizes(MonoTextTypes.MTR3)
export const inputPasswordStyles = css`
  &&& input {
    ${fontStyles(inputPasswordFont)}

    ::placeholder {
      ${fontStyles(inputFont)}
    }
  }
  svg {
    color: ${fromProps('enabled.color')};
  }
  &.kl6-textbox-disabled .ant-input-password-icon {
    cursor: not-allowed !important;
  }
`

export const inputNumberStyles = css`
  .ant-input-number-input {
    padding: unset;
    height: unset;
  }
  
  .ant-input-number-input-wrap {
    padding-right: 16px;
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
  
  &.kl6-textbox-disabled, &.kl6-textbox-readonly {
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

export const inputTextareaContainerStyles = css<{ cssConfig: InputCssConfig, disabled?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  border-radius: ${inputSize.borderRadius};
  border: 1px solid ${fromProps('enabled.border')};
  overflow: hidden;
  transition: all 0.3s, height 0s;

  && textarea.ant-input {
    padding: 6px 12px;
    border: none;
  }

  &&&.kl6-textbox-textarea-has-counter:not([disabled]):not(:has(textarea[readonly])) {
    textarea {
      padding-bottom: ${inputTextLineHeigt + inputPaddingTop}px; 
    }
  }

  .kl6-textbox-textarea-counter {
    width: calc(100% - 17px);
    position: absolute;
    bottom: 1px;
    left: 1px;
    border-radius: 0 0 0 8px;
    padding-top: 4px;
    padding-bottom: 5px;
    padding-left: 11px;
    transition: background-color 0.3s;
    background-color: var(--bg--neutral--level_0);
  }

  &[disabled] .kl6-textbox-textarea-counter,
  &:has(textarea[readonly]) .kl6-textbox-textarea-counter {
    display:none;
  }

  // hover
  &:hover {
    border-color: ${fromProps('hover.border')};
  }
  
  // active & focus
  &:focus-visible,
  &:has(textarea:focus-visible) {
    box-shadow: ${fromProps('focus.boxShadow')};
    border-color: ${fromProps('enabled.border')};
  }
`
