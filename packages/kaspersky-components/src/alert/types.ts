import { AllHTMLAttributes, DetailedHTMLProps, MouseEventHandler } from 'react'
import { ThemeKey } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

/** * @deprecated Use 'info' mode instead */
export type AlertModeDeprecated = 'infoAccent'

export type AlertMode = 'error' | 'success' | 'info' | 'warning'

/** * @deprecated Use SectionAlert component instead */
export type AlertTypeDeprecated = 'sectionMessage'

/**
 * Component view
 * use 'sectionMessage' when you need to alert users to a particular section of the screen
 * use 'alert' for display success, warning, error  and info messages.
 */
export type AlertType = 'alert' | AlertTypeDeprecated

type StateProps = {
  background?: string,
  color?: string,
  separator?: string,
  borderColor?: string
};

type IconStateProps = {
  color?: string
};

export type AlertSizeConfig = Record<string, string | number> & {
  fontStretch: string,
  margin: number
}

export type AlertColorConfig = {
  icon: IconStateProps,
  alert: StateProps
};

export type AlertCssConfig = AlertColorConfig;

export enum ActionsMap {
  FIRST_ACTION = 'firstAction',
  SECOND_ACTION = 'secondAction'
}
export type ActionType = {
  text?: string,
  onClick?: MouseEventHandler<HTMLElement> | undefined
}

type ActionConfig = Partial<Record<keyof typeof ActionsMap, ActionType>>

export type AlertThemeProps = {
  /** Custom theme */
  theme?: ThemeKey,
  /** Color mode */
  mode: AlertMode | AlertModeDeprecated
}

export type AlertProps = Omit<
  DetailedHTMLProps<AllHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'title' | 'ref' | 'as'
  > & AlertThemeProps & TestingProps & {
  /** @deprecated No effect, see sectionMessage component for doc */
  title?: string,
  /** If alert can be closed */
  closable?: boolean,
  /**
   * Actions set
   * Use the actions prop to let users act on the content in the section message.
   */
  actions?: ActionConfig,
  /** @deprecated No effect anymore */
  noIcon?: boolean,
  /** Callback on close */
  onClose?: () => void,
  /** Width in pixels */
  width?: string | number
}

export type AlertViewProps = ToViewProps<AlertProps, AlertCssConfig, Omit<AlertThemeProps, 'mode'>>
