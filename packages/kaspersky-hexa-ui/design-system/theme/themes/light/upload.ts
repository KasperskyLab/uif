import { UploadColorConfig } from '@src/upload/legacy/types'

import { ComponentThemeContext } from '../config'

export const upload = ({ colors }: ComponentThemeContext): UploadColorConfig => ({
  normal: {
    background: colors.bg.alternative,
    border: `1px solid ${colors.elements.seporator}`,
    iconColor: colors['text-icons-elements'].primary,
    textPrimaryColor: colors['text-icons-elements'].primary,
    textSecondaryColor: colors['text-icons-elements'].secondary2
  },
  success: {
    color: colors.criticalitystatuses.positive
  },
  error: {
    color: colors.criticalitystatuses.high
  },
  disabled: {
    background: 'transparent',
    border: `1px solid ${colors['text-icons-elements'].disabled}`,
    iconColor: colors['text-icons-elements'].disabled,
    textPrimaryColor: colors['text-icons-elements'].disabled,
    textSecondaryColor: colors['text-icons-elements'].disabled
  }
})
