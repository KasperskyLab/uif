import { getTextSizes } from '@design-system/tokens'
import { getFromInnerProps, getFromProps } from '@helpers/getFromProps'
import styled, { css } from 'styled-components'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { getCheckboxCss } from '../checkbox/checkboxCss'
import { getInternalRadioCss } from '../radio/radioCss'

import { TableCssConfig, TableViewProps } from './types'

export const fromTableProps = getFromProps<TableCssConfig, TableViewProps>()
const fromCheckboxProps = getFromInnerProps<TableCssConfig>('checkbox')
const fromRadioProps = getFromInnerProps<TableCssConfig>('radio')

const tableSizes = {
  headSizes: getTextSizes(TextTypes.BTM3),
  cellSizes: getTextSizes(TextTypes.BTR3),
  dragHandler: {
    size: 20
  }
}

const getRowModeCss = (props: Pick<TableCssProps, 'rowMode'>) => {
  const { rowMode = 'standard' } = props
  return rowMode === 'standard'
    ? css`
      height: 40px;
      padding: 10px 8px 9px 8px;
    `
    : css`
      height: 28px;
      padding: 4px 8px 3px 8px;
    `
}

const getThCss = (props: Pick<TableCssProps, 'stickyHeader' | 'resizingMode' | 'rowMode'>) => {
  const stickyCss = Number(props.stickyHeader) > -1000 && props.resizingMode !== 'scroll'
    ? css`
      position: sticky;
      top: ${props.stickyHeader}px;
      z-index: 3;
    `
    : ''

  return css`
    &.ant-table-cell-fix-left,
    .ant-table-cell-fix-right {
      z-index: 4;
    }
    ${stickyCss}
    ${getRowModeCss(props)}
  `
}

const scrollableResizingCss = css`
  .ant-table {
    width: max-content;
    min-width: 100%;

    & table {
      width: max-content;
      min-width: 100%;
      
      thead.ant-table-thead {
        background: ${fromTableProps('cell.enabled.background')};
      }
    }
  }
`

const tableValidationCss = css`
  outline: 1px solid ${fromTableProps('validation.outline')};
`

export const tableCssProps = [
  'cssConfig',
  'resizingMode',
  'useDragDrop',
  'scroll',
  'rowMode',
  'stickyHeader',
  'isValid',
  'columnVerticalAlign'
] as const

export type TableCssProps = Pick<TableViewProps, typeof tableCssProps[number]>

export const tableCss = css<TableCssProps>`
  .ant-table {
    background-color: ${fromTableProps('root.background')};
    color: ${fromTableProps('root.color')};

    .ant-table-thead > tr > th {
        background-color: ${fromTableProps('root.background')};
        padding: 10px 8px;
        
        &:has(.kl6-table-dropdown) {
          padding: 0 8px;
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
          border-bottom: 1px solid ${fromTableProps('headCell.enabled.border')};
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
      padding: 8px;
      max-width: 100px;

      :not(.ant-table-selection-column) {
        min-width: 100px;
      }

      font-family: ${tableSizes.cellSizes.fontFamily};
      font-size: ${tableSizes.cellSizes.fontSize};
      line-height: ${tableSizes.cellSizes.lineHeight};
      font-weight: ${tableSizes.cellSizes.fontWeight};
      font-style: ${tableSizes.cellSizes.fontStyle};
      letter-spacing: ${tableSizes.cellSizes.letterSpacing};
      position: static;

      border-bottom-color: ${fromTableProps('cell.enabled.border')};
      
      tr:last-child td {
        border-bottom: none;
      }

      .hexa-ui-empty-dash-cell {
        color: var(--table_cell--text--disabled);
      }
    }

    &.ant-table-small .ant-table-tbody .ant-table-wrapper:only-child .ant-table {
      margin: 0;
    }
    
    .ant-table-footer {
      color: unset;
      background: unset;
    }
  }

  .ant-spin-container.ant-spin-blur {
    overflow: inherit;
  }
  
  &.table-draggable {
    .ant-table-header, .ant-table-body {
      padding-left: ${tableSizes.dragHandler.size}px;
      margin-left: -${tableSizes.dragHandler.size}px;
    }

    .ant-table-tbody > tr > td {
      position: relative;
    }

    .drag-handle-container {
      position: absolute;
      display: block;
      width: 0;
      height: 0;
    }

    .drag-handle {
      display: inline-block;
      position: relative;
      top: 3px;
      left: -${tableSizes.dragHandler.size}px;
      width: ${tableSizes.dragHandler.size}px;
      opacity: 0;
      text-align: center;
      transition: opacity .1s;

      &:hover {
        opacity: 1;
        transition: opacity .1s;
      }
    }

    tr:hover .drag-handle {
      opacity: 1;
      transition: opacity .1s;
    }

    &.table-row-selection .drag-handle {
      left: calc(-38px - ${tableSizes.dragHandler.size}px);
    }
  }

  .ant-table-container::before {
    width: ${tableSizes.dragHandler.size}px;
  }

  .ant-table-content {
    position: relative;
  }

  .ant-table-tbody > tr.ant-table-row > td {
    background-color: var(--table_row--bg--base);
  }

  .ant-table-tbody > tr.ant-table-placeholder:hover > td {
    background-color: transparent;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background-color: ${fromTableProps('cell.hover.background')};
  }

  .ant-table-tbody > tr.ant-table-row:hover [data-expandable-gradient]::after,
  .ant-table-tbody > tr.ant-table-row.ant-table-row-selected:hover [data-expandable-gradient]::after {
    background-color: var(--table_row--bg--hover);
  }

  .ant-table-tbody > tr.ant-table-row.ant-table-row-selected [data-expandable-gradient]::after {
    background-color: var(--table_row--bg--selected);
  }

  .ant-table-bordered td, .ant-table-bordered th {
    border-right: none !important;
  }

  .ant-table-tbody > tr.ant-table-row-selected > td {
    background-color: ${fromTableProps('cell.selected.background')};
  }

  .resizing-handle-container {
    position: absolute;
    right: -8px;
    bottom: 0;
    z-index: 1;
    width: 16px;
    height: 100%;
    cursor: col-resize;
    display: flex;
    flex-direction: column;
    align-items: center;

    .resizing-handle {
      opacity: 0;
      width: 1px;
      background: ${fromTableProps('resize.hover')};
      height: 100%;
    }

    &:active .resizing-handle {
      background-color: ${fromTableProps('resize.active')};
    }

    &:hover .resizing-handle {
      opacity: 1;
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

  ${getInternalRadioCss(fromRadioProps)}
  
  .ant-radio-wrapper {
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
      ${props => getThCss(props)}
    }

    .hexa-ui-ellipsis {
      display: inline-grid;
    }

    && td.ant-table-cell {
      vertical-align: ${({ columnVerticalAlign }) => columnVerticalAlign || 'top'};
      ${props => getRowModeCss(props)}
      &:has(.ant-select), &:has(.ant-input) {
        padding: 4px 8px;
      }
    }

    .ant-table-thead th:not(.ant-table-selection-column) {
      min-width: 100px;
    }

    .kl-components-expandable-icon.icon {
      color: ${fromTableProps('expandable.icon')};
    }

    .ant-table-thead > tr > th,
    && .ant-table-tbody > tr > td {
      &.ant-table-cell-with-append {
        white-space: nowrap;
      }

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }

    ${props => props.useDragDrop
    ? `.drag-handle {
          &:hover {
            cursor: grab
          }
        }`
    : ''}

    .ant-table-tbody > tr.ant-table-row.group-title-row:hover {
      background: ${fromTableProps('cell.enabled.background')};

      &:hover {
        background: ${fromTableProps('cell.enabled.background')};
      }
    }

    .ant-table-tbody > tr.ant-table-row.group-title-row > td.ant-table-selection-column {
      position: relative; 

      label {
        opacity: 0;
        pointer-events: none;
      }

      &:hover {
        background: ${fromTableProps('cell.enabled.background')};
      }
    }

    .ant-table-tbody > tr.ant-table-row:hover > td.group-title {
      background: ${fromTableProps('cell.enabled.background')};
    }

    .ant-table-tbody > tr.ant-table-row.group-title-row:hover > td {
      background: ${fromTableProps('cell.enabled.background')};
    }

    .ant-table-tbody {
      --line-color: var(--color--neutral_50);
      --bg-mode: multiply;

      .theme-dark & {
        --line-color: var(--color--neutral_800);
        --bg-mode: exclusion;
      }
      .table-bg-diagonal & {
        background-image: repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 10px,
          var(--line-color) 10px,
          var(--line-color) 20px
        );
      }

      .table-bg-diagonal & > tr.row-table-bg-pattern.ant-table-row td {
        mix-blend-mode: var(--bg-mode);
      }
    }
    ${props => props.resizingMode === 'scroll' ? scrollableResizingCss : ''}
    
    ${({ isValid }) => isValid === false ? tableValidationCss : ''}
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
    background-color: ${fromTableProps('root.background')};
  }

  .ant-table-cell-fix-left-last::after {
    width: calc(100% - 8px);
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

export const scrollableContainerCss = css<Pick<TableViewProps, 'resizingMode'>>`
  &.table-height-full {
    display: flex;
    flex-direction: column;
    flex: 1;

    .ant-table-wrapper,
    .ant-spin-nested-loading,
    .ant-spin-container,
    .ant-table,
    .ant-table-container,
    .ant-table-conten,
    .ant-table-content,
    .hexa-ui-table-ref {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .ant-table table {
      height: 100%;
    }

    .hexa-ui-table-ref {
      flex-direction: column;
    }
  }

  ${props => props.resizingMode === 'scroll'
    ? `
    width: 100%;
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  `
    : ''}
`

export const rowDraggingContainerCss = css<TableCssProps>`
  .row-dragging {
    background: var(--table-row-hover-bg);
  }

  .row-dragging td {
    padding: 8px 0px 8px 28px;
  }

  .row-dragging .drag-handle {
    visibility: hidden;
  }

  .ant-checkbox-wrapper {
    ${getCheckboxCss(fromCheckboxProps)}
  }
`

export const TableWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
