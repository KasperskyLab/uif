import styled, { css } from 'styled-components'
import { BORDER_RADIUS, SPACES } from '@design-system/theme/themes/variables'
import { getFromProps } from '@helpers/getFromProps'
import { ToolbarCssConfig, ToolbarBlockSide, StyledToolbarProps } from './types'
import { Button } from '@src/button'
import { Search } from '@src/search'
import { Space } from '@src/space'
import { Textbox } from '@src/input'
import { searchCss, searchAddonCss } from '@src/search/searchCss'

const fromProps = getFromProps<ToolbarCssConfig>()

export const ToolbarButton = styled(Button)``

export const ToolbarSearch = styled(Search)``

export const toolbarCss = css`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  z-index: 1;
  padding: ${SPACES[2]}px;
  gap: ${(props: StyledToolbarProps) => props.autoDropdown ? 24 : SPACES[32]}px;
  background: ${fromProps('background')};
  border-radius: ${BORDER_RADIUS[4]}px;
  width: 100%;
  min-width: ${(props: StyledToolbarProps) => props.autoDropdown ? 0 : 'max-content'};

  .toolbar-divider {
    vertical-align: middle;
    background: ${fromProps('divider.background')};
    border: 0;
    display: inline-block;
    height: 24px;
    width: 1px;
    margin: 0 ${SPACES[2]}px;
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
    top: ${(props: { cssConfig: ToolbarCssConfig, sticky?: number }) =>
    props.sticky ? props.sticky : 0}px;
    z-index: 2;
  }

  &&& ${ToolbarSearch}, &&& .ant-input-affix-wrapper {
    width: 300px;
    background-color: ${fromProps('input.normal.background')};
    border-color: transparent;
  }

  ${ToolbarButton}, .ant-btn {
    border-radius: ${BORDER_RADIUS[4]}px;
    &, &:focus {
      &:hover {
        background-color: ${fromProps('button.hover.background')};
      }
      &:active {
        background-color: ${fromProps('button.active.background')}
      }
    }
    
    &[disabled] {
      &, &:hover, &:active, &:focus {
        background: none;
      }
    }
  }
`

export const StyledBlock = styled(Space)<{
  side?: ToolbarBlockSide,
  oneElement?: boolean,
  oneElementSelector?: string,
  autoDropdown?: boolean
}>`
  position: ${({ autoDropdown }) => autoDropdown ? 'relative' : 'absolute'};
  ${({ side, autoDropdown }) => autoDropdown ? '' : `${side}: 4px;`}
  ${({ side, autoDropdown }) => side === 'left' && autoDropdown && 'min-width: 0;'}
  ${({ side, autoDropdown }) => autoDropdown && `
  flex-grow: ${side === 'left' ? 1 : 'initial'};
  flex-shrink: ${side === 'right' ? 0 : 'initial'};
  `}

  ${({ oneElement, oneElementSelector }) => oneElement && `
    &, ${oneElementSelector} {
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

export const ToolbarItemWrap = styled('div')<{
  isHidden?: boolean
}>`
min-height: 100%;
display: flex;
align-items: center;
transition: opacity .2s;
${({ isHidden }) => isHidden && 'opacity: 0; pointer-events: none;'}
`

export const AutoDropdownPart = styled('div')<{
  isHidden?: boolean
}>`
  visibility: ${({ isHidden }) => isHidden ? 'hidden' : 'visible'};
  flex-shrink: 0;
  position: absolute;
  right: 0;
`

export const StyledSearch = styled.div<{
  cssConfig: ToolbarCssConfig,
  visible?: boolean
}>`
  position: relative;
  padding: ${SPACES[3]}px ${SPACES[6]}px;
  background-color: ${fromProps('input.normal.background')};
  color: ${fromProps('input.normal.color')};
  border-radius: ${BORDER_RADIUS[4]}px;
  cursor: pointer;
  height: ${SPACES[16]}px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${fromProps('input.hover.background')};
  }
  &:focus-visible {
    box-shadow: ${fromProps('input.focus.boxShadow')};
    outline: none;
  }

  ${(props) => props.visible && `
    background-color: transparent;
    border-top-left-radius: unset;
    border-bottom-left-radius: unset;
    > div > * {
      z-index: 1;
    }
    &:focus-visible {
      box-shadow: none;
    }
  `}
`

export const StyledTextbox = styled(Textbox)<{
  cssConfig: ToolbarCssConfig,
  visible?: boolean
}>`
  ${searchCss}
  ${searchAddonCss}

  &&&&.ant-input {
    background-color: ${fromProps('input.normal.background')};
    border-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    padding-right: ${SPACES[16]}px;
    opacity: 0;
    transform: scaleX(0);
    transform-origin: 300px center;
    transition: all 0.3s, transform 150ms ease;
    
    ${(props) => props.visible && `
      transform: scaleX(1);
      opacity: 1;
     
      &:hover:not(:focus-within) {
        border-color: ${fromProps('input.hover.border')(props)};
      }
    `}
  }
`
