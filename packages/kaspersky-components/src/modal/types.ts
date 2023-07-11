import React, { ComponentProps, MouseEventHandler, ReactNode } from 'react' // eslint-disable-line @typescript-eslint/no-unused-vars
import { ThemeKey } from '../../design-system/types'
import { Modal as AntdModal } from 'antd'

export type ModalMode = 'default' | 'warning' | 'error'
type ActionType = {
  readonly text?: string,
  readonly onClick?: MouseEventHandler<HTMLElement> | undefined
}

export enum ActionsMap {
  FIRST_ACTION = 'firstAction',
  SECOND_ACTION = 'secondAction'
}

type ActionConfig = Partial<Record<keyof typeof ActionsMap, ActionType>>

type StateProps = {
  color?: string,
  borderColor?: string
};

export type ModalCommonModeCssProps = {
  background?: string,
  closeIconColor?: string,
  closeIconColorHover?: string,
  borderColor?: string,
  textColor?: string
};

export type ModalColorConfig = {
  mode: {
    normal: StateProps
  }
};

export type ModalCssConfig = ModalColorConfig & ModalCommonModeCssProps;

export interface ModalProps extends Omit<ComponentProps<typeof AntdModal>, 'title' | 'className' | 'okText' | 'cancelText' | 'maskClosable' | 'footer' | 'type' | 'onOk' | 'okButtonProps'> {
  /**
   * component unique id
   */
  readonly componentId: string,
  /**
   * component theme
   */
  readonly theme?: ThemeKey,
  /**
   * header
   */
  readonly header?: ReactNode,
  /**
   * Variants
   */
  readonly mode: ModalMode,
  /**
   * is show overlay?
   */
  readonly withOverlay?: boolean,
  /**
   * Actions set
   * Use the actions prop to let users act on the content in the modal.
   */
  readonly actions?: ActionConfig,
  /**
   * without default mode icon
   */
  readonly noIcon?: boolean,
  /**
 * width
 */
  readonly width?: string | number,
  /**
   * content
   */
  readonly content?: ReactNode
}
