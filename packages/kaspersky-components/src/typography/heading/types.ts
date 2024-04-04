import { DetailedHTMLProps, HTMLAttributes, RefObject } from 'react'
import {
  colorType,
  HeadingTypes,
  TextTag,
  themeColors
} from '@design-system/tokens'
import { TestingProps } from '@helpers/typesHelpers'

export type HeadingLevels = Extract<TextTag, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

export type HeadingProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & TestingProps & {
  [key: string]: unknown,
  /** Heading type */
  type?: keyof typeof HeadingTypes,
  /** Color */
  color?: colorType,
  themedColor?: keyof typeof themeColors['text-icons-elements'],
  ref?: ((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null | undefined
}
