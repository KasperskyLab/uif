import { ThemeKey } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { AllHTMLAttributes, DetailedHTMLProps, MouseEventHandler } from 'react'

export const sectionMessageModes = ['error', 'success', 'info', 'warning'] as const

export type SectionMessageMode = typeof sectionMessageModes[number]

export type SectionMessageColorConfig = {
  background?: string,
  color?: string,
  icon?: string,
  border?: string
}

export type SectionMessageSizeConfig = Record<string, string | number> & {
  fontStretch: string,
  margin: number
}

export type SectionMessageCssConfig = SectionMessageSizeConfig & SectionMessageColorConfig

export enum ActionsMap {
  FIRST_ACTION = 'firstAction',
  SECOND_ACTION = 'secondAction'
}

type ActionType = {
  text?: string,
  onClick?: MouseEventHandler<HTMLElement> | undefined
}

type ActionConfig = Partial<Record<keyof typeof ActionsMap, ActionType>>

export type SectionMessageThemeProps = {
  /** Custom theme */
  theme?: ThemeKey,
  /** Color mode */
  mode: SectionMessageMode
}

type DivProps = DetailedHTMLProps<AllHTMLAttributes<HTMLDivElement>, HTMLDivElement>
export type SectionMessageProps = Omit<DivProps, 'title' | 'ref' | 'as' | 'type' > & {
  /** If alert can be closed */
  closable?: boolean,
  /** If alert can be expanded */
  expandable?: boolean,
  /** Title of SectionMessage */
  title?: string,
  /** Callback on close */
  onClose?: () => void,
  /** Actions set. Use the actions prop to let users act on the content in the section message */
  actions?: ActionConfig,
  /** Width */
  width?: string | number
} & SectionMessageThemeProps & TestingProps

export type SectionMessageViewProps = ToViewProps<SectionMessageProps, SectionMessageCssConfig, Omit<SectionMessageThemeProps, 'mode'>>
