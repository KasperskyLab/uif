import { css } from 'styled-components'

export const navItemCss = css`
  --effects--elevation--medium--1: 0px 8px 12px 0px;
  --effects--elevation--medium--2: 0px 0px 1px 0px;
  --menu-level-offset-2: 24px; 
  --menu-level-offset-3: 52px;
  --base-menu-item-height: 20px;
  --menu-item-height: 32px;

  color: var(--menu_item--text--label--enabled);

  .nav-minimized>& {
    width: var(--menu-item-height);
  }
  
  .uif-nav-item-entry {
    display: flex;
    flex-wrap: nowrap;
    align-items: normal;
    min-height: var(--menu-item-height);
    border-radius: 8px;
    padding: var(--spacing--padding_sm) var(--spacing--padding_m);
    gap: 8px;
    user-select: none;
    cursor: pointer;
    
    .uif-nav-fav-add {
      opacity: 0;
      display: flex;
      align-items: center;
    }
    
    &.uif-nav-item-user {
      height: auto;
      padding: 3px 8px;
      cursor: pointer;
      
      .uif-nav-item-entry-icon {
        align-self: flex-start;
      }
    }
    
    .uif-nav-item-entry-role {
      font-size: 12px;
      color: var(--menu_item--text--label--disabled);
    }

    &:hover {
      background: var(--menu_item--bg--hover);
      
      .uif-nav-fav-add {
        opacity: 1;
      }
    }

    &:active {
      background: var(--menu_item--bg--active);
    }
  }

  .uif-nav-item-entry-icon {
    display: flex;
    align-items: center;
    min-height: var(--base-menu-item-height);
    height: var(--base-menu-item-height);
  }

  .uif-nav-item-entry-title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    line-height: var(--base-menu-item-height);
    
    .title-ellipsis {
      white-space: nowrap;
    }
  }
  
  .uif-nav-item-entry-props {
    display: flex;
    align-items: center;
    gap: 2px;
    min-height: var(--base-menu-item-height);
    height: var(--base-menu-item-height);
  }

  .uif-nav-item-entry-arrow {
    transition: all ease 150ms;
  }

  .uif-nav-item-child {
    margin-left: 0px;
    transition: grid-template-rows ease 150ms;
    display: grid;
    grid-template-rows: 0fr;

    .uif-nav-item-entry-icon {
      display: none;
    }
  }

  .uif-nav-item-child-wrapper {
    overflow: hidden;
    flex-direction: column;
    gap: 2px;
    margin-top: 2px;
    display: none;
  }

  .uif-nav-item-child .uif-nav-item-entry-title {
    margin-left: var(--menu-level-offset-2);
  }

  .uif-nav-item-child .uif-nav-item-child .uif-nav-item-entry-title {
    margin-left: var(--menu-level-offset-3);
  }
  
  &.expanded,
  .expanded {
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

  &:has(.active) {
    > .uif-nav-item-entry {
      color: var(--menu_item--text--label--enabled_selected);
    }
  }

  &.active,
  .active {
    color: var(--menu_item--text--label--enabled_selected);
    background: var(--menu_item--bg--enabled_selected);
    
    &:hover {
      color: var(--menu_item--text--label--enabled_selected);
      background: var(--menu_item--bg--hover_selected);
    }
    &:active {
      color: var(--menu_item--text--label--enabled_selected);
      background:var(--menu_item--bg--active_selected);
    }
  }

  &.disabled {
    &,
    &:hover,
    &:active {
      color: var(--menu_item--text--label--disabled);
      background: var(--menu_item--bg--disabled);
    }
  }

  .nav-minimized > &.uif-nav-item > .uif-nav-item-entry {
    > .uif-nav-item-entry-arrow,
    > .uif-nav-item-entry-title:not(.title-wo-icon),
    > .uif-nav-item-entry-props,
    > .uif-nav-fav-add {
      display: none;
    }

    > .title-wo-icon {
      white-space: nowrap;
    }
  }

  .nav-minimized &,
  .nav-child-pop & {
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

    &.popup-expanded,
    .popup-expanded,
    &:has(.popup-expanded) {
      & > .uif-nav-item-child {
        opacity: 1;
        display: block;
        
        > .uif-nav-item-child-wrapper {
          display: flex;
          width: 280px;
        }
        
        .uif-nav-item-entry-title {
          display: flex;
          align-items: center;
        } 
      }
    }

    &:has(.active) {
      > .uif-nav-item-entry {
        color: var(--menu_item--text--label--enabled_selected);
      }
    }

    .uif-nav-item-child {
      position: absolute;
      z-index: 2;
      left: 100%;
      margin-top: calc(var(--menu-item-height) * -1);
      margin-left: 6px;
      
      .uif-nav-item-child-wrapper {
        background-color: var(--dropdown--bg);
        box-shadow: var(--effects--elevation--medium--1) var(--elevation--medium--2), var(--effects--elevation--medium--2) var(--elevation--medium--1);
        border-radius: 8px;
        translate: 1px 0;
      }
        
      .uif-nav-item-entry-title {
        margin: 0;
        translate: 0;
      }
    }
  }

  .nav-minimized & {
    .uif-nav-item-user-entry-wrapper {
      display: none;
    }
    
    .uif-nav-item-entry.uif-nav-item-user {
      height: var(--menu-item-height);
      
      .uif-nav-item-entry-icon {
        margin: 0;
        align-self: unset;
      }
    }
  }

  .nav-child-pop & {
    .uif-nav-item-entry-title {
      display: flex;
      align-items: center;
    }
    
    &.uif-nav-item.popup-expanded {
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
  --padding: 16px;
  --scrollbar-radius: 4px;
  --scrollbar-size: 8px;
  --scrollbar-padding: calc(var(--padding) - var(--scrollbar-size) - var(--scrollbar-margin));
  --scrollbar-margin: 2px;

  padding: 0 var(--scrollbar-padding) 0 var(--padding);
  margin-right: var(--scrollbar-margin);
  display: flex;
  flex-direction: column;
  gap: 2px;
  scrollbar-gutter: stable;

  &.nav-scrollable {
    overflow-y: auto;
    overflow-x: hidden;
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
  color: var(--menu--text--heading);
  font-size: 12px;
  padding: 0 8px;
  margin-top: 4px;
  cursor: default;

  &.caption-root {
    border-bottom: 1px solid var(--divider--bg--light);
    padding: 0 0 4px 0;
    margin: 16px 8px 4px 8px;
  }
  
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
    border-top: 1px solid var(--divider--bg--light);
  }
`

export const navDividerCss = css`
  margin: 6px 8px;
  border-top: 1px solid var(--divider--bg--light);

  .nav-minimized > & {
    display: none;
  }

  .nav-child-pop & {
    margin: 4px 0;
  }
`
