import { SPACES } from '@design-system/theme'
import { getFromProps } from '@helpers/getFromProps'
import styled from 'styled-components'

import { LinkCssConfig } from './types'

const fromProps = getFromProps<LinkCssConfig>()

export const TextWrapper = styled.span``

export const IconWrapper = styled.span`
  vertical-align: text-top;
`

export const StyledLink = styled.a.withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})<{
  cssConfig: LinkCssConfig
}>`
  text-decoration: none;

  font-family: ${fromProps('fontFamily')};
  font-size: ${fromProps('fontSize')};
  line-height: ${fromProps('lineHeight')};
  font-style: ${fromProps('fontStyle')};
  font-weight: ${fromProps('fontWeight')};
  
  &, &:not(.kl-components-link_visited):visited {
    color: ${fromProps('enabled.color')};

    outline: none;
    border: none;
  }

  &&:focus-visible {
    box-shadow: ${fromProps('focus.boxShadow')};
    outline: none;
    border-radius: ${fromProps('borderRadius')};
  }

  &&:hover {
    color: ${fromProps('hover.color')};
  }

  &&:active {
    color: ${fromProps('active.color')};
  }

  &&.kl-components-link_visited:visited {
    color: ${fromProps('visited.color')};
  }

  &&&.kl-components-link_disabled {
    color: ${fromProps('disabled.color')};
      
    outline: none;
    cursor: default;
  }
  
  & > :not(:first-child) {
    margin-left: ${SPACES[2]}px;
  }
`
