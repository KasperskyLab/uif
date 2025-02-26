import { MenuColorConfig } from '@src/menu'

import { ComponentThemeContext } from '../config'
import { menu as defaultMenu } from '../dark/menu'

export const menu = ({ colors, effects }: ComponentThemeContext): MenuColorConfig => defaultMenu({ colors, effects })
