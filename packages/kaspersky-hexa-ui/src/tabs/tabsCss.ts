import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { Divider } from '@src/divider'
import { Text } from '@src/typography'
import styled, { css } from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { TabsCssConfig } from './types'

export const StyledTabPaneIcon = styled.div``
export const StyledTabPaneText = styled.div``
export const StyledDivider = styled(Divider)``
export const StyledText = styled(Text)``
export const StyledExtraContent = styled.div``

const fromProps = getFromProps<TabsCssConfig>()

const tabsSizes = {
  tabList: {
    gap: '4px',
    padding: '24px 12px',
    margin: '0 0 24px 0'
  },
  topTab: {
    padding: '2px 8px',
    margin: '8px',
    gap: '4px',
    borderRadius: '4px'
  },
  leftTab: {
    padding: '6px 12px',
    borderRadius: '8px'
  },
  inkBar: {
    borderRadius: '2px'
  },
  ...getTextSizes(textLevels.BTM3)
}

const textSizesCss = css`
  font-family: ${tabsSizes.fontFamily};
  font-size: ${tabsSizes.fontSize};
  font-weight: ${tabsSizes.fontWeight};
  font-style: ${tabsSizes.fontStyle};
  line-height: ${tabsSizes.lineHeight};
  letter-spacing: ${tabsSizes.letterSpacing};
`

const leftTabsCss = css`
  && > .ant-tabs-nav {
    width: 280px;
    padding: ${tabsSizes.tabList.padding};
    border-right: 1px solid ${fromProps('divider.color')};

    .ant-tabs-nav-list {
      &::before {
        display: none;
      }
    }

    .ant-tabs-tab-active > .ant-tabs-tab-btn {
      background-color: ${fromProps('selected.pressed.background')};
    }

    .ant-tabs-tab {
      text-align: left;
      border: none;
      padding: 0;
      margin: 0;

      ${StyledText} {
        pointer-events: none;
        cursor: pointer !important;
      }

      ${StyledDivider} {
        margin: 0 0 8px 0;
        
        &:last-child {
          margin-bottom: 0;
        }
      }

      .ant-tabs-tab-btn {
        width: 100%;
        border-radius: ${tabsSizes.leftTab.borderRadius};
        padding: ${tabsSizes.leftTab.padding};
        &:hover {
          &::before {
            display: none;
          }
        }
      }
    }

    .ant-tabs-tab + .ant-tabs-tab {
      margin-top: ${tabsSizes.tabList.gap};
    }

    .ant-tabs-ink-bar {
      display: none;
    }
  }

  & > .ant-tabs-content-holder {
    border-left: unset;
  }

  ${StyledTabPaneText} {
    width: 100%;
  }
`

export const tabsCss = css<{
  cssConfig: TabsCssConfig,
  hiddenTabsLength: number
}>`
  width: 100%;
  overflow: visible;

  &.ant-tabs-top > .ant-tabs-nav {
    margin: ${tabsSizes.tabList.margin};
  }

  && .ant-tabs-nav-wrap {
    overflow: visible;
    width: 100%;
  }

  .ant-tabs-nav, .ant-tabs-nav-wrap {
    &::before, &::after {
      display: none;
    }
  }

  .ant-tabs-nav-list {
    width: 100%;
    &::before {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${fromProps('divider.color')};
      height: 1px;
      width: 100%;
      border-radius: ${tabsSizes.inkBar.borderRadius};
    }
  }
 
  && .ant-tabs-nav-operations {
    display: none;
    visibility: hidden;
    pointer-events: none;
  }

  .ant-tabs-content-holder .ant-tabs-tabpane-active {
    color: ${fromProps('unselected.enabled.color')};
  }

  &&& .ant-tabs-tab-active > .ant-tabs-tab-btn {
    color: ${fromProps('selected.enabled.color')};
    text-shadow: none;

    &:hover {
      background-color: ${fromProps('selected.hover.background')};
    }
    &:active {
      background-color: ${fromProps('selected.pressed.background')};
    }

    ${StyledTabPaneText}, ${StyledTabPaneIcon} path {
      color: ${fromProps('selected.enabled.color')};
    }
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin-left: ${tabsSizes.tabList.gap};
  }

  ${props => props.hiddenTabsLength
    ? `& > .ant-tabs-nav .ant-tabs-tab:nth-last-child(-n + ${props.hiddenTabsLength}) {
        visibility: hidden;

        .ant-tabs-tab-btn {
          transition: none;
        }
      }
    `
    : ''
}

  .ant-tabs-tab {
    padding: 0;
    margin: 0 0 ${tabsSizes.topTab.margin} 0;
    transition: none;
    border: none;

    .ant-tabs-tab-btn {
      display: flex;
      padding: ${tabsSizes.topTab.padding};
      border-radius: ${tabsSizes.topTab.borderRadius};
      color: ${fromProps('unselected.enabled.color')};
      background-color: ${fromProps('unselected.enabled.background')};
      ${textSizesCss};
      height: 100%;
      width: 100%;
    }

    &:not(.ant-tabs-tab-disabled) {
      .ant-tabs-tab-btn {   
        &:focus-visible {
          box-shadow: ${fromProps('focus.boxShadow')};
        }
        &:hover {
          background-color: ${fromProps('unselected.hover.background')};
          &::before {
            display: inline;
            position: absolute;
            content: '';
            bottom: -8px;
            right: 0;
            left: 0;
            height: 2px;
            width: 100%;
            background-color: ${fromProps('unselected.enabled.border')};
            border-radius: ${tabsSizes.inkBar.borderRadius};
            transform: none;
          }
        }
        &:active {
          background-color: ${fromProps('unselected.pressed.background')};
        }
      }
    }
  }

  && .ant-tabs-tab-disabled > .ant-tabs-tab-btn {
    color: ${fromProps('selected.disabled.color')};

    ${StyledTabPaneText}, ${StyledTabPaneIcon} path {
      color: ${fromProps('selected.disabled.color')};
    }
    &:hover {
      border-color: transparent;
    }
  }

  && .ant-tabs-ink-bar {
    background-color: ${fromProps('selected.enabled.border')};
    height: 2px;
    border-radius: ${tabsSizes.inkBar.borderRadius};
  }

  &.ant-tabs-left {
    ${leftTabsCss}
  }
`

export const tabPaneHeadCss = css<{ cssConfig: TabsCssConfig }>`
  display: flex;
  gap: 4px;
  align-items: center;

  .ant-badge-count {
    min-width: 0;
  }

  ${StyledTabPaneIcon} {
    display: flex;
    align-items: center;
    path {
      color: ${fromProps('unselected.enabled.color')};
    }
  }
  ${StyledTabPaneText} {
    ${textSizesCss};
    color: ${fromProps('unselected.enabled.color')};
  }
`

export const tabsWrapperCss = css<{
  cssConfig: TabsCssConfig,
  extraContentWidth: number,
  selectedMoreButton: boolean,
  shouldShowMoreButton: boolean
}>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;

  &.with-padding {
    > .ant-tabs {
      padding: 0 var(--spacing--padding_xl);

      .ant-tabs-nav-list::before,
      .ant-tabs-content-holder {
        margin: 0 calc(var(--spacing--padding_xl) * -1);
      }
    }

    > .kl6-tabs-more-button {
      right: calc(var(--spacing--padding_xl) + 4px);
    }
  }

  &.no-margin {
    .ant-tabs-top > .ant-tabs-nav {
      margin: 0;
    } 
  }

  &.group-tabs {
    .ant-tabs-tab-disabled {
      cursor: inherit;
    }
    .ant-tabs-tab-btn {
      flex-direction: column;
    }
  }

  .ant-tabs-ink-bar {
    ${props => props.selectedMoreButton && `
      display: none;
    `}
  }

  .ant-tabs-extra-content {
    padding-right: 4px;
  }
  
  & ${StyledExtraContent} {
    position: absolute;
    right: 0px;
  }

  & > .kl6-tabs-more-button {
    position: absolute;
    right: ${props => (props.extraContentWidth) + 'px'};
    color: ${fromProps('unselected.enabled.color')};
    ${props => props.selectedMoreButton && `
      color: ${fromProps('selected.enabled.color')(props)};
    `}
    ${props => props.shouldShowMoreButton
    ? ''
    : 'visibility: hidden;'
}
    ${textSizesCss}; 

    padding: ${tabsSizes.topTab.padding};
    margin: 0;
    gap: 4px;
    height: 24px;
    border-radius: 4px;
    min-width: fit-content;
    transition: none;

    &::before {
      display: none;
      position: absolute;
      opacity: 1;
      content: '';
      box-shadow: none;
      top: unset;
      right: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: ${fromProps('unselected.enabled.border')};
      ${props => props.selectedMoreButton && `
        display: inline;
        bottom: -8px;
        background-color: ${fromProps('selected.enabled.border')(props)};
      `}
      border-radius: ${tabsSizes.inkBar.borderRadius};
    }
    &:hover {
      background-color: ${fromProps('unselected.hover.background')};
      ${props => props.selectedMoreButton && `
        background-color: ${fromProps('selected.hover.background')(props)};
      `}
      &::before {
        display: inline;
      }
    }
    &:active {
      background-color: ${fromProps('unselected.pressed.background')};
      ${props => props.selectedMoreButton && `
        background-color: ${fromProps('selected.pressed.background')(props)};
      `}
    }
    &:focus-visible {
      box-shadow: ${fromProps('focus.boxShadow')};
    }
  }
`
