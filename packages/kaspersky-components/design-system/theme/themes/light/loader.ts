import { ComponentThemeContext } from '../config'
import { LoaderColorConfig, LoaderMode, LoaderSize, LoaderSizeConfig } from '@src/loader/types'
import { getTextSizes, TextTypes } from './typography'

export const loader = ({ colors }: ComponentThemeContext): Record<LoaderMode, LoaderColorConfig> => ({
  default: {
    color: colors.textIconsElements['secondary2-solid']
  },
  inverted: {
    color: colors.textIconsElements['secondary2-invert-solid']
  }
})

export const loaderSize: Record<LoaderSize, LoaderSizeConfig> = {
  extraSmall: {
    width: '8px',
    height: '8px',
    gap: '2px',
    ...getTextSizes(TextTypes.BTR4)
  },
  small: {
    width: '16px',
    height: '16px',
    gap: '4px',
    ...getTextSizes(TextTypes.BTR4)
  },
  medium: {
    width: '24px',
    height: '24px',
    gap: '4px',
    ...getTextSizes(TextTypes.BTR4)
  },
  large: {
    width: '48px',
    height: '48px',
    gap: '4px',
    ...getTextSizes(TextTypes.BTR3)
  },
  extraLarge: {
    width: '96px',
    height: '96px',
    gap: '8px',
    ...getTextSizes(TextTypes.BTR2)
  }
}
