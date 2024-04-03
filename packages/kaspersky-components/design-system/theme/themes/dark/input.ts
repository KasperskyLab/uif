import { ComponentThemeContext } from '../config'
import {
  input as defaultInput,
  inputSize as defaultInputSize
} from '../light/input'
import { InputColorConfig, InputSizeConfig } from '@src/input/types'

export const input = ({ colors }: ComponentThemeContext): InputColorConfig => defaultInput({ colors })

export const inputSize: InputSizeConfig = defaultInputSize
