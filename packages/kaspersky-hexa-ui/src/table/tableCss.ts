import { getTextSizes } from '@design-system/tokens'
import styled, { css } from 'styled-components'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { getCheckboxCss } from '../checkbox/checkboxCss'
import { getInternalRadioCss } from '../radio/radioCss'

import { ITableProps } from './types'

const tableSizes = {
  headSizes: getTextSizes(TextTypes.BTM3),
  cellSizes: getTextSizes(TextTypes.BTR3),
  dragHandler: {
    size: 20
  }
}

const getRowModeCss = (props: Pick<TableCssProps, 'rowMode' | 'borderedStyle'>) => {
  const { rowMode = 'standard', borderedStyle } = props
  return borderedStyle
    ? rowMode === 'standard'
      ? css`
          padding: var(--spacing--padding_m);
        `
      : css`
          padding: var(--spacing--padding_s) var(--spacing--padding_m) var(--spacing--padding_s) var(--spacing--padding_m);
      `
    : rowMode === 'standard'
      ? css`
          height: 40px;
          padding: 10px var(--spacing--padding_m) 9px var(--spacing--padding_m);

          &:first-child {
            padding-left: 0;
          }
        `
      : css`
          height: 28px;
          padding: 4px var(--spacing--padding_m) 3px var(--spacing--padding_m);

          &:first-child {
            padding-left: 0;
          }
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
    }
  }
`

const tableValidationCss = css`
  outline: 1px solid var(--input_text--border--error);
`

export const tableCssProps = [
  'rowSelection',
  'resizingMode',
  'borderedStyle',
  'useDragDrop',
  'scroll',
  'rowMode',
  'stickyHeader',
  'isValid',
  'columnVerticalAlign'
] as const

export type TableCssProps = Pick<ITableProps, typeof tableCssProps[number]>

export const tableWithBordersCss = css`
  border-collapse: collapse;

  td.ant-table-cell,
  th {
    border: 1px solid var(--border--neutral--medium);
    border-collapse: collapse;
    height: unset;

    &:first-child {
      .ant-checkbox-wrapper {
        gap: unset;
      }

      .ant-dropdown-trigger {
        width: unset;
      }
    }
  }

  tr.ant-table-measure-row + tr > td {
    border-top: none;
  }

  .ant-table-thead.ant-table-thead > tr > th {
    color: var(--fg--neutral--primary);
    border: 1px solid var(--border--neutral--medium);

    font-family: var(--text--bts4--font-family);
    font-size: var(--text--bts4--font-size);
    line-height: var(--text--bts4--line-height);
    font-weight: var(--text--bts4--font-weight);
    font-style: var(--text--bts4--font-style);
    letter-spacing: var(--text--bts4--letter-spacing);

    &:first-child {
      padding: var(--spacing--padding_m) var(--spacing--padding_m);
    }

    &:after {
      display: none;
    }

    &:has(.kl6-table-dropdown) {
      padding: 0;
    }
  }

  thead:empty ~ tbody td.ant-table-cell {
    border-top: none;
  }

  .kl6-table-dropdown {
    padding: var(--spacing--padding_m);
  }

  .hexa-ui-placeholder {
    background: transparent;
  }

  .drag-handle {
    left: -33px;
  }

  .ant-table-selection-column + .ant-table-cell-with-append .drag-handle {
    left: -60px;
  }

  .ant-table-selection-column {
    width: unset;
    min-width: unset;
  }

  col {
    &.ant-table-selection-col {
      min-width: 30px;
      width: 30px;
    }
  }
`

export const tableCss = css<TableCssProps>`
  .ant-table {
    background-color: var(--table_row--bg--base);
    color: var(--table_cell--text--enabled);

    table col:not([style]) {
      min-width: 100px;

      &.ant-table-selection-col {
        min-width: 30px;
        width: 30px;
      }
    }

    .table-with-borders & table {
      ${tableWithBordersCss}
    }

    .table-col-after &,
    &.table-col-after {
      .ant-table-thead > tr:after,
      .ant-table-tbody > tr:after {
        content: '';
        display: table-cell;
        transition: background 0.3s;
      }
    }

    .ant-table-thead > tr:after {
      border-bottom: 1px solid var(--table_cell_header--border);
    }

    .ant-table-tbody > tr:after {
      border-bottom: 1px solid var(--table_row--border);
    }

    .ant-table-thead > tr > th {
        background-color: var(--table_row--bg--base);
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
          border-bottom: 1px solid var(--table_cell_header--border);
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
      max-width: 100px; // это стиль убирать нельзя, без него ломается ресайз колонок в консоли
      font-family: ${tableSizes.cellSizes.fontFamily};
      font-size: ${tableSizes.cellSizes.fontSize};
      line-height: ${tableSizes.cellSizes.lineHeight};
      font-weight: ${tableSizes.cellSizes.fontWeight};
      font-style: ${tableSizes.cellSizes.fontStyle};
      letter-spacing: ${tableSizes.cellSizes.letterSpacing};
      position: static;

      border-bottom-color: var(--table_row--border);

      tr:last-child td,
      tr:last-child:after {
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
      left: calc(-12px - ${tableSizes.dragHandler.size}px);
      width: ${tableSizes.dragHandler.size}px;
      opacity: 0;
      text-align: center;
      transition: opacity .1s;

      &:hover {
        opacity: var(--drag-handle-hover-opacity, 1);
        transition: opacity .1s;
      }
    }

    tr:hover .drag-handle {
      opacity: var(--drag-handle-hover-opacity, 1);
      transition: opacity .1s;
    }

    &.table-row-selection .drag-handle {
      left: calc(-54px - ${tableSizes.dragHandler.size}px);
    }
  }

  .ant-table-container::before {
    width: ${tableSizes.dragHandler.size}px;
  }

  .ant-table-content {
    position: relative;
  }

  .ant-table-tbody > tr.ant-table-row > td,
  .ant-table-tbody > tr.ant-table-row:after,
  .ant-table-tbody > tr.ant-table-row .expandable-gradient::after {
    background-color: var(--bg--neutral--level_0);
  }

  .ant-table-tbody > tr.ant-table-placeholder:hover > td {
    background-color: var(--table_row--bg--hover, transparent);
  }

  .ant-table-tbody > tr.ant-table-row:hover > td,
  .ant-table-tbody > tr.ant-table-row:hover:after {
    background-color: var(--table_row--bg--hover);
  }

  .ant-table-tbody > tr.ant-table-row:hover .expandable-gradient::after,
  .ant-table-tbody > tr.ant-table-row.ant-table-row-selected:hover .expandable-gradient::after {
    background-color: var(--table_row--bg--hover);
  }

  .ant-table-tbody > tr.ant-table-row.ant-table-row-selected .expandable-gradient::after {
    background-color: var(--table_row--bg--selected);
  }

  .ant-table-bordered td, .ant-table-bordered th {
    border-right: none !important;
  }

  .ant-table-tbody > tr.ant-table-row-selected > td,
  .ant-table-tbody > tr.ant-table-row-selected:after {
    background-color: var(--table_row--bg--selected);
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
      background: var(--table_cell_header--dragger--hover);
      height: 100%;
    }

    &:active .resizing-handle {
      background-color: var(--table_cell_header--dragger--active);
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
    ${getCheckboxCss()}
    width: auto;
  }

  ${getInternalRadioCss()}

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
      display: table;
      table-layout: fixed;
      width: 100%;
    }

    .ant-table-cell-with-append .hexa-ui-ellipsis,
    .ant-table-cell-with-append .hexa-ui-expandable {
      display: inline-grid;
      width: auto;
    }

    .ant-table-tbody > tr > td.ant-table-cell {
      vertical-align: ${({ columnVerticalAlign }) => columnVerticalAlign || 'top'};
      ${props => getRowModeCss(props)}
      &:has(.ant-select), &:has(.ant-input) {
        padding: 4px 8px;
      }
    }
    // The style is needed if the cell contains a field.
    td.ant-table-cell .kl6-field-control-wrapper .kl6-field-control-box {
      min-width: inherit;
    }

    .kl-components-expandable-icon.icon {
      color: var(--action_button--icon--ghost--enabled);
    }

    ${props => props.useDragDrop
      ? `.drag-handle {
          &:hover {
            cursor: grab
          }
        }`
      : ''}

    .ant-table-tbody > tr.ant-table-row.group-title-row {
      > td.ant-table-selection-column {
        position: relative;

        > label {
          opacity: 0;
          pointer-events: none;
        }
      }

      &.group-title-row-expandable {
        .group-title-item {
          cursor: pointer;
        }
        .kl-components-expandable-icon {
          display: none;
        }
      }

      &:not(.group-title-row-expandable):hover {
        > td, &::after {
          background-color: var(--table_row--bg--base);
        }
      }
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

      .table-bg-diagonal & > tr.row-table-bg-pattern.ant-table-row td,
      .table-bg-diagonal & > tr.row-table-bg-pattern.ant-table-row:after {
        mix-blend-mode: var(--bg-mode);
      }
    }

    && .ant-table-thead > tr > th,
    && .ant-table-tbody > tr > td {
      &.ant-table-cell-with-append {
        white-space: nowrap;
      }

      &,
      &.ant-table-cell {
        &:first-child {
          .ant-dropdown-trigger {
            width: unset;
          }

          .table-with-borders & {
            padding-left: 8px;
          }
        }
      }

      &:last-child {
        padding-right: 0;
        min-width: 100px;
      }
    }

    ${props => props.resizingMode === 'scroll' ? scrollableResizingCss : ''}

    ${({ isValid }) => isValid === false ? tableValidationCss : ''}
  }

  .ant-empty,
  .ant-empty-normal {
    color: var(--text-color);
  }

  .ant-table-cell-fix-left,
  .ant-table-cell-fix-right {
    background-color: var(--table_row--bg--base);
  }

  .ant-table-cell-fix-left-last::after {
    width: calc(100% - 8px);
    transform: unset
  }

  ${({ scroll }) => scroll?.y
      ? css`
        .ant-table-body {
          overflow-y: auto !important;
          overscroll-behavior: none;
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

export const scrollableContainerCss = css<Pick<ITableProps, 'resizingMode'>>`
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
    overscroll-behavior-x: none;
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
    z-index: 9999;
  }

  .row-dragging .drag-handle {
    visibility: hidden;
  }

  .ant-checkbox-wrapper {
    ${getCheckboxCss()}
  }
`

export const TableWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
