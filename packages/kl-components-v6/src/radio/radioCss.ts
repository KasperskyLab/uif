import { css } from 'styled-components'
import { RadioCssConfig } from './types'
import { getFromProps } from '../../helpers/getFromProps'

const fromProps = getFromProps<RadioCssConfig>()

export const radioCss = css`
  display: flex;
  flex-direction: row;

  & .ant-radio {
    top: inherit;
  }

  &.ant-radio-wrapper-vertical {
    flex-direction: column;
    gap: 8px;
  }

  // normal
  & .ant-radio-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;

    font-family: ${fromProps('fontFamily')};
    font-size: ${fromProps('fontSize')};
    line-height: ${fromProps('lineHeight')};
    font-weight: ${fromProps('fontWeight')};
    font-style: ${fromProps('fontStyle')};
    letter-spacing: ${fromProps('letterSpacing')};
    color: ${fromProps('normal.color')};
    white-space: unset;

    & > span + span {
      padding: 0 9px;
    }
  }

  & .ant-radio-inner {
    width: 14px;
    height: 14px;
    background-color: ${fromProps('normal.bgColor')};
    border-color: ${fromProps('normal.borderColor')};
  }

  .ant-radio-inner::after {
    transform: translate(-50%, -50%);
    margin: 0;
    width: 10px;
    height: 10px;
    transition: opacity 0.1s ease-in-out !important;
    top: 50%;
    left: 50%;
  }

  & .ant-radio-checked .ant-radio-inner::after {
    background-color: ${fromProps('normal.dotColor')};
  }

  // hover
  & .ant-radio-wrapper:hover .ant-radio .ant-radio-inner,
  & .ant-radio-input:hover + .ant-radio-inner {
    border-color: ${fromProps('hover.borderColor')};
    background-color: ${fromProps('hover.bgColor')};
  }

  & .ant-radio-wrapper:hover .ant-radio-checked .ant-radio-inner,
  & .ant-radio-checked .ant-radio-input:hover + .ant-radio-inner {
    background-color: ${fromProps('hover.bgColor')};
  }

  & .ant-radio-wrapper:hover .ant-radio-checked .ant-radio-inner:after {
    background-color: ${fromProps('hover.dotColor')};
  }

  // pressed
  & .ant-radio-input:active + .ant-radio-inner,
  & .ant-radio-input:hover:active + .ant-radio-inner,
  & .ant-radio-wrapper:hover:active .ant-radio-input + .ant-radio-inner {
    background-color: ${fromProps('active.bgColor')};
    border-color: ${fromProps('active.borderColor')};

    &::after {
      background-color: ${fromProps('active.dotColor')};
    }
  }
  //focus
  & .ant-radio-input:focus + .ant-radio-inner {
    border-color: ${fromProps('normal.borderColor')};
    box-shadow: none;
  }

  &
    .ant-radio-wrapper:hover
    .ant-radio
    .ant-radio-input:focus-visible
    + .ant-radio-inner,
  & .ant-radio:hover .ant-radio-input:focus-visible + .ant-radio-inner,
  & .ant-radio-input:focus-visible + .ant-radio-inner {
    border-color: ${fromProps('focus.borderColor')};
    box-shadow: ${fromProps('focus.outline')};
    &::after {
      background-color: ${fromProps('focus.dotColor')};
    }
  }
  //disabled
  & .ant-radio-disabled .ant-radio-inner {
    background-color: ${fromProps('disabled.bgColor')} !important;
    border: 1px solid transparent !important;
    &::after {
      background-color: ${fromProps('disabled.dotColor')} !important;
    }
  }
  & .ant-radio-disabled + span {
    color: ${fromProps('normal.color')};
  }

  & .ant-radio-button-wrapper {
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
`
