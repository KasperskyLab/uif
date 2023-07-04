import { Button } from '../button'
import styled, { css } from 'styled-components'
import {
  BORDER_RADIUS,
  SPACES
} from '../../design-system/theme/themes/variables'
import { getFromProps } from '../../helpers/getFromProps'
import { SearchCssConfig } from './types'

const fromProps = getFromProps<SearchCssConfig>()

export const StyledContainer = styled.div`
  position: relative;
`

export const IconStyled = styled.span<{ cssConfig: SearchCssConfig }>`
  svg {
    height: ${SPACES[8]}px;
    width: ${SPACES[8]}px;
    fill: ${fromProps('mode.normal.iconColor')};
  }

  position: relative;
  display: flex;
`

export const addonAfterCss = css`
  .ant-input-group-addon {
    border-top-right-radius: ${BORDER_RADIUS[3]}px !important;
    border-bottom-right-radius: ${BORDER_RADIUS[3]}px !important;
  }
`
export const addonBeforeCss = css`
  .ant-input-group-addon {
    border-top-left-radius: ${BORDER_RADIUS[3]}px !important;
    border-bottom-left-radius: ${BORDER_RADIUS[3]}px !important;
  }
`

export const searchCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${fromProps('mode.normal.background')};
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  &:hover {
    border: 3px solid rgba(122, 167, 255, 1);
    border-right-width: 3px !important;
  }

  .ant-input-prefix {
    margin-right: 8px;
  }

  &.icon-after {
    .ant-input-group {
      display: flex;
    }
    .ant-input-group-addon {
      min-width: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ant-input:focus,
    .ant-input:active,
    .ant-input-focused {
      border-color: none;
      box-shadow: none;
      border-right-width: none;
      outline: 0;
    }

    .ant-input-affix-wrapper:focus,
    .ant-input-affix-wrapper-focused {
      border-color: none;
      border-right-color: none;
      box-shadow: none;
    }
  }

  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused {
    box-shadow: none !important;
    border-right-width: none !important;
    outline: 0;
  }

  &.btn-left {
    padding-left: 0px;
  }

  &.btn-right {
    .ant-input-group-addon {
      border-left: 0px !important;
      button {
        border: none !important;
        box-shadow: none !important;
      }
    }

    .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
      border-right: 0px !important;
    }
  }
  &.custom-search {
    .ant-input-wrapper:hover .ant-input-affix-wrapper {
      border: 3px solid ${fromProps('mode.normal.borderColor')};
    }
    .ant-input-wrapper:hover .ant-input-group-addon {
      border: 3px solid ${fromProps('mode.normal.borderColor')};
    }
    .ant-input-wrapper:focus .ant-input-affix-wrapper {
      border: 3px solid ${fromProps('mode.normal.borderColor')};
    }
    .ant-input-wrapper:focus .ant-input-group-addon {
      border: 3px solid ${fromProps('mode.normal.borderColor')};
    }
    .ant-input-wrapper:active .ant-input-group-addon {
      border: 3px solid ${fromProps('mode.normal.borderColor')};
    }
    .ant-input-affix-wrapper:focus ~ .ant-input-group-addon {
      border: 3px solid ${fromProps('mode.normal.borderColor')};
    }

    .ant-input-affix-wrapper-focused ~ .ant-input-group-addon {
      border: 3px solid ${fromProps('mode.normal.borderColor')};
    }
    .ant-input-affix-wrapper-focused + .ant-input-group-addon {
      border: 3px solid ${fromProps('mode.normal.borderColor')};
    }
  }

  .ant-input-group-addon {
    padding: 0px;
    background-color: transparent;
  }
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border: 3px solid ${fromProps('mode.normal.borderColor')};
    border-right-width: 3px !important;
    z-index: 1;
  }

  &&.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border: 3px solid ${fromProps('mode.normal.borderColor')} !important;
    border-right-width: 3px !important;
    z-index: 1;
  }

  &&.ant-input-affix-wrapper-focused {
    border: 3px solid ${fromProps('mode.normal.borderColor')} !important;
    box-shadow: none !important;
  }
  .ant-input-affix-wrapper-focused {
    border: 3px solid ${fromProps('mode.normal.borderColor')} !important;
    box-shadow: none !important;
  }
`

export const resultCss = css`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: ${SPACES[12]}px;
  margin-top: ${SPACES[4]}px;
  gap: ${SPACES[8]}px;
  background-color: ${fromProps('mode.normal.background')};
  border-radius: ${BORDER_RADIUS[4]}px;
  box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2),
    0px 0px 1px rgba(9, 30, 66, 0.31);
`

export const buttonCss = css`
  height: 26px !important;

  .kl-components-button-text {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

export const buttonLeftCss = css`
  z-index: 1;
  border-radius: none !important;
`

export const buttonRightCss = css`
  z-index: 1;
  border: 1px solid inherit !important;
  border-radius: none !important;
  border-left: 0px !important;
`

export const iconButtonCss = css`
  padding: 0;
  height: ${SPACES[16]}px;
  width: ${SPACES[16]}px;
`

export const buttonNoFocusOutlineCss = css`
  &:focus:before {
    box-shadow: none;
  }
`

export const buttonSearchCss = css`
  ${buttonRightCss}
  ${buttonNoFocusOutlineCss}
  ${buttonCss}
  
  padding-left: ${SPACES[8]}px;
  padding-right: ${SPACES[8]}px;
`
export const leftIconButtonCss = css`
  ${buttonLeftCss}
  ${iconButtonCss}
  ${buttonNoFocusOutlineCss}
  ${buttonCss}

  & .icon {
    margin-left: -7px;
  }
`
export const rightIconButtonCss = css`
  ${buttonRightCss}
  ${iconButtonCss}
  ${buttonNoFocusOutlineCss}

  & .icon {
    margin-left: -7px;
  }
`
export const dropdownButtonCss = css`
  ${buttonLeftCss}
  ${buttonNoFocusOutlineCss}
  ${buttonCss}

  padding-left: ${SPACES[8]}px;
  padding-right: ${SPACES[8]}px;

  .icon {
    margin-left: ${SPACES[4]}px;
  }
`

export const StyledButtonSearch = styled(Button)`
  ${buttonSearchCss}
`
export const StyledRightIconButton = styled(Button)`
  ${rightIconButtonCss}
`
export const StyledDropdownButton = styled(Button)`
  ${dropdownButtonCss}
`
