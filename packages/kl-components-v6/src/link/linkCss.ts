import { css } from 'styled-components'
import { getFromProps } from '../../helpers/getFromProps'
import { LinkCssConfig } from './types'

const fromProps = getFromProps<LinkCssConfig>()

const getDashedStyle = (color: Parameters<typeof fromProps>[0]) => css`
  ${(props: { cssConfig: LinkCssConfig, decoration?: boolean }) => props.decoration
    ? `border-bottom: 1px solid ${fromProps(color)(props)}`
    : ''}
`

export const linkCss = css`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: ${fromProps('gap')};

  .kl-components-link-text {
    font-family: ${fromProps('fontFamily')};
    ${getDashedStyle('normal.color')};
  }
      
  .kl-components-link-text, .kl-components-link-icon svg {
    color: ${fromProps('focus.color')};
  }
  
  text-decoration: none;
  
  &:focus {
    .kl-components-link-text {
      ${getDashedStyle('focus.color')};
    }

    .kl-components-link-text, .kl-components-link-icon svg {
      color: ${fromProps('focus.color')};
    }

    outline: ${fromProps('outlineWidth')} solid ${fromProps('focusOutline.color')};
    border-radius: ${fromProps('borderRadius')};
  }

  &:hover {
    .kl-components-link-text {
      ${getDashedStyle('hover.color')}
    }
      
    .kl-components-link-text, .kl-components-link-icon svg {
      color: ${fromProps('hover.color')};
    }
  }

  &:active {
    .kl-components-link-text {
      ${getDashedStyle('active.color')};
    }
      
    .kl-components-link-text, .kl-components-link-icon svg {
      color: ${fromProps('active.color')};
    }
  }

  &.kl-components-link_disabled {
    .kl-components-link-text {
      ${getDashedStyle('disabled.color')};
    }
      
    .kl-components-link-text, .kl-components-link-icon svg {
      color: ${fromProps('disabled.color')};
    }
    
    outline: none;
    cursor: default;
  }

  .kl-components-link-icon {
    & > span {
      cursor: pointer !important;
    }

    display: flex;
    align-items: center;
  }
`
