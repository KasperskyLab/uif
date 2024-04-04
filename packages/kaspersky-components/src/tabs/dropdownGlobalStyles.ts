import { StyledTabPaneIcon, StyledTabPaneText } from './tabsCss'
import { TabsCssConfig } from './types'

export const getDropdownStyles = (
  cssConfig: TabsCssConfig,
  rootHashClass: string
): string => {
  return `
    .${rootHashClass} .ant-dropdown-placement-bottomLeft,
    .${rootHashClass} .ant-dropdown-placement-bottomRight {
      padding-top: 4px;
    }

    .${rootHashClass} .ant-dropdown-menu-item.kl6-dropdown-item-custom:not(.ant-dropdown-menu-item-disabled):hover {
      background: ${cssConfig.unSelected.hover?.background};
    }

    .${rootHashClass} .ant-dropdown-menu-item.kl6-dropdown-item-custom:not(.ant-dropdown-menu-item-disabled):active {
      background: ${cssConfig.unSelected.pressed?.background};
    }

    .${rootHashClass} .ant-dropdown-menu-item-disabled {
      color: ${cssConfig.unSelected.disabled?.color};
    }

    .${rootHashClass} .ant-dropdown-menu-item-disabled ${StyledTabPaneText},
    .${rootHashClass} .ant-dropdown-menu-item-disabled ${StyledTabPaneIcon} path {
      color: ${cssConfig.unSelected.disabled?.color} !important;
    }

    .${rootHashClass} .ant-dropdown-menu-item-disabled:hover {
      background-color: transparent !important;
    }
`
}
