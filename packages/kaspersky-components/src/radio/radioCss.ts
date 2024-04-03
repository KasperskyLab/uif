import { css } from 'styled-components'
import { RadioCssConfig } from './types'
import { getFromProps } from '@helpers/getFromProps'

const fromRadioProps = getFromProps<RadioCssConfig>()

export const getRadioCss = (fromProps: any) => css`
  // delete :not(...) condition during deleting deprecated
  &:not(.kl-radio-button-group) {
    display: flex;
    flex-direction: row;
    gap: 12px;

    & .radio-string-label {
      height: 20px;

      .ant-radio + span {
        height: 20px;
        line-height: 20px;
      }
    }

    .ant-radio {
      display: flex;
      top: inherit;
      height: 20px;
      align-items: center;
    }

    &.ant-radio-vertical {
      flex-direction: column;
      gap: 8px;
    } 
  }
  
  // normal
  .ant-radio-wrapper {
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 0;
    margin: 0;

    color: ${fromProps('normal.color')};
    white-space: unset;

    & > span + span {
      padding: 0 0 0 4px;
    }
  }
  
  // dot
  .ant-radio-inner {
    width: calc(14px);
    height: calc(14px);
    background-color: ${fromProps('normal.bgColor')};
    border-color: ${fromProps('normal.borderColor')};

    &::after {
      transform: scale(calc(0.5));
      width: calc(16px);
      height: calc(16px);
      margin-top: calc(-8px);
      //margin-top: calc(-7.085px);
      margin-left: calc(-8px);
      transition: opacity 0.1s ease-in-out !important;
      left: 50%;
      top: 50%;
      background-color: ${fromProps('normal.dotColor')};
    }
  }
  
  .ant-radio-checked .ant-radio-inner::after {
    background-color: ${fromProps('normal.dotColor')};
  }

  .ant-radio-checked::after {
    display: none;
  }
  
  // hover
  .ant-radio-wrapper:hover {
    .ant-radio-inner {
      border-color: ${fromProps('hover.borderColor')};
      background-color: ${fromProps('hover.bgColor')};
      
      &::after {
        background-color: ${fromProps('hover.dotColor')};
      }
    }
  }
  
  // pressed
  .ant-radio-wrapper:active, .ant-radio-wrapper:hover:active {
    .ant-radio-inner {
      border-color: ${fromProps('active.borderColor')};
      background-color: ${fromProps('active.bgColor')};

      &::after {
        background-color: ${fromProps('active.dotColor')};
      }
    }
  }
  
  // focus
  && .ant-radio-input:focus + .ant-radio-inner {
    border-color: ${fromProps('normal.borderColor')};
    outline: none;
    box-shadow: none;
  }
  && .ant-radio-input:focus-visible + .ant-radio-inner {
    border-color: ${fromProps('normal.borderColor')};
    outline: none;
    box-shadow: ${fromProps('focus.boxShadow')};
  }
  
  // disabled
  .ant-radio-wrapper {
    &, &:hover, &:active, &:focus {
      &.ant-radio-wrapper-disabled {
        span {
          color: ${fromProps('disabled.color')}
        }
        .ant-radio-inner {
          border-color: ${fromProps('disabled.borderColor')} !important;
          background-color: ${fromProps('disabled.bgColor')};

          &::after {
            background-color: ${fromProps('disabled.dotColor')};
          }
        }
      }
    }
  }

  // readonly
  .kl-radio-readonly.ant-radio-wrapper {
    &, &:hover, &:active, &:focus {
      &.ant-radio-wrapper-disabled {
        &, * {
          cursor: default;
        }
        span {
          color: ${fromProps('readonly.color')}
        }
        .ant-radio-inner {
          border-color: ${fromProps('readonly.borderColor')} !important;
          background-color: ${fromProps('readonly.bgColor')};

          &::after {
            background-color: ${fromProps('readonly.dotColor')};
          }
        }
      }
    }
  }

  // invalid
  &.kl-radio-invalid > .ant-radio-wrapper:not(.ant-radio-wrapper-disabled) {
    .ant-radio-inner {
      border-color: ${fromProps('invalid.borderColor')};

      &::after {
        background-color: ${fromProps('invalid.dotColor')};
      }
    }
    .ant-radio-input:active + .ant-radio-inner {
      background-color: ${fromProps('normal.bgColor')};
    }
  }
  
  /** @deprecated */
  &.kl-radio-button-group {
    display: flex;
    flex-direction: row;
    
    .ant-radio-button-wrapper {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;

      background-color: ${fromProps('normal.background')};
      color: ${fromProps('normal.color')};
      border-color: ${fromProps('normal.border')};

      font-family: ${fromProps('fontFamily')};
      font-size: ${fromProps('fontSize')};
      line-height: ${fromProps('lineHeight')};
      font-weight: ${fromProps('fontWeight')};
      font-style: ${fromProps('fontStyle')};
      letter-spacing: ${fromProps('letterSpacing')};

      &.ant-radio-button-wrapper:first-child {
        border-radius: 7px 0 0 7px;
      }

      &.ant-radio-button-wrapper:last-child {
        border-radius: 0 7px 7px 0;
      }

      &.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
        background-color: ${fromProps('active.background')};
        border-color: ${fromProps('active.border')};
        color: ${fromProps('active.color')};

        &:before {
          background-color: ${fromProps('active.border')};
        }
      }

      &.ant-radio-button-wrapper-disabled {
        background-color: ${fromProps('disabled.background')};
        border-color: ${fromProps('disabled.border')};
        color: ${fromProps('disabled.color')};

        &:before {
          background-color: ${fromProps('disabled.border')};
        }
      }

      &:focus-within {
        box-shadow: unset;
      }
    }
  }
`

export const radioCss = getRadioCss(fromRadioProps)
