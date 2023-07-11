import { css } from 'styled-components'
import { getFromProps } from '../../helpers/getFromProps'
import { SidebarCssConfig } from './types'

const fromProps = getFromProps<SidebarCssConfig>()

export const sidebarCss = css`
  .ant-drawer-header{
    padding: ${fromProps('padding')};
    border: unset;
    background: transparent;
    border-radius: unset;

    & > .ant-drawer-header-title {
      width: 100%;
      flex-direction: row-reverse;
      gap: ${fromProps('gap')};
    }
    .ant-drawer-close{
      padding: 0;
      top: 2px;
      width: 32px;
      height: 32px;

      margin-right: 0px;
      & > {
        display: inline-block;
      }
    }
    .ant-drawer-title {
      overflow: hidden;
      h3 {
        margin-bottom: 0;
      }
    }
  }
  
   

  &.ant-drawer-right.ant-drawer-open .ant-drawer-content-wrapper{
    box-shadow: 0px 18px 28px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31);
  }

  .ant-drawer-footer {
    border-top: 1px solid ${fromProps('normal.drawer.borderColor')};
  }
`
