import { css } from 'styled-components'
import { SPACES } from '@design-system/theme'
import { getFromProps } from '@helpers/getFromProps'
import { MenuCssConfig } from './types'

const fromProps = getFromProps<MenuCssConfig>()

export const menuCss = css`
  background-color: ${fromProps('background')};

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    padding: ${SPACES[8]}px 0;
    gap: ${SPACES[4]}px;
  }
`
