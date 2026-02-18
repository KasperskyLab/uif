import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useLocalization } from '@helpers/localization/useLocalization'
import { SearchProps } from '@src/search'
import { IconSearch } from '@src/search/IconSearch'
import { useTableContext } from '@src/table'
import React, { FC, useState } from 'react'

import { StyledSearch, StyledTextbox } from './toolbarCss'

export const ToolbarSearch: FC<SearchProps> = (props: SearchProps) => {
  const {
    value,
    placeholder = 'search.dotted',
    dropdownOverlay,
    children,
    onClearClick,
    prefix,
    suffix,
    onPressEnter,
    onChange,
    searchIconTestId = 'toolbar-search-icon',
    ...rest
  } = useTestAttribute(props)

  const [visible, setVisible] = useState(false)
  const [filled, setFilled] = useState(false)
  const [changedQuery, setChangedQuery] = useState(false)

  const { useV3TestId } = useTableContext()

  const toggleSlider = (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation()
    if (changedQuery) {
      setChangedQuery(false)
      onPressEnter?.(event as React.KeyboardEvent<HTMLInputElement>)
    } else {
      setVisible(!visible)
    }
  }

  const localizedPlaceholder = useLocalization(placeholder)

  return (
    <StyledSearch
      {...rest.testAttributes}
      $visible={visible}
      tabIndex={0}
    >
      <StyledTextbox
        {...rest}
        testId="toolbar-search-input"
        $visible={visible}
        placeholder={localizedPlaceholder}
        value={value}
        prefix={prefix}
        allowClear={false}
        suffix={null}
        onChange={(value: string) => {
          setFilled(Boolean(value?.length))
          setChangedQuery(true)
          onChange?.(value)
        }}
        onPressEnter={(event) => {
          setChangedQuery(false)
          onPressEnter?.(event)
        }}
        autoFocus={visible}
      />
      {useV3TestId
        ? (
            <div
              data-testid={searchIconTestId}
              kl-id={searchIconTestId}
            >
              <IconSearch
                className="icon"
                indicator={filled}
                onClick={toggleSlider}
              />
            </div>
          )
        : (
            <IconSearch
              className="icon"
              indicator={filled}
              onClick={toggleSlider}
              testId="toolbar-search-icon"
              klId="toolbar-search-icon"
            />
          )
      }

    </StyledSearch>
  )
}
