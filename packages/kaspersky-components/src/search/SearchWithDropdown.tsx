import React, { FC } from 'react'
import { useLocalization } from '@helpers/localization/useLocalization'
import { SearchWithDropdownProps } from './types'
import { Search } from './Search'
import { Dropdown } from '@src/dropdown'
import { Button } from '@src/button'
import { ArrowDown1 } from '@kaspersky/icons/16'

export const WithDropdown: FC<SearchWithDropdownProps> = ({
  overlay = <></>,
  btnText = 'search.raw',
  disabled,
  ...rest
}: SearchWithDropdownProps) => {
  const localizedText = useLocalization(btnText)
  return (
    <Search
      className="kl6-search-button-left"
      disabled={disabled}
      prefix={
        <Dropdown disabled={disabled} trigger={['click']} overlay={overlay}>
          <Button mode='tertiary' text={localizedText} iconAfter={<ArrowDown1 />}/>
        </Dropdown>
      }
      {...rest}
    />
  )
}
