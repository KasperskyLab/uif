import { Button } from '@src/button'
import { Dropdown } from '@src/dropdown'
import React, { Key, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

import { ArrowDown1 } from '@kaspersky/hexa-ui-icons/16'

type TabsDropdownProps = {
  tabs: ReactElement[],
  activeKey: Key,
  onChange: ((activeKey: string) => void) | undefined,
  className?: string
}

export const TabsDropdown = ({
  tabs,
  onChange,
  activeKey,
  className
}: TabsDropdownProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Dropdown
      trigger={['click']}
      placement="bottomRight"
      overlayClassName={className}
      overlay={tabs.map((tab) => {
        return {
          children: tab.props.tab,
          onClick: () => onChange?.(String(tab.key) || ''),
          key: tab.key,
          disabled: tab.props.disabled,
          className: tab.key === activeKey ? 'kl6-dropdown-active-tab' : ''
        }
      })}
    >
      <Button
        className="kl6-tabs-more-button"
        mode="tertiary"
        iconAfter={<ArrowDown1 />}
      >
        {t('tabs.dropdown.more')}
      </Button>
    </Dropdown>
  )
}
