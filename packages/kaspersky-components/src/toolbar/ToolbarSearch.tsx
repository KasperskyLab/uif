import React, { FC, useState } from 'react'
import { IconSearch } from '@src/search/IconSearch'
import { SearchProps } from '@src/search/types'
import { useLocalization } from '@helpers/localization/useLocalization'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useThemedToolbar } from './useThemedToolbar'
import { StyledSearch, StyledTextbox } from './toolbarCss'
import { ToolbarSearchViewProps } from './types'

export const ToolbarSearch: FC<SearchProps> = (rawProps: SearchProps) => {
  const themedProps = useThemedToolbar(rawProps)
  const props = useTestAttribute(themedProps)
  return <ToolbarSearchView {...props} />
}

const ToolbarSearchView: FC<ToolbarSearchViewProps> = (props: ToolbarSearchViewProps) => {
  const {
    value,
    placeholder = 'search.dotted',
    dropdownOverlay,
    children,
    onClearClick,
    prefix,
    suffix,
    testId,
    invalid,
    error,
    klId,
    onPressEnter,
    onChange,
    cssConfig,
    ...rest
  } = props

  const [visible, setVisible] = useState(false)
  const [filled, setFilled] = useState(false)
  const [changedQuery, setChangedQuery] = useState(false)

  const toggleSlider = (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation()
    if (changedQuery) {
      setChangedQuery(false)
      onPressEnter?.(event as React.KeyboardEvent<HTMLInputElement>)
    } else {
      setVisible(!visible)
    }
  }

  const { testAttributes } = useTestAttribute(props)
  const localizedPlaceholder = useLocalization(placeholder)

  return (
    <StyledSearch
      {...testAttributes}
      visible={visible}
      cssConfig={cssConfig}
      tabIndex={0}
    >
      <StyledTextbox
        {...rest}
        cssConfig={cssConfig}
        visible={visible}
        invalid={invalid || error}
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
      />
      <IconSearch testId="toolbar-search-icon" klId="toolbar-search-icon" indicator={filled} onClick={toggleSlider} />
    </StyledSearch>
  )
}
