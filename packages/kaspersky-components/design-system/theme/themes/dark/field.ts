import { FieldColorConfig } from '@src/field/types'
import { ComponentThemeContext } from '../config'
import { field as defaultField } from '../light/field'

export const field = ({ colors }: ComponentThemeContext): FieldColorConfig => defaultField({ colors })
