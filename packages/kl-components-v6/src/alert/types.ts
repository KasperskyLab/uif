import { AllHTMLAttributes, DetailedHTMLProps, MouseEventHandler } from 'react'
import { ThemeKey } from '@design-system/types'

export type AlertMode = 'infoAccent' | 'error' | 'warning' | 'success' | 'info'
export type AlertType = 'sectionMessage' | 'alert'

type StateProps = {
  background?: string,
  color?: string,
  borderColor?: string
};

type IconStateProps = {
  color?: string
};

export interface AlertSizeConfig extends Record<string, string | number> {
  fontStretch: string,
  margin: number
}

export type AlertColorConfig = {
  icon: IconStateProps,
  mode: {
    normal: StateProps
  }
};

export type AlertCssConfig = AlertColorConfig;

export enum ActionsMap {
  FIRST_ACTION = 'firstAction',
  SECOND_ACTION = 'secondAction'
}
type ActionType = {
  readonly text?: string,
  readonly onClick?: MouseEventHandler<HTMLElement> | undefined
}

type ActionConfig = Partial<Record<keyof typeof ActionsMap, ActionType>>

export interface AlertProps
  extends Omit<
  DetailedHTMLProps<AllHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'title' | 'ref' | 'as'
  > {
  /**
   * component unique  id
   */
  readonly componentId: string,
  /**
   * component theme
   */
  readonly theme?: ThemeKey,
  /** title
   * use in 'sectionMessage' type
   * title becomes hidden when type is 'alert'
   */
  readonly title?: string,
  /**
   * Variants
   */
  readonly mode: AlertMode,
  /**
   * is show border top?
   */
  readonly withBorder?: boolean,
  /**
   * Actions set
   * Use the actions prop to let users act on the content in the section message.
   */
  readonly actions?: ActionConfig,
  /**
   * Component view
   * use 'sectionMessage' when you need to alert users to a particular section of the screen
   * use 'alert' for display success, warning, error  and info messages.
   */
  readonly type: AlertType,
  /**
   * without default mode icon
   */
  readonly noIcon?: boolean,
  /**
 * width
 */
  readonly width?: string | number
}
