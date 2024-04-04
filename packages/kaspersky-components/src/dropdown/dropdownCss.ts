import styled, { css } from 'styled-components'
import { DropdownColorConfig } from './types'
import { BORDER_RADIUS, SPACES } from '@design-system/theme'
import { getTextSizes, TextTypes } from '@design-system/tokens'
import { Divider } from '@src/divider'

const groupTextSizes = getTextSizes(TextTypes.BTM4)
export const getDropdownGroupCss = (cssConfig: DropdownColorConfig) => css`
  padding: ${SPACES[5]}px ${SPACES[6]}px ${SPACES[3]}px;
  font-family: ${groupTextSizes.fontFamily};
  font-size: ${groupTextSizes.fontSize};
  line-height: ${groupTextSizes.lineHeight};
  font-weight: ${groupTextSizes.fontWeight};
  font-style: ${groupTextSizes.fontStyle};
  letter-spacing: ${groupTextSizes.letterSpacing};
  color: ${cssConfig.group.color};
  background: ${cssConfig.normal.bgColor};
`

export const dropdownItemInnerCss = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${SPACES[2]}px;

  &, &:hover, &:active {
    background: transparent;
  }

  .kl6-dropdown-item-inner-block {
    display: flex;
    flex-direction: row;
    gap: ${SPACES[2]}px;

    .kl6-dropdown-item-inner-additional, .kl6-dropdown-item-inner-expand-icon {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .kl6-dropdown-item-inner-text {
      /* tslint:disable ругается, что значения wrap не существует, но оно существует */
      text-wrap: wrap;
      /* tslint:enable */
      display: flex;
      align-items: flex-end;
      gap: 8px;
    }
  }
`

const textSizes = getTextSizes(TextTypes.BTR3)
const getDropdownItemCss = (cssConfig: DropdownColorConfig) => css`
  padding: ${SPACES[3]}px ${SPACES[6]}px;
  background: ${cssConfig.normal.bgColor};
  color: ${cssConfig.normal.color};

  font-family: ${textSizes.fontFamily};
  font-size: ${textSizes.fontSize};
  line-height: ${textSizes.lineHeight};
  font-weight: ${textSizes.fontWeight};
  font-style: ${textSizes.fontStyle};
  letter-spacing: ${textSizes.letterSpacing};
  
  &:hover, &:focus-visible, &.ant-dropdown-menu-submenu-active {
    background: ${cssConfig.hover.bgColor};
    outline: none;
  }
  
  &.ant-dropdown-menu-item-selected,
  &.ant-dropdown-menu-submenu-open {
    background: ${cssConfig.selected.bgColor};
    color: ${cssConfig.selected.color};
  }
  
  &.ant-dropdown-menu-item-disabled,
  &.ant-dropdown-menu-submenu-disabled {
    &, &:hover {
      background: ${cssConfig.normal.bgColor};
      
      .kl6-dropdown-item-inner-expand-icon,
      .kl6-dropdown-item-inner-additional,
      .kl6-dropdown-item-inner-text {
        color: ${cssConfig.disabled.color};
      }
    }
  }
  
  &.kl6-dropdown-item-action {
    color: ${cssConfig.normal.actionColor};

    &:hover, &:focus-visible {
      color: ${cssConfig.hover.actionColor};
      outline: none;
    }

    &.ant-dropdown-menu-item-selected,
    &.ant-dropdown-menu-submenu-open {
      color: ${cssConfig.selected.actionColor};
    }
  }
  
  // custom components without hover 
  &.kl6-dropdown-item-custom:hover {
    background: ${cssConfig.normal.bgColor};
  }
  
  // fix antd styles
  .ant-dropdown-menu-submenu-title {
    background: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    font-style: inherit;
    letter-spacing: inherit;
  }
`

export const getDropdownCss = (cssConfig: DropdownColorConfig, rootHashClass: string) => css`
  .${rootHashClass} {
    padding: 0;
    .ant-dropdown-menu {
      border-radius: ${BORDER_RADIUS[4]}px;
      padding: ${SPACES[2]}px 0px;
      margin: 0;
      background: ${cssConfig.normal.bgColor};
      box-shadow: ${cssConfig.boxShadowLine}, ${cssConfig.boxShadow};
      min-width: 120px;
      max-width: 600px;
      
      & > li {
        &:not(.kl6-dropdown-group-title) {
          ${getDropdownItemCss(cssConfig)};
        }
        &.kl6-dropdown-group-title {
          ${getDropdownGroupCss(cssConfig)};
        }
        
        // fix overlay of item bgColor on menu border
        &:first-child {
          border-top-left-radius: calc(${BORDER_RADIUS[4]}px/2);
          border-top-right-radius: calc(${BORDER_RADIUS[4]}px/2);
        }
        &:last-child {
          border-bottom-left-radius: calc(${BORDER_RADIUS[4]}px/2);
          border-bottom-right-radius: calc(${BORDER_RADIUS[4]}px/2);
        }
      }
    
      &.kl6-dropdown-loading {
        padding: ${SPACES[8]}px 0px;
        display: flex;
        justify-content: center;
      }
      
      // fix antd styles
      .ant-dropdown-menu-submenu-title {
        padding: 0;
        &:hover {
          background: transparent;
        }
      }
      
      // we replace it by using own kl-icon because we cant style it with antd 4.18
      .ant-dropdown-menu-submenu-expand-icon {
        display: none;
      }
    }
  }
`

export const StyledDivider = styled(Divider)`
  margin: ${SPACES[2]}px 0;
`
