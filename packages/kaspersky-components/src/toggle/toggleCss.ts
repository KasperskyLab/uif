import styled, { css } from 'styled-components'
import { ToggleCssConfig, ToggleProps } from './types'
import { getFromProps } from '@helpers/getFromProps'
import { SPACES } from '@design-system/theme/themes/variables'

const fromProps = getFromProps<ToggleCssConfig>()

export const toggleCss = css<{
  cssConfig: ToggleCssConfig,
  readonly?: boolean,
  labelPosition?: 'after' | 'before'
}>`
  background-color: ${fromProps('normal.bgOff')};
  box-shadow: none;
  ${({ labelPosition }) => {
    switch (labelPosition) {
      case 'before':
        return { order: 100, margin: `0 0 0 ${SPACES[4]}px;` }
      case 'after':
      default:
        return { order: 0, margin: `0 ${SPACES[4]}px 0 0;` }
    }
  }}
  
  &:last-child {
    translate: none;
  }

  &:not(.ant-switch-small) {
    height: 20px;
    min-width: 32px;
    
    & .ant-switch-handle {
      width: 16px;
      height: 16px;
    }

    & .ant-switch-loading-icon.anticon {
      top: 2px;
    }
  }
  
  & .ant-switch-handle {
    &::before {
      box-shadow: none;
      background-color: ${fromProps('normal.dotColorOff')};
    }
  }
  &.ant-switch-checked {
    background-color: ${fromProps('normal.bgOn')};
    & .ant-switch-handle::before {
      box-shadow: none;
      background-color: ${fromProps('normal.dotColorOn')};
    }

    &:not(.ant-switch-small) {
      & .ant-switch-handle {
        left: calc(100% - 16px - 2px);
      }
    }
  }
  & .ant-click-animating-node {
    display: none;
  }

  // hover
  &:hover:not(:disabled),
  .ant-toggle-wrapper:hover &:not(:disabled) {
    background-color: ${fromProps('hover.bgOff')};
    &.ant-switch-checked {
      background-color: ${fromProps('hover.bgOn')};
    }
  }

  // active
  &:hover:active,
  &:active,
  .ant-toggle-wrapper:active &,
  .ant-toggle-wrapper:hover:active & {
    &:not(:disabled) {
      background-color: ${fromProps('active.bgOff')};
      &.ant-switch-checked {
        background-color: ${fromProps('active.bgOn')};
        .ant-switch-handle:before {
          left: 0;
        }
      }
      .ant-switch-handle:before {
        right: 0;
      }
    }
  }

  // focus
  &:not(:disabled) {
    &, &:hover, &:active {
      &:focus, &:focus-within {
        outline: none;
        box-shadow: none;
      }
      &:focus-visible {
        outline: none;
        box-shadow: ${fromProps('focus.boxShadow')};
      }
    }
  }

  // disabled
  &.ant-switch-disabled, &:disabled {
    opacity: 1;
    background-color: ${fromProps('disabled.bgOff')};
    & .ant-switch-handle:before {
      background-color: ${fromProps('disabled.dotColorOff')};
      box-shadow: none;
    }
    &.ant-switch-checked {
      background-color: ${fromProps('disabled.bgOn')};
      & .ant-switch-handle:before {
        background-color: ${fromProps('disabled.dotColorOn')};
        box-shadow: none;
      }
    }
  }

  &.ant-switch-disabled ~ .toggle-label span {
    color: ${fromProps('disabled.color')};
  }

  // readonly
  ${props => props.readonly && `
  && {
    background-color: ${fromProps('readonly.bgOff')(props)};
    .ant-switch-handle::before {
      background-color: ${fromProps('readonly.dotColorOff')(props)};
    }

    &, * {
      cursor: default;
    }
  }
  &&.ant-switch-checked {
    background-color: ${fromProps('readonly.bgOn')(props)};
    .ant-switch-handle::before {
      background-color: ${fromProps('readonly.dotColorOn')(props)};
    }
  }

  && ~ .toggle-label span {
    color: ${fromProps('readonly.color')(props)};
  }
  `}
  
  &:not(:disabled) + .toggle-label {
    cursor: pointer;
    user-select: none;
  }

  &:disabled + .toggle-label {
    cursor: not-allowed;
    user-select: none;
  }
`

export const ToggleWrapper = styled.div<ToggleProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
