import { InformationCardColorConfig } from '@src/informationCard/types'

import { ComponentThemeContext } from '../config'
import {
  informationCard as defaultInformationCard,
  informationCardSize as defaultInformationCardSize
} from '../light/informationCard'

export const informationCard = ({ colors, effects }: ComponentThemeContext): InformationCardColorConfig =>
  defaultInformationCard({ colors, effects })

export const informationCardSize = defaultInformationCardSize
