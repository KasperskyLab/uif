import { getTextSizes } from '@design-system/tokens'
import { StyledCheckboxWrapper } from '@src/checkbox/Checkbox'
import { css } from 'styled-components'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { ITreeProps } from './types'

const getLinearGradient = (color: string) => `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, ${color} 75%);`

const textSizes = getTextSizes(TextTypes.BTR3)

export const treeCss = css<{ checkable?: boolean, interactive?: boolean, disableNodeBg?: boolean }>`
  && {
    background: none;
    border: none;
    border-radius: 8px;

    &.ant-tree-show-line {
      .anticon-file {
        opacity: 0;
      }

      .ant-tree-switcher-noop {
        position: relative;

        &:before {
          content: '';
          display: block;
          position: absolute;
          height: 1px;
          top: 11px;
          left: -2px;
          right: 6px;
          border-bottom: 1px solid var(--level--bg--line--enabled);
        }
      }

      .ant-tree-indent-unit:last-of-type {
          &:after {
            content: '';
            position: absolute;
            display: block;
            width: 7px;
            height: 1px;
            top: 11px;
            left: 9px;
            bottom: 0;
            background-color: var(--level--bg--line--enabled);
          }
        }
    }

    &.ant-tree-focused {
      background: transparent;
    }

    .ant-tree-drop-indicator {
      display: none;
    }
    
    .ant-tree-list .ant-tree-node-content-wrapper .ant-tree-title {
      font-family: ${textSizes.fontFamily};
      font-size: ${textSizes.fontSize};
      line-height: ${textSizes.lineHeight};
      font-weight: ${textSizes.fontWeight};
      font-style: ${textSizes.fontStyle};
      letter-spacing: ${textSizes.letterSpacing};
      flex: 1;
      display: flex;
    }

    .ant-tree-list .ant-tree-node-content-wrapper:hover,
    .ant-tree-list .ant-tree-node-selected {
      background-color: transparent;
    }

    .ant-tree-node-content-wrapper {
      padding-left: 3px;
      cursor: ${(props: ITreeProps) => props.disableNodeBg ? 'default' : 'pointer'};
      flex: 1;
      display: flex;
    }

    .ant-tree-checkbox + .ant-tree-node-content-wrapper {
      padding: 0;
      cursor: pointer;
    }

    .ant-tree-draggable-icon,
    .ant-tree-switcher-icon {
      opacity: 1;
      color: var(--action_button--icon--ghost--enabled);
    }

    .ant-tree-switcher {
      width: 22px;
      padding-right: 4px;
      background: none;
    }

    .ant-tree-switcher-loading-icon {
      display: none;
    }

    .ant-tree-list {
      .ant-tree-treenode {
        width: 100%;
      }
    }

    .ant-tree-list-holder-inner .ant-tree-treenode {
      gap: 2px;
    }

    .ant-tree-treenode {
      position: relative;
      padding: 2px;
      border-radius: 8px;
      border: 2px solid transparent;
      background: none;
      
      &:has(.ant-tree-drop-indicator) {
        &:after {
          height: 4px;
          display: block;
          content: '';
          background-color: var(--focus--stroke);
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
        }

        &.drag-over-gap-top:after {
          bottom: unset;
          top: -2px;
        }
      }

      &:not(.ant-tree-treenode-selected):not(.ant-tree-treenode-checkbox-checked) {
        .ant-tree-title {
          color: var(--tree--text--enabled);
        }

        ${(props) => props.interactive && `
          &:hover {
            background-color: var(--submenu_item--bg--hover);
          }

          &:active {
            background-color: var(--submenu_item--bg--active);
          }
        `}

        &.ant-tree-treenode-active {
          border-color: var(--focus--stroke);
          background: none;

          .ant-tree-node-content-wrapper {
            background: transparent;
          }
        }

        &.ant-tree-treenode-disabled {
          background: none;

          .ant-tree-title {
            color: var(--tree--text--disabled);
          }
        }
      }

      &.ant-tree-treenode-selected,
      &.ant-tree-treenode-checkbox-checked {
        .ant-tree-title {
          color: var(--tree--text--enabled);
        }

        &:hover .ant-tree-title {
          color: ${(props: ITreeProps) =>
    props.disableNodeBg
      ? 'var(--tree--text--enabled)'
      : 'var(--tree--text--hover)'};
        }

        &:active .ant-tree-title {
          color: ${(props: ITreeProps) =>
    props.disableNodeBg
      ? 'var(--tree--text--enabled)'
      : 'var(--tree--text--active)'};
        }

        &.ant-tree-treenode-active {
          border-color: var(--focus--stroke);
          background-color: transparent;

          .ant-tree-title {
            color: var(--tree--text--enabled);
          }

          .ant-tree-node-content-wrapper {
            background: transparent;
          }
        }

        &.ant-tree-treenode-disabled {
          &, &:hover, &:active {
            background-color: transparent;

            .ant-tree-title {
              color: var(--tree--text--disabled);
            }
          }
        }
      }

      &.ant-tree-treenode-checkbox-checked {
        background-color: var(--submenu_item--bg--enabled);
        .ant-tree-title, .ant-tree-iconEle > svg {
          color: var(--tree--text--enabled);
        }

        ${(props) => props.interactive && `
          &:hover {
            background-color: var(--submenu_item--bg--hover);
            .ant-tree-title, .ant-tree-iconEle > svg {
              color: var(--tree--text--hover);
            }
          }

          &:active {
            background-color: var(--submenu_item--bg--active);
            .ant-tree-title, .ant-tree-iconEle > svg {
              color: var(--tree--text--active);
            }
          }
        `}
      }

      &.ant-tree-treenode-selected {
        background-color: var(--submenu_item--bg--enabled_selected);
        .ant-tree-title, .ant-tree-iconEle > svg {
          color: var(--submenu_item--text--enabled_selected);
        }

        &:hover {
          background-color: var(--submenu_item--bg--hover_selected);
          .ant-tree-title, .ant-tree-iconEle > svg {
            color: var(--submenu_item--text--hover_selected);
          }
        }

        &:active {
          background-color: var(--submenu_item--bg--active_selected);
          .ant-tree-title, .ant-tree-iconEle > svg {
            color: var(--submenu_item--text--active_selected);
          }
        }
      }

      .ant-tree-indent {

        .ant-tree-indent-unit {
          width: 18px;

          &:before {
            top: -8px;
            right: 9px;
            bottom: -7px;
            border-color: var(--level--bg--line--enabled);
          }
        }

        .ant-tree-indent-unit.ant-tree-indent-unit-end {
          width: 18px;

          &:before {
            position: absolute;
            display: block;
            content: '';
            top: -8px;
            right: 9px;
            bottom: -7px;
            border-color: var(--level--bg--line--enabled);
          }
        }

        
      }

      & .ant-tree-indent {
        &:has(.ant-tree-indent-unit-end.ant-tree-indent-unit-start) {
         .ant-tree-indent-unit-end:not(.ant-tree-indent-unit-start):not(:last-child) {
            &:before {
              opacity: 0;
            }
          }
        }
      }

      &.ant-tree-treenode-leaf-last .ant-tree-indent {
        .ant-tree-indent-unit:not(.ant-tree-indent-unit-end:last-of-type).ant-tree-indent-unit-end {
          &:before {
            opacity: 0;
          }
        }

        &:has(.ant-tree-indent-unit-end + .ant-tree-indent-unit:not(.ant-tree-indent-unit-end)) {
          .ant-tree-indent-unit-end {
            &:before {
              opacity: 1;
            }
          }
        }

        
        .ant-tree-indent-unit-start ~ .ant-tree-indent-unit-end {
          &:before {
            opacity: 1;
          }
        }

        .ant-tree-indent-unit:last-child.ant-tree-indent-unit-end,
        .ant-tree-indent-unit:last-child.ant-tree-indent-unit-start:not(:first-child) {
          &:before {
            bottom: 12px;
          }
        }
      }

      &.dragging {
        background-color: transparent !important;

        .ant-tree-title {
          color: var(--tree--text--enabled);
        }

        & > * {
          opacity: 0;
        }

        &:after {
          display: none;
        }
      }

      &:not(.ant-tree-treenode-draggable) .ant-tree-draggable-icon {
        opacity: 0.5;
      }

      &[draggable="true"] {
        .ant-tree-indent-unit {
          &:before {
            top: -10px;
            right: 6px;
          }

          &:last-of-type {
            &:after {
              left: 12px;
            }
          }
        }

        .ant-tree-indent-unit.ant-tree-indent-unit-end {
          &:before {
            right: 6px;
          }
        }
      }

      .ant-tree-switcher-icon {
        transform: rotate(0) translateY(-1px);
        transition: transform 0.25s ease-in-out;
      }

      &.ant-tree-treenode-switcher-close {
        .ant-tree-switcher {
          .ant-tree-switcher-icon {
            transform: rotate(-90deg) translate(1px, 0);
          }
        }
      }

      .ant-tree-switcher-leaf-line {
        &:before {
          bottom: -2px;
          right: 8px;
          top: -8px;
          border-color: var(--level--bg--line--enabled);
        }

        &:after {
          display: none;
        }
      }

      &.ant-tree-treenode-leaf-last {
        .ant-tree-switcher-leaf-line {
          &:before {
            top: -8px !important;
            height: 23px !important;
          }
        }
      }

      &.ant-tree-treenode-checkbox-indeterminate .kl-v6-checkbox-icon-normal,
      &:not(.ant-tree-treenode-checkbox-indeterminate)
        .kl-v6-checkbox-icon-indeterminate {
        display: none;
      }

      .ant-radio-group {
        transform: translateY(2px);
      }

      .hexa-ui-tree-node-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        white-space: pre;

        & > span {
          margin-right: 4px;
        }

        .hexa-ui-tree-node-action {
          opacity: 0;
          position: sticky;
          right: -8px;
          padding: 4px 4px 4px 2px;
          transition: none;

          ::before {
            display: block;
            content: '';
            position: absolute;
            height: 100%;
            left: -8px;
            width: 10px;
          }
        }
      }

      &.ant-tree-treenode:hover .hexa-ui-tree-node-action {
        opacity: 1;
        background-color: var(--submenu_item--bg--hover);
        ::before {
          background: ${getLinearGradient('var(--submenu_item--bg--hover)')};
        }
      }

      &.ant-tree-treenode:active .hexa-ui-tree-node-action {
        background-color: var(--submenu_item--bg--active);
        ::before {
          background: ${getLinearGradient('var(--submenu_item--bg--active)')};
        }
      }

      &.ant-tree-treenode.ant-tree-treenode-selected .hexa-ui-tree-node-action {
        background-color: var(--submenu_item--bg--hover_selected);
        ::before {
          background: ${getLinearGradient('var(--submenu_item--bg--hover_selected)')};
        }
      }

      &.ant-tree-treenode.ant-tree-treenode-selected:active .hexa-ui-tree-node-action {
        background-color: var(--submenu_item--bg--active_selected);
        ::before {
          background: ${getLinearGradient('var(--submenu_item--bg--active_selected)')};
        }
      }

      &.ant-tree-treenode.ant-tree-treenode-disabled .hexa-ui-tree-node-action {
        background-color: var(--submenu_item--bg--enabled);
        ::before {
          background: ${getLinearGradient('var(--submenu_item--bg--enabled)')};
        }
      }
    }

    .ant-tree-checkbox {
      margin: 0 0 0 -16px;
      padding: 0;
      transform: translate(19px, 2px);
      opacity: 0;
    }

    .ant-tree-iconEle:not(:empty) + .ant-tree-title {
      padding-left: 4px;
    }

    .ant-tree-node-content-wrapper .ant-tree-iconEle {
      width: 16px;
      height: 16px;

      > svg {
        margin: 4px 0 2px 0;
      }

      .ant-checkbox {
        top: 2px;
      }
    }

    .ant-checkbox-wrapper {
      & + .kl-v6-checkbox-icon-indeterminate {
        margin-left: 0;
      }
    }

    .ant-checkbox-checked::after {
      border: none;
    }
    
    ${StyledCheckboxWrapper} {
      padding-top: 3px;
      
      + ${StyledCheckboxWrapper} {
        padding-top: 0;
      }
    }
  }
`
