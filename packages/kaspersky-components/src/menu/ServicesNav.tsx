import styled from 'styled-components'
import { SPACES } from '@design-system/theme'
import { colors } from '@design-system/theme/themes/dark/colors'

export const ServicesNav = styled.div`
  display: flex;
  margin: 0 ${SPACES[8]}px;
  color: ${colors['text-icons-elements'].primary};
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
