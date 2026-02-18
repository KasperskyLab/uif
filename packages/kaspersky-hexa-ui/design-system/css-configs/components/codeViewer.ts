import { ComponentContext } from '@design-system/css-configs/types'
import { focus } from '@design-system/tokens/focus'
import { CodeViewerColorConfig } from '@src/code-viewer/types'

export const codeViewer = ({ effects }: ComponentContext): CodeViewerColorConfig => {
  return {
    enabled: {
      background: 'var(--input_code_viewer--bg--enabled)',
      backgroundActive: 'var(--input_code_viewer--bg--highlight)',
      border: 'var(--input_code_viewer--border--enabled)',
      color: 'var(--input_code_viewer--text--row_number)',
      colorActive: 'var(--input_code_viewer--text--row_number_selected)',
      icon: 'var(--input_code_viewer--icon--enabled)'
    },
    hover: {
      border: 'var(--input_code_viewer--border--hover)'
    },
    readonly: {
      background: 'var(--input_code_viewer--bg--readonly)',
      backgroundActive: 'var(--input_code_viewer--bg--highlight_disabled)',
      icon: 'var(--input_code_viewer--icon--readonly)',
      border: 'var(--input_code_viewer--border--readonly)'
    },
    success: {
      border: 'var(--input_code_viewer--border--success)'
    },
    error: {
      border: 'var(--input_code_viewer--border--error)'
    },
    warningIconColor: 'var(--input_code_viewer--icon--warning)',
    errorIconColor: 'var(--input_code_viewer--icon--error)',
    tooltipBoxShadow: `${effects.elevation.medium[1]} var(--elevation--medium--2), ${effects.elevation.medium[2]} var(--elevation--medium--1)`,
    tagColors: {
      mainTagColor: 'var(--input_code_viewer--text--code_black)',
      tagColor1: 'var(--input_code_viewer--text--code_marina)',
      tagColor2: 'var(--input_code_viewer--text--code_purple)',
      tagColor3: 'var(--input_code_viewer--text--code_grass)',
      tagColor4: 'var(--input_code_viewer--text--code_orange)'
    },
    ...focus({ effects })
  }
}
