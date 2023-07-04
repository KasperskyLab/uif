import { HTMLAttributes } from 'react'
import {
  colorType,
  TextTag,
  textLevels,
  themeColors
} from '../../../design-system/tokens'

export type TextLevels = Exclude<TextTag, 'h1' | 'h2' | 'h3' | 'h4'>;
export type TextType = keyof typeof textLevels
export type TextIconsElements = keyof typeof themeColors['text-icons-elements']
export type Criticalitystatuses = keyof typeof themeColors['criticalitystatuses']

export interface TextProps extends HTMLAttributes<Omit<HTMLSpanElement, 'color'>> {
  [key: string]: unknown,
  type?: TextType,
  color?: colorType,
  themedColor?: TextIconsElements | Criticalitystatuses,
  klId?: string
}
