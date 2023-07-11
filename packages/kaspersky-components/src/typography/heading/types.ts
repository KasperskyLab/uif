import { DetailedHTMLProps, HTMLAttributes, RefObject } from 'react'
import {
  colorType,
  HeadingTypes,
  TextTag,
  themeColors
} from '../../../design-system/tokens'

export type HeadingLevels = Extract<TextTag, 'h1' | 'h2' | 'h3' | 'h4'>;

export interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  [key: string]: unknown,
  type?: keyof typeof HeadingTypes,
  color?: colorType,
  themedColor?: keyof typeof themeColors['text-icons-elements'],
  klId?: string,
  ref?: ((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null | undefined
}
