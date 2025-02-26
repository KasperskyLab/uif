import { Size, Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import * as React from 'react'

import { TextSizes } from '@kaspersky/hexa-ui-core/typography/js'

export type LoaderMode = 'default' | 'inverted'

export type LoaderSize = Size | `${Size}`

export type LoaderColorConfig = {
  color: string,
  textColor: string
}

export type LoaderSizeConfig = TextSizes & {
  width: string,
  height: string,
  gap: string
}

export type LoaderCssConfig = LoaderColorConfig & LoaderSizeConfig

export type LoaderThemeProps = {
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: LoaderMode,
  /** Size */
  size?: LoaderSize
}

export type LoaderProps = {
  /** Is centered */
  centered?: boolean,
  /** Specifies a delay in milliseconds for loading state (prevent flush) */
  delay?: number,
  /** Whether Spin is visible */
  spinning?: boolean,
  /** Spinner className */
  className?: string,
  /** Customize description content when Spin has children */
  tip?: React.ReactNode
} & LoaderThemeProps & TestingProps

export type LoaderViewProps = ToViewProps<LoaderProps, LoaderCssConfig, LoaderThemeProps>
