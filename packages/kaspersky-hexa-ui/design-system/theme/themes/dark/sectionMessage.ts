import {
  SectionMessageColorConfig,
  SectionMessageMode
} from '@src/section-message/types'

import { ComponentThemeContext } from '../config'
import { sectionMessage as defaultSectionMessage } from '../light/sectionMessage'

export const sectionMessage = ({ colors, effects }: ComponentThemeContext): Record<SectionMessageMode, SectionMessageColorConfig> =>
  defaultSectionMessage({ colors, effects })
