import { css } from 'styled-components'
import { PickerCssConfig, PickerInputCssConfig } from './types'
import { getTextSizes, TextTypes } from '../../design-system/tokens/typography'
import { getFromProps } from '../../helpers/getFromProps'
import { SPACES } from '../../design-system/theme/themes/variables'

const fromProps = getFromProps<PickerCssConfig & PickerInputCssConfig>()

const getFontStyle = (type: 'cell' | 'header') => {
  const config = getTextSizes(type === 'cell' ? TextTypes.BTR4 : TextTypes.BTM3)
  return css`
    font-family: ${config.fontFamily};
    font-size: ${config.fontSize};
    font-weight: ${config.fontWeight};
    font-style: ${config.fontStyle};
    letter-spacing: ${config.letterSpacing};
  `
}
const inputSizes = getTextSizes(TextTypes.BTR3)
const inputFontStyles = css`
  font-family: ${inputSizes.fontFamily};
  font-size: ${inputSizes.fontSize};
  line-height: ${inputSizes.lineHeight};
  font-weight: ${inputSizes.fontWeight};
  font-style: ${inputSizes.fontStyle};
  letter-spacing: ${inputSizes.letterSpacing};
`

export const listCss = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${SPACES[6]}px;
  padding: ${SPACES[4]}px 0;
  width: 100%;

  & > div:not(:empty){
    margin-left: auto;
    display: inline-flex;
    gap: ${SPACES[6]}px;
  }
`

export const pickerCss = css`
  border-radius: 5px;
  color: ${fromProps('normal.color')};
  background: ${fromProps('normal.background')};
  border: 1px solid ${fromProps('normal.outline')};
  width: 100%;

  svg{
    color: ${fromProps('normal.color')};
  }

  &.ant-picker-disabled {
    background-color: ${fromProps('disabled.background')};
    input{
      color: ${fromProps('disabled.color')};
    }
    svg{
      color: ${fromProps('disabled.color')};
    }
  }

  &:not(.ant-picker-disabled) .ant-picker-suffix:not(:last-child){
    display: none;
  }

  .ant-picker-active-bar {
    display: none;
  }
 
  &:not(.ant-picker-disabled):hover{
    border: 1px solid ${fromProps('hover.outline')};
  }
  
  &.ant-picker-focused{
    border: 1px solid ${fromProps('focus.outline')};
    box-shadow: 0 0 0 ${SPACES[1]}px ${fromProps('focus.outline')};
  }

  input {
    ${inputFontStyles};
    color: ${fromProps('normal.color')};
  }
  
  &:not(.ant-picker-disabled):not(.ant-picker-focused) {
    -webkit-box-shadow: 0 0 0 ${SPACES[15]}px ${fromProps('normal.background')} inset !important;
    -webkit-text-fill-color: ${fromProps('normal.color')} !important;
  }

  .ant-picker-clear {
    color: ${fromProps('normal.color')};
    background: transparent;
  }
`

export const pickerContainerCss = css`
  background: ${fromProps('normal.background')};

  .ant-picker-date-panel .ant-picker-header-super-prev-btn,
  .ant-picker-date-panel .ant-picker-header-super-next-btn {
    display: none;
  }

  .ant-picker-date-panel .ant-picker-header-prev-btn,
  .ant-picker-date-panel .ant-picker-header-next-btn {
    color: ${fromProps('normal.iconColor')};
  }

  .ant-picker-cell-today .ant-picker-cell-inner::before {
    border-color: ${fromProps('active.background')}; 
  }

  .ant-picker-cell-selected,
  .ant-picker-cell-range-start,
  .ant-picker-cell-range-end
  {
    & .ant-picker-cell-inner{
      background: ${fromProps('active.background')};
      color: ${fromProps('active.color')};
    }
  }

  .ant-picker-cell-in-range:before {
    background: ${fromProps('inRange.background')};
  }
  .ant-picker-cell-in-range .ant-picker-cell-inner {
    color: ${fromProps('inRange.color')};
  }
  
  && .ant-picker-cell:not(.ant-picker-cell-selected):hover .ant-picker-cell-inner {
    background: ${fromProps('hover.background')};
  }

  th { //days
    color: ${fromProps('disabled.color')};
  }

  .ant-picker-header-view > * { // month and year
    ${getFontStyle('header')}
    color: ${fromProps('normal.color')};
  }

  .ant-picker-cell {
    color: ${fromProps('disabled.color')};
    &.ant-picker-cell-in-view{
      color: ${fromProps('normal.color')};
    }
    & > .ant-picker-cell-inner{
      ${getFontStyle('cell')}
    }
  }

  .ant-picker-panel{
    background: ${fromProps('normal.background')};
  }

  .ant-picker-header, .ant-picker-footer{
    border-color: ${fromProps('normal.separatorColor')};
  }
  .ant-picker-footer{
    border-bottom: unset;
  }
`
