import { TestingProps, ThemeProps } from '@helpers/typesHelpers'
import { HorizontalNavProps } from '@src/horizontal-nav'
import { ReactNode } from 'react'

import type { AccountMenuProps } from './components/AccountMenu'
import type { CenterButtonProps } from './components/CenterButton'
import type { NotificationButtonConfigProps } from './components/NotificationButton'

export type TopNavigationProps = {
  /** Css class */
  className?: string,
  /** Product logo on left part */
  logo: ReactNode,
  /** Product title after logo on left part */
  title: string,
  /** Props for account menu */
  accountMenuProps?: AccountMenuProps,
  /** Config for center element */
  elementCentered?: {
    type: 'button' | 'horizontalNavigation',
    buttonConfig?: CenterButtonProps,
    horizontalNavigationConfig?: HorizontalNavProps
  },
  contentRight?: ReactNode, 
  /** Props for notification button on right part */
  notificationButtonProps?: NotificationButtonConfigProps,
  /** Whether to show red indicator on notification button */
  notificationIndicator?: boolean,
  titleLinkURL?: string,
} & ThemeProps & TestingProps
