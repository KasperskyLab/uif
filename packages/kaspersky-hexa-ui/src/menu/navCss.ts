import { getFromProps } from '@helpers/getFromProps'
import { MenuCssConfig } from '@src/menu/types'
import { css } from 'styled-components'

const fromProps = getFromProps<MenuCssConfig>()

export const navItemCss = css`
  color: ${fromProps('unselected.enabled.color')};
  
  .uif-nav-item-entry {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 32px;
    border-radius: 8px;
    padding: 0 8px;
    gap: 8px;
    user-select: none;
    cursor: pointer;
    
    .uif-nav-fav-add {
      display: none;
    }
    
    &.uif-nav-item-user {
      height: auto;
      padding: 3px 8px;
      cursor: pointer;
      
      .uif-nav-item-entry-icon {
        align-self: flex-start;
        margin-top: 3px;
      }
    }
    
    .uif-nav-item-entry-role {
      font-size: 12px;
      color: ${fromProps('roleColor')};
    }

    &:hover {
      background: ${fromProps('unselected.hover.background')};
      
      .uif-nav-fav-add {
        display: flex;
        align-items: center;
      }
    }

    &:active {
      background: ${fromProps('unselected.active.background')};
    }
  }

  .uif-nav-item-entry-icon {
    display: flex;
    align-items: center;
  }

  .uif-nav-item-entry-title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    
    .title-ellipsis {
      white-space: nowrap;
    }
  }
  
  .uif-nav-item-entry-props {
    display: flex;
    align-items: center;
  }

  .uif-nav-item-entry-arrow {
    transition: all ease 150ms;
  }

  .uif-nav-item-child {
    margin-left: 8px;
    transition: grid-template-rows ease 150ms;
    display: grid;
    grid-template-rows: 0fr;
  }

  .uif-nav-item-child-wrapper {
    overflow: hidden;
    flex-direction: column;
    gap: 2px;
    margin-top: 2px;
    display: none;
  }

  .uif-nav-item-child .uif-nav-item-entry-title {
    margin-left: 20px;
  }

  .uif-nav-item-child .uif-nav-item-child .uif-nav-item-entry-title {
    margin-left: 30px;
  }
  
  &.expanded,
  .expanded {
  &:has(.active) {
      > .uif-nav-item-entry {
        color: ${fromProps('selected.enabled.color')};
      }
    }
    
    > .uif-nav-item-entry .uif-nav-item-entry-arrow {
      transform: rotate(90deg);
    }

    > .uif-nav-item-child {
      grid-template-rows: 1fr;

      > .uif-nav-item-child-wrapper {
        display: flex;
      }
    }
  }

  &.active,
  .active {
    color: ${fromProps('selected.enabled.color')};
    background: ${fromProps('selected.enabled.background')};
    
    &:hover {
      color: ${fromProps('selected.hover.color')};
      background: ${fromProps('selected.hover.background')};
    }
    &:active {
      color: ${fromProps('selected.active.color')};
      background: ${fromProps('selected.active.background')};
    }
  }

  .nav-minimized &,
  .nav-child-pop & {
    .uif-nav-item-entry-arrow,
    .uif-nav-item-entry-title {
      display: none;
    }
    
    .uif-nav-item-child {
      display: none;

      .uif-nav-item-entry {
        border-radius: 0;
        padding: 0 12px;
      }
    }

    .uif-nav-item-child-wrapper {
      padding: 8px 0;
      overflow: visible;
      min-width: 80px;
      gap: 0;
    }

    &.expanded,
    .expanded,
    &:has(.expanded) {
      & > .uif-nav-item-child {
        opacity: 1;
        display: block;
        
        > .uif-nav-item-child-wrapper {
          display: flex;
          width: 280px;
        }
        
        .uif-nav-item-entry-title {
          display: block;
        } 
      }
    }

    &:has(.active) {
      > .uif-nav-item-entry {
        color: ${fromProps('selected.enabled.color')};
      }
    }

    .uif-nav-item-child {
      position: absolute;
      left: 100%;
      margin-top: -32px;
      
      .uif-nav-item-child-wrapper {
        background-color: ${fromProps('popBg')};
        box-shadow: ${fromProps('popShadow')};
        border-radius: 8px;
        translate: 1px 0;
      }
        
      .uif-nav-item-entry-title {
        margin: 0;
      }
    }
  }

  .nav-minimized & {
    .uif-nav-item-user-entry-wrapper,
    .uif-nav-item-entry-props {
      display: none;
    }
    
    .uif-nav-item-entry.uif-nav-item-user {
      height: 32px;
      
      .uif-nav-item-entry-icon {
        margin: 0;
        align-self: unset;
      }
    }
  }

  .nav-child-pop & {
    .uif-nav-item-entry-title {
      display: block;
    }
    
    &.uif-nav-item.expanded {
      position: relative;
      z-index: 1;
    }
    
    .uif-nav-item-child {
      margin-top: 0;
      bottom: 0;
      
      .uif-nav-item-child-wrapper {
        translate: 17px 0;
      }
    }
  }
`

export const navCss = css`
  overflow: auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  scrollbar-width: none;
  
  --scrollbar-radius: 4px;
  --scrollbar-size: 6px;

  &.nav-minimized,
  &.nav-child-pop {
    overflow: visible;
  }

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: var(--scrollbar-size);
    height: var(--scrollbar-size);
  }
  &::-webkit-scrollbar-track {
    background: var(--scrollbar--bg--enabled);
    border-radius: var(--scrollbar-radius);
  }
  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    background: var(--scrollbar--bar--enabled);
    border-radius: var(--scrollbar-radius);
    transition: color 0.2s ease;
  }
  &::-webkit-scrollbar-thumb:window-inactive {
    background: var(--scrollbar--bar--disabled);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--scrollbar--bar--hover);
  }
`

export const navCaptionCss = css`
  color: ${fromProps('captionColor')};
  font-size: 12px;
  padding: 0 8px;
  margin-top: 4px;
  cursor: default;
  white-space: nowrap;
  
  .nav-minimized > & {
    display: none;
  }

  .uif-nav-item-child & {
    padding: 0 12px;
  }
`

export const navSeparator = css`
  &:before {
    content: '';
    display: block;
    margin: 4px 8px;
    border-top: 1px solid var(--divider--bg--bold);
  }
`

export const navDividerCss = css`
  margin: 4px 8px;
  border-top: 1px solid var(--divider--bg--bold);

  .nav-minimized &,
  .nav-child-pop & {
    margin: 4px 0;
  }
`

export const newIndicatorCss = css`
  margin: 2px;
  translate: 0;
`
