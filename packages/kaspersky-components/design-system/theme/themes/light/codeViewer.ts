import { ComponentThemeContext } from '../config'
import { CodeViewerColorConfig } from '@src/code-viewer/types'
import { focus } from '@design-system/tokens/focus'

export const codeViewer = ({ colors }: ComponentThemeContext): CodeViewerColorConfig => {
  return {
    enabled: {
      background: colors.bg.base,
      borderColor: colors.elements.line,
      color: colors.textIconsElements.disabled,
      iconColor: colors.textIconsElements.secondary
    },
    hover: {
      borderColor: colors.mainInteractSecondary
    },
    readonly: {
      background: colors.elements['separator-solid'],
      iconColor: colors.textIconsElements.disabled
    },
    valid: {
      borderColor: colors.criticalitystatuses.positive
    },
    invalid: {
      borderColor: colors.criticalitystatuses.high
    },
    activeLine: {
      background: colors.elements.separator,
      color: colors.textIconsElements.primary
    },
    warningIconColor: colors.criticalitystatuses.medium,
    errorIconColor: colors.criticalitystatuses.critical,
    tooltipBoxShadow: '0px 0px 1px 0px rgba(9, 30, 66, 0.64), 0px 3px 5px 0px rgba(9, 30, 66, 0.20)',
    tagColors: {
      mainTagColor: colors.textIconsElements.primary,
      tagColor1: colors.defaultPalette.marina500,
      tagColor2: colors.defaultPalette.purple500,
      tagColor3: colors.tags['grass-bg-base'],
      tagColor4: colors.tags['yellow-bg-base']
    },
    ...focus({ colors })
  }
}
