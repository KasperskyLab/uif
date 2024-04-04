import React, { FC, ReactElement, useMemo } from 'react'
import styled from 'styled-components'
import { searchCss, searchAddonCss } from './searchCss'
import { SearchProps, SearchVariantsProps } from './types'
import { useLocalization } from '@helpers/localization/useLocalization'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { WithButton } from './SearchWithButton'
import { WithIconLeft, WithIconRight } from './SearchWithIcon'
import { WithConfiguration } from './SearchWithConfiguration'
import { WithDropdown } from './SearchWithDropdown'
import { IconSearch } from './IconSearch'
import { Textbox } from '@src/input'
import { Dropdown } from '@src/dropdown'
import { ActionButton } from '@src/action-button'

const StyledTextbox = styled(Textbox)`
  ${searchCss}
  ${searchAddonCss}
`

export const Search: FC<SearchProps> & SearchVariantsProps = (props: SearchProps) => {
  const {
    value,
    placeholder = 'search.dotted',
    dropdownOverlay,
    children,
    onClearClick,
    prefix,
    suffix = <IconSearch testId="search-icon" componentId="icon-search" />,
    testId,
    invalid,
    error,
    klId,
    ...rest
  } = props
  const { testAttributes } = useTestAttribute(props)
  const localizedPlaceholder = useLocalization(placeholder)
  const newSuffix = useMemo(() => (
    value && value.length
      ? <ActionButton
          testId="search-clear"
          klId="clear"
          onClick={onClearClick}
          mode="filled"
        />
      : !prefix && suffix
  ), [value, prefix, suffix, onClearClick])
  const SearchTextbox = (
    <StyledTextbox
      invalid={invalid || error}
      placeholder={localizedPlaceholder}
      value={value}
      prefix={prefix}
      allowClear={false}
      suffix={newSuffix}
      {...testAttributes}
      {...rest}
    />
  )
  return (
    children || dropdownOverlay
      ? <Dropdown
          klId={`${klId}-dropdown`}
          overlay={children as ReactElement || dropdownOverlay}
          testId={`${testId}-dropdown'`}
          trigger={['click']}
        >
          { SearchTextbox }
        </Dropdown>
      : SearchTextbox
  )
}

Search.WithButton = WithButton
Search.WithIconLeft = WithIconLeft
Search.WithIconRight = WithIconRight
Search.WithConfiguration = WithConfiguration
Search.WithDropdown = WithDropdown
