import { ComponentThemeContext } from '../config'
import {
  input as defaultInput,
  inputSize as defaultInputSize
} from '../light/input'

export const input = ({ colors }: ComponentThemeContext) =>
  defaultInput({ colors })

export const inputSize = defaultInputSize
