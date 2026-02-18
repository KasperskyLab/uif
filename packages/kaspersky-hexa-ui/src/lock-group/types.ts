import { TestingProps, ThemeProps, ToViewProps } from '@helpers/typesHelpers'
import { FC, ReactNode } from 'react'

import { TextType } from '../typography'

export interface ILockIconProps {
  isLockClosed?: boolean,
  isLockStatusNotDefined?: boolean
}

export type LockGroupDesignTokens = {
  color: string,
  iconColor: string,
  borderColor: string,
  horizontalMargin: string
}

export const statusIcons = ['warning'] as const

export type StatusIcon = typeof statusIcons[number]

export type LockGroupProps = {
  /** Dependant from LockGroup components */
  children?: ReactNode,
  /** CSS class to customize predefined LockGroup styles */
  className?: string,
  /** Hint (Text or React component) to describe LockGroup behaviour with information icon and tooltip  */
  informationText?: string | ReactNode | FC,
  /** Flag to hide lock icon. Header, Toggle and other parts are visible by default, they managed by different flags */
  isHideLock?: boolean,
  /** Flag to hide lock icon, Toggle and whole right parts of LockGroup. Header and other parts are visible by default, they managed by different flags */
  isHideControl?: boolean,
  /** Flag to open or close lock and enable or disable Toggle  */
  isLockClosed?: boolean,
  /** Flag to show NotDefined LockGroup status. It can happen when 2 dependant controls inherited from 2 different policies */
  isLockStatusNotDefined?: boolean,
  /** Flag to disable Toggle, it will be impossible to change lock status  */
  isLockDisabled?: boolean,
  /** Flag to disable dependant components  */
  isGroupDisabled?: boolean,
  /** Flag to show LockGroup as standalone component: only lock icon and Toggle without header and dependant components  */
  isStandalone?: boolean,
  /** Callback to handle Toggle change (and lock)  */
  onLockChange?: (checked: boolean) => void,
  /** Text near Toggle and lock  */
  statusText?: ReactNode,
  /** Flag to show border around dependant components  */
  isChildrenOutlined?: boolean,
  /** Text which will be shown in LockGroup Header  */
  title?: ReactNode,
  /** Level for LockGroup Header — H6, H5, H4  */
   titleLevel?: Extract<TextType, 'H6' | 'H5' | 'H4'>,
  /** List of Tags near Header. Used for example to show supported operating system for LockGroup  */
  titleTags?: string[],
  /** Status icon */
  statusIcon?: StatusIcon,
  /** Tooltip text for status icon */
  statusTooltip?: string
} & ThemeProps & TestingProps

export type LockGroupViewProps = ToViewProps<LockGroupProps, LockGroupDesignTokens, ThemeProps>
