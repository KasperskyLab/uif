import { css } from 'styled-components'

export const submenuCss = css`
  width: 280px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -281px;
  display: none;

  &.submenu-active {
    display: block;
  }

  > div > div {
    width: 100%;
  }
`
