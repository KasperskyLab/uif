import { SPACES } from '@design-system/theme'
import styled from 'styled-components'

export const ServicesNav = styled.div`
  display: flex;
  margin: 0 ${SPACES[8]}px;
  color: var(--menu_item--text--unselected--base);
  font-size: 14px;

  .ant-layout-sider-collapsed & {
    flex-direction: column;
  }

  .item {
    cursor: pointer;
    margin: 8px;
  }

  .left {
    margin-right: auto;
  }
`
