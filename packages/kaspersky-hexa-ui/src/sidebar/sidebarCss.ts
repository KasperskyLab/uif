import { getFromProps } from '@helpers/getFromProps'
import { StyledBorder, StyledHeaderFirstLine } from '@src/sidebar/components/SidebarHeader'
import { css } from 'styled-components'

import { SidebarCssConfig } from './types'

const fromProps = getFromProps<SidebarCssConfig>()

export const sidebarCss = css`
  .ant-drawer-header {
    padding: 0;
    border-bottom: 0;
    background: transparent;
    border-radius: unset;
    align-items: flex-start;
    
    .ant-drawer-extra {
      padding-top: 6px;
    }

    & > .ant-drawer-header-title {
      width: 100%;
      flex-direction: row-reverse;
      gap: ${fromProps('gap')};
    }

    .ant-drawer-close {
      padding: 0;
      top: 2px;
      width: 32px;
      height: 32px;

      margin-right: 0;

      & > {
        display: inline-block;
      }
    }

    .ant-drawer-title {
      overflow: hidden;

      h3 {
        margin-bottom: 0;
        word-break: break-word;
      }
    }
  }

  &.ant-drawer-right.ant-drawer-open .ant-drawer-content-wrapper {
    box-shadow: 0 18px 28px rgba(9, 30, 66, 0.15),
      0 0 1px rgba(9, 30, 66, 0.31);
  }

  .ant-drawer-footer {
    border-top: 1px solid ${fromProps('drawer.border')};
    padding: ${fromProps('padding')};
  }

  div${StyledHeaderFirstLine} {
    padding: ${fromProps('padding')};
  }
  
  div${StyledBorder} {
    margin: 0;
    height: 1px;
    background: ${fromProps('drawer.border')};
  }
`
