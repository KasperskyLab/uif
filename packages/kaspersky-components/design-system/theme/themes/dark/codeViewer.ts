import { ComponentThemeContext } from '../config'
import { CodeViewerColorConfig } from '@src/code-viewer/types'
import { codeViewer as defaultCodeViewerCreator } from '../light/codeViewer'

export const codeViewer = ({ colors }: ComponentThemeContext): CodeViewerColorConfig => {
  const defaultCodeViewer = defaultCodeViewerCreator({ colors })

  return {
    ...defaultCodeViewer,
    tooltipBoxShadow: '0px 3px 5px 0px rgba(24, 24, 34, 0.60), 0px 0px 1px 0px rgba(247, 248, 249, 0.64)'
  }
}
