import { css } from 'styled-components'
import { getFromProps } from '@helpers/getFromProps'
import { SPACES } from '@design-system/theme'
import { ITreeProps, TreeCssConfig } from './types'
import { getTextSizes, TextTypes } from '@design-system/tokens'

const fromProps = getFromProps<TreeCssConfig>()

const textSizes = getTextSizes(TextTypes.BTR3)

export const treeCss = css<{ cssConfig: TreeCssConfig, checkable?: boolean, disableNodeBg?: boolean }>`
  && {
    background: none;
    border-radius: 8px;

    &.ant-tree-focused {
      background: ${fromProps('focus.background')};
    }

    .ant-tree-drop-indicator {
      background-color: ${fromProps('dropIndicator.background')};

      &:after {
        border-color: ${fromProps('dropIndicator.background')};
      }
    }

    .ant-tree-list .ant-tree-node-content-wrapper .ant-tree-title {
      font-family: ${textSizes.fontFamily};
      font-size: ${textSizes.fontSize};
      line-height: ${textSizes.lineHeight};
      font-weight: ${textSizes.fontWeight};
      font-style: ${textSizes.fontStyle};
      letter-spacing: ${textSizes.letterSpacing};
    }

    .ant-tree-list .ant-tree-node-content-wrapper:hover,
    .ant-tree-list .ant-tree-node-selected {
      background-color: transparent;
    }

    .ant-tree-node-content-wrapper {
      padding-left: 3px;
      cursor: ${(props: ITreeProps) =>
        props.disableNodeBg ? 'default' : 'pointer'};
      flex: 1;
    }

    .ant-tree-draggable-icon + .ant-tree-switcher-noop {
      display: none;
    }

    .ant-tree-checkbox + .ant-tree-node-content-wrapper {
      padding-left: ${SPACES[3]}px;
      cursor: pointer;
    }

    .anticon-file,
    .ant-tree-draggable-icon,
    .ant-tree-switcher-icon {
      opacity: 1;
      color: ${fromProps('normal.arrowColor')};
    }

    .ant-tree-switcher {
      width: 16px;
      background: none;
    }

    .ant-tree-switcher-loading-icon {
      display: none;
    }

    .ant-tree-treenode {
      position: relative;
      margin: 1px 0;
      padding: ${SPACES[1]}px ${SPACES[5]}px ${SPACES[1]}px ${SPACES[1]}px;
      width: 100%;
      border-radius: 8px;
      transition-duration: 0.2s;
      border: 2px solid transparent;
      background: none;

      &:not(.ant-tree-treenode-selected):not(.ant-tree-treenode-checkbox-checked) {
        .ant-tree-title {
          color: ${fromProps('treeNode.unselected.normal.textColor')};
        }

        &:hover {
          &,
          & .ant-checkbox-inner {
            background-color: ${(props: ITreeProps) =>
              !props.disableNodeBg && (props.selectable || props.checkable)
                ? fromProps('treeNode.unselected.hover.background')
                : fromProps('treeNode.unselected.normal.background')};
          }
        }

        &:active {
          &,
          & .ant-checkbox-inner {
            background-color: ${(props: ITreeProps) =>
              !props.disableNodeBg &&
              (props.selectable || props.checkable)
                ? fromProps('treeNode.unselected.active.background')
                : fromProps('treeNode.unselected.normal.background')};
          }
        }

        &.ant-tree-treenode-active {
          border-color: ${fromProps('treeNode.unselected.focus.borderColor')};
          background: none;

          .ant-tree-node-content-wrapper {
            background: transparent;
          }
        }

        &.ant-tree-treenode-disabled {
          background: none;

          .ant-tree-title {
            color: ${fromProps('treeNode.unselected.disabled.textColor')};
          }
        }
      }

      &.ant-tree-treenode-selected,
      &.ant-tree-treenode-checkbox-checked {
        background-color: ${(props: ITreeProps) =>
          props.disableNodeBg
            ? fromProps('treeNode.unselected.normal.background')
            : fromProps('treeNode.selected.normal.background')};

        .ant-tree-title {
          color: ${(props: ITreeProps) =>
            props.disableNodeBg
              ? fromProps('treeNode.unselected.normal.textColor')
              : fromProps('treeNode.selected.normal.textColor')};
        }

        &:hover {
          & {
            background-color: ${(props: ITreeProps) =>
              props.disableNodeBg
                ? fromProps('treeNode.unselected.normal.background')
                : fromProps('treeNode.selected.hover.background')};
          }

          .ant-tree-title {
            color: ${(props: ITreeProps) =>
              props.disableNodeBg
                ? fromProps('treeNode.unselected.normal.textColor')
                : fromProps('treeNode.selected.hover.textColor')};
          }
        }

        &:active {
          & {
            background-color: ${(props: ITreeProps) =>
              props.disableNodeBg
                ? fromProps('treeNode.unselected.normal.background')
                : fromProps('treeNode.selected.active.background')};
          }

          .ant-tree-title {
            color: ${(props: ITreeProps) =>
              props.disableNodeBg
                ? fromProps('treeNode.unselected.normal.textColor')
                : fromProps('treeNode.selected.active.textColor')};
          }
        }

        &.ant-tree-treenode-active {
          border-color: ${fromProps('treeNode.selected.focus.borderColor')};
          background-color: ${fromProps('treeNode.selected.normal.background')};

          .ant-tree-title {
            color: ${fromProps('treeNode.selected.normal.textColor')};
          }

          .ant-tree-node-content-wrapper {
            background: transparent;
          }
        }

        &.ant-tree-treenode-disabled {
          background-color: ${(props: ITreeProps) => props.disableNodeBg ? fromProps('treeNode.unselected.disabled.background') : fromProps('treeNode.selected.disabled.background')};

          .ant-tree-title {
            color: ${(props: ITreeProps) => props.disableNodeBg ? fromProps('treeNode.unselected.disabled.textColor') : fromProps('treeNode.selected.disabled.textColor')};
          }
        }
      }

      .ant-tree-indent-unit {
        width: 18px;

        &:before {
          top: -8px;
          right: 10px;
          bottom: -2px;
          border-color: ${fromProps('normal.lineColor')};
        }
      }

      &.dragging {
        background-color: ${fromProps('treeNode.unselected.drag.background')};

        .ant-tree-title {
          color: ${fromProps('treeNode.unselected.drag.textColor')};
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
            right: ${SPACES[3]}px;
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
          border-color: ${fromProps('normal.lineColor')};
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

      &:not(.ant-tree-treenode-checkbox-checked) {
        .ant-radio-wrapper.ant-radio-wrapper-checked {
          display: none;
        }
      }

      &.ant-tree-treenode-checkbox-checked {
        .ant-radio-wrapper:not(.ant-radio-wrapper-checked) {
          display: none;
        }
      }
    }

    .ant-tree-checkbox {
      margin: 0 0 0 -20px;
      padding: 0;
      transform: translate(19px, 2px);
      opacity: 0;
      z-index: 2;
    }

    .ant-tree-iconEle:not(:empty) + .ant-tree-title {
      padding-left: ${SPACES[2]}px;
    }

    .ant-tree-node-content-wrapper .ant-tree-iconEle {
      width: 14px;
      height: 14px;

      .ant-checkbox {
        top: ${SPACES[1]}px;
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
  }
`
