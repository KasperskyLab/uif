import { ComponentThemeContext } from '../config'
import { modal as defaultModal } from '../light/modal'

export const modal = ({ colors }: ComponentThemeContext) => defaultModal({ colors })
