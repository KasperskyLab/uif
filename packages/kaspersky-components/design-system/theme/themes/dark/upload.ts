import { ComponentThemeContext } from '../config'
import { upload as defaultUpload } from '../light/upload'

export const upload = ({ colors }: ComponentThemeContext) => defaultUpload({ colors })
