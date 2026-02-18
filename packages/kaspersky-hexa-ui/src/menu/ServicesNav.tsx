import styled from 'styled-components'

export const ServicesNav = styled.div`
  display: flex;
  gap: var(--inner--dependent, 4px);
  margin: 0 16px;
  color: var(--menu_item--icon--enabled);
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
