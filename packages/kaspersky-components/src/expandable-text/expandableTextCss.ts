import { css } from 'styled-components'
import { ExpandableTextCssConfig, StyledTextProps } from './types'
import { BORDER_RADIUS } from '@design-system/theme/themes/variables'
import { getFromProps } from '@helpers/getFromProps'

const fromExpandableTextProps = getFromProps<ExpandableTextCssConfig>()

export const expandableTextCss = css<StyledTextProps>`
  word-break: break-all;
  padding: 2px 20px 2px 2px;
  position: relative;
  display: block;
  
  &:focus-visible {
    box-shadow: ${fromExpandableTextProps('focus.boxShadow')};  
    border-radius: ${BORDER_RADIUS[2]}px;
    outline: none;
  }
  
  & .text-expander {
    transform: ${props => props.expanded ? 'rotate(180deg)' : ''};
    visibility: ${props => props.clipped ? '' : 'hidden'};
    position: absolute;
    top: 0;
    right: 0;
  }

  ${({ expanded }) => (
    !expanded && css`
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: normal;
      overflow: hidden;
      max-width: 100%;
      transition: all ease 50ms;
      display: block;

      kl-auto-link > div {
        display: inline;
      }
    `
  )}
`
