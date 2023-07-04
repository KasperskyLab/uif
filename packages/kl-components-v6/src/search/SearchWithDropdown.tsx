import React, { ComponentProps, ReactElement } from 'react'
import { Dropdown } from 'antd'
import { useLocalization } from '../../helpers/localization/useLocalization'
import { Icon } from '../icon'
import { Search } from './Search'
import { StyledDropdownButton } from './searchCss'
import { SearchCssConfig, SearchWithDropdownProps } from './types'
import { useThemedSearch } from './useThemedSearch'

interface ButtonDropdownProps {
  disabled?: boolean,
  btnText?: string,
  className?: string,
  overlay?: ReactElement
}

const ButtonDropdown = ({
  disabled,
  overlay = <></>,
  btnText = 'search.raw',
  cssConfig
}: ButtonDropdownProps & { cssConfig: SearchCssConfig }) => {
  const localizedTxt = useLocalization(btnText)

  return (
    <Dropdown disabled={disabled} trigger={['click']} overlay={overlay}>
      <StyledDropdownButton mode="tertiary">
        <span className="btn-text">{localizedTxt}</span>{' '}
        <Icon
          name="Down"
          size="small"
          color={cssConfig.mode.normal.iconColor}
        />
      </StyledDropdownButton>
    </Dropdown>
  )
}

export const WithDropdown = ({
  onPressEnter,
  overlay,
  btnText,
  ...otherProps
}: SearchWithDropdownProps & ComponentProps<typeof Search>) => {
  const { cssConfig } = useThemedSearch(otherProps)

  return (
    <Search
      className="btn-left"
      prefix={
        <ButtonDropdown
          overlay={overlay}
          btnText={btnText}
          disabled={otherProps.disabled}
          cssConfig={cssConfig}
        />
      }
      onPressEnter={onPressEnter}
      {...otherProps}
    />
  )
}
