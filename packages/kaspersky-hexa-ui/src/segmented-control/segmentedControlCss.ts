import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { SegmentedControlCssConfig } from './types'

const fromProps = getFromProps<SegmentedControlCssConfig>()

export const segmentedControlCss = css<{ cssConfig: SegmentedControlCssConfig }>`
  display: flex;
  border-radius: ${fromProps('radius')};
  background-color: ${fromProps('bar.background')};
  margin-bottom: 10px;
  width: max-content;
  
  .kl6-segmented-control-button,
  .kl6-segmented-control-expander {
    &:before {
      display: block;
      content: '';
      position: absolute;
      left: 0;
      width: 1px;
      height: 16px;
      background-color: ${fromProps('bar.dividerColor')};
    }
  }

  .active + .kl6-segmented-control-button,
  .active + .kl6-segmented-control-expander {
    &:before {
      display: none;
    }
  }
  
  .kl6-segmented-control-button {
    height: ${fromProps('height')};
    background-color: transparent;
    color: ${fromProps('button.enabled.color')};
    border-radius: ${fromProps('radius')};
    border: none;
    cursor: pointer;
    padding: ${fromProps('padding')};
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;

    font-family: ${fromProps('fontFamily')};
    font-size: ${fromProps('fontSize')};
    line-height: ${fromProps('lineHeight')};
    font-weight: ${fromProps('fontWeight')};
    font-style: ${fromProps('fontStyle')};
    letter-spacing: ${fromProps('letterSpacing')};
  
    &:first-child,
    &:focus-visible,
    &.active {
      &:before {
        display: none;
      }
    }
  
    &:hover:not(.active) {
      color: ${fromProps('button.hover.color')};
    }
  
    &:focus,
    &:focus-visible {
      z-index: 1;
    }
  
    &:focus-visible {
      outline: 2px solid ${fromProps('button.focus.boxShadow')};
    }
  
    &.active {
      background-color: ${fromProps('button.active.background')};
      box-shadow: inset 0 0 0 1px ${fromProps('button.active.border')};
    }
  }
  
  .kl6-segmented-control-expander {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    position: relative;
  }
  
  span {
    translate: none;
  }
`
