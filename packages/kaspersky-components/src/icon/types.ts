import { HTMLAttributes, CSSProperties } from 'react'
import { icons, themeColorsType, themeColors } from '@design-system/tokens'
import { SizingType } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'

export type IconSizes = Exclude<SizingType, 'extraLarge' >

export type IconPackSizes = 8 | 12 | 16 | 24 | 48

export type IconCssConfig = {
  color?: string
}

export type IconProps = HTMLAttributes<HTMLSpanElement> & {
  [key: string]: any,
  /** Hard set color of icon */
  color?: CSSProperties['color'],
  /** Size of icon 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' */
  size: IconSizes,
  /** Name of Icon */
  name: typeof icons[IconProps['size']][number],
  /** Themed Color */
  themedColor?: keyof typeof themeColors['text-icons-elements']
} & TestingProps

export type IconColorConfig = {
  color?: themeColorsType
}
