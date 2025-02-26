import { LabelPosition } from '@design-system/tokens'
import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { FormLabelMode } from '@src/form-label'
import { GridProps } from '@src/grid/types'
import { IconProps } from '@src/icon'
import React, { PropsWithChildren } from 'react'

export type KeyValueToViewProps<T> = ToViewProps<T, KeyValueCssConfig, KeyValueThemeProps>

export type KeyValuePair = {
  pairKey: React.ReactNode,
  pairValue: React.ReactNode,
  key?: React.Key
}

export type StateProps = {
  keyColor?: string,
  valueColor?: string
}

export type KeyValueColorConfig = {
  enabled: StateProps
}

export type KeyValueCssConfig = KeyValueColorConfig

export type KeyValueThemeProps = {
  /** Custom theme */
  theme?: Theme
}

/** @deprecated Use FieldSet instead. It has FieldSet.KeyValueMapper for quick replacement */
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
  /** Key-value pairs (use unique `key` prop in `KeyValuePair` to avoid rerendering of `data` list) */
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

/** @deprecated Use FieldSet instead. It has FieldSet.KeyValueMapper for quick replacement */
export type KeyValueViewProps = KeyValueToViewProps<KeyValueProps>

/** @deprecated Not present in design system */
export type KeyWithIconProps = PropsWithChildren< { icon?: IconProps['name'] } > & KeyValueThemeProps
