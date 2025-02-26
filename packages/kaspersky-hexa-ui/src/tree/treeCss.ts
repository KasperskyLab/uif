import { SPACES } from '@design-system/theme'
import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { StyledCheckboxWrapper } from '@src/checkbox/Checkbox'
import { css } from 'styled-components'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { ITreeProps, TreeCssConfig } from './types'

const fromProps = getFromProps<TreeCssConfig>()

const textSizes = getTextSizes(TextTypes.BTR3)

export const treeCss = css<{ cssConfig: TreeCssConfig, checkable?: boolean, disableNodeBg?: boolean, invalid?: boolean }>`
  && {
    background: none;
    border: 1px solid transparent;
    border-radius: 8px;

    ${props => props.invalid && `
      border-color: ${fromProps('error.border')(props)};
    `}

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
      color: ${fromProps('enabled.arrowColor')};
    }

    .ant-tree-switcher {
      width: 16px;
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

    .ant-tree-treenode {
      position: relative;
      margin: 1px 0;
      padding: ${SPACES[1]}px ${SPACES[5]}px ${SPACES[1]}px ${SPACES[1]}px;
      border-radius: 8px;
      transition-duration: 0.2s;
      border: 2px solid transparent;
      background: none;
      
      &:has(.ant-tree-drop-indicator) {
        &:after {
          height: 4px;
          display: block;
          content: '';
          background-color: ${fromProps('focus.color')};
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
          color: ${fromProps('enabled.color')};
        }

        &:hover {
          &,
          & .ant-checkbox:not(.ant-checkbox-indeterminate) .ant-checkbox-inner {
            background-color: transparent;
          }
        }

        &:active {
          &,
          & .ant-checkbox:not(.ant-checkbox-indeterminate) .ant-checkbox-inner {
            background-color: transparent;
          }
        }

        &.ant-tree-treenode-active {
          border-color: ${fromProps('focus.color')};
          background: none;

          .ant-tree-node-content-wrapper {
            background: transparent;
          }
        }

        &.ant-tree-treenode-disabled {
          background: none;

          .ant-tree-title {
            color: ${fromProps('disabled.color')};
          }
        }
      }

      &.ant-tree-treenode-selected,
      &.ant-tree-treenode-checkbox-checked {
        background-color: transparent;

        .ant-tree-title {
          color: ${fromProps('enabled.color')};
        }

        &:hover {
          & {
            background-color: transparent;
          }

          .ant-tree-title {
            color: ${(props: ITreeProps) =>
    props.disableNodeBg
      ? fromProps('enabled.color')
      : fromProps('hover.color')};
          }
        }

        &:active {
          & {
            background-color: transparent;
          }

          .ant-tree-title {
            color: ${(props: ITreeProps) =>
    props.disableNodeBg
      ? fromProps('enabled.color')
      : fromProps('active.color')};
          }
        }

        &.ant-tree-treenode-active {
          border-color: ${fromProps('focus.color')};
          background-color: transparent;

          .ant-tree-title {
            color: ${fromProps('enabled.color')};
          }

          .ant-tree-node-content-wrapper {
            background: transparent;
          }
        }

        &.ant-tree-treenode-disabled {
          background-color: transparent;

          .ant-tree-title {
            color: ${fromProps('disabled.color')};
          }
        }
      }

      .ant-tree-indent-unit {
        width: 18px;

        &:before {
          top: -8px;
          right: 10px;
          bottom: -2px;
          border-color: ${fromProps('enabled.lineColor')};
        }
      }

      &.dragging {
        background-color: transparent !important;

        .ant-tree-title {
          color: ${fromProps('enabled.color')};
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
          border-color: ${fromProps('enabled.lineColor')};
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

    }

    .ant-tree-checkbox {
      margin: 0 0 0 -20px;
      padding: 0;
      transform: translate(19px, 2px);
      opacity: 0;
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
    
    ${StyledCheckboxWrapper} {
      padding-top: 3px;
      
      + ${StyledCheckboxWrapper} {
        padding-top: 0;
      }
    }
  }
`
