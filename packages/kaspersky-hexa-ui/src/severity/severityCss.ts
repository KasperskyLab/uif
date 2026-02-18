import { getFromProps } from '@helpers/getFromProps'
import { css } from 'styled-components'

import { SeverityCssConfig } from './types'

const fromProps = getFromProps<SeverityCssConfig>()

export const SeverityCss = css`
  background: ${fromProps('background')};
  color: ${fromProps('color')};
`
