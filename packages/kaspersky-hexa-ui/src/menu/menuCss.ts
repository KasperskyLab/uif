import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { MenuCssConfig } from './types'

const fromProps = getFromProps<MenuCssConfig>()

export const menuCss = css`
  background-color: ${fromProps('background')};
  border-right: 1px solid ${fromProps('borderColor')};

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    padding: 16px 0;
    gap: 8px;
  }
`
