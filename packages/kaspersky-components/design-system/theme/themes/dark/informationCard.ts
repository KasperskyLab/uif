import { ComponentThemeContext } from '../config'
import { InformationCardColorConfig } from '@src/informationCard/types'
import {
  informationCard as defaultInformationCard,
  informationCardSize as defaultInformationCardSize
} from '../light/informationCard'

export const informationCard = ({ colors }: ComponentThemeContext): InformationCardColorConfig =>
  defaultInformationCard({ colors })

export const informationCardSize = defaultInformationCardSize
