import styled from 'styled-components'

export const StickyTabsPopoverWrapper = styled.div`
  margin: -16px;
  min-width: 288px;

  && .ant-tabs-top > .ant-tabs-nav {
    position: sticky;
    top: 0;
    z-index: 1;
    margin: 0;
    padding: 8px 16px 0;
    background-color: #fff;
  }

  && .ant-tabs-content-holder {
    padding: 8px 16px 16px;
  }
`
