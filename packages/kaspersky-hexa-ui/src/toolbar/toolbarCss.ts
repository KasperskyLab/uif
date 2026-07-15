import { Button } from '@src/button'
import buttonStyles from '../button/Button.module.scss'
import { Indicator } from '@src/indicator'
import { Space } from '@src/space'
import styled, { css } from 'styled-components'

import { ToolbarBlockSide } from './types'

export const ToolbarButton = styled(Button)``

export const ButtonIndicator = styled(Indicator)`
  position: absolute;
  top: -2px;
  right: -2px;
`

export const ButtonIconWrapper = styled.span`
  && {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

type StyledToolbarProps = {
  $sticky?: number,
  $autoDropdown?: boolean
}

export const toolbarCss = css<StyledToolbarProps>`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  z-index: 1;
  padding: 4px;
  gap: ${props => props.$autoDropdown ? 24 : 64}px;
  background: var(--toolbar--bg);
  border-radius: 8px;
  width: 100%;
  min-width: ${props => props.$autoDropdown ? 0 : 'max-content'};

  .toolbar-divider {
    vertical-align: middle;
    background: var(--divider--bg--bold);
    border: 0;
    display: inline-block;
    height: 24px;
    width: 1px;
    margin: 0 4px;
  }

  .kl-components-button-text {
    display: flex;
  }

  .ant-btn > span[role=img] + span,
  .ant-btn > span + span[role=img] {
    margin-left: 0px;
  }

  &.sticky {
    position: sticky;
    top: ${props => props.$sticky ? props.$sticky : 0}px;
    z-index: 2;
  }

  &&& .ant-input-affix-wrapper{
    width: 300px;
    color: var(--toolbar_search--text--placeholder_enabled);
    border-color: transparent;
    margin-right: 4px;
    margin-left: -15px;

    &.hexa-ui-collapsible-search {
      transform: scaleX(1);
      opacity: 1;
    }

    &.hexa-ui-collapsible-search-hidden {
      opacity: 0;
      width: 0px;
    }
  }
  
  &&& ${ToolbarButton}, .ant-btn {
    border-radius: 8px;
    &, &:focus {
      &:hover {
        background-color: var(--toolbar_button--bg--hover);
      }
      &:active,
      &.${buttonStyles.buttonPressed} {
        background-color: var(--toolbar_button--bg--active);
      }
    }
    
    &[disabled] {
      &, &:hover, &:active, &:focus {
        background: none;
      }
    }
  }
  
  .toolbar-search-toggle-button,
  .hexa-ui-toolbar-toggle-button {
    border: none;
    border-radius: 8px;
    background: none;
    color: var(--fg--neutral--primary);
    cursor: pointer;

    input:checked + .hexa-ui-toggle-button.hexa-ui-toggle-button {
      background-color: var(--bg--neutral--level_4);
      color: var(--fg--neutral--primary);
    }

    &:hover {
      background-color: var(--bg--neutral--level_3_hover);
    }

    &:hover input:checked + .hexa-ui-toggle-button.hexa-ui-toggle-button {
      background-color: var(--bg--neutral--level_3_hover);
      color: var(--fg--neutral--primary);
    }
  }

  .hexa-ui-toolbar-toggle-button {

    .hexa-ui-toggle-button {
      padding: 0 12px; 
    }

    input:checked + .hexa-ui-toggle-button .hexa-ui-toggle-button-text.hexa-ui-toggle-button-text {
      color: var(--fg--neutral--primary);
    }

    &:hover {
      background-color: var(--bg--neutral--level_3_hover);

      input:checked + .hexa-ui-toggle-button.hexa-ui-toggle-button {
        background-color: var(--bg--neutral--level_4_hover);

        &:active {
          background-color: var(--bg--neutral--level_4_active);
        }
      }
    }

    &:active {
      background-color: var(--bg--neutral--level_3_active);
    }

    input:disabled + .hexa-ui-toggle-button {
        &, &:hover, &:active, &:focus {
          background-color: var(--toolbar--bg);
        }
    }
  }
`

type StyledBlockProps = {
  $side?: ToolbarBlockSide,
  $oneElement?: boolean,
  $oneElementSelector?: string,
  $autoDropdown?: boolean
}

export const StyledBlock = styled(Space)<StyledBlockProps>`
  position: ${({ $autoDropdown }) => $autoDropdown ? 'relative' : 'absolute'};
  ${({ $side, $autoDropdown }) => $autoDropdown ? '' : `${$side}: 4px;`}
  ${({ $side, $autoDropdown }) => $side === 'left' && $autoDropdown && 'min-width: 0;'}
  ${({ $side, $autoDropdown }) => $autoDropdown && `
    flex-grow: ${$side === 'left' ? 1 : 'initial'};
    flex-shrink: ${$side === 'right' ? 0 : 'initial'};
    ${$side === 'left' ? 'overflow: hidden;' : ''}
  `}

  ${({ $oneElement, $oneElementSelector }) => $oneElement && `
    &, ${$oneElementSelector} {
      width: 100%;
    }
    & > * {
      justify-content: end;
    }
    position: unset;
    right: unset;
    left: unset;
  `}
`

type ToolbarItemWrapProps = { $isHidden?: boolean }

export const ToolbarItemWrap = styled.div<ToolbarItemWrapProps>`
  min-height: 100%;
  display: flex;
  align-items: center;
  ${({ $isHidden }) => $isHidden && 'opacity: 0; pointer-events: none;'}
`

export const AutoDropdownPart = styled.div<ToolbarItemWrapProps>`
  visibility: ${({ $isHidden }) => $isHidden ? 'hidden' : 'visible'};
  flex-shrink: 0;
  position: absolute;
  right: 0;
`

export const DropdownTriggerIconsWrapper = styled.div``
