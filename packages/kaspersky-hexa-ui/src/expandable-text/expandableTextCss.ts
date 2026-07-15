import { BORDER_RADIUS } from '@design-system/theme/themes/variables'
import { getFromProps } from '@helpers/getFromProps'
import { ActionButton } from '@src/action-button'
import styled, { css } from 'styled-components'

import { ExpandableTextCssConfig, StyledTextProps } from './types'

export const StyledTextExpander = styled(ActionButton)``

const fromExpandableTextProps = getFromProps<ExpandableTextCssConfig>()

export const expandableTextCss = css<StyledTextProps>`
  word-break: break-all;
  padding: 0;
  position: relative;
  display: block;

  .hexa-ui-expander { 
    z-index: 2; 
  }

  &.expandable-text-clipped {
    padding-inline-end: 20px;

    .hexa-ui-expander {
      visibility: visible;
    }
  }

  &.expandable-text-expanded {
    overflow: visible;
    white-space: normal;

    .hexa-ui-expander {
      transform: rotate(180deg);
    }
  }

  &:not(.expandable-text-expanded) {
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    max-width: 100%;
    transition: all ease 50ms;
    display: block;

    kl-auto-link > div {
      display: inline;
    }
  }

  .inner-text-wrapper {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:focus-visible {
    box-shadow: ${fromExpandableTextProps('focus.boxShadow')};  
    border-radius: var(--radius--xs);
    outline: none;
  }
  
  ${StyledTextExpander} {
    position: absolute;
    top: 4px;
    right: 0;
    visibility: hidden;
  }

  .kl6-field,
  .kl6-field-control-wrapper,
  .kl6-field-control-box {
    min-width: 0;
    max-width: 100%;
  }

  .kl6-link,
  .kl6-link > span {
    white-space: inherit;
    word-break: inherit;
  }
`

export const expandableGradientCss = css<StyledTextProps>`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0 0 0 auto;
    width: 80px;
    z-index: 1;
    pointer-events: none;
    background-color: var(--bg--neutral--level_0);
    mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, #000 75%);
    transition: background-color 0.3s;
    overflow: hidden;
    text-overflow: clip;
  }

  &[data-hide]::after {
    display: none;
  }

  .inner-text-wrapper {
    text-overflow: clip;
  }
`
