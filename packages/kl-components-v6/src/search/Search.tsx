import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Textbox } from '../input'
import { Icon } from '../icon'
import { useLocalization } from '../../helpers/localization/useLocalization'
import { ISearchViewProps, SearchCssConfig, SearchProps } from './types'
import { useThemedSearch } from './useThemedSearch'
import { WithButton } from './SearchWithButton'
import { WithIconLeft, WithIconRight } from './SearchWithIcon'
import { WithConfiguration } from './SearchWithConfiguration'
import { WithDropdown } from './SearchWithDropdown'
import { IconSearch } from './assets/icons/IconSearch'
import {
  IconStyled,
  resultCss,
  searchCss,
  StyledContainer,
  addonAfterCss,
  addonBeforeCss
} from './searchCss'
import { useOnClickOutside } from '../../helpers'
import { ITextboxProps } from '../input/types'
import styled, { css } from 'styled-components'

const Results = styled.div.withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${resultCss}
`

const StyledTextbox = styled(Textbox).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${searchCss}
  ${({ addonAfter }) =>
    addonAfter &&
    css`
      ${addonAfterCss}
    `}
  ${({ addonBefore }) =>
    addonBefore &&
    css`
      ${addonBeforeCss}
    `}
`

export const useSearch = (props: ITextboxProps & { tags?: string[] }) => {
  const [showResults, setShowResults] = useState(false)
  const isInitialized = useRef(false)
  const wrapperRef = useRef(null)

  const handleHideResults = useCallback(() => setShowResults(false), [])

  const handleClickInput = useCallback(() => {
    if (isInitialized.current) {
      setShowResults(true)
    }
  }, [isInitialized.current])

  useOnClickOutside(wrapperRef, handleHideResults)

  useEffect(() => {
    if (props.children && !showResults && !isInitialized.current) {
      setShowResults(true)

      isInitialized.current = true
    }
  }, [props.children, showResults])

  useEffect(() => {
    if (isInitialized.current) {
      setShowResults(true)
    }
  }, [props.children, isInitialized.current])

  return {
    showResults,
    wrapperRef,
    handleClickInput
  }
}

export const Search = (rawProps: SearchProps) => {
  const props = useThemedSearch(rawProps)
  const behavior = useSearch(rawProps)

  return <SearchView data-component-id={props.klId} {...props} {...behavior} />
}

const SearchPrefix = ({ cssConfig }: { cssConfig: SearchCssConfig }) => (
  <IconStyled cssConfig={cssConfig}>
    <IconSearch componentId="icon-search" />
  </IconStyled>
)

export const SearchView = ({
  disabled,
  error,
  value,
  addonAfter,
  addonBefore,
  placeholder = 'search.dotted',
  wrapperRef,
  onChange,
  onPressEnter,
  onClearClick,
  showResults,
  onFocus,
  onBlur,
  cssConfig,
  className,
  children,
  prefix = <SearchPrefix cssConfig={cssConfig} />,
  suffix,
  klId
}: ISearchViewProps & ReturnType<typeof useSearch>) => {
  const localizedPlaceholder = useLocalization(placeholder)

  return (
    <StyledContainer kl-id={klId} ref={wrapperRef}>
      <StyledTextbox
        className={className}
        cssConfig={cssConfig}
        placeholder={localizedPlaceholder}
        onChange={onChange}
        onPressEnter={onPressEnter}
        value={value}
        disabled={disabled}
        error={error}
        addonAfter={addonAfter}
        addonBefore={addonBefore}
        prefix={prefix}
        onFocus={onFocus}
        onBlur={onBlur}
        allowClear={false}
        suffix={
          suffix ||
          (!suffix && value && value.length && (
            <Icon
              color={cssConfig.mode.normal.iconColor}
              kl-id="clear"
              onClick={onClearClick}
              size="small"
              name="Clear"
            />
          ))
        }
        klId={klId}
      />
      {showResults && children && (
        <Results cssConfig={cssConfig}>{children}</Results>
      )}
    </StyledContainer>
  )
}

Search.WithButton = WithButton
Search.WithIconLeft = WithIconLeft
Search.WithIconRight = WithIconRight
Search.WithConfiguration = WithConfiguration
Search.WithDropdown = WithDropdown
