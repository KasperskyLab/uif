import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { ButtonProps } from '@src/button'
import { LinkProps } from '@src/link'

export const placeholderModes = ['base', 'filled'] as const

export type PlaceholderMode = typeof placeholderModes[number]

export const placeholderSizes = ['small', 'medium'] as const

export type PlaceholderSize = typeof placeholderSizes[number]

export type TextAlign = 'left' | 'center' | 'right'

export type PlaceholderColorConfig = {
  background: string,
  title: string,
  description: string
}

export type PlaceholderSizeConfig = {
  imageSize: number,
  padding: number,
  gap: number,
  titleGap: number
}

export type PlaceholderCssConfig = PlaceholderColorConfig & PlaceholderSizeConfig

export type PlaceholderThemeProps = {
  /** Custom theme */
  theme?: Theme,
  /** Size */
  size?: PlaceholderSize,
  /** Color mode */
  mode?: PlaceholderMode
}

export const placeholderImageVariants = ['error403', 'error404', 'error503', 'noData', 'success', 'failed', 'warning', 'notChecked'] as const

export type PlaceholderImageVariant = typeof placeholderImageVariants[number]

export type PlaceholderProps = {
  /** Title */
  title: string,
  /** Description text */
  description?: string,
  /** Image */
  image?: PlaceholderImageVariant,
  /** Action buttons */
  actionButtons?: ButtonProps[],
  /** Action links */
  actionLinks?: LinkProps[],
  /** Description Text alignment */
  textAlign?: TextAlign,
  className?: string
} & PlaceholderThemeProps & TestingProps

export type PlaceholderViewProps = ToViewProps<PlaceholderProps, PlaceholderCssConfig, Omit<PlaceholderThemeProps, 'size'>>
