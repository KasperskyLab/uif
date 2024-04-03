import { css } from 'styled-components'
import { DividerCssConfig, DividerViewProps } from './types'
import { getFromProps } from '@helpers/getFromProps'

const fromProps = getFromProps<DividerCssConfig>()

export const dividerCss = css<DividerViewProps>`
  padding: 0;
  display: flex;
  background: ${fromProps('color')};
  
  ${({ direction, margin }) => (
    direction === 'horizontal'
      ? css`
        margin-top: ${typeof margin === 'number' ? margin : margin![0]}px;
        margin-bottom: ${typeof margin === 'number' ? margin : margin![1]}px;
        width: 100%;
        height: 1px;
      `
      : css`
        margin-left: ${typeof margin === 'number' ? margin : margin![0]}px;
        margin-right: ${typeof margin === 'number' ? margin : margin![1]}px;
        width: 1px;
        height: 0.9em;
      `
  )}
`
