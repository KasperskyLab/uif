import { StyledTabPaneIcon, StyledTabPaneText } from './tabsCss'
import { TabsCssConfig } from './types'

export const getDropdownStyles = (
  cssConfig: TabsCssConfig,
  rootHashClass: string
): string => {
  return `
  .${rootHashClass} {
    .ant-dropdown-placement-bottomLeft,
    .ant-dropdown-placement-bottomRight {
      padding-top: 4px;
    }

    .ant-dropdown-menu {
      transition: all 0.3s;
    }
    
    .ant-dropdown-menu > li.kl6-dropdown-item-custom {
      &.ant-dropdown-menu-item-disabled:not(.kl6-dropdown-group-title) {
        &,
        &:hover,
        & ${StyledTabPaneText},
        & ${StyledTabPaneIcon} path {
          color: ${cssConfig.unselected.disabled?.color};
        }
      }
    }

    .ant-dropdown-menu > li.kl6-dropdown-item-custom {
      &.ant-dropdown-menu-item-active:not(.kl6-dropdown-group-title) {
        &,
        &:hover {
          background: ${cssConfig.unselected.hover?.background};
        }
      }
    }

    .ant-dropdown-menu > li,
    .ant-dropdown-menu > li.kl6-dropdown-item-custom {
      &.kl6-dropdown-active-tab:not(.kl6-dropdown-group-title) {
        &,
        & ${StyledTabPaneText},
        & ${StyledTabPaneIcon} path {
          color: ${cssConfig.selected.enabled?.color};
        }
        
        &:hover {
          background: ${cssConfig.selected.hover?.background};
        }
      }
    }
  }    
`
}
