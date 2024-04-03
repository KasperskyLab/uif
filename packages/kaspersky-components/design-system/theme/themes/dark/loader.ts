import { ComponentThemeContext } from '../config'
import { LoaderColorConfig, LoaderMode } from '@src/loader/types'
import { loader as defaultLoader, loaderSize as defaultLoaderSize } from '../light/loader'

export const loader = ({ colors }: ComponentThemeContext): Record<LoaderMode, LoaderColorConfig> =>
  defaultLoader({ colors })

export const loaderSize = defaultLoaderSize
