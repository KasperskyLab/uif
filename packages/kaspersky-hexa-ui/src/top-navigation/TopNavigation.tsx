import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { getChildTestProps, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { HorizontalNav } from '@src/horizontal-nav'
import { Link } from '@src/link'
import { Space } from '@src/space'
import { Text } from '@src/typography'
import cn from 'classnames'
import React, { PropsWithChildren } from 'react'

import { AccountMenu } from './components/AccountMenu'
import { CenterButton } from './components/CenterButton'
import { NotificationButton } from './components/NotificationButton'
import styles from './TopNavigation.module.scss'
import { TopNavigationProps } from './types'

type TopNavigationPartProps = PropsWithChildren<{
  /** Css class */
  className?: string
}>

const TopNavigationPart = ({ children, className }: TopNavigationPartProps): JSX.Element => {
  return <Space
    gap={8}
    width="unset"
    wrap="nowrap"
    className={className}
  >
    {children}
  </Space>
}

export const TopNavigation = ({
  logo,
  title,
  accountMenuProps,
  elementCentered,
  contentRight,
  notificationButtonProps,
  notificationIndicator,
  className,
  theme,
  titleLinkURL = '',
  ...props
}: TopNavigationProps): JSX.Element => {
  const { testAttributes, ...rest } = useTestAttribute(props)

  return <header
    {...testAttributes}
    {...rest}
    className={cn(
      getClassNameWithTheme(className, theme),
      styles.header
    )}
  >
    <Space gap={24} justify="space-between" height="100%" wrap="nowrap">
      <TopNavigationPart>
        {logo}
        <Link href={titleLinkURL}>
          <Text type="BTM3">{title}</Text>
        </Link>
      </TopNavigationPart>
      <TopNavigationPart
        className={cn(
          styles.headerCenterPart,
          elementCentered?.type === 'horizontalNavigation' && elementCentered?.horizontalNavigationConfig && styles.horizontalNav
        )}
      >
        {elementCentered?.type === 'button' && elementCentered?.buttonConfig && (
          <CenterButton
            {...elementCentered.buttonConfig}
            {...getChildTestProps('header-center-element', testAttributes)}
          />
        )}
        {elementCentered?.type === 'horizontalNavigation' && elementCentered?.horizontalNavigationConfig && (
          <HorizontalNav
            borderless
            {...elementCentered.horizontalNavigationConfig}
            {...getChildTestProps('header-center-element', testAttributes)}
          />
        )}
      </TopNavigationPart>
      <TopNavigationPart>
        {contentRight}
        {notificationButtonProps &&
            <NotificationButton
              indicator={notificationIndicator}
              {...notificationButtonProps}
              {...getChildTestProps('notification-button', testAttributes)}
            />
        }
        {accountMenuProps && (
          <AccountMenu
            {...accountMenuProps}
            {...getChildTestProps('account-menu', testAttributes)}
          />
        )}
      </TopNavigationPart>
    </Space>
  </header>
}
