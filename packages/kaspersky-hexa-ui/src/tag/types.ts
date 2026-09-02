import { Focus } from '@design-system/tokens/focus'
import { SizingType, Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { TooltipProps } from '@src/tooltip'
import {
  FC,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  RefAttributes
} from 'react'

import { ToGroupProps } from '../helpers/Group'

export const tagModes = [
  'neutral',
  'purple',
  'grey',
  'marina',
  'red',
  'marengo',
  'emerald',
  'orange',
  'yellow',
  'violet',
  'grass',
  'ai'
] as const

export type TagMode = typeof tagModes[number]

export type TagSize = Extract<SizingType, 'small' | 'medium'>

export type TagThemeProps = {
  /** Size */
  size?: TagSize,
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: TagMode
}

type TruncationProps = {
  /** Maximum number of characters allowed in the tag content */
  maxChars?: number,
  /** Truncation symbol */
  truncationSymbol?: string,
  /** Position of the tooltip when content is truncated */
  tooltipPosition?: TooltipProps['placement']
}

export type TagProps = TagThemeProps & RefAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement> & {
  /** Content */
  children?: ReactNode,
  /** Icon */
  icon?: ReactNode,
  /** Is it closable? */
  closable?: boolean,
  /** Config for tag truncation */
  truncation?: TruncationProps,
  /** Is outlined */
  outlined?: boolean,
  /** Make tag interactive */
  interactive?: boolean,
  /** Label */
  label?: ReactNode,
  /** Is disabled */
  disabled?: boolean,
  /** Is readonly */
  readOnly?: boolean,
  /** Is invalid */
  invalid?: null | boolean,
  /** Callback executed when tag is closed */
  onClose?: (e?: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void,
  /**
   * Flag that makes tag responsive
   * If this option is enabled tag behaves like a block element
   */
  isResponsive?: boolean
} & TestingProps

export type TagGroupProps = ToGroupProps<TagProps>

export type TagReductionGroupProps = {
  /** Array of items */
  items: TagProps[],
  /** Should render in multiple lines */
  isMultiline?: boolean,
  /** Reduction tag properties */
  reductionTag?: Pick<TagProps, 'size' | 'outlined'>
}

export type TagVariants = { Group: FC<TagGroupProps> }
