import { clickHandler } from '@src/menu/stories/CustomItem'
import React from 'react'
import styled from 'styled-components'

import { Bell as AlarmIcon } from '@kaspersky/hexa-ui-icons/16'

export function getNotificationsIcon (hasNotifications: boolean): React.ReactNode {
  return (
    <NotificationButton
      className={`item js-tutorial-notifications header-notification${hasNotifications ? ' active' : ''}`}
      role="button"
      onClick={() => clickHandler('Notifications')}
    >
      <AlarmIcon/>
    </NotificationButton>
  )
}

const NotificationButton = styled.span`
  position: relative;
  display: inline-block;
  height: 16px;

  &.active {
    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 14px;
      top: -6px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--indicator--icon--critical);
    }
  }
`
