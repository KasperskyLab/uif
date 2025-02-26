import { css } from 'styled-components'

import { getFromProps } from '../../helpers/getFromProps'

import { HelpMessageCssConfig } from './types'

const fromProps = getFromProps<HelpMessageCssConfig>()

export const helpMessageCss = css`
  color: ${fromProps('color')}
`
