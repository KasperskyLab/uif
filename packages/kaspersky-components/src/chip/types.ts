import React, { MouseEvent } from 'react'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { Theme } from '@design-system/types'
import { Focus } from '@design-system/tokens/focus'

type StateProps = {
  background?: string,
  color?: string,
  crossColor?: string
}

export type ChipColorConfig = Focus & {
  normal?: StateProps,
  hover?: StateProps,
  active?: StateProps,
  disabled?: StateProps
}

export type ChipSizeConfig = {
  height: string,
  padding: string
}

export type ChipCssConfig = ChipColorConfig & ChipSizeConfig

export type ChipSize = 'medium' | 'large'

export type ChipStyleProps = {
  /** Custom theme */
  theme?: Theme,
  /** Chip size */
  size?: ChipSize
}

export type ChipProps = ChipStyleProps & {
  /** Chip label */
  label?: string,
  /** Icon before label */
  icon?: React.ReactElement,
  /** Counter value */
  counter?: number,
  /** Disabled state */
  disabled?: boolean,
  /** Callback executed when tag is closed */
  onClose?: (e?: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void
} & TestingProps

export type ChipViewProps = ToViewProps<ChipProps, ChipCssConfig, ChipStyleProps>
