import { css } from 'styled-components'
import { BORDER_RADIUS } from '@design-system/theme'
import { TextboxProps } from '@src/input/types'

export const searchAddonCss = css<TextboxProps>`
  
  ${({ addonAfter }) =>
    addonAfter && `
      .ant-input-group-addon {
        border-top-right-radius: ${BORDER_RADIUS[3]}px !important;
        border-bottom-right-radius: ${BORDER_RADIUS[3]}px !important;
      }
    `
  }
  ${({ addonBefore }) =>
    addonBefore && `
      .ant-input-group-addon {
        border-top-left-radius: ${BORDER_RADIUS[3]}px !important;
        border-bottom-left-radius: ${BORDER_RADIUS[3]}px !important;
      }
    `
  }
`

export const searchCss = css`
  overflow: hidden;
  
  .ant-input-prefix {
    margin-right: 8px;
  }
  
  &.kl6-search-button-left .ant-input-prefix {
    margin-left: -12px;
  }
  
  &.kl6-search-button-right .ant-input-suffix {
    margin-right: -12px;
  }

  .ant-input-group-addon {
    padding: 0;
    background-color: transparent;
  }
  
  &&.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover{
    z-index: 1;
  }
`
