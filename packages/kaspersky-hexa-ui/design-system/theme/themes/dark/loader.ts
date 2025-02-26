import { LoaderColorConfig, LoaderMode } from '@src/loader/types'

import { ComponentThemeContext } from '../config'
import { loader as defaultLoader, loaderSize as defaultLoaderSize } from '../light/loader'

export const loader = ({ colors, effects }: ComponentThemeContext): Record<LoaderMode, LoaderColorConfig> =>
  defaultLoader({ colors, effects })

export const loaderSize = defaultLoaderSize
