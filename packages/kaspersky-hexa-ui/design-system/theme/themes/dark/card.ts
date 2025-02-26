import { CardColorConfig, CardMode } from '@src/card/types'

import { ComponentThemeContext } from '../config'
import { card as defaultCard, cardSize as defaultCardSize } from '../light/card'

export const card = ({ colors, effects }: ComponentThemeContext): Record<CardMode, CardColorConfig> =>
  defaultCard({ colors, effects })

export const cardSize = defaultCardSize
