import { css } from 'styled-components'
import { AnchorCssConfig, AnchorLinkCssConfig } from './types'
import { getFromProps } from '../../helpers/getFromProps'

const fromProps = getFromProps<AnchorCssConfig>()
const fromLinkProps = getFromProps<AnchorLinkCssConfig>()

export const anchorLinksCss = css`
&.ant-anchor-link {
  padding: ${fromLinkProps('links.padding')};
  
  .ant-anchor-link-title {
    color: ${fromLinkProps('normal.color')};
    font-size: ${fromLinkProps('links.fontSize')};
    
    &:hover {
      color: ${fromLinkProps('normal.hover.color')};
    }
  }
  
  &-active {
    background: ${fromLinkProps('active.background')};
    border-radius: ${fromLinkProps('links.borderRadius')};
    box-shadow: 0px 1px 1px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31);
    
    &:hover {
      background: ${fromLinkProps('active.hover.background')};
    }
    
    & > .ant-anchor-link-title {
      color: ${fromLinkProps('active.color')};
      
      &:hover {
        color: ${fromLinkProps('active.hover.color')};
      }
    }
  }
}
`

export const anchorCss = css`
& .ant-anchor {
  display: flex;
  background: ${fromProps('background')};
  width: 100%;
  padding: ${fromProps('wrapper.padding')};
  border-radius: ${fromProps('wrapper.borderRadius')};

  &-ink {
    display: none
  }
}
`
