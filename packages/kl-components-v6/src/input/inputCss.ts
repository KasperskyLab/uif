import { css } from 'styled-components'
import { InputCssConfig, ITextboxProps } from './types'
import { getFromProps } from '../../helpers/getFromProps'

const fromProps = getFromProps<InputCssConfig>()

const inputFontStyles = css`
  font-family: ${fromProps('fontFamily')};
  font-size: ${fromProps('fontSize')};
  line-height: ${fromProps('lineHeight')};
  font-weight: ${fromProps('fontWeight')};
  font-style: ${fromProps('fontStyle')};
  letter-spacing: ${fromProps('letterSpacing')};
`

export const inputAddonStyles = css<
  ITextboxProps & { cssConfig: InputCssConfig }
>`
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
          border-color: ${fromProps('normal.outline')};
          border-radius: ${fromProps('borderRadius')};
        }
      `
      : ''
  }}
`

export const inputStyles = css`
  &,
  &.ant-input-affix-wrapper {
    height: ${fromProps('height')};
    padding: ${fromProps('padding')};
    border-radius: ${fromProps('borderRadius')};
    color: ${fromProps('normal.color')};
    background-color: ${fromProps('normal.background')};
    border: 1px solid ${fromProps('normal.outline')};
    outline: unset;
    width: 100%;
  
    &[readonly],
    &.ant-input-number-readonly,
    &.ant-input-affix-wrapper-readonly,
    &[disabled],
    &.ant-input-affix-wrapper-disabled,
    &.ant-input-number-disabled {
      background-color: ${fromProps('disabled.background')};
      color: ${fromProps('disabled.color')};
      border-color: ${fromProps('disabled.outline')};
      svg {
        color: ${fromProps('disabled.color')};
      }
      &:hover {
        border-color: ${fromProps('disabled.outline')};
      }
    }
  
    &[readonly],
    &.ant-input-number-readonly,
    &.ant-input-affix-wrapper-readonly {
      &,
      &.ant-input:focus,
      &.ant-input-focused,
      &.ant-input-number:focus,
      &.ant-input-number-focused,
      & :focus {
        color: ${fromProps('readonly.color')};
        border-color: ${fromProps('readonly.outline')};
        box-shadow: none;
      }
      .ant-input {
        background-color: transparent;
      }
    }
  
    &:hover {
      border: 1px solid ${fromProps('hover.outline')};
    }
  
    &.ant-input:focus,
    &.ant-input-focused,
    &.ant-input-number:focus,
    &.ant-input-number-focused,
    &.ant-input-affix-wrapper-focused:not(.ant-input-affix-wrapper-readonly),
    &:focus {
      border: 1px solid ${fromProps('focus.outline')};
      box-shadow: 0 0 0 2px ${fromProps('focus.outline')};
    }
  
    & .ant-input-group-addon {
      padding: 0;
    }
    & .ant-input-group-wrapper {
      border-radius: ${fromProps('borderRadius')} !important;
    }
  
    &.error,
    &.error {
      &,
      &.ant-input:focus,
      &.ant-input-focused,
      &.ant-input-number:focus,
      &.ant-input-number-focused,
      &:focus {
        border: 1px solid ${fromProps('negative.outline')};
      }
    }
  
    &.positive,
    &.positive {
      &,
      &.ant-input:focus,
      &.ant-input-focused,
      &.ant-input-number:focus,
      &.ant-input-number-focused,
      &:focus {
        border: 1px solid ${fromProps('positive.outline')};
      }
    }
  
    &,
    & input {
      ${inputFontStyles};
    }
  
    &:not([readonly]):not(.ant-input-number-readonly):not(.ant-input-affix-wrapper-readonly):not([disabled]):not(.ant-input-affix-wrapper-disabled):not(.ant-input-number-disabled) {
      &,
      & input {
        background: ${fromProps('normal.background')};
        color: ${fromProps('normal.color')};
        &::placeholder,
        &::-webkit-input-placeholder {
          color: ${fromProps('normal.placeholderColor')};
        }
        &::-ms-input-placeholder {
          color: ${fromProps('normal.placeholderColor')};
        }
      }
    }
  
    & {
      // Fix Autocomplete Styles in WebKit Browsers
      // https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/
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
  
    &.ant-input-password > .ant-input-suffix > span {
      color: ${fromProps('normal.outline')};
      &:hover {
        color: ${fromProps('hover.outline')};
      }
    }
  }
`

export const numberInputStyles = css`
  .ant-input-number-input {
    padding: unset;
    height: unset;
  }

  & .ant-input-number-handler-wrap {
    opacity: 1;
    border: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: ${fromProps('borderRadius')};
    border-bottom-right-radius: ${fromProps('borderRadius')};

    &:hover .ant-input-number-handler {
      height: 50%;
    }
  }

  & .ant-input-number-handler-down {
    border-top: none;
    &:hover {
      height: 50% !important;
    }
  }

  & .ant-input-number-handler-up:hover {
    height: 50% !important;
  }

  .ant-input-number-handler:hover .ant-input-number-handler-up-inner,
  .ant-input-number-handler:hover .ant-input-number-handler-down-inner {
    color: ${fromProps('hover.outline')};
  }

  ${inputStyles}
`
