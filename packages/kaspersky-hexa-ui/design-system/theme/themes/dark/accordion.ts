import { AccordionColorConfig } from '@src/accordion/types'

import { ComponentThemeContext } from '../config'
import {
  accordion as defaultAccordion,
  accordionSize as defaultAccordionSize
} from '../light/accordion'

export const accordion = ({ colors, effects }: ComponentThemeContext): AccordionColorConfig =>
  defaultAccordion({ colors, effects })

export const accordionSize = defaultAccordionSize
