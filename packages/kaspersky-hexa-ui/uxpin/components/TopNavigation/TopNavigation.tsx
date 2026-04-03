import React from 'react'

import { TopNavigation as HexaTopNavigation } from '@src/top-navigation'
import { TopNavigationProps } from '@src/top-navigation/types'

import { previewTopNavigationAccountMenu } from '../../preview'

const TopNavigation = ({
  accountMenuProps = {
    title: 'preview_user@example.com',
    dropdownMenuProps: {
      overlay: previewTopNavigationAccountMenu
    }
  },
  logo = (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        background: '#14b86a',
        color: '#ffffff',
        display: 'grid',
        placeItems: 'center',
        fontWeight: 700
      }}
    >
      H
    </div>
  ),
  notificationButtonProps = {},
  title = 'Hexa UI',
  ...props
}: TopNavigationProps): JSX.Element => (
  <HexaTopNavigation
    accountMenuProps={accountMenuProps}
    logo={logo}
    notificationButtonProps={notificationButtonProps}
    title={title}
    {...props}
  />
)

export default TopNavigation
