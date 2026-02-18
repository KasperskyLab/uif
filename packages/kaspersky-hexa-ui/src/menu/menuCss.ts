import { css } from 'styled-components'

export const menuCss = css`
  background-color: var(--menu--bg--surface--enabled);
  border-right: 1px solid var(--menu--border--enabled);
  
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    padding: 16px 0;
    gap: 8px;
  }

  &.menu-submenu-margin {
    margin-right: 280px;
  }
`

export const bottomWrapperCss = css`
  padding: 0 var(--spacing--padding_l);

  button {
    margin: var(--spacing--gap_related) var(--spacing--gap_related) 0;
  }
`