import { focus } from '@design-system/tokens/focus'
import { CodeViewerColorConfig } from '@src/code-viewer/types'

import { ComponentThemeContext } from '../config'

export const codeViewer = ({ colors, effects }: ComponentThemeContext): CodeViewerColorConfig => {
  return {
    enabled: {
      background: colors.input_code_viewer.bg.enabled,
      border: colors.input_code_viewer.border.enabled,
      color: colors.input_code_viewer.text.row_number,
      icon: colors.input_code_viewer.icon.enabled
    },
    hover: {
      border: colors.input_code_viewer.border.hover
    },
    readonly: {
      background: colors.input_code_viewer.bg.readonly,
      icon: colors.input_code_viewer.icon.readonly
    },
    success: {
      border: colors.input_code_viewer.border.success
    },
    error: {
      border: colors.input_code_viewer.border.error
    },
    activeLine: {
      background: colors.input_code_viewer.bg.highlight,
      color: colors.input_code_viewer.text.row_number_selected
    },
    warningIconColor: colors.tag.yellow.bg.enabled,
    errorIconColor: colors.tag.red.bg.enabled,
    tooltipBoxShadow: `${effects.elevation.medium[1]} ${colors.elevation.medium[2]}, ${effects.elevation.medium[2]} ${colors.elevation.medium[1]}`,
    tagColors: {
      mainTagColor: colors.input_code_viewer.text.code_balck,
      tagColor1: colors.input_code_viewer.text.code_marina,
      tagColor2: colors.input_code_viewer.text.code_purple,
      tagColor3: colors.input_code_viewer.text.code_grass,
      tagColor4: colors.input_code_viewer.text.code_orange
    },
    ...focus({ colors, effects })
  }
}
