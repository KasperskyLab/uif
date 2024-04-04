import { css } from 'styled-components'
import { getFromProps } from '@helpers/getFromProps'
import { PaginationCssConfig } from './types'

const fromProps = getFromProps<PaginationCssConfig>()

export const paginationCss = css`
  & {
    display: flex;
    align-items: center;
    gap: 4px;

    .ant-pagination-item,
    .ant-pagination-prev,
    .ant-pagination-next,
    .ant-pagination-jump-next,
    .ant-pagination-jump-prev {
      color: ${fromProps('unselected.normal.color')};
      background: transparent;
      border: none;
      border-radius: 6px;
      width: 32px;
      height: 32px;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        padding: 0;
        color: inherit;
      }

      &:hover {
        background: ${fromProps('unselected.hover.background')};
      }
      &:active {
        background: ${fromProps('unselected.active.background')};
      }
      &:focus-visible {
        box-shadow: ${fromProps('focus.boxShadow')};
      }
      &[aria-disabled="true"] {
        &, &:hover, &:active {
          background: transparent;
          color: ${fromProps('unselected.disabled.color')};
        }
      }
      
      &.ant-pagination-item-active {
        color: ${fromProps('selected.normal.color')};
        background: ${fromProps('selected.normal.background')};
        
        &:hover {
          color: ${fromProps('selected.hover.color')};
          background: ${fromProps('selected.hover.background')};
        }
        &:active {
          color: ${fromProps('selected.active.color')};
          background: ${fromProps('selected.active.background')};
        }
      }
    }
    &&.ant-pagination-disabled {
      .ant-pagination-item, 
      .ant-pagination-prev,
      .ant-pagination-next,
      .ant-pagination-jump-next,
      .ant-pagination-jump-prev {
        &, &:hover, &:active {
          cursor: not-allowed;
          background: transparent;
          &, a {
            color: ${fromProps('unselected.disabled.color')};
          }

          &.ant-pagination-item-active {
            background: ${fromProps('selected.disabled.background')};
            &, a {
              color: ${fromProps('selected.disabled.color')};
            }
          }
        }
      }
    }
  }
`

export const containerCss = css`
  width: 100%;
  display: flex;
  align-items: center;
  height: 32px;
  justify-content: space-between;

  .kl6-pagination-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  & a {
    font-family: inherit !important;
    font-size: inherit !important;
    line-height: inherit !important;
    font-weight: inherit !important;
    font-style: inherit !important;
    letter-spacing: inherit !important;
  }
`
