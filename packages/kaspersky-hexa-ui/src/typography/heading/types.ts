import { themeColors } from '@design-system/tokens'
import { TestingProps } from '@helpers/typesHelpers'
import { DetailedHTMLProps, HTMLAttributes, RefObject } from 'react'

import { productColors } from '@kaspersky/hexa-ui-core/colors/js'
import { HeadingTypes, TextTag } from '@kaspersky/hexa-ui-core/typography/js'

export type HeadingLevels = Extract<TextTag, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

export type HeadingProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & TestingProps & {
  [key: string]: unknown,
  /** Heading type */
  type?: keyof typeof HeadingTypes,
  /** Color: primary or secondary */
  color?: Exclude<keyof typeof productColors['text'], 'link'>,
  /** @deprecated Use 'color' prop instead */
  themedColor?: keyof typeof themeColors['text-icons-elements'],
  ref?: ((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null | undefined
}
