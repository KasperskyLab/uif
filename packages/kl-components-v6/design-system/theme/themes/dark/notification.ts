import { ComponentThemeContext } from '../config'
import { notification as defaultNotification } from '../light/notification'

export const notification = ({ colors }: ComponentThemeContext) => defaultNotification({ colors })
