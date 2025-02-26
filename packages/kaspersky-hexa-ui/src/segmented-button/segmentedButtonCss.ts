import { SPACES } from '@design-system/theme/themes/variables'
import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { SegmentedButtonCssConfig, SegmentedButtonType } from './types'

const fromProps = getFromProps<SegmentedButtonCssConfig>()

const textSizes = getTextSizes(TextTypes.BTR3)

export const segmentedButtonCss = css<{ type: SegmentedButtonType, isStretch?: boolean }>`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${({ type }: { type: SegmentedButtonType }) => (
    type === 'checkbox'
      ? css`
        gap: 4px;
      `
      : css`
        div:not(:first-child):not(:last-child) {
          &, & label {
            border-radius: 0;
          }
        }
        div:first-child {
          &, & label {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
        }
        div:last-child {
          &, & label {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
        }
        div:not(:last-child):not(.kl6-segmentedButton-item-checked) {
          &, &:hover, &:active, &:focus-visible {
            border-right-color: transparent;
          }
        }
        div:not(:last-child) {
          margin-right: -1px;
        }
      `
  )}

  ${({ isStretch }) => isStretch && css`
    & > div {
      flex-grow: 1;

      label {
        justify-content: center;
      }
    }
  `}
`

export const segmentedButtonItemCss = css<{ type: SegmentedButtonType, cssConfig: SegmentedButtonCssConfig }>`
  display: flex;
  transition: all 0.3s ease;

  &, label {
    border-radius: 8px;
  }

  font-family: ${textSizes.fontFamily};
  font-size: ${textSizes.fontSize};
  line-height: ${textSizes.lineHeight};
  font-weight: ${textSizes.fontWeight};
  font-style: ${textSizes.fontStyle};
  letter-spacing: ${textSizes.letterSpacing};

  background: ${fromProps('unchecked.enabled.background')};
  color: ${fromProps('unchecked.enabled.color')};
  border: 1px solid ${fromProps('unchecked.enabled.border')};

  &:hover {
    background: ${fromProps('unchecked.hover.background')};
  }

  &:active {
    background: ${fromProps('unchecked.active.background')};
  }

  input:focus-visible + label {
    box-shadow: ${fromProps('focus.boxShadow')};
  }

  &.kl6-segmentedButton-item-checked:not(.kl6-segmentedButton-item-disabled) {
    z-index: 1;
    background: ${fromProps('checked.enabled.background')};
    color: ${fromProps('checked.enabled.color')};
    border: 1px solid ${fromProps('checked.enabled.border')};

    &:hover {
      background: ${fromProps('checked.hover.background')};
    }

    &:active {
      background: ${fromProps('checked.active.background')};
    }
  }

  &.kl6-segmentedButton-item-disabled {
    &, &:hover, &:active, &:focus-visible {
      background: ${fromProps('unchecked.enabled.background')};
      color: ${fromProps('unchecked.disabled.color')};
      border: 1px solid ${fromProps('unchecked.disabled.border')};

      &.kl6-segmentedButton-item-checked {
        background: ${fromProps('checked.disabled.background')};
        border-color: transparent;
      }
      label {
        cursor: not-allowed;
      }
    }
  }

  ${({ type }) => type === 'radio' && css`
    &:not(.kl6-segmentedButton-item-disabled) + .kl6-segmentedButton-item-disabled {
      &, &:hover, &:active, &:focus-visible {
        border-left-color: ${fromProps('unchecked.enabled.border')};
      }
    }
  `}

  .kl6-segmentedButton-item-additional {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  input {
    position: absolute;
    opacity: 0;
  }

  label {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: ${SPACES[2]}px;
    width: 100%;
    height: 100%;
    padding: ${fromProps('padding')};
    cursor: pointer;
    transition: all 0.3s ease;
  }
`
