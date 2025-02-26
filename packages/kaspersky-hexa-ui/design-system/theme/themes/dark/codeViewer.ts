import { CodeViewerColorConfig } from '@src/code-viewer/types'

import { ComponentThemeContext } from '../config'
import { codeViewer as defaultCodeViewer } from '../light/codeViewer'

export const codeViewer = ({ colors, effects }: ComponentThemeContext): CodeViewerColorConfig =>
  defaultCodeViewer({ colors, effects })
