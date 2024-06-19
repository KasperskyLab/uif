import React from 'react'
import { Alarm as AlarmIcon } from '@kaspersky/icons/16'
import styled from 'styled-components'
import { colors } from '@design-system/theme/themes/dark/colors'

export function getNotificationsIcon (hasNotifications: boolean): React.ReactNode {
  let icon = null
  icon = <NotificationButton
    className={`item js-tutorial-notifications header-notification${hasNotifications ? ' active' : ''}`}
  role='button'
  onClick={() => alert('Notifications')}
>
  <AlarmIcon/>
  </NotificationButton>
  return icon
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
      background: ${colors.criticalitystatuses.high};
    }
  }
`
