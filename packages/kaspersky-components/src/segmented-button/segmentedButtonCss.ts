import { css } from 'styled-components'
import { getFromProps } from '@helpers/getFromProps'
import { SegmentedButtonCssConfig, SegmentedButtonType } from './types'
import { getTextSizes, TextTypes } from '@design-system/tokens'
import { SPACES } from '@design-system/theme/themes/variables'

const fromProps = getFromProps<SegmentedButtonCssConfig>()

const textSizes = getTextSizes(TextTypes.BTR3)

export const segmentedButtonCss = css<{ type: SegmentedButtonType }>`
  display: flex;
  flex-direction: row;
  
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
`

export const segmentedButtonItemCss = css<{ type: SegmentedButtonType, cssConfig: SegmentedButtonCssConfig }>`
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
  
  background: ${fromProps('unchecked.normal.background')};
  color: ${fromProps('unchecked.normal.color')};
  border: 1px solid ${fromProps('unchecked.normal.border')};
  
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
    background: ${fromProps('checked.normal.background')};
    color: ${fromProps('checked.normal.color')};
    border: 1px solid ${fromProps('checked.normal.border')};
    
    &:hover {
      background: ${fromProps('checked.hover.background')};
    }
  
    &:active {
      background: ${fromProps('checked.active.background')};
    }
  }

  &.kl6-segmentedButton-item-disabled {
    &, &:hover, &:active, &:focus-visible {
      background: ${fromProps('unchecked.normal.background')};
      color: ${fromProps('unchecked.disabled.color')};
      border: 1px solid ${fromProps('unchecked.disabled.border')};

      &.kl6-segmentedButton-item-checked {
        background: ${fromProps('checked.disabled.background')};
        border: none;
      }
      label {
        cursor: not-allowed;
      }
    }
  }
  
  ${({ type }) => type === 'radio' && css`
    &:not(.kl6-segmentedButton-item-disabled) + .kl6-segmentedButton-item-disabled {
      &, &:hover, &:active, &:focus-visible {
        border-left-color: ${fromProps('unchecked.normal.border')};
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
    gap:  ${SPACES[2]}px;
    width: 100%;
    height: 100%;
    padding: ${fromProps('padding')};
    cursor: pointer;
    transition: all 0.3s ease;
  }
`
