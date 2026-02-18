import { Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'

export type LoadingOverlayColorConfig = {
  background: string
}

export type LoadingOverlayThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type LoadingOverlayProps = {
  className?: string,
  description?: string,
  size?: 'medium' | 'large'
} & LoadingOverlayThemeProps & Pick<TestingProps, 'testId'>
