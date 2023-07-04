import { createGlobalStyle, css } from 'styled-components'

import { TabsCssConfig } from './types'

import { getFromProps } from '../../helpers/getFromProps'

const fromProps = getFromProps<TabsCssConfig>()

const CardTabs = css`
  .ant-tabs-tab {
    padding: ${fromProps('card.padding')};
    border: 1px solid transparent;
    background-color: ${fromProps('normal.background')};
    border-radius: ${fromProps('card.borderRadius')};
    border-bottom: 0;

    &:hover {
      border: 1px solid ${fromProps('normal.border')};
      border-bottom: 0;
    }
  }

  .ant-tabs-tab-disabled {
    border-color: transparent;

    &:hover {
      border-color: transparent;
    }
  }

  .ant-tabs-tab-active {
    border-left: 1px solid ${fromProps('normal.border')};
    border-right: 1px solid ${fromProps('normal.border')};
    border-top: 1px solid ${fromProps('active.border')};

    &:hover {
      border-top: 1px solid ${fromProps('active.border')};
    }

    &::before {
      content: '';
      position: absolute;
      right: -1px;
      top: -1px;
      left: -1px;
      height: 3px;
      background-color: ${fromProps('active.border')};
      border-radius: ${fromProps('card.borderRadius')};
    }

    &::after {
      content: '';
      position: absolute;
      right: -1px;
      bottom: -1px;
      left: -1px;
      height: 3px;
      background-color: ${fromProps('normal.background')};
      border-radius: ${fromProps('card.borderRadius')};
    }
  }
`

const LeftTabs = css`
  .ant-tabs-tab {
    text-align: left;
    font-family: ${fromProps('leftTabs.textSizes.fontFamily')};
    font-weight: ${fromProps('leftTabs.textSizes.fontWeight')};
    font-size: ${fromProps('leftTabs.textSizes.fontSize')};
    line-height: ${fromProps('leftTabs.textSizes.lineHeight')};
    color: ${fromProps('active.color')};

    border: none;
    margin-bottom: 0;
    padding: ${fromProps('leftTabs.padding')};
    height: 40px;
    width: 220px;
    margin-left: 0 !important;

    &:hover {
      &:before {
        position: absolute;
        content: '';
        bottom: 0;
        top: 4px;
        left: 0;
        background-color: ${fromProps('active.color')};
        height: 32px;
        width: 4px;
        border-radius: ${fromProps('leftTabs.borderRadius')};
      }
    }

  }

  .ant-tabs-tab-btn {
    width: 100%;
  }

  && .ant-tabs-ink-bar{
    left: 0;
    width: 4px;
    height: 32px !important;
    margin-top: 4px;
  }

  & > .ant-tabs-content-holder {
    border-left: unset;
  }

  .ant-tabs-nav-list:before {
    height: 0;
  }
`

export const tabsCss = css`
  width: 100%;

  .ant-tabs-nav::before {
    display: none;
  }

  .ant-tabs-nav-list:before{
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${fromProps('normal.border')};
    height: 2px;
    width: 100%;
    border-radius: ${fromProps('tabs.list.padding')};
  }

  .ant-tabs-nav-wrap::after {
    box-shadow: unset !important;
  }

  && .ant-tabs-tab-active > .ant-tabs-tab-btn{
    color: ${fromProps('active.color')};
  }

  .ant-tabs-tab {
    padding: unset;
    padding-bottom: 8px;
    transition: none;
    border: unset;
    margin: 0 12px !important;

    &:first-of-type {
      margin-left: 0 !important;
    }

    &:hover {
      border-color: #8fc2b7;
    }

    &:focus:after {
      display: none;
    }


    &:not(.ant-tabs-tab-disabled):hover{
      & > .ant-tabs-tab-btn {
        color: ${fromProps('hover.color')};
      }
      &:before {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${fromProps('hover.border')};
        height: 2px;
        width: 100%;
        border-radius: ${fromProps('tabs.disabled.borderRadius')};
      }
    }
  }

  && .ant-tabs-tab-disabled > .ant-tabs-tab-btn {
    color: ${fromProps('disabled.color')};

    &:hover {
      border-color: transparent;
    }
  }

  && .ant-tabs-tab-btn, .ant-tabs-nav-more {
    font-family: ${fromProps('fontFamily')};
    font-size: ${fromProps('fontSize')};
    line-height: ${fromProps('lineHeight')};
    font-weight: ${fromProps('fontWeight')};
    font-style: ${fromProps('fontStyle')};
    letter-spacing: ${fromProps('letterSpacing')};
    color: ${fromProps('normal.color')};
  }

  .ant-tabs-nav-more {
    padding: ${fromProps('tabs.more.padding')} !important;
    display: flex;
    align-items: flex-start;
  }

  && .ant-tabs-ink-bar {
    background-color: ${fromProps('active.border')};
    height: 2px;
    border-radius: ${fromProps('tabs.linkBar.borderRadius')};
  }

  .ant-tabs-nav-list:before {
    background: ${fromProps('normal.border')};
  }

  .ant-tabs-nav-operations {
    border-bottom: 2px solid ${fromProps('normal.border')};
  }

  &.ant-tabs-card {
    ${CardTabs}

    .ant-tabs-nav {
      border-bottom: 1px solid #CCCCCC;
    }
  }

  &.ant-tabs-left {
    ${LeftTabs}
  }
`

export const tabPaneHeadCss = css`
  .kl-tabs-pane {
    display: flex;
    gap: ${fromProps('pane.gap')};
    align-items: center;

    &_disabled {
      .kl-tabs-pane-number {
        color: ${fromProps('disabled.color')};
      }
      .kl-tabs-pane-icon path {
        color: ${fromProps('disabled.color')};
      }
      .kl-tabs-pane-text {
        color: ${fromProps('disabled.color')};
      }
    }

    &-number {
      font-family: ${fromProps('fontFamily')};
      font-size: ${fromProps('fontSize')};
      line-height: ${fromProps('lineHeight')};
      font-weight: ${fromProps('fontWeight')};
      font-style: ${fromProps('fontStyle')};
      letter-spacing: ${fromProps('letterSpacing')};
      color: ${fromProps('normal.paneNumber.color')};
    }
    &-icon {
      display: flex;
      align-items: center;
    }
    &-text {
      font-family: ${fromProps('fontFamily')};
      font-size: ${fromProps('fontSize')};
      line-height: ${fromProps('lineHeight')};
      font-weight: ${fromProps('fontWeight')};
      font-style: ${fromProps('fontStyle')};
      letter-spacing: ${fromProps('letterSpacing')};
      color: ${fromProps('normal.color')};
    }
  }
`

export const DropdownStyle = createGlobalStyle<{ cssConfig: TabsCssConfig }>`
  body {
    .ant-tabs-dropdown-menu {
      box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31);
      border-radius: ${fromProps('dropdown.borderRadius')};
      min-width: 240px;
      background-color: ${fromProps('normal.background')};
    }

    .ant-tabs-dropdown-menu-item:hover {
      background-color: ${fromProps('hover.dropdown.background')};
    }

    .ant-tabs-dropdown-menu-item-disabled:hover {
      background-color: transparent;
    }
  }
`
