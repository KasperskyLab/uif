import { UploadColorConfig } from '@src/upload/legacy/types'

import { ComponentThemeContext } from '../config'
import { upload as defaultUpload } from '../light/upload'

export const upload = ({ colors, effects }: ComponentThemeContext): UploadColorConfig => defaultUpload({ colors, effects })
