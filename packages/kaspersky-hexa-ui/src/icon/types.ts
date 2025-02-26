import { icons, themeColors, themeColorsType } from '@design-system/tokens'
import { SizingType } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { CSSProperties, HTMLAttributes } from 'react'

import { productColors } from '@kaspersky/hexa-ui-core/colors/js'

export type IconSizes = Exclude<SizingType, 'extraLarge' >

export type IconPackSizes = 8 | 12 | 16 | 24 | 48

export type IconCssConfig = {
  color?: string
}

export type IconProps = HTMLAttributes<HTMLSpanElement> & {
  [key: string]: any,
  /** @deprecated Use 'iconColor' prop instead */
  color?: CSSProperties['color'],
  /** Сolor of icon: primary or secondary */
  iconColor?: keyof typeof productColors['text'],
  /** Size of icon 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' */
  size: IconSizes,
  /** Name of Icon */
  name: typeof icons[IconProps['size']][number],
  /** @deprecated Use 'iconColor' prop instead */
  themedColor?: keyof typeof themeColors['text-icons-elements']
} & TestingProps

export type IconColorConfig = {
  color?: themeColorsType
}
