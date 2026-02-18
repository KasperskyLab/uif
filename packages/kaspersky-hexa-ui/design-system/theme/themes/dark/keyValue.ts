import { KeyValueColorConfig } from '@src/key-value/types'

import { ComponentThemeContext } from '../config'
import { keyValue as defaultKeyValue } from '../light/keyValue'

export const keyValue = ({ colors, effects }: ComponentThemeContext): KeyValueColorConfig =>
  defaultKeyValue({ colors, effects })
