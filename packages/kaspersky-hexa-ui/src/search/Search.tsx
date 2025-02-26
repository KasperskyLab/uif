import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useLocalization } from '@helpers/localization/useLocalization'
import { ActionButton } from '@src/action-button'
import { Dropdown } from '@src/dropdown'
import { Textbox } from '@src/input'
import React, { FC, ReactElement, useMemo } from 'react'
import styled from 'styled-components'

import { IconSearch } from './IconSearch'
import { searchAddonCss, searchCss } from './searchCss'
import { SearchProps } from './types'

const StyledTextbox = styled(Textbox)`
  ${searchCss}
  ${searchAddonCss}
`

export const Search: FC<SearchProps> = (props: SearchProps) => {
  const {
    value,
    placeholder = 'search.dotted',
    dropdownOverlay,
    children,
    onClearClick,
    prefix,
    suffix = <IconSearch testId="search-icon" componentId="icon-search" />,
    testId,
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
          testId={`${testId}-dropdown'`}
          overlay={children as ReactElement || dropdownOverlay}
          trigger={['click']}
        >
          {SearchTextbox}
        </Dropdown>
      : SearchTextbox
  )
}
