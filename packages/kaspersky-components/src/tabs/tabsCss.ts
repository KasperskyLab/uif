import styled, { css } from 'styled-components'
import { Button } from '@src/button'
import { Divider } from '@src/divider'
import { Text } from '@src/typography'
import { TabsCssConfig } from './types'
import { getFromProps } from '@helpers/getFromProps'
import { SPACES } from '@design-system/theme'
import { getTextSizes, textLevels } from '@design-system/tokens'

export const StyledTabPaneIcon = styled.div``
export const StyledTabPaneText = styled.div``
export const StyledTabPaneIndicator = styled.div``
export const StyledDivider = styled(Divider)``
export const StyledText = styled(Text)``
export const StyledMoreButton = styled(Button)``

const fromProps = getFromProps<TabsCssConfig>()

const tabsSizes = {
  tabList: {
    gap: `${SPACES[2]}px`,
    padding: `${SPACES[12]}px ${SPACES[6]}px`,
    margin: `0 0 ${SPACES[12]}px 0`
  },
  topTab: {
    padding: `${SPACES[1]}px ${SPACES[4]}px`,
    margin: `${SPACES[4]}px`,
    gap: `${SPACES[2]}px`,
    borderRadius: `${SPACES[2]}px`
  },
  leftTab: {
    padding: `${SPACES[3]}px ${SPACES[6]}px`,
    borderRadius: `${SPACES[4]}px`
  },
  inkBar: {
    borderRadius: `${SPACES[1]}px`
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

/** @deprecated Card tabs are not supported */
const cardTabsCss = css`
  .ant-tabs-tab {
    padding: 6px 12px;
    border: 1px solid transparent;
    background-color: ${fromProps('selected.enabled.background')};
    border-radius: 4px 4px 0 0;
    border-bottom: 0;
    position: relative;

    &:hover {
      border: 1px solid ${fromProps('unSelected.enabled.border')};
      border-bottom: 0;
    }

    .ant-tabs-tab-btn:hover::before {
      display: none;
    }

    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 1px;
      background-color: ${fromProps('unSelected.enabled.border')};
      border-radius: 0;
    }
  }

  .ant-tabs-tab-disabled {
    border-color: transparent;

    &:hover {
      border-color: transparent;
    }
  }

  .ant-tabs-tab-active {
    border-left: 1px solid ${fromProps('unSelected.enabled.border')};
    border-right: 1px solid ${fromProps('unSelected.enabled.border')};
    border-top: 1px solid ${fromProps('unSelected.enabled.border')};

    &:hover {
      border-top: 1px solid ${fromProps('selected.enabled.border')};
    }

    &::before {
      content: '';
      position: absolute;
      right: -1px;
      top: -1px;
      left: -1px;
      height: 3px;
      background-color: ${fromProps('selected.enabled.border')};
      border-radius: 4px 4px 0 0;
    }

    &::after {
      display: none;
    }
  }
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
  ${StyledTabPaneIndicator} {
    position: unset;
  }
`

export const tabsCss = css<{
  cssConfig: TabsCssConfig,
  hiddenTabsLength: number,
  containerWidth: number
}>`
  width: 100%;
  overflow: visible;

  &&.group-tabs .ant-tabs-tab-disabled {
    cursor: inherit;
  }

  &.ant-tabs-top > .ant-tabs-nav {
    margin: ${tabsSizes.tabList.margin};
  }

  && .ant-tabs-nav-wrap {
    overflow: visible;
  }

  .ant-tabs-nav, .ant-tabs-nav-wrap {
    &::before, &::after {
      display: none;
    }
  }

  .ant-tabs-nav-list {
    &::before {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${fromProps('unSelected.enabled.border')};
      height: 1px;
      ${props => `width: calc(${props.containerWidth}px - 1px);`}
      border-radius: ${tabsSizes.inkBar.borderRadius};
    }
  }
 
  && .ant-tabs-nav-operations {
    display: none;
    visibility: hidden;
    pointer-events: none;
  }

  .ant-tabs-content-holder .ant-tabs-tabpane-active {
    color: ${fromProps('unSelected.enabled.color')};
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
    ? `.ant-tabs-tab:nth-last-child(-n + ${props.hiddenTabsLength}) {
        visibility: hidden;
      }`
    : ''
  }

  .ant-tabs-tab {
    padding: 0;
    margin: 0 0 ${tabsSizes.topTab.margin} 0;
    transition: none;
    border: none;

    .ant-tabs-tab-btn {
      padding: ${tabsSizes.topTab.padding};
      border-radius: ${tabsSizes.topTab.borderRadius};
      color: ${fromProps('unSelected.enabled.color')};
      background-color: ${fromProps('selected.enabled.background')};
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
          background-color: ${fromProps('unSelected.hover.background')};
          &::before {
            display: inline;
            position: absolute;
            content: '';
            bottom: -8px;
            right: 0;
            left: 0;
            height: 2px;
            width: 100%;
            background-color: ${fromProps('unSelected.enabled.border')};
            border-radius: ${tabsSizes.inkBar.borderRadius};
            transform: none;
          }
        }
        &:active {
          background-color: ${fromProps('unSelected.pressed.background')};
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

  &.ant-tabs-card {
    ${cardTabsCss}
  }

  &.ant-tabs-left {
    ${leftTabsCss}
  }
`

export const tabPaneHeadCss = css<{ cssConfig: TabsCssConfig }>`
  display: flex;
  gap: ${SPACES[2]}px;
  align-items: center;

  .ant-badge-count {
    min-width: 0;
  }

  ${StyledTabPaneIcon} {
    display: flex;
    align-items: center;
    path {
      color: ${fromProps('unSelected.enabled.color')};
    }
  }
  ${StyledTabPaneText} {
    ${textSizesCss};
    color: ${fromProps('unSelected.enabled.color')};
  }
  ${StyledTabPaneIndicator} {
    display: flex;
    align-items: start;
    position: absolute;
    right: 2px;
    top: 2px;
  }
`

export const tabsWrapperCss = css<{
  cssConfig: TabsCssConfig,
  selectedMoreButton: boolean,
  shouldShowMoreButton: boolean
}>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  .ant-tabs-ink-bar {
    ${props => props.selectedMoreButton && `
      display: none;
    `}
  }

  .kl6-tabs-more-button{

  }

  && ${StyledMoreButton} {
    position: absolute;
    right: 24px;
    color: ${fromProps('unSelected.enabled.color')};
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

    &::before {
      display: none;
      position: absolute;
      opacity: 1;
      content: '';
      box-shadow: none;
      top: unset;
      bottom: -8px;
      right: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: ${fromProps('unSelected.enabled.border')};
      ${props => props.selectedMoreButton && `
        display: inline;
        background-color: ${fromProps('selected.enabled.border')(props)};
      `}
      border-radius: ${tabsSizes.inkBar.borderRadius};
      transform: none;
    }
    &:hover {
      background-color: ${fromProps('unSelected.hover.background')};
      ${props => props.selectedMoreButton && `
        background-color: ${fromProps('selected.hover.background')(props)};
      `}
      &::before {
        display: inline;
      }
    }
    &:active {
      background-color: ${fromProps('unSelected.pressed.background')};
      ${props => props.selectedMoreButton && `
        background-color: ${fromProps('selected.pressed.background')(props)};
      `}
    }
    &:focus-visible {
      box-shadow: ${fromProps('focus.boxShadow')};
    }
  }
`
