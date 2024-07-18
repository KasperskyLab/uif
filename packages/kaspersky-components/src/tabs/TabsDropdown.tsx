import React, { ReactElement } from 'react'
import { Dropdown } from '@src/dropdown'
import { Locale } from '@src/locale'
import { ArrowDown1 } from '@kaspersky/icons/16'
import { StyledMoreButton } from './tabsCss'

type TabsDropdownProps = {
  tabs: ReactElement[],
  onChange: ((activeKey: string) => void) | undefined,
  className?: string
}

export const TabsDropdown = ({
  tabs,
  onChange,
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
          disabled: tab.props.disabled
        }
      })}
    >
      <StyledMoreButton mode='tertiary' iconAfter={<ArrowDown1 />}>
        <Locale localizationKey={'tabs.dropdown.more'} />
      </StyledMoreButton>
    </Dropdown>
  )
}
