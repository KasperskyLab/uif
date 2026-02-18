import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { HelpMessageCssConfig } from './types'

const fromProps = getFromProps<HelpMessageCssConfig>()

export const helpMessageCss = css`
  color: ${fromProps('color')};
  white-space: pre-wrap;
`
