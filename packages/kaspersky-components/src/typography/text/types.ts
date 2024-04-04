import { HTMLAttributes } from 'react'
import {
  colorType,
  TextTag,
  textLevels,
  themeColors
} from '@design-system/tokens'
import { ThemeConfig } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'

export type TextLevels = Exclude<TextTag, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
export type TextType = keyof typeof textLevels
export type TextIconsElements = keyof typeof themeColors['text-icons-elements']
export type Criticalitystatuses = keyof typeof themeColors['criticalitystatuses']

export type TextProps = HTMLAttributes<Omit<HTMLSpanElement, 'color'>> & TestingProps & {
  [key: string]: unknown,
  /** Text Type */
  type?: TextType,
  /** Color */
  color?: colorType,
  /** Custom theme */
  theme?: ThemeConfig,
  themedColor?: TextIconsElements | Criticalitystatuses,
  htmlTag?: TextTag
}
