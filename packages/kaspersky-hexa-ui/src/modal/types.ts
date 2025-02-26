import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { ButtonMode } from '@src/button/types'
import { ModalProps as AntdModalProps } from 'antd'
import { MouseEventHandler, ReactNode } from 'react'

type CustomButtons = {
  text: string,
  disabled?: boolean,
  mode?: ButtonMode,
  loading?: boolean,
  iconBefore?: ReactNode,
  iconAfter?: ReactNode,
  onClick: () => void,
  id?: string,
  className?: string
} & TestingProps

type ActionType = {
  text?: string,
  mode?: ButtonMode,
  loading?: boolean,
  disabled?: boolean,
  iconBefore?: ReactNode,
  iconAfter?: ReactNode,
  onClick?: MouseEventHandler<HTMLElement> | undefined,
  className?: string
} & TestingProps

export enum ActionsMap {
  FIRST_ACTION = 'firstAction',
  SECOND_ACTION = 'secondAction',
  THIRD_ACTION = 'thirdAction'
}

type ActionConfig = Partial<Record<keyof typeof ActionsMap, ActionType>>

export type ModalColorConfig = {
  background?: string,
  border?: string,
  color?: string,
  boxShadow?: string,
  maskBackground?: string,
  modeBorder: string
}

export type ModalSizeConfig = {
  width?: string,
  top?: string
}

export type ModalCssConfig = ModalColorConfig & ModalSizeConfig

export type ModalMode = 'default' | 'warning' | 'error' | 'success'

export type ModalSize = 'small' | 'large'

export type ModalThemeProps = {
  /** Custom theme */
  theme?: Theme,
  /** Color mode */
  mode: ModalMode,
  /** Size */
  size?: ModalSize
}

type AntdModalPropsToOmit = 'title' | 'className' | 'okText' | 'cancelText' | 'maskClosable' | 'footer' | 'type' | 'onOk' | 'okButtonProps' | 'cancelButtonProps' | 'mask' | 'keyboard'

export type ModalProps = Omit<AntdModalProps, AntdModalPropsToOmit> & {
  /** Header */
  header?: ReactNode,
  /** Content */
  content?: ReactNode,
  /** Actions set, use the actions prop to let users act on the content in the modal */
  actions?: ActionConfig,
  /** Width */
  width?: string | number,
  /** More buttons for modal, need for backward compatibility with console Confirmation Popup */
  customButtons?: CustomButtons[]
} & ModalThemeProps & TestingProps

export type ModalViewProps = ToViewProps<ModalProps, ModalCssConfig, Omit<ModalThemeProps, 'mode'>>
