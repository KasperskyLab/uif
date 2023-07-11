import { css } from 'styled-components'

import { DividerCssConfig, IDividerViewProps } from './types'

import { getFromProps } from '../../helpers/getFromProps'

const fromProps = getFromProps<DividerCssConfig>()

export const dividerCss = css<IDividerViewProps>`
  padding: 0;
  ${({ kind = 'horizontal', margin }) => (
    {
      vertical: css`
        position: relative;
        top: 0.05em;
        height: 0.9em;
        display: inline-block;
        border-left: ${fromProps('thickness')} solid ${fromProps('color')};
        margin-left: ${typeof margin === 'number' ? margin : margin![0]}px;
        margin-right: ${typeof margin === 'number' ? margin : margin![1]}px;
        border-radius: ${fromProps('radius')};
      `,
      horizontal: css`
        width: 100%;
        border-top: ${fromProps('thickness')} solid ${fromProps('color')};
        margin-top: ${typeof margin === 'number' ? margin : margin![0]}px;
        margin-bottom: ${typeof margin === 'number' ? margin : margin![1]}px;
        border-radius: ${fromProps('radius')};
      `
    }[kind]
  )}
`
