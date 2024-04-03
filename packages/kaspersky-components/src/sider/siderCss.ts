import { css } from 'styled-components'
import { colors } from '../../design-system/theme/themes/dark/colors'
import { SPACES } from '../../design-system/theme/themes/variables'

export const siderCss = css`
  background-color: ${colors.bg.alternative2};

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    padding: ${SPACES[10]}px 0;
    gap: ${SPACES[10]}px;
  }
`

export const siderServicesMenuCss = css`
  display: flex;
  margin: 0 ${SPACES[8]}px;
  color: ${colors['text-icons-elements'].primary};
  font-size: 14px;
  justify-content: flex-end;
    
  .ant-layout-sider-collapsed & {
    flex-direction: column;
    margin: 0;

    .item {
      display: block;
      margin: ${SPACES[4]}px 0;
    }

    .left {
      margin: ${SPACES[4]}px 0;
    }
  }
    
  .item {
    cursor: pointer;
    margin: ${SPACES[4]}px;
  }
    
  .left {
    margin-right: auto;
  }
`
