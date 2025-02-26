import { css } from 'styled-components'

import { getFromProps } from '../../helpers/getFromProps'

import { SeverityCssConfig } from './types'

const fromProps = getFromProps<SeverityCssConfig>()

export const SeverityCss = css`
  background: ${fromProps('background')};
  color: ${fromProps('color')};
`
