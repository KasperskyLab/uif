import { ComponentThemeContext } from '../config'
import { sectionMessage as defaultSectionMessage } from '../light/sectionMessage'

export const sectionMessage = ({ colors }: ComponentThemeContext) => defaultSectionMessage({ colors })
