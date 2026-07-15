import { icons, themeColors, themeColorsType } from '@design-system/tokens'
import { SizingType } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { CSSProperties, HTMLAttributes } from 'react'

import { productColors } from '@kaspersky/hexa-ui-core/colors/js'

/** @deprecated Use IconPackSizes instead */
export type DeprecatedIconSizes = Exclude<SizingType, 'extraLarge'>

export const actualIconSizes = [8, 12, 16, 24, 32, 48] as const

export type IconPackSizes = typeof actualIconSizes[number]

export type IconCssConfig = {
  color?: string
}

/** @deprecated Use IconResolverProps prop instead */
export type IconProps = HTMLAttributes<HTMLSpanElement> & {
  [key: string]: any,
  /** @deprecated Use 'iconColor' prop instead */
  color?: CSSProperties['color'],
  /** Сolor of icon: primary or secondary */
  iconColor?: keyof typeof productColors['text'],
  /** Size of icon 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' */
  size: DeprecatedIconSizes,
  /** Name of Icon */
  name: typeof icons[IconProps['size']][number],
  /** @deprecated Use 'iconColor' prop instead */
  themedColor?: keyof typeof themeColors['text-icons-elements']
} & TestingProps

export type IconColorConfig = {
  color?: themeColorsType
}

export type IconNames = string

export type IconResolverProps = {
  /** Icon name */
  name: string,
  /** Icon size. Use number value as it matches size from hexa-ui-icons package, string values are deprecated */
  size: IconPackSizes | DeprecatedIconSizes
} & TestingProps
