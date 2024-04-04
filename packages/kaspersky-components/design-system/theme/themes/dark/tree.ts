import { ComponentThemeContext } from '../config'
import { TreeColorConfig } from '@src/tree/types'
import { tree as defaultTree } from '../light/tree'

export const tree = ({ colors }: ComponentThemeContext): TreeColorConfig => defaultTree({ colors })
