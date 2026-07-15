import React, { FC } from 'react'

import {
  ActionButton,
  Dropdown,
  DropdownOverlayProp,
  Space
} from '@kaspersky/hexa-ui'
import { Menu2 } from '@kaspersky/hexa-ui-icons/16'

import styles from './WidgetHeader.module.scss'

interface WidgetHeaderActionsProps {
  headerActions?: DropdownOverlayProp;
}

export const WidgetHeaderActions: FC<WidgetHeaderActionsProps> = ({
  headerActions
}) => {
  return (
    <Space align="center" className={styles.headerActions}>
      {Array.isArray(headerActions) && headerActions.length > 0 ? (
        <Dropdown overlay={headerActions} trigger={['click']}>
          <ActionButton icon={<Menu2 />} kuma-action="show-section-menu" />
        </Dropdown>
      ) : typeof headerActions === 'function' ? (
        headerActions()
      ) : (
        headerActions
      )}
    </Space>
  )
}
