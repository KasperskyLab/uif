import { Size, Theme } from '../../design-system/types'

export type LoaderMode = 'default' | 'inverted'

export type LoaderSize = Size

export type LoaderColorConfig = {
  color: string
}

export type LoaderSizeConfig = {
  width: string,
  height: string
}

export type LoaderCssConfig = LoaderColorConfig & LoaderSizeConfig

export type LoaderStyleProps = {
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode?: LoaderMode,
  /** Size */
  size?: LoaderSize
}

export type ILoaderProps = LoaderStyleProps & {
  /** Is centered */
  centered?: boolean,
  /** Test id */
  klId?: string,
  /** Specifies a delay in milliseconds for loading state (prevent flush) */
  delay?: number,
  /** Whether Spin is visible */
  spinning?: boolean
}

export type ILoaderViewProps = Omit<ILoaderProps, keyof LoaderStyleProps> & { cssConfig: LoaderCssConfig }
