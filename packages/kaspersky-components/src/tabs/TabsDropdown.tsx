import { Dropdown, DropdownProps } from '@src/dropdown'
import { Locale } from '@src/locale'
import React, { ReactElement, Key } from 'react'

import { ArrowDown1 } from '@kl/icons/16'

import { StyledMoreButton } from './tabsCss'

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
  return (
    <Dropdown
      trigger={['click']}
      placement='bottomRight'
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
      <StyledMoreButton
        className="kl6-tabs-more-button"
        mode='tertiary'
        iconAfter={<ArrowDown1 />}
      >
        <Locale localizationKey={'tabs.dropdown.more'} />
      </StyledMoreButton>
    </Dropdown>
  )
}
