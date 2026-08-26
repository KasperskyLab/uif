import { getTextSizes } from '@design-system/tokens'
import styled, { css } from 'styled-components'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { getCheckboxCss } from '../checkbox/checkboxCss'

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
    ? css`
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
    
    .table-draggable.table-row-selection &:nth-child(2) {
      padding-left: 0;
      padding-right: 0;
    }
  `
}

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
  &.table-with-borders {
    .ant-table {
      table {
        border-right: 1px solid var(--border--neutral--medium);
        border-top: 1px solid var(--border--neutral--medium);
      }

      td.ant-table-cell,
      th.ant-table-cell,
      .ant-table-thead > tr > th {
        border-left: 1px solid var(--border--neutral--medium);
        border-bottom: 1px solid var(--border--neutral--medium);
        height: unset;

        &.ant-table-selection-column {
          .ant-checkbox-wrapper {
            gap: unset;
          }

          .ant-dropdown-trigger {
            width: unset;
          }
        }
      }
      
      .ant-table-body > tr,
      .ant-table-thead > tr {
        &:after {
          border-bottom: 1px solid var(--border--neutral--medium);
        }
      }

      td.ant-table-selection-column + td.ant-table-cell,
      td.hexa-ui-dnd-column + td.ant-table-cell {
        border-left: none;
      }

      tr.ant-table-measure-row + tr > td {
        border-top: none;
      }

      .ant-table-thead.ant-table-thead > tr > th {
        color: var(--fg--neutral--primary);
        font-family: var(--text--bts4--font-family);
        font-size: var(--text--bts4--font-size);
        line-height: var(--text--bts4--line-height);
        font-weight: var(--text--bts4--font-weight);
        font-style: var(--text--bts4--font-style);
        letter-spacing: var(--text--bts4--letter-spacing);

        &:first-child {
          padding: var(--spacing--padding_m) var(--spacing--padding_s) var(--spacing--padding_m) var(--spacing--padding_m);
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

      .hexa-ui-dnd-column .drag-handle {
        left: 0;
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
    }
  }

  &.table-sticky-header.table-with-borders .ant-table table {
    border-top: none;
  }

  &.table-with-borders.table-draggable.table-row-selection {
    .ant-table {
      .ant-table-selection-column + th,
      .hexa-ui-dnd-column {
        border: none;
      }

      .hexa-ui-dnd-column {
        .drag-handle {
          left: -36px;
        }
      }

      .ant-table-thead.ant-table-thead > tr > .ant-table-selection-column {
        padding-left: 15px;
        padding-right: 4px;

        .ant-checkbox-wrapper {
          transform: none;
        }
      }
    }
  }

  &.table-with-borders.table-draggable {
    .ant-table {
      th:nth-child(2) {
        border-left: none;
      }
    }
  }

  &.table-with-borders.table-draggable.table-row-selection {
    .ant-table {
      .ant-table-thead > tr > th:nth-child(3) {
        border-left: none;
      }
    }
  }
`

export const scrollShadowCss = css`
  --shadow: 0 3px 4px 1px var(--elevation--shadow_drop);

  .ant-table-tbody > tr > td.ant-table-selection-column,
  .ant-table-selection-column {
    animation: scroll-shadow linear both;
    animation-timeline: scroll(x);
    animation-range: 0ex 5ex;
  }

  @keyframes scroll-shadow {
    from {
      box-shadow: none;
    }

    to {
      box-shadow: var(--shadow);
    }
  }
`

export const tableCss = css<TableCssProps>`
  &.table-sticky-selection {
    ${scrollShadowCss}

    .ant-table-tbody > tr > td.ant-table-selection-column {
      position: sticky;
      z-index: 1;
      left: 0;
      top: 0;
    }

    .ant-table-tbody > tr > td.hexa-ui-dnd-column {
      position: sticky;
      top: 0;
      left: 46px;
      z-index: 1;
      background: transparent;
    }
  }

  &.table-sticky-selection.table-with-borders {
    .ant-table-tbody > tr > td.hexa-ui-dnd-column {
      left: 34px;
    }
  }
  
  &.table-col-after {
    .ant-table-thead > tr:after,
    .ant-table-tbody > tr:after {
      content: '';
      display: table-cell;
      transition: background 0.3s;
    }
  }
  
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
        content: '';
        border-bottom: 1px solid var(--table_cell_header--border);
        position: absolute;
        left: 8px;
        bottom: 0;
        right: 8px;
      }

      &:last-child::after {
        right: 0;
      }

      &:first-child::after {
        left: 0;
      }

      &:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
        content: none;
      }
    }

    .ant-table-tbody > tr > td {
      padding: 8px;
      max-width: 100px; // do not remove this style, without it column resizing breaks in the console
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

  ${tableWithBordersCss}

  .ant-spin-container.ant-spin-blur {
    overflow: inherit;
  }

  &.table-draggable:not(.table-with-borders) {
    th, td {
      &:first-child {
        .ant-checkbox-wrapper {
          transform: translate(8px, 0px);  
        }
      }
    }
  }

  &.table-draggable {
    .ant-table-header, .ant-table-body {
      padding-left: ${tableSizes.dragHandler.size}px;
      margin-left: -${tableSizes.dragHandler.size}px;
    }

    .ant-table-thead > tr > th:first-child:after {
      z-index: 1;
    }

    .ant-table-tbody > tr > td {
      position: relative;
    }

    .drag-handle-container {
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      z-index: 1;
    }

    .drag-handle {
      display: inline-block;
      position: relative;
      top: 2px;
      left: -2px;
      width: ${tableSizes.dragHandler.size}px;
      opacity: 0;
      text-align: center;
      transition: opacity .1s;
      color: var(--foreground--disabled);
    }

    tr:hover .drag-handle,
    .row-dragging .drag-handle {
      opacity: var(--drag-handle-hover-opacity, 1);
      transition: opacity .1s;
      cursor: grab;
    }
  }

   &.table-draggable.table-row-selection {
    .drag-handle {
      left: -47px;
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

  .ant-radio-wrapper {
    justify-content: center;
    &:not(.kl-radio-button-group) {
      line-height: unset;
      gap: unset;
    }
  }

  &&& {
    &.table-draggable:not(.table-row-selection) {
      .ant-table-thead th:first-child::after {
        left: 0;
        right: -8px;
      }
    }
    
    &.table-draggable.table-row-selection {
      .ant-table-thead th:first-child::after {
        left: 0;
        right: 8px;
      }

      thead th:nth-child(2),
      .ant-table-tbody > tr > td.ant-table-cell.hexa-ui-dnd-column {
        padding-left: 0;
        padding-right: 0;
      }
    }

    &.table-with-borders.table-row-selection {
      td.ant-table-selection-column {
        padding-right: var(--spacing--padding_s);
      }
      .hexa-ui-dnd-column + .ant-table-tbody > tr > td.ant-table-cell {
        padding-left: var(--spacing--padding_s);
      }
      .ant-table-thead th:nth-child(2) {
        border-left: none;
      }
    }

    &.table-with-borders.table-draggable.table-row-selection {
      .ant-table-tbody > tr > td.ant-table-selection-column {
        padding-left: 15px;
        padding-right: 4px;
      }
      .ant-table-thead th:nth-child(2) {
        border-left: none;
      }
    }

    table {
      mark {
        padding: 0;
      }
    }
    .ant-table-thead th {
      ${props => getThCss(props)}
    }

    .ant-table-tbody > tr > td.ant-table-cell.hexa-ui-dnd-column {
      width: 0;
      padding-left: 0;
      padding-right: 0;
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

    .ant-table-tbody > tr > td.ant-table-cell.hexa-ui-dnd-cell {
      padding: 0;
      width: 0;
    }

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
      --line-color: color-mix(in srgb, var(--bg--neutral_transparent--level_1) 80%, transparent);
      --bg-pattern: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 10px,
        var(--line-color) 10px,
        var(--line-color) 20px
      );

      .theme-dark & {
        --line-color: color-mix(in srgb, var(--bg--neutral_transparent--level_1) 70%, transparent);
      }

      // fixed anchors the gradient to the viewport, so adjacent rows line up
      // into one continuous diagonal regardless of their height
      .table-bg-diagonal & > tr.row-table-bg-pattern.ant-table-row td,
      .table-bg-diagonal & > tr.row-table-bg-pattern.ant-table-row:after {
        background-image: var(--bg-pattern);
        background-attachment: fixed;
      }

      // without this the row hover background would cover the pattern
      .table-bg-diagonal & > tr.row-table-bg-pattern.ant-table-row:hover > td,
      .table-bg-diagonal & > tr.row-table-bg-pattern.ant-table-row:hover:after {
        background-image: var(--bg-pattern) !important;
        background-attachment: fixed;
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
        }
      }

      &:last-child {
        padding-right: 0;
        min-width: 100px;
      }
    }

  &.table-mode-scroll {
    .ant-table {
      width: max-content;
      min-width: 100%;

      & table {
        width: max-content;
        min-width: 100%;
      }
    }
  }

  .table-invalid & {
    outline: 1px solid var(--input_text--border--error);
  }
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

  .row-dragging {
    background: var(--table-row-hover-bg);
    z-index: 9999;
  }
`

export const scrollableContainerCss = css`
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
  
  &.table-mode-scroll {
    width: 100%;
    overflow-x: auto;
    overscroll-behavior-x: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`

export const TableWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
