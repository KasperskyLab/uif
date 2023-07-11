import { css } from 'styled-components'
import { getFromProps } from '../../helpers/getFromProps'
import { DropdownCssConfig } from './types'

const fromProps = getFromProps<DropdownCssConfig>()

export const selectDropdownCss = css`
  &.ant-dropdown-menu {
    background: ${fromProps('normal.background')};
    border-radius: ${fromProps('borderRadius')};
    box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31);
  
    .ant-dropdown-menu-item {
      color: ${fromProps('normal.color')};
      font-family: ${fromProps('fontFamily')};
      font-size: ${fromProps('fontSize')};
      line-height: ${fromProps('lineHeight')};
      font-weight: ${fromProps('fontWeight')};
      font-style: ${fromProps('fontStyle')};
      letter-spacing: ${fromProps('letterSpacing')};
      padding: ${fromProps('padding')};
      height: 32px;

      &:hover {
        background: ${fromProps('hover.background')};
      }

      display: flex;
      gap: ${fromProps('gap')};
      align-items: center;
    }
  }
`

export const itemStylesCss = css<{ cssConfig: DropdownCssConfig }>`
  .ant-dropdown-menu-item,
  .ant-dropdown-menu-submenu-title {
    padding: ${fromProps('itemPadding')};
    color: ${fromProps('normal.color')};
    font-family: ${fromProps('itemTextSizes.fontFamily')};
    font-size: ${fromProps('itemTextSizes.fontSize')};
    line-height: ${fromProps('itemTextSizes.lineHeight')};
    font-weight: ${fromProps('itemTextSizes.fontWeight')};
    font-style: ${fromProps('itemTextSizes.fontStyle')};
    letter-spacing: ${fromProps('itemTextSizes.letterSpacing')};
  }
  
  &:not(.ant-dropdown-menu-item-disabled):hover,
  &:not(.ant-dropdown-menu-submenu-disabled):hover {
    background-color: ${fromProps('item.hover.background')} !important;
  }
  
  &.ant-dropdown-menu-item-selected {
    background-color: ${fromProps('item.selected.background')} !important;
    color: inherit;
  }
  
  &.ant-dropdown-menu-item-disabled,
  &.ant-dropdown-menu-submenu-disabled .ant-dropdown-menu-submenu-title {
    color: ${fromProps('item.disabled.color')} !important;
  }
`
