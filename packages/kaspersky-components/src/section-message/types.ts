import { AllHTMLAttributes, DetailedHTMLProps, MouseEventHandler } from 'react'
import { ThemeKey } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

/** * @deprecated Use 'info' mode instead */
export type SectionMessageModeDeprecated = 'infoAccent'

export type SectionMessageMode = 'error' | 'success' | 'info' | 'warning'

type StateProps = {
  background?: string,
  color?: string,
  borderColor?: string
};

type IconStateProps = {
  color?: string
};

export type SectionMessageSizeConfig = Record<string, string | number> & {
  fontStretch: string,
  margin: number
}

export type SectionMessageColorConfig = {
  icon: IconStateProps,
  sectionMessage: StateProps
};

export type SectionMessageCssConfig = SectionMessageColorConfig;

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
  mode: SectionMessageMode | SectionMessageModeDeprecated
}

type DivProps = DetailedHTMLProps<AllHTMLAttributes<HTMLDivElement>, HTMLDivElement>
export type SectionMessageProps = Omit<DivProps, 'title' | 'ref' | 'as' > & {
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
