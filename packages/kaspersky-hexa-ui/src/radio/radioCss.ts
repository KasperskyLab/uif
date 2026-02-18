import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { RadioCssConfig } from './types'

const fromRadioProps = getFromProps<RadioCssConfig>()

export const getInternalRadioCss = (fromProps: any) => css`
  // enabled
  .ant-radio-wrapper {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 4px;
    padding: 0;
    margin: 0;

    color: ${fromProps('enabled.color')};
    white-space: unset;

    & > span + span {
      padding: 0 0 0 4px;
    }
  }
  
  // dot
  .ant-radio-inner {
    width: calc(14px);
    height: calc(14px);
    background-color: ${fromProps('enabled.background')};
    border-color: ${fromProps('enabled.border')};

    &::after {
      transform: scale(calc(0.5));
      width: calc(16px);
      height: calc(16px);
      margin-top: calc(-8px);
      margin-left: calc(-8px);
      transition: opacity 0.1s ease-in-out !important;
      left: 50%;
      top: 50%;
      background-color: ${fromProps('enabled.dotColor')};
    }
  }
  
  .ant-radio-checked .ant-radio-inner::after {
    background-color: ${fromProps('enabled.dotColor')};
  }

  .ant-radio-checked::after {
    display: none;
  }
  
  // hover
  .ant-radio-wrapper:hover {
    .ant-radio-inner {
      border-color: ${fromProps('hover.border')};
      background-color: ${fromProps('hover.background')};
      
      &::after {
        background-color: ${fromProps('hover.dotColor')};
      }
    }
  }

  // active
  .ant-radio-wrapper:active, .ant-radio-wrapper:hover:active {
    .ant-radio-inner {
      border-color: ${fromProps('active.border')};
      background-color: ${fromProps('active.background')};

      &::after {
        background-color: ${fromProps('active.dotColor')};
      }
    }
  }
  
  // focus
  && .ant-radio-input:focus + .ant-radio-inner {
    border-color: ${fromProps('enabled.border')};
    outline: none;
    box-shadow: none;
  }
  && .ant-radio-input:focus-visible + .ant-radio-inner {
    border-color: ${fromProps('enabled.border')};
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
          border-color: ${fromProps('disabled.border')} !important;
          background-color: ${fromProps('disabled.background')};

          &::after {
            background-color: ${fromProps('disabled.dotColor')};
          }
        }
      }
    }
  }
`

export const getRadioCss = (fromProps: any) => css`
  display: flex;
  flex-direction: row;
  gap: 12px;

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
          border-color: ${fromProps('readonly.border')} !important;
          background-color: ${fromProps('readonly.background')};

          &::after {
            background-color: ${fromProps('readonly.dotColor')};
          }
        }
      }
    }
  }

  // invalid
  &.kl-radio-invalid .ant-radio-wrapper:not(.ant-radio-wrapper-disabled) {
    &, &:hover, &:active, &:focus {
      .ant-radio-inner {
        border-color: ${fromProps('invalid.border')};

        &::after {
          background-color: ${fromProps('invalid.dotColor')};
        }
      }
      .ant-radio-inner {
        background-color: ${fromProps('enabled.background')};
      }
    }
  }
  
  ${getInternalRadioCss(fromRadioProps)}
`

export const radioCss = getRadioCss(fromRadioProps)
