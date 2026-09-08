import { Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { ButtonMode } from '@src/button/types'
import type { ModalProps as AntdModalProps } from 'antd'
import { MouseEventHandler, ReactNode } from 'react'

type ActionType = {
  text?: string,
  mode?: ButtonMode,
  loading?: boolean,
  disabled?: boolean,
  iconBefore?: ReactNode,
  iconAfter?: ReactNode,
  onClick?: MouseEventHandler<HTMLElement> | (() => void),
  id?: string,
  className?: string
} & TestingProps

export enum ActionsMap {
  FIRST_ACTION = 'firstAction',
  SECOND_ACTION = 'secondAction',
  THIRD_ACTION = 'thirdAction'
}

type ActionConfig = Partial<Record<keyof typeof ActionsMap, ActionType>>

export type ModalMode = 'default' | 'warning' | 'error' | 'success' | 'ai'

export type ModalSize = 'small' | 'large'

export type ModalPosition = 'left' | 'center' | 'right'

type AntdModalPropsToOmit =
  'title' |
  'okText' |
  'cancelText' |
  'maskClosable' |
  'footer' |
  'type' |
  'onOk' |
  'okButtonProps' |
  'cancelButtonProps' |
  'mask' |
  'keyboard' |
  'width'

export type ModalProps = Omit<AntdModalProps, AntdModalPropsToOmit> & {
  /** Header */
  header?: ReactNode,
  /** Content */
  content?: ReactNode,
  /** Actions set, use the actions prop to let users act on the content in the modal */
  actions?: ActionConfig,
  /** More buttons for modal, need for backward compatibility with console Confirmation Popup */
  customButtons?: ActionType[],
  /** Color mode */
  mode?: ModalMode,
  /** Size */
  size?: ModalSize,
  /** Custom theme */
  theme?: Theme,
  /** Enables dialog mode: no overlay, non-blocking, always small size, aligned to bottom with configurable horizontal position. */
  dialog?: { position: ModalPosition }
} & TestingProps
