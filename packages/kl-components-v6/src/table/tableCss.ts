import { css } from 'styled-components'
import { SPACES } from '../../design-system/theme/themes/variables'
// ts issue https://github.com/microsoft/TypeScript/issues/5711
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getFromProps, getFromInnerProps, GenericObject } from '../../helpers/getFromProps'
import { getCheckboxCss } from '../checkbox/checkboxCss'
import { ITableProps, TableCssConfig, ThemedTableProps } from './types'

export const fromTableProps = getFromProps<TableCssConfig, ThemedTableProps>()
const fromCheckboxProps = getFromInnerProps<TableCssConfig>('checkbox')

const getThCss = (props: ITableProps) => {
  const stickyCss = Number(props.stickyHeader) > -1000 && props.resizingMode !== 'scroll'
    ? css`
      position: sticky;
      top: ${props.stickyHeader}px;
    `
    : ''

  const thCss = css`
    background: ${fromTableProps('cell.normal.backgroundColor')};
    height: 40px;
    z-index: 3;
  `
  return css`
    ${thCss}
    ${stickyCss}
  `
}

const scrollableResizingCss = css`
  .ant-table {
    width: max-content;

    & table {
      width: max-content;

      thead.ant-table-thead {
        background: ${fromTableProps('cell.normal.backgroundColor')};
      }
    }
  }
`

export const tableCss = css<ThemedTableProps>`
  .ant-table {
    background-color: ${fromTableProps('root.backgroundColor')};
    color: ${fromTableProps('root.color')};

    tr {
      height: 40px;
    }

    .ant-table-thead > tr > th {
        background-color: transparent;
        padding: ${SPACES[6]}px ${SPACES[4]}px ${SPACES[3]}px ${SPACES[4]}px;
        border-bottom: none;
        color: inherit;
        
        font-family: ${fromTableProps('headSizes.fontFamily')};
        font-size: ${fromTableProps('headSizes.fontSize')};
        line-height: ${fromTableProps('headSizes.lineHeight')};
        font-weight: ${fromTableProps('headSizes.fontWeight')};
        font-style: ${fromTableProps('headSizes.fontStyle')};
        letter-spacing: ${fromTableProps('headSizes.letterSpacing')};

        &:first-child {
          &::after {
            left: 0;
          }
        }

        &::after {
          content: "";
          border-bottom: 2px solid ${fromTableProps('headCell.normal.borderColor')};
          left: ${({ theme }: ThemedTableProps) => theme === 'light' ? '8px' : 0};
          position: absolute;
          bottom: 0;
          right: 8px;
        }

        &:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
          content: none;
        }
      }

    .ant-table-tbody > tr > td {
        padding: ${SPACES[4]}px;
        max-width: 100px;
        font-family: ${fromTableProps('cellSizes.fontFamily')};
        font-size: ${fromTableProps('cellSizes.fontSize')};
        line-height: ${fromTableProps('cellSizes.lineHeight')};
        font-weight: ${fromTableProps('cellSizes.fontWeight')};
        font-style: ${fromTableProps('cellSizes.fontStyle')};
        letter-spacing: ${fromTableProps('cellSizes.letterSpacing')};
        position: static;

        border-bottom-color: ${fromTableProps('cell.normal.borderColor')};

        .drag-handle {
          position: absolute;
          left: -${fromTableProps('dragHandler.size')}px;
          width: ${fromTableProps('dragHandler.size')}px;
          height: 100%;
          opacity: 0;
          text-align: center;
          transition: opacity .1s;

          &:hover {
            opacity: 1;
            transition: opacity .1s;
          }
        }
    }

    .ant-table-tbody > tr {
      &:hover {
          td .drag-handle {
            opacity: 1;
            transition: opacity .1s;
          }
        }
    }
  }

  
  &.table-draggable .ant-table {
    padding-left: ${fromTableProps('dragHandler.size')}px;
  }

  .ant-table-content {
    position: relative;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background-color: ${fromTableProps('cell.hover.backgroundColor')};
  }

  .ant-table-bordered td, .ant-table-bordered th {
    border-right: none !important;
  }

  .react-resizable-handle:hover {
    border-left: 2px solid ${fromTableProps('resize.borderColor')};
  }

  .ant-table-tbody > tr.ant-table-row.ant-table-row-selected {
    background-color: ${fromTableProps('cell.hover.backgroundColor')};
  }

  .react-resizable {
    position: relative;
    background-clip: padding-box;
  }

  .react-resizable-handle {
    position: absolute;
    right: -5px;
    bottom: 0;
    z-index: 1;
    width: 10px;
    height: 100%;
    cursor: col-resize;
    display: flex;
    flex-direction: column;
    background: ${fromTableProps('cell.normal.backgroundColor')};

    & .resizing-handle {
      background: ${fromTableProps('disabled.backgroundColor')};
      width: 1px;
      height: 30px;
      z-index: 1;
      display: block;
      margin-top: 8px;
      flex-grow: 1;
      margin-bottom: 8px;
    }
  }

  .table-accordion-icon {
    position: absolute;
    left: 18px;
    top: 10px;
  }

  .ant-checkbox-wrapper {
    ${getCheckboxCss(fromCheckboxProps)}
  }

  &&& {
    table {
      mark {
        padding: 0;
      }
    }
    .ant-table-thead th {
      ${(props: ITableProps) => getThCss(props)}
    }

    ${(props: ITableProps) => props.useAccordion
    ? `.ant-table .ant-table-thead > tr > th:first-child, .ant-table .ant-table-tbody > tr > td:first-child {
        padding-left: 50px;
      }`
    : ''}

    ${(props: ITableProps) => props.useDragDrop
    ? `.drag-handle {
          &:hover {
            cursor: grab
          }
        }`
    : ''}

    .ant-table-tbody > tr.ant-table-row.group-title-row:hover {
      background: ${fromTableProps('cell.normal.backgroundColor')};

      &:hover {
        background: ${fromTableProps('cell.normal.backgroundColor')};
      }
    }

    .ant-table-tbody > tr.ant-table-row.group-title-row > td.ant-table-selection-column {
      position: relative; 

      label {
        opacity: 0;
      }

      &:hover {
        background: ${fromTableProps('cell.normal.backgroundColor')};
      }
    }

    .ant-table-tbody > tr.ant-table-row:hover > td.group-title {
      background: ${fromTableProps('cell.normal.backgroundColor')};
    }

    .ant-table-tbody > tr.ant-table-row.group-title-row:hover > td {
      background: ${fromTableProps('cell.normal.backgroundColor')};
    }

    .ant-table-thead th {
      ${(props: ITableProps) => getThCss(props)}
    }

    ${(props: ITableProps) => props.resizingMode === 'scroll' ? scrollableResizingCss : ''}
  }

  .ant-empty,
  .ant-empty-normal {
    color: var(--text-color);
  }
`

export const scrollableContainerCss = css`
  ${(props: ITableProps) => props.resizingMode === 'scroll'
    ? `
    width: 100%;
    overflow-x: auto;
  `
    : ''}
`

export const rowDraggingContainerCss = css`
  .row-dragging {
    background: var(--table-row-hover-bg);
  }
  .row-dragging td {
    padding: ${SPACES[4]}px 0px ${SPACES[4]}px ${SPACES[14]}px;
  }
  .row-dragging .drag-handle {
    visibility: hidden;
  }
`
