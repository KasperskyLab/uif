import { Theme } from '@design-system/types'
import { TestingAttributes, TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { ButtonProps } from '@src/button'
import { ReactNode } from 'react'

export const statusCardModes = ['success', 'warning', 'critical', 'error'] as const

export type StatusCardMode = typeof statusCardModes[number]

export type StatusCardColorConfig = {
  background: string,
  color: string,
  icon: string,
  image: string,
  border: string
}

export const statusCardSizes = ['small', 'medium', 'large'] as const

export type StatusCardSize = typeof statusCardSizes[number]

export type StatusCardSizeConfig = {
  imageWidth: number,
  imageHeight: number,
  iconSize: number
}

export type StatusCardCssConfig = StatusCardColorConfig & StatusCardSizeConfig

export type StatusCardThemeProps = {
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode: StatusCardMode,
  /** Size */
  size?: StatusCardSize
}

export const iconVariants = ['default', 'shield'] as const

export type IconVariant = typeof iconVariants[number]

export type StatusCardProps = {
  /** Card title */
  title?: string,
  /** Card description */
  description?: ReactNode,
  /** Action buttons */
  actions?: ButtonProps[],
  /** Whether to show the image */
  image?: boolean,
  /** Icon variant */
  iconVariant?: IconVariant,
  /** Width in pixels */
  width?: number,
  /** React children */
  children?: ReactNode
} & StatusCardThemeProps & TestingProps

export type StatusCardViewProps = ToViewProps<StatusCardProps, StatusCardCssConfig, Omit<StatusCardThemeProps, 'mode'>>

export type StatusCardImageProps = Required<Pick<StatusCardViewProps, 'cssConfig' | 'mode' | 'iconVariant'>> & {
  testAttributes?: TestingAttributes
}
