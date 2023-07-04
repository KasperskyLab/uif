import { ComponentThemeContext } from '../config'

import { label as defaultLabel } from '../light/label'

export const label = ({ colors }: ComponentThemeContext) => defaultLabel({ colors })
