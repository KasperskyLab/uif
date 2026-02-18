import { Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { TextType } from '@src/typography'

export const textDiffModes = ['new', 'old'] as const

export type TextDiffMode = typeof textDiffModes[number]

export type TextDiffColorConfig = {
  background: string,
  color: string
}

export type TextDiffSizeConfig = {
  height: string
}

export type TextDiffCssConfig = TextDiffColorConfig

export type TextDiffThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type TextDiffProps = {
  /** Custom class */
  className?: string,
  /** Text that will be shown as "added" */
  newText?: string,
  /** Text that will be shown as "removed" */
  oldText?: string,
  /** Type of text */
  textType?: TextType
} & TextDiffThemeProps & TestingProps
