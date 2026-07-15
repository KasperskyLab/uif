import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useLocalization } from '@helpers/localization/useLocalization'
import { Search, SearchProps } from '@src/search'
import { IconSearch } from '@src/search/IconSearch'
import { useTableContext } from '@src/table'
import { ToggleButton } from '@src/toggle-button'
import cn from 'classnames'
import React, { FC, useState } from 'react'

export const ToolbarSearch: FC<SearchProps> = (props: SearchProps) => {
  const {
    value,
    placeholder = 'search.dotted',
    dropdownOverlay,
    children,
    onClearClick,
    prefix,
    onPressEnter,
    onChange,
    searchIconTestId = 'toolbar-search-icon',
    className,
    ...rest
  } = useTestAttribute(props)

  const [visible, setVisible] = useState(false)
  const [isFilterApplied, setIsFilterApplied] = useState(false)

  const { useV3TestId } = useTableContext()

  const localizedPlaceholder = useLocalization(placeholder)
  const backgroundIndicator = 'var(--toolbar--bg)'

  const toggleButton = (
    <ToggleButton
      value="toggle-search"
      mode="grey"
      onChange={() => {
        setVisible(visible => !visible)
        if (!value) {
          onClearClick?.()
          setIsFilterApplied(false)
        }
        onChange?.(value ?? '')
      }}
      iconBefore={(
        <IconSearch
          className="icon"
          indicator={isFilterApplied && !visible}
          borderBackground={backgroundIndicator}
          modeIndicator="high"
        />
      )}
      className="toolbar-search-toggle-button"
      {...(!useV3TestId && {
        testId: 'toolbar-search-icon',
        klId: 'toolbar-search-icon'
      })}
    />
  )

  return (
    <>
      <Search
        {...rest}
        className={cn(
          visible ? 'hexa-ui-collapsible-search' : 'hexa-ui-collapsible-search-hidden',
          className
        )}
        testId="toolbar-search-input"
        placeholder={localizedPlaceholder}
        value={value}
        prefix={prefix}
        // Non-null suffix overrides default icon;
        suffix={<span />}
        onChange={onChange}
        onPressEnter={(event) => {
          setIsFilterApplied(Boolean(value?.length))
          onPressEnter?.(event)
        }}
        autoFocus={visible}
        onClearClick={() => {
          onChange?.('')
          setIsFilterApplied(false)
          onClearClick?.()
        }}
      />
      {useV3TestId
        ? (
            <div
              data-testid={searchIconTestId}
              kl-id={searchIconTestId}
            >
              {toggleButton}
            </div>
          ) : (
            toggleButton
          )}
    </>
  )
}
