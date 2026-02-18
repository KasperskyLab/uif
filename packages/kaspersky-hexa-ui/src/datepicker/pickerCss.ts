import { getTextSizes } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { createGlobalStyle, css } from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { PickerCssConfig, PickerInputCssConfig } from './types'

const fromProps = getFromProps<PickerCssConfig>()

const fromInputProps = getFromProps<PickerInputCssConfig>()

const DATE_PICKER_PANEL_BODY_PADDING = '16px'
const DATE_PICKER_PANEL_WIDTH = '260px'
const DATE_PICKER_PANEL_HEIGHT = '288px'
const DATE_PICKER_PANEL_CONTENT_HEIGHT = '248px'
const DATE_PICKER_PANEL_HEADER_HEIGHT = '40px'
const DATE_PICKER_PANEL_FOOTER_WIDTH = '140px'

export const listCss = css`
  display: inline-flex;
  align-items: start;
  justify-content: start;
  gap: 8px;
  padding: 0;
  width: 100%;
  flex-direction: column;

  & > li {
    width: 100%;
    
    & > .ant-btn {
      width: 100%;
      justify-content: start;
    }
  }

  & > div:not(:empty) {
    margin-left: auto;
    display: inline-flex;
    gap: 12px;
  }
`

export const pickerCss = css`

  &&&.ant-picker-range {
    width: 360px;
  }
  gap: 4px;
  min-width: fit-content;

  .ant-picker-suffix {
    pointer-events: auto;
    color: ${fromInputProps('enabled.color')};
    border-radius: 3px;
    margin-left: auto;
  }

  &.kl6-textbox-readonly {
    cursor: default;
    .ant-picker-suffix, input {
      cursor: default;
    }
  }

  &, & input {
    cursor: pointer;
  }

  &.ant-picker-range {
    .ant-picker-active-bar {
      display: none;
    }
    
    .ant-picker-input {
      width: auto;
      min-width: fit-content;

      input {
        field-sizing: content;
      }
    }

    .ant-picker-range-separator {
      padding: 0;
    }

    &:has(input:not(:placeholder-shown), input:focus) .hexa-ui-range-separator {
      color: var(--text--primary);
    }
  }
`

export const pickerContainerCss = css`
  background: ${fromProps('unselected.enabled.background')};
  
  &:not(.kl6-datepicker-range-time-calendar) {
    height: ${DATE_PICKER_PANEL_HEIGHT}; 
  }

  &.kl6-datepicker-range-time-calendar {
    .ant-picker-footer {
      width: 100%;
      border-right: 0;
    }
  }

  .ant-picker-panel {
    display: flex;
    flex-direction: row-reverse;
    background: ${fromProps('unselected.enabled.background')};
    border: none;

    .ant-picker-decade-panel,
    .ant-picker-year-panel,
    .ant-picker-month-panel,
    .ant-picker-date-panel{
      width: ${DATE_PICKER_PANEL_WIDTH}
    }
  }

  .ant-picker-body {
    padding: ${DATE_PICKER_PANEL_BODY_PADDING};
    border-color: ${fromProps('separator')};
    width: ${DATE_PICKER_PANEL_WIDTH};
    height: ${DATE_PICKER_PANEL_CONTENT_HEIGHT};

    .ant-picker-content {
      width: calc(${DATE_PICKER_PANEL_WIDTH} - 2 * ${DATE_PICKER_PANEL_BODY_PADDING});
      height: calc(${DATE_PICKER_PANEL_CONTENT_HEIGHT} - 2 * ${DATE_PICKER_PANEL_BODY_PADDING});
      table-layout: unset;
      border-collapse: separate;
    }
  }

  .ant-picker-header {
    padding: 8px;
    height: ${DATE_PICKER_PANEL_HEADER_HEIGHT};
    width: ${DATE_PICKER_PANEL_WIDTH};
    button {
      color: ${fromProps('selected.enabled.background')};
    }
    .ant-picker-header-view {
      line-height: 24px;


      .ant-picker-month-btn,
      .ant-picker-year-btn,
      .ant-picker-decade-btn {
        ${getTextSizes(textLevels.BTM3)}
        color: ${fromProps('selected.enabled.background')};
    
        :hover {
          &,
          & + button {
            color: ${fromProps('selected.hover.background')};
          }
        }

        :active {
          &,
          & + button {
            color: ${fromProps('selected.active.background')};
          }
        }
      }
      .ant-picker-month-btn:after {
        content: '';
        display: inline;
        width: 50px;
        height: 20px;
        position: absolute;
      }
      .ant-picker-year-btn {
        margin-left: 4px;
      }
    }

    .ant-picker-header-super-prev-btn,
    .ant-picker-header-super-next-btn,
    .ant-picker-header-prev-btn,
    .ant-picker-header-next-btn {
      visibility: visible !important;
      height:24px;
      width: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: unset;
      font-size: unset;
    }

    .ant-picker-header-super-prev-btn {
      margin-right: 4px;
    }

    .ant-picker-header-super-next-btn {
      margin-left: 4px;
    }
  }

  .ant-picker-content thead th {
    ${getTextSizes(textLevels.BTR4)}
    height: 24px;
    width: 24px;
    padding: 0;
    color: ${fromProps('unselected.enabled.color')};
  }

  .ant-picker-cell-today {
    .ant-picker-cell-inner::before {
      border-radius: 4px;
      border-color: ${fromProps('unselected.enabled.border')};
    }

    &.ant-picker-cell-disabled .ant-picker-cell-inner::before {
      border-color: ${fromProps('unselected.disabled.border')};
    }
  }

  .ant-picker-cell-disabled {
    .ant-picker-cell-inner {
      background: ${fromProps('unselected.disabled.background')};
      color: ${fromProps('unselected.disabled.color')};
    }
    &::before {
      background: unset;
    }
  }

  .ant-picker-time-panel-column > .ant-picker-time-panel-cell.ant-picker-time-panel-cell-selected,
  .ant-picker-cell-selected,
  .ant-picker-cell-range-start,
  .ant-picker-cell-range-end {
    .ant-picker-cell-inner,
    .ant-picker-time-panel-cell-inner {
      background: ${fromProps('selected.enabled.background')};
      color: ${fromProps('selected.enabled.color')};

      &:hover {
        background: ${fromProps('selected.hover.background')};
      }
      &:active {
        background: ${fromProps('selected.active.background')};
      }
    }
  }
  .ant-picker-cell ant-picker-cell-in-view { 
    .ant-picker-cell-range-start ant-picker-cell-selected
    .ant-picker-cell-in-range .ant-picker-cell-range-hover-start
    .ant-picker-cell-range-start .ant-picker-cell-range-hover-start .ant-picker-cell-selected {
      background:  ${fromProps('selected.hover.background')};
    }
  }

  .ant-picker-cell:hover:not(.ant-picker-cell-in-view) .ant-picker-cell-inner {
    background:  ${fromProps('selected.hover.background')};
  }
  .ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end .ant-picker-cell-inner::after,
 .ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start .ant-picker-cell-inner::after {
    background:  ${fromProps('selected.enabled.background')};
  }

  .ant-picker-cell:hover:not(.ant-picker-cell-selected):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):not(.ant-picker-cell-range-hover-start):not(.ant-picker-cell-range-hover-end) .ant-picker-cell-inner {
    background:  ${fromProps('unselected.hover.background')};
  }
  .ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single)::before,
  .ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single)::before,
  .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner,
  .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner {
    background:  ${fromProps('selected.enabled.background')};
  }

  .ant-picker-cell {
    color: ${fromProps('unselected.disabled.color')};
    padding: 0;
    line-height: unset;
    
    &::before {
      left: -1px;
      right: -1px;
    }
  }

  .ant-picker-cell.ant-picker-cell-in-view,
  .ant-picker-time-panel-column > .ant-picker-time-panel-cell .ant-picker-time-panel-cell-inner {
    color: ${fromProps('unselected.enabled.color')};
  }
  
  .ant-picker-time-panel-column > li.ant-picker-time-panel-cell .ant-picker-time-panel-cell-inner:hover,
  .ant-picker-time-panel-column > li.ant-picker-time-panel-cell-selected .ant-picker-time-panel-cell-inner {
    background: ${fromProps('selected.enabled.background')};
    color: ${fromProps('selected.enabled.color')};
  }

  .ant-picker-cell > .ant-picker-cell-inner,
  .ant-picker-time-panel-cell-inner {
    ${getTextSizes(textLevels.BTR4)}
    line-height: 24px;
    border-radius: 4px;
  }
  
  & .ant-picker-cell,
  & .ant-picker-time-panel-cell {
    :not(.ant-picker-cell-selected)
    :not(.ant-picker-time-panel-cell-selected)
    :not(.ant-picker-cell-range-start)
    :not(.ant-picker-cell-range-end)
    :not(.ant-picker-cell-range-hover-end)
    :not(.ant-picker-cell-range-hover-start) {
      :hover {
        .ant-picker-cell-inner,
        .ant-picker-time-panel-cell-inner {
          background: ${fromProps('unselected.hover.background')};
        }
      }

      :active {
        .ant-picker-cell-inner,
        .ant-picker-time-panel-cell-inner {
          background: ${fromProps('unselected.active.background')};
          color: ${fromProps('unselected.enabled.color')};
        }
      }
    }
  }

  .ant-picker-footer {
    min-width: ${DATE_PICKER_PANEL_FOOTER_WIDTH};
    border-width: 0 1px 0 0;
    border-style: solid;
    border-color: ${fromProps('separator')};
    
    .ant-picker-footer-extra {
      line-height: 1;
      padding: 16px 4px;
    }
  }

  .ant-picker-datetime-panel, .ant-picker-panels {
    & + .ant-picker-footer {
      display: none;
    }
  }

  &.kl6-datepicker-range-time-calendar .ant-picker-time-panel-column::after {
    height: 0;
  }

  .ant-picker-time-panel .ant-picker-header {
    display: none;
  }
  
  .ant-picker-time-panel-column {
    width: 48px;
    scrollbar-width: none;
    padding: 16px 12px;
    
    
    & > li {
      padding: 0;
      width: 24px;
      height: 24px;
      margin-bottom: 4px;
      
      &.ant-picker-time-panel-cell .ant-picker-time-panel-cell-inner {
        width: 24px;
        height: 24px;
        line-height: 24px;
        padding: 0;
        text-align: center;
        border-radius: 4px;
      }
    }
  }

  // range picker
  // https://github.com/ant-design/ant-design/issues/23245
  .ant-picker-panels > *:nth-child(2) {
    display: none;
  }

  .ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single):not(.ant-picker-cell-range-end) {
    .ant-picker-cell-inner {
      border-radius: 4px 0 0 4px;
    }
    &::before {
      left: 50%;
      border-radius: 0;
    }
    &::after {
      left: -1px;
      border-radius: 0;
    }
  }

  .ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single):not(.ant-picker-cell-range-start) {
    .ant-picker-cell-inner {
      border-radius: 0 4px 4px 0;
    }
    &::before {
      right: 50%;
      border-radius: 0;
    }
    &::after {
      right: -1px;
      border-radius: 0;
    }
  }

  .ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single) {
    :hover {
      ::before,
      .ant-picker-cell-inner {
        background: ${fromProps('selected.hover.background')};
      }
    }

    :active {
      ::before,
      .ant-picker-cell-inner {
        background: ${fromProps('selected.active.background')};
      }
    }

    ::before,
    .ant-picker-cell-inner {
      background: ${fromProps('selected.enabled.background')};
      color: ${fromProps('selected.enabled.color')};
    }
  }

  &&&& {
    .ant-picker-cell-range-hover,
    .ant-picker-cell-range-hover-start,
    .ant-picker-cell-range-hover-end {
      ::before,
      ::after {
        background: ${fromProps('between.hover.background')};
        border: none;
        transition: none;
      }
    }
    .ant-picker-cell:hover:not(.ant-picker-cell-selected):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):not(.ant-picker-cell-in-view) .ant-picker-cell-inner {
      background: transparent;
    }
  }

  .ant-picker-cell-range-hover-start, .ant-picker-cell-range-hover-end {
    &.ant-picker-cell-range-start, &.ant-picker-cell-range-end {
      background: transparent;
      
      ::before {
        background: ${fromProps('between.hover.background')};
      }
    }
  }

  .ant-picker-cell-in-range {
    &.ant-picker-cell-range-hover-end,
    &.ant-picker-cell-range-hover-start {
      .ant-picker-cell-inner::after {
        background: ${fromProps('between.hover.background')};
        right: -4px;
        left: -4px;
      }
    }

    &:not(.ant-picker-cell-in-view) {
      &.ant-picker-cell-range-hover-start,
      &.ant-picker-cell-range-hover-end {
        ::before {
          background: ${fromProps('between.hover.background')};
        }
      }
    }
    
    ::before {
      background: ${fromProps('between.enabled.background')};
    }
  }
`

export const PickerGlobalCss = createGlobalStyle`
  .ant-picker-panel-container {
    border-radius: 8px;
    box-shadow: ${fromProps('boxShadow')};
  }

  .ant-picker-dropdown-range {
    padding: 0;

    .ant-picker-range-arrow {
      display: none;
    }
  }
`
