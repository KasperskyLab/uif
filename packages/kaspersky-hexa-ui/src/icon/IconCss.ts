import { css } from 'styled-components'

import { getFromProps } from '../../helpers/getFromProps'

import { IconCssConfig } from './types'

const fromProps = getFromProps<IconCssConfig>()

export const wrapperSpanCss = css`
  color: ${fromProps('color')};
  line-height: 0; 
`
