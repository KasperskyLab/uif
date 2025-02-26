import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { DividerCssConfig, DividerViewProps } from './types'

const fromProps = getFromProps<DividerCssConfig>()

export const dividerCss = css<DividerViewProps>`
  padding: 0;
  display: flex;
  background: ${fromProps('color')};
  
  ${({ direction }) => (
    direction === 'horizontal'
      ? css`
        margin-top: 0;
        margin-bottom: 0;
        width: 100%;
        height: 1px;
      `
      : css`
        margin-left: 0;
        margin-right: 0;
        width: 1px;
      `
  )}
`
