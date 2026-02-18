import { icons, themeColors, themeColorsType } from '@design-system/tokens'
import { SizingType } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { CSSProperties, HTMLAttributes } from 'react'

import { productColors } from '@kaspersky/hexa-ui-core/colors/js'
import Icons12 from '@kaspersky/hexa-ui-icons/12'
import Icons16 from '@kaspersky/hexa-ui-icons/16'
import Icons24 from '@kaspersky/hexa-ui-icons/24'
import Icons32 from '@kaspersky/hexa-ui-icons/32'
import Icons48 from '@kaspersky/hexa-ui-icons/48'
import Icons8 from '@kaspersky/hexa-ui-icons/8'

/** @deprecated Use IconPackSizes instead */
export type DeprecatedIconSizes = Exclude<SizingType, 'extraLarge' >

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

export type IconNames = keyof typeof Icons8
  | keyof typeof Icons12
  | keyof typeof Icons16
  | keyof typeof Icons24
  | keyof typeof Icons32
  | keyof typeof Icons48

export type IconResolverProps = {
  /** Icon name */
  name: IconNames | string, // string is needed here for backward compatibility
  /** Icon size. Use number value as it matches size from hexa-ui-icons package, string values are deprecated */
  size: IconPackSizes | DeprecatedIconSizes
} & TestingProps
