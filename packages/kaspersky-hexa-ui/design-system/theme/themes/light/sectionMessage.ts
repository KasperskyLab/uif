import {
  SectionMessageColorConfig,
  SectionMessageMode
} from '@src/section-message/types'

import { ComponentThemeContext } from '../config'

export const sectionMessage = ({ colors }: ComponentThemeContext): Record<SectionMessageMode, SectionMessageColorConfig> => ({
  error: {
    icon: colors.section_message.critical.icon,
    background: colors.section_message.critical.bg,
    color: colors.section_message.critical.text,
    border: colors.section_message.critical.border
  },
  warning: {
    icon: colors.section_message.warning.icon,
    background: colors.section_message.warning.bg,
    color: colors.section_message.warning.text,
    border: colors.section_message.warning.border
  },
  success: {
    icon: colors.section_message.success.icon,
    background: colors.section_message.success.bg,
    color: colors.section_message.success.text,
    border: colors.section_message.success.border
  },
  info: {
    icon: colors.section_message.info.icon,
    background: colors.section_message.info.bg,
    color: colors.section_message.info.text,
    border: colors.section_message.info.border
  }
})
