import { LoaderColorConfig, LoaderMode, LoaderSize, LoaderSizeConfig } from '../../../../src/loader/types'
import { ComponentThemeContext } from '../config'

export const loader = ({ colors }: ComponentThemeContext): Record<LoaderMode, LoaderColorConfig> => ({
  default: {
    color: colors.textIconsElements.secondary2
  },
  inverted: {
    color: colors.textIconsElements['secondary2-invert']
  }
})

export const loaderSize: Record<LoaderSize, LoaderSizeConfig> = {
  extraSmall: {
    width: '8px',
    height: '8px'
  },
  small: {
    width: '16px',
    height: '16px'
  },
  medium: {
    width: '24px',
    height: '24px'
  },
  large: {
    width: '48px',
    height: '48px'
  },
  extraLarge: {
    width: '96px',
    height: '96px'
  }
}
