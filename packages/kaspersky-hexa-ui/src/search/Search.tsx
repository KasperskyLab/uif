import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { Dropdown } from '@src/dropdown'
import { Textbox } from '@src/input'
import React, { FC, ReactElement, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { IconSearch } from './IconSearch'
import { searchCss } from './searchCss'
import { SearchProps } from './types'

const StyledTextbox = styled(Textbox)`
  ${searchCss}
`

export const Search: FC<SearchProps> = (props: SearchProps) => {
  const {
    value,
    placeholder = 'search.dotted',
    dropdownOverlay,
    children,
    onClearClick,
    prefix,
    suffix,
    searchIconTestId = 'search-icon',
    testId,
    showClearButton = true,
    klId,
    ...rest
  } = props

  const { testAttributes } = useTestAttribute(props)
  const { t } = useTranslation()
  const localizedPlaceholder = t(placeholder)
  const newSuffix = useMemo(() => {
    return !prefix && (suffix || <IconSearch klId={searchIconTestId} testId={searchIconTestId} />)
  }, [prefix, suffix, searchIconTestId])

  const SearchTextbox = (
    <StyledTextbox
      placeholder={localizedPlaceholder}
      value={value}
      prefix={prefix}
      suffix={newSuffix}
      showClearButton={true}
      onClearClick={onClearClick}
      {...testAttributes}
      {...rest}
    />
  )

  return (
    children || dropdownOverlay
      ? (
          <Dropdown
            klId={`${klId}-dropdown`}
            testId={`${testId}-dropdown'`}
            overlay={children as ReactElement || dropdownOverlay}
            trigger={['click']}
          >
            {SearchTextbox}
          </Dropdown>
        )
      : SearchTextbox
  )
}
