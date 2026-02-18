import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { IconCssConfig } from './types'

const fromProps = getFromProps<IconCssConfig>()

export const wrapperSpanCss = css`
  color: ${fromProps('color')};
  line-height: 0; 
`
