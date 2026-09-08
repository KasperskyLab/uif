import { ThemeKey } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { AllHTMLAttributes, DetailedHTMLProps, MouseEventHandler } from 'react'

export const alertModes = ['info', 'success', 'warning', 'error'] as const

export type AlertMode = typeof alertModes[number]

export enum ActionsMap {
  FIRST_ACTION = 'firstAction',
  SECOND_ACTION = 'secondAction'
}

export type ActionType = {
  text?: string,
  onClick?: MouseEventHandler<HTMLElement> | undefined
}

type ActionConfig = Partial<Record<keyof typeof ActionsMap, ActionType>>

export type AlertProps = Omit<
  DetailedHTMLProps<AllHTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'title' | 'ref' | 'as' | 'type' | 'width'
> & TestingProps & {
  /** Custom theme */
  theme?: ThemeKey,
  /** Color mode */
  mode: AlertMode,
  /** If alert can be closed */
  closable?: boolean,
  /**
   * Actions set
   * Use the actions prop to let users act on the content in the section message.
   */
  actions?: ActionConfig,
  /** Callback on close */
  onClose?: () => void,
  /** Width in pixels */
  width?: string | number
}
