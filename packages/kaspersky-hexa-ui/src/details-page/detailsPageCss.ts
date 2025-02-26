import { Sidebar } from '@src/sidebar'
import { Tabs } from '@src/tabs'
import styled from 'styled-components'

export const HorizontalTabs = styled(Tabs)`
  min-height: 100%;
  height: 100%;
  overflow: visible;

  .ant-tabs-top .ant-tabs-nav {
    margin: 0;
    padding: 0 24px;

    .ant-tabs-nav-list::before {
      left: -24px;
      right: -24px;
    }
  }

  .ant-tabs-content-top {
    height: 100%;
  }
`

export const HorizontalTabsContent = styled.div`
  padding: 24px;
  min-height: 100%;
`

export const StyledSidebar = styled(Sidebar).withConfig({
  shouldForwardProp: (prop) => !['hasNavigation'].includes(prop)
})<{ hasNavigation?: boolean }>`
  ${({ hasNavigation }) => hasNavigation && `
    .ant-drawer-title > div:last-child {
      display: none;
    }
    .ant-drawer-body {
      padding: 0;
    }
  `}

  .ant-drawer-body {
    overflow: visible;

    .antd-sidebar-content {
      height: 100%;
    }
  }
`

export const FooterContainer = styled.div`
  display: flex;
  gap: 8px;
`
