import { css, createGlobalStyle } from 'styled-components'
import { PickerCssConfig, PickerInputCssConfig } from './types'
import { getTextSizes, textLevels } from '@design-system/tokens'
import { getFromProps } from '@helpers/getFromProps'
import { BORDER_RADIUS, SPACES } from '@design-system/theme/themes/variables'

const fromProps = getFromProps<PickerCssConfig>()

const fromInputProps = getFromProps<PickerInputCssConfig>()

const DATE_PICKER_PANEL_BODY_PADDING = `${SPACES[8]}px`
const DATE_PICKER_PANEL_WIDTH = '260px'
const DATE_PICKER_PANEL_CONTENT_HEIGHT = '248px'
const DATE_PICKER_PANEL_HEADER_HEIGHT = '40px'
const DATE_PICKER_PANEL_FOOTER_WIDTH = '140px'

export const listCss = css`
  display: inline-flex;
  align-items: start;
  justify-content: start;
  gap: ${SPACES[4]}px;
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
    gap: ${SPACES[6]}px;
  }
`

export const pickerCss = css`
  .ant-picker-suffix {
    pointer-events: auto;
    color: ${fromInputProps('normal.color')};
    border-radius: 3px;
  }

  .ant-picker-active-bar,
  .ant-picker-range-separator {
    display: none;
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
`

export const pickerContainerCss = css`
  background: ${fromProps('unSelected.normal.background')};

  .ant-picker-panel {
    display: flex;
    flex-direction: row-reverse;
    background: ${fromProps('unSelected.normal.background')};
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
    border-color: ${fromProps('separatorColor')};
    width: ${DATE_PICKER_PANEL_WIDTH};
    height: ${DATE_PICKER_PANEL_CONTENT_HEIGHT};

    .ant-picker-content {
      width: calc(${DATE_PICKER_PANEL_WIDTH} - 2 * ${DATE_PICKER_PANEL_BODY_PADDING});
      height: calc(${DATE_PICKER_PANEL_CONTENT_HEIGHT} - 2 * ${DATE_PICKER_PANEL_BODY_PADDING});
      table-layout: unset;
      border-collapse: separate;
      // border-spacing: 0 ${SPACES[4]}px;
    }
  }

  .ant-picker-header {
    padding: ${SPACES[4]}px;
    height: ${DATE_PICKER_PANEL_HEADER_HEIGHT};
    width: ${DATE_PICKER_PANEL_WIDTH};

    .ant-picker-header-view {
      line-height: ${SPACES[12]}px;

      .ant-picker-month-btn,
      .ant-picker-year-btn,
      .ant-picker-decade-btn {
        ${getTextSizes(textLevels.BTM3)}
        color: ${fromProps('selected.normal.background')};
    
        &:hover {
          color: ${fromProps('selected.hover.background')};
        }
        
        &:hover + button {
          color: ${fromProps('selected.hover.background')};
        }
      
        &:active {
          color: ${fromProps('selected.active.background')};
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
      color: ${fromProps('iconColor')};
      height: ${SPACES[12]}px;
      width: ${SPACES[12]}px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: unset;
      font-size: unset;
    }

    .ant-picker-header-super-prev-btn {
      margin-right: ${SPACES[2]}px;
    }

    .ant-picker-header-super-next-btn {
      margin-left: ${SPACES[2]}px;
    }
  }

  .ant-picker-content thead th {
    ${getTextSizes(textLevels.BTR4)}
    height: ${SPACES[12]}px;
    width: ${SPACES[12]}px;
    padding: 0;
    color: ${fromProps('unSelected.normal.color')};
  }

  .ant-picker-cell-today {
    .ant-picker-cell-inner::before {
      border-radius: ${BORDER_RADIUS[2]}px;
      border-color: ${fromProps('unSelected.normal.borderColor')};
    }
    &.ant-picker-cell-disabled .ant-picker-cell-inner::before {
      border-color: ${fromProps('unSelected.disabled.borderColor')};
    }
  }

  .ant-picker-cell-disabled {
    .ant-picker-cell-inner {
      background: ${fromProps('unSelected.disabled.background')};
      color: ${fromProps('unSelected.disabled.color')};
    }
    &::before {
      background: unset;
    }
  }

  .ant-picker-cell-selected,
  .ant-picker-cell-range-start,
  .ant-picker-cell-range-end {
    .ant-picker-cell-inner {
      background: ${fromProps('selected.normal.background')};
      color: ${fromProps('selected.normal.color')};

      &:hover {
        background: ${fromProps('selected.hover.background')};
      }
      &:active {
        background: ${fromProps('selected.active.background')};
      }
    }
  }

  .ant-picker-cell {
    color: ${fromProps('unSelected.disabled.color')};
    padding: 0;
    line-height: unset;

    &.ant-picker-cell-in-view {
      color: ${fromProps('unSelected.normal.color')};
    }

    > .ant-picker-cell-inner {
      ${getTextSizes(textLevels.BTR4)}
      line-height: ${SPACES[12]}px;
      border-radius: ${BORDER_RADIUS[2]}px;
    }
  }
  
  &&&& .ant-picker-cell:not(.ant-picker-cell-selected):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):not(.ant-picker-cell-range-hover-end):not(.ant-picker-cell-range-hover-start) {
    &:hover .ant-picker-cell-inner {
      background: ${fromProps('unSelected.hover.background')};
    }
    &:active .ant-picker-cell-inner {
      background: ${fromProps('unSelected.active.background')};
      color: ${fromProps('unSelected.normal.color')};
    }
  }

  .ant-picker-footer {
    min-width: ${DATE_PICKER_PANEL_FOOTER_WIDTH};
    width: 140px;
    border-width: 0 1px 0 0;
    border-style: solid;
    border-color: ${fromProps('separatorColor')};
    
    .ant-picker-footer-extra {
      line-height: 1;
      padding: ${SPACES[8]}px ${SPACES[2]}px;
    }
  }
  .ant-picker-datetime-panel, .ant-picker-panels {
    & + .ant-picker-footer {
      display: none;
    }
    
    .ant-picker-time-panel-column::after {
      height: 0;
    }
  }
  &.kl-v6-datepicker-calendar .ant-picker-footer {
    display: block;
    width: 100%;
  }

  .ant-picker-time-panel .ant-picker-header {
    display: none;
  }

  // range picker
  // https://github.com/ant-design/ant-design/issues/23245
  .ant-picker-panels > *:nth-child(2) {
    display: none;
  }

  && .ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single):not(.ant-picker-cell-range-end) {
    .ant-picker-cell-inner {
      border-radius: ${BORDER_RADIUS[2]}px 0 0 ${BORDER_RADIUS[2]}px;
    }
    &::before {
      left: 50%;
      border-radius: 0;
    }
    &::after {
      left: 0;
      border-radius: 0;
    }
  }

  && .ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single):not(.ant-picker-cell-range-start) {
    .ant-picker-cell-inner {
      border-radius: 0 ${BORDER_RADIUS[2]}px ${BORDER_RADIUS[2]}px 0;
    }
    &::before {
      right: 50%;
      border-radius: 0;
    }
    &::after {
      right: 0;
      border-radius: 0;
    }
  }

  && .ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single),
  && .ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single) {
    &:hover {
      &::before, .ant-picker-cell-inner {
        background: ${fromProps('selected.hover.background')};
      }
    }
    &:active {
      &::before, .ant-picker-cell-inner {
        background: ${fromProps('selected.active.background')};
      }
    }
    &::before, .ant-picker-cell-inner {
      background: ${fromProps('selected.normal.background')};
      color: ${fromProps('selected.normal.color')};
    }
  }

  .ant-picker-cell-range-hover,
  .ant-picker-cell-range-hover-start,
  .ant-picker-cell-range-hover-end {
    &::before, &::after {
      background: ${fromProps('inRange.hover.background')};
      border: none !important;
      transition: none !important;
    }
  }

  &&&& .ant-picker-cell:hover:not(.ant-picker-cell-selected):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):not(.ant-picker-cell-in-view) .ant-picker-cell-inner {
    background: transparent;
  }

  .ant-picker-cell-range-hover-start, .ant-picker-cell-range-hover-end {
    &.ant-picker-cell-range-start, &.ant-picker-cell-range-end {
      background: transparent;
      &::before {
        background: ${fromProps('inRange.hover.background')};
      }
    }
  }

  &&& .ant-picker-cell-in-range {
    &.ant-picker-cell-range-hover-end, &.ant-picker-cell-range-hover-start {
      .ant-picker-cell-inner::after {
        background: ${fromProps('inRange.hover.background')};
        right: -4px;
        left: -4px;
      }
    }

    &:not(.ant-picker-cell-in-view) {
      &.ant-picker-cell-range-hover-start::before,
      &.ant-picker-cell-range-hover-end::before {
        background: ${fromProps('inRange.hover.background')};
      }
    }
    
    &::before {
      background: ${fromProps('inRange.normal.background')};
    }
  }
`

export const PickerGlobalCss = createGlobalStyle`
  .ant-picker-panel-container {
    border-radius: ${BORDER_RADIUS[4]}px;
    box-shadow: ${fromProps('boxShadow')};
  }

  .ant-picker-dropdown-range {
    padding: 0;

    .ant-picker-range-arrow {
      display: none;
    }
  }
`
