import React, { PropsWithChildren } from 'react'
import { IconProps } from '@src/icon'
import { LabelPosition } from '@design-system/tokens'
import { Theme } from '@design-system/types'
import { FormLabelMode } from '@src/form-label/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { GridProps } from '@src/grid/types'

export type KeyValueToViewProps<T> = ToViewProps<T, KeyValueCssConfig, KeyValueThemeProps>

export type KeyValuePair = {
  pairKey: React.ReactNode,
  pairValue: React.ReactNode
}

export type StateProps = {
  keyColor?: string,
  valueColor?: string
}

export type KeyValueColorConfig = {
  normal: StateProps
}

export type KeyValueCssConfig = KeyValueColorConfig

export type KeyValueThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type KeyValueProps = {
  /** Set key-value view as grid and apply config from gridLayout */
  gridLayout?: GridProps['layout'],
  /** Is key label required */
  keyRequired?: boolean,
  /** Key label tooltip */
  keyTooltip?: React.ReactNode,
  /** Key label mode */
  keyMode?: FormLabelMode,
  /** Key label position */
  labelPosition?: LabelPosition,
  /** Key-value pairs */
  data?: KeyValuePair[],
  /** Row height */
  rowHeight?: number,
  /** Padding between key-value pairs */
  padding?: number,
  /** Right margin of key */
  keysMargin?: number,
  /** Wrapper classes */
  wrapperClasses?: {
    keyClassName?: string,
    valueClassName?: string
  }
} & KeyValueThemeProps & TestingProps

export type KeyValueViewProps = KeyValueToViewProps<KeyValueProps>

/** @deprecated Not present in design system */
export type KeyWithIconProps = PropsWithChildren< { icon?: IconProps['name'] } > & KeyValueThemeProps
