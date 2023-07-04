import { ReactNode } from 'react'
import { NotificationPlacement } from 'antd/lib/notification'
import { ThemeKey } from '../../design-system/types'

export type NotificationMode = 'error' | 'success' | 'info' | 'infoAccent';

export type NotificationCommonModeCssProps = {
  iconColor?: string
};

type StateProps = {
  background?: string,
  color?: string
};

export type NotificationColorConfig = {
  normal: StateProps
};

export type NotificationCssConfig = NotificationColorConfig & NotificationCommonModeCssProps;

export interface NotificationProps {
  /**
   * node unique  id
   */
  readonly id: string,
  /**
   * component unique  id
   */
  readonly componentId: string,
  /**
   * component theme
   */
  readonly theme?: ThemeKey,
  /**
   * variants
   */
  readonly mode: NotificationMode,
  /**
   * delay
   */
  readonly delay?: number,
  /**
   * description
   */
  readonly description?: ReactNode,
  /**
   * place
   */
  readonly place?: NotificationPlacement,
  /**
   * use without icon?
   */
  readonly noIcon?: boolean
}
