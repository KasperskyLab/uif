import { css } from 'styled-components'
import { SPACES } from '@design-system/theme'
// ts issue https://github.com/microsoft/TypeScript/issues/5711
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getFromProps, getFromInnerProps } from '@helpers/getFromProps'
import { getCheckboxCss } from '../checkbox/checkboxCss'
import { getRadioCss } from '../radio/radioCss'
import { ITableProps, TableCssConfig, TableViewProps } from './types'
import { getTextSizes, TextTypes } from '@design-system/tokens'

export const fromTableProps = getFromProps<TableCssConfig, TableViewProps>()
const fromCheckboxProps = getFromInnerProps<TableCssConfig>('checkbox')
const fromRadioProps = getFromInnerProps<TableCssConfig>('radio')

const tableSizes = {
  headSizes: getTextSizes(TextTypes.BTM3),
  cellSizes: getTextSizes(TextTypes.BTR3),
  dragHandler: {
    size: `${SPACES[19]}`
  }
}

const getRowModeCss = (props: ITableProps) => {
  const { rowMode = 'standard' } = props
  return rowMode === 'standard'
    ? css`
      height: 40px;
      padding: ${SPACES[5]}px ${SPACES[4]}px 9px ${SPACES[4]}px;
    `
    : css`
      height: 32px;
      padding: ${SPACES[3]}px ${SPACES[4]}px 5px ${SPACES[4]}px;
    `
}

const getThCss = (props: ITableProps) => {
  const stickyCss = Number(props.stickyHeader) > -1000 && props.resizingMode !== 'scroll'
    ? css`
      position: sticky;
      top: ${props.stickyHeader}px;
    `
    : ''

  const thCss = css`
    z-index: 3;

    &.ant-table-cell-fix-left,
    .ant-table-cell-fix-right {
      z-index: 4;
    }
  `
  return css`
    ${thCss}
    ${stickyCss}
    ${getRowModeCss(props)}
  `
}

const getTdCss = (props: ITableProps) => {
  const { columnVerticalAlign = 'top' } = props
  return css`
    vertical-align: ${columnVerticalAlign};
    ${getRowModeCss(props)}
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

const tableValidationCss = css`
  outline: 1px solid ${fromTableProps('validation.outline')}
`

export const tableCss = css<TableViewProps>`
  .ant-table {
    background-color: ${fromTableProps('root.backgroundColor')};
    color: ${fromTableProps('root.color')};

    .ant-table-thead > tr > th {
        background-color: ${fromTableProps('root.backgroundColor')};
        padding: ${SPACES[5]}px ${SPACES[4]}px;
        
        &:has(.kl6-table-dropdown) {
          padding: 0 ${SPACES[4]}px;
        }

        border-bottom: none;
        color: inherit;
        
        font-family: ${tableSizes.headSizes.fontFamily};
        font-size: ${tableSizes.headSizes.fontSize};
        line-height: ${tableSizes.headSizes.lineHeight};
        font-weight: ${tableSizes.headSizes.fontWeight};
        font-style: ${tableSizes.headSizes.fontStyle};
        letter-spacing: ${tableSizes.headSizes.letterSpacing};

        &::after {
          content: "";
          border-bottom: 1px solid ${fromTableProps('headCell.normal.borderColor')};
          position: absolute;
          left: 8px;
          bottom: 0;
          right: 8px;
        }

        &:first-child::after {
          left: 0;
        }

        &:last-child::after {
          right: 0;
        }

        &:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
          content: none;
        }
      }

    .ant-table-tbody > tr > td {
        padding: ${SPACES[4]}px;
        max-width: 100px;
        font-family: ${tableSizes.cellSizes.fontFamily};
        font-size: ${tableSizes.cellSizes.fontSize};
        line-height: ${tableSizes.cellSizes.lineHeight};
        font-weight: ${tableSizes.cellSizes.fontWeight};
        font-style: ${tableSizes.cellSizes.fontStyle};
        letter-spacing: ${tableSizes.cellSizes.letterSpacing};
        position: static;

        border-bottom-color: ${fromTableProps('cell.normal.borderColor')};

        &.ant-table-cell-ellipsis {
          white-space: normal;
          text-overflow: clip;
          word-break: break-all;
        }

        .drag-handle {
          position: absolute;
          left: -${tableSizes.dragHandler.size}px;
          width: ${tableSizes.dragHandler.size}px;
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
    padding-left: ${tableSizes.dragHandler.size}px;
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
    bottom: 3px;
    z-index: 1;
    width: 10px;
    height: calc(100% - 3px);
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

  .ant-table-column-sorter {
    display: none;
  }

  .ant-dropdown-trigger {
    width: 100%;
  }

  .ant-checkbox-wrapper {
    ${getCheckboxCss(fromCheckboxProps)}
  }

  .ant-radio-wrapper {
    ${getRadioCss(fromRadioProps)}
    justify-content: center;
    &:not(.kl-radio-button-group) {
      line-height: unset;
      gap: unset;
    }
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

    && td.ant-table-cell {
      ${(props: ITableProps) => getTdCss(props)}
    }

    .ant-table-thead th:not(.ant-table-selection-column) {
      min-width: 100px;
    }

    .ant-table-thead > tr > th,
    && .ant-table-tbody > tr > td {
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }

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
        pointer-events: none;
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
    
    ${({ isValid }: ITableProps) => isValid === false ? tableValidationCss : ''}
  }

  col.ant-table-selection-col, .ant-table-selection-column  {
    width: 30px;
    min-width: 22px;
  }
  
  .ant-empty,
  .ant-empty-normal {
    color: var(--text-color);
  }

  .ant-table-cell-fix-left,
  .ant-table-cell-fix-right {
    background-color: ${fromTableProps('root.backgroundColor')};
  }

  .ant-table-cell-fix-left-last::after {
    width: calc(100% - ${SPACES[4]}px);
    transform: unset
  }

  ${({ scroll }) => scroll?.y
    ? css`
        .ant-table-body {
          overflow-y: auto !important;
        }

        
        .ant-table-header {
          & .ant-table-cell-scrollbar::after {
            display: none;
          }
        }
      `
    : ''
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
