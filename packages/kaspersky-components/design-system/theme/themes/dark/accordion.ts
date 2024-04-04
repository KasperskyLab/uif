import { ComponentThemeContext } from '../config'
import { AccordionColorConfig } from '@src/accordion/types'
import {
  accordion as defaultAccordion,
  accordionSize as defaultAccordionSize
} from '../light/accordion'

export const accordion = ({ colors }: ComponentThemeContext): AccordionColorConfig =>
  defaultAccordion({ colors })

export const accordionSize = defaultAccordionSize
