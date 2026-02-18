import { css } from 'styled-components'

const PanelCSS = css`
  --panel-padding: var(--spacing--padding_xl);

  width: var(--panel-size, 280px);
  min-width: 200px;
  max-width: 80%;
  position: relative;
  background-color: var(--panel--bg--enabled);
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing--gap_section);
  padding: var(--panel-padding) 0;
  
  &.panel-hidden {
    display: none;
  }
  
  &.panel-medium {
    --panel-padding: var(--spacing--padding_l);
  }

  &.panel-horizontal {
    width: auto;
    height: var(--panel-size, 180px);
  }

  &.panel-resizable {
    > .hexa-ui-panel-handle {
      cursor: col-resize;

      &:before,
      &:after {
        display: block;
      }

      &:hover {
        &:after,
        &:before {
          background-color: var(--panel--border--hover);
        }
      }
    }

    &.panel-horizontal {
      > .hexa-ui-panel-handle {
        cursor: row-resize;
      }
    }
  }

  &.panel-horizontal {
    max-width: unset;
    min-height: 135px;
    max-height: 80%;
  }

  &.panel-parent {
    padding: 0;

    > .hexa-ui-panel-handle {
      z-index: 2;
    }

    > .hexa-ui-panel-container {
      padding: 0;
      margin: 0;
      scrollbar-gutter: auto;
      justify-content: stretch;
      flex-direction: column;

      > .hexa-ui-panel {
        width: auto;
        max-width: unset;
        min-height: 24px;
        max-height: 90%;

        &.panel-not-resizable {
          flex: auto;

          .hexa-ui-panel-handle {
            display: none;
          }
        }
      }
    }

    &.panel-horizontal {
      > .hexa-ui-panel-container {
        flex-direction: row;

        > .hexa-ui-panel {
          width: var(--panel-size, 280px);
          min-width: 200px;
          max-width: 80%;
        }
      }
    }
  }

  .hexa-ui-panel-handle {
    position: absolute;
    display: flex;
    left: 0;
    top: 0;
    bottom: 0;
    width: 7px;
    align-items: center;
    user-select: none;
    z-index: 1;
    

    &:before {
      content: '';
      width: 1px;
      background-color: var(--panel--border--enabled);
      align-self: normal;
    }

    &:after {
      position: fixed;
      content: '';
      display: none;
      width: 3px;
      height: 40px;
      border-radius: 6px;
      background-color: var(--panel--border--enabled);
      translate: -1px 0;
    }

    &.handle-right {
      left: auto;
      right: 0;
      flex-direction: row-reverse;

      &:after {
        translate: 1px 0;
      }
    }

    &.handle-top,
    &.handle-bottom {
      left: 0;
      right: 0;
      top: 0;
      width: auto;
      height: 8px;
      flex-direction: column;

      &:before {
        width: auto;
        height: 1px;
      }

      &:after {
        width: 40px;
        height: 3px;
        translate: 0 -1px;
      }
    }

    &.handle-bottom {
      top: auto;
      bottom: 0;
      flex-direction: column-reverse;

      &:after {
        translate: 0 1px;
      }
    }
  }

  .hexa-ui-panel-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 var(--panel-padding);
    gap: 8px;

    &:empty {
      display: none;
    }

    .hexa-ui-panel-header-title {
      margin-inline-end: auto;
    }
  }

  .hexa-ui-panel-container {
    flex: 1 1 0;
    display: flex;
    overflow: auto;
    padding: 0 8px 0 var(--panel-padding);
    margin-right: 8px;
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar--bar--enabled);
      border-radius: 6px;
    }
  }

  .hexa-ui-panel-bottom {
    padding: 0 var(--panel-padding);
  }
`
export default PanelCSS
