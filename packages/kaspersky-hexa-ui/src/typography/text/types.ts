import { themeColors } from '@design-system/tokens'
import { ThemeConfig } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { HTMLAttributes } from 'react'

import { productColors } from '@kaspersky/hexa-ui-core/colors/js'
import { textLevels, TextTag } from '@kaspersky/hexa-ui-core/typography/js'

export type TextLevels = Exclude<TextTag, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
export type TextType = keyof typeof textLevels
export type TextIconsElements = keyof typeof themeColors['text-icons-elements']
export type CriticalityStatuses = keyof typeof themeColors['criticalitystatuses']

export type TextProps = HTMLAttributes<Omit<HTMLSpanElement, 'color'>> & TestingProps & {
  [key: string]: unknown,
  /** Text Type */
  type?: TextType,
  /** Color: primary or secondary */
  color?: Exclude<keyof typeof productColors['text'], 'link'>,
  /** Custom theme */
  theme?: ThemeConfig,
  /** @deprecated Use 'color' prop instead */
  themedColor?: TextIconsElements | CriticalityStatuses,
  htmlTag?: TextTag
}
