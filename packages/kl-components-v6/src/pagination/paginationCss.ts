import { css } from 'styled-components'
import { getFromProps } from '../../helpers/getFromProps'
import { PaginationCssConfig } from './types'

const fromProps = getFromProps<PaginationCssConfig>()

export const paginationCss = css`
  & {
    display: flex;
    align-items: center;

    .ant-select-dropdown, 
    .ant-pagination-item {
      background-color: ${fromProps('normal.background')} !important;
    }

    .ant-pagination-total-text {
      margin-right: 18px;
      display: flex;
      align-items: center;
    }

    .ant-pagination-item {
      border: 1px solid ${fromProps('normal.border')};
    }

    .ant-pagination-item, .ant-pagination-prev, .ant-pagination-next {
      background: transparent;
      margin-right: 4px !important;
      a {
        text-decoration: none;
        path, span { 
          fill:  ${fromProps('normal.color')};
          color:  ${fromProps('normal.color')};
        }
      }
      &:hover, &:focus {
        border-color: ${fromProps('active.border')};
      }
    }

    svg {
      padding-top: 2px;
    }
    
    .ant-pagination-item,
    .ant-pagination-prev,
    .ant-pagination-next,
    .ant-pagination-jump-next,
    .ant-pagination-jump-prev {
      min-width: ${fromProps('size')};
      height: ${fromProps('size')};
      line-height: ${fromProps('size')};
      border-radius: ${fromProps('paginationItemBorderRadius')};

      display: inline-flex;
      align-items: center;
      justify-content: center;

    }
    
    .ant-pagination-disabled {
      :hover a, a {
        path, span { 
          fill: ${fromProps('disabled.color')}; 
          color: ${fromProps('disabled.color')}; 
        }
      }
    }
    
    .ant-pagination-item-active {
      border-color: ${fromProps('active.border')};
    }

    .ant-select-selection-item {
      color:  ${fromProps('normal.color')} !important;
    }

    .ant-select-item {
      padding: ${fromProps('selectItemPadding')};
    }

    .ant-select-item-option-active, 
    .ant-select-item-option-selected {
      background-color: ${fromProps('hover.background')};
    }

    .ant-select-dropdown {
      border-radius: ${fromProps('dropdownBorderRadius')} !important;
      box-shadow: 0px 0px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31);
    }

    .ant-select-item {
      min-height: ${fromProps('size')};
    }
  }

  &.ant-pagination-disabled {
    color: ${fromProps('disabled.color')};

    .ant-pagination-item a, 
    .ant-pagination-item:hover a,
    .ant-pagination-item:focus a {
      color: ${fromProps('disabled.color')} !important;
    } 

    .ant-pagination-item {
      background: ${fromProps('hover.background')} !important;
      border-color: ${fromProps('disabled.background')};

      &:hover {
        border-color: ${fromProps('disabled.background')} !important;
      }
    }

    .ant-pagination-item-active {
      background: ${fromProps('disabled.background')} !important;
      border-color: ${fromProps('disabled.border')};

      &:hover {
        border-color: ${fromProps('disabled.border')} !important;
      }
    }

    .ant-pagination-item, .ant-pagination-prev, .ant-pagination-next {
      a {
        path, span { 
          fill:  ${fromProps('disabled.color')};
          color:  ${fromProps('disabled.color')};
        }
      }
    }
  }

  &.ant-pagination-disabled * {
    color: inherit !important;
  }

  &.mini .ant-pagination-item:not(.ant-pagination-item-active) {
    border: 1px solid ${fromProps('normal.border')};

    &:hover, &:focus {
      border-color: ${fromProps('active.border')};
    }
  }

  &.ant-pagination-disabled  {
    border-color: transparent;
  }
`

export const containerCss = css`
  display: flex;
  align-items: center;

  & {
    font-family: ${fromProps('fontFamily')};
    font-size: ${fromProps('fontSize')};
    line-height: ${fromProps('lineHeight')};
    font-weight: ${fromProps('fontWeight')};
    font-style: ${fromProps('fontStyle')};
    letter-spacing: ${fromProps('letterSpacing')};
    color: ${fromProps('normal.color')} !important;

    * {
      font-family: inherit !important;
      font-size: inherit !important;
      line-height: inherit !important;
      font-weight: inherit !important;
      font-style: inherit !important;
      letter-spacing: inherit !important;
      color: inherit !important;
    }
  }
`

export const totalCss = css`
  white-space: nowrap;
`

export const selectCss = css`
  width: fit-content;
  min-width: 114px;

  &.ant-select-single {
   .ant-select-selector {
      height: ${fromProps('size')} !important;
      padding: ${fromProps('selectPadding')} !important;

      .ant-select-selection-item {
        line-height: ${fromProps('lineHeight')} !important;
      }
    }

    .ant-select-arrow {
      right: 12px;
    }
  }
  
  &.ant-select-disabled {
    .ant-select-selector {
      .ant-select-selection-item {
        color: ${fromProps('disabled.color')} !important;
      }
    }

    .ant-select-arrow > span > svg {
      color: ${fromProps('disabled.color')} !important;
    }
  }
`

export const textBoxCss = css`
  width: 60px;
  height: ${fromProps('size')};
`

export const jumperCss = css`
  margin-left: 16px;
  display: flex;
  gap: 8px;
`

export const jumperTextCss = css`
  white-space: nowrap;
  display: flex;
  align-items: center;
`
