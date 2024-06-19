import { menu as defaultMenuCreator } from '../dark/menu'
import { ComponentThemeContext } from '../config'
import { MenuColorConfig } from '@src/menu'

export const menu = ({ colors }: ComponentThemeContext): MenuColorConfig => defaultMenuCreator({ colors })
