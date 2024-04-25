import { css } from 'styled-components'
import { SPACES } from '@design-system/theme'
import { colors } from '@design-system/theme/themes/dark/colors'

export const menuItemCss = css`
  .uif-menu-item-entry {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 32px;
    border-radius: ${SPACES[4]}px;
    padding: 0 ${SPACES[4]}px;
    gap: ${SPACES[2]}px;
    user-select: none;

    &:hover {
      background: ${colors.elements['separator-solid']};
    }

    &:active {
      background: ${colors.elements['separator-bold-solid']};
    }
  }

  .uif-menu-item-entry-icon {
    display: flex;
    align-items: center;
  }

  .uif-menu-item-entry-title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    
    .title-ellipsis {
      white-space: nowrap;
    }
  }

  .uif-menu-item-entry-arrow {
    transition: all ease 150ms;
  }

  .uif-menu-item-subs {
    transition: grid-template-rows ease 150ms;
    display: grid;
    grid-template-rows: 0fr;
  }

  .uif-menu-item-subs-wrapper {
    overflow: hidden;
  }

  .uif-menu-item-subs .uif-menu-item-entry-title {
    margin-left: 20px;
  }

  .uif-menu-item-subs .uif-menu-item-subs .uif-menu-item-entry-title {
    margin-left: 30px;
  }
  
  &.expanded,
  .expanded {
  &:has(.active) {
      > .uif-menu-item-entry {
        color: ${colors.mainInteract.primary};
      }
    }
    
    > .uif-menu-item-entry .uif-menu-item-entry-arrow {
      transform: rotate(90deg);
    }

    > .uif-menu-item-subs {
      grid-template-rows: 1fr;
    }
  }

  &.active,
  .active {
    color: ${colors.mainInteract.primary};
    background: ${colors.mainInteract['primary-invert']};
    
    &:hover {
      color: ${colors.mainInteract.secondary};
      background: ${colors.mainInteract['secondary-invert']};
    }
    &:active {
      color: ${colors.mainInteract.tertiary};
      background: ${colors.mainInteract['tertiary-invert']};
    }
  }

  .menu-minimized &,
  .menu-subs-pop & {
    .uif-menu-item-entry-arrow,
    .uif-menu-item-entry-title {
      display: none;
    }
    
    .uif-menu-item-subs {
      display: none;
    }

    .uif-menu-item-subs-wrapper {
      overflow: visible;
    }

    &.expanded,
    .expanded,
    &:has(.expanded) {
      & > .uif-menu-item-subs {
        opacity: 1;
        display: block;
        
        .uif-menu-item-entry-title {
          display: block;
        } 
      }
    }

    &:has(.active) {
      > .uif-menu-item-entry {
        color: ${colors.mainInteract.primary};
      }
    }

    .uif-menu-item-subs {
      position: absolute;
      left: 100%;
      margin-top: -32px;
      
      .uif-menu-item-subs-wrapper {
        background-color: ${colors.bg.base};
        border-radius: ${SPACES[4]}px;
        translate: 1px 0;
      }

      .uif-menu-item-entry-title {
        margin: 0;
      }
    }
  }

  .menu-subs-pop & {
    .uif-menu-item-entry-title {
      display: block;
    }
    
    .uif-menu-item.expanded {
      position: relative;
    }
    
    .uif-menu-item-subs {
      margin-top: 0;
      bottom: 0;
      translate: 16px 0;
    }
  }
`

export const menuCss = css`
  overflow: auto;
  padding: 0 ${SPACES[8]}px;
  color: ${colors.textIconsElements.primary};
  display: flex;
  flex-direction: column;
  gap: ${SPACES[2]}px;

  &.menu-minimized,
  &.menu-subs-pop {
    overflow: visible;
  }
`
