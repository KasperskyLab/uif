import { ComponentThemeContext } from '../config'
import { loader as defaultLoader, loaderSize as defaultLoaderSize } from '../light/loader'

export const loader = ({ colors }: ComponentThemeContext) => defaultLoader({ colors })

export const loaderSize = {
  ...defaultLoaderSize
}
