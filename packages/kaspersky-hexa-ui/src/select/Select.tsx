import { TextReducer } from '@helpers/components/TextReducer'
import { useGlobalStyles } from '@helpers/hooks/useGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useGlobalComponentStyles } from '@helpers/useGlobalComponentStyles'
import { Divider } from '@src/divider'
import { Loader } from '@src/loader'
import { Tag, TagProps } from '@src/tag'
import cn from 'classnames'
import once from 'lodash/once'
import RcSelect, { BaseSelectRef, OptGroup as RcOptGroup, Option as RcOption } from 'rc-select'
import React, {
  forwardRef,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import {
  addNewValue,
  ChevronIcon,
  ClearIcon,
  EmptyData,
  findScrollableParent,
  LoadingErrorContent,
  LoadingTrigger,
  MultiSelectCheckBox,
  prepareValues,
  removeValue
} from './helpers'
import { DropdownContent, getSelectGlobalStyles, selectCss, SelectWrapper } from './selectCss'
import { OptionType, SelectProps, SelectViewProps } from './types'
import { useThemedSelect } from './useThemedSelect'

const StyledSelect = styled(RcSelect).withConfig({
  shouldForwardProp: (prop) => !['cssConfig', 'validationStatus'].includes(prop)
})`${selectCss}`

export const maxTagPlaceholder: SelectProps['maxTagPlaceholder'] = omittedValues => <Tag size="small">{`+ ${omittedValues.length} ...`}</Tag>

export const Select = forwardRef<HTMLElement, SelectProps>((props, ref) => {
  const {
    children,
    hasMore,
    onLoadMore,
    options,
    ...rest
  } = useTestAttribute(useThemedSelect(props))

  // once - to prevent next trigger after user scrolls out and in
  const handleLoadMore = useMemo(() => once(() => {
    onLoadMore?.()
  }), [onLoadMore])
  const isMultiSelect = props.mode === 'multiple' || props.mode === 'tags'

  function renderOption (option: OptionType) {
    if (option.options) {
      return (
        <RcOptGroup key={option.value} label={option.label}>
          {option.options.map(renderOption)}
        </RcOptGroup>
      )
    }

    return (
      <RcOption
        {...option}
        key={option.value}
        data-value={option.value}
        // Remove this one, when TreeSelect will be available thought adapter/ui-builder
        label={typeof option.label === 'string' ? option.label.trim() : option.label}
        role="option"
      >
        {isMultiSelect && <MultiSelectCheckBox />}
        <TextReducer>
          {option.label}
        </TextReducer>
      </RcOption>
    )
  }

  return (
    <SelectView {...rest} ref={ref} mode={props.mode}>
      {children || options?.map(renderOption)}
      {hasMore && (
        <RcOption key="loading-more-option" disabled>
          <LoadingTrigger onLoad={handleLoadMore} />
        </RcOption>
      )}
    </SelectView>
  )
}) as SelectComponent

const SelectView = forwardRef<HTMLElement, SelectViewProps>(({
  allowNonUniqueValues,
  autoClearSearchValue = true,
  autoFocus = false,
  children,
  className,
  closeOnParentScroll,
  cssConfig,
  defaultValue,
  disabled = false,
  dropdownClassName,
  filterOption,
  getPopupContainer,
  loading = false,
  loadingError,
  mode,
  notFoundContent,
  onChange,
  onDropdownVisibleChange,
  open,
  optionFilterProp = 'label',
  optionLabelProp = 'label',
  placement = 'bottomLeft',
  readOnly,
  renderDropdown,
  renderFooter,
  renderHeader,
  showArrow = true,
  showSearch = false,
  testAttributes,
  usePortal,
  validationStatus = 'default',
  value,
  virtual = true,
  ...rest
}: SelectViewProps, ref: any) => {
  useGlobalStyles()
  const rootHashClass = useGlobalComponentStyles(cssConfig, getSelectGlobalStyles, Select)

  const { t } = useTranslation()
  const [valueInternal, setValueInternal] = useState(() => prepareValues(defaultValue, allowNonUniqueValues, mode))

  const preparedValue = useMemo(
    () => prepareValues(value, allowNonUniqueValues, mode),
    [value]
  ) ?? valueInternal

  const internalRef = useRef<HTMLElement | null>(null)
  const selectWrapperRef = closeOnParentScroll ? internalRef : ref
  const isMultiSelect = mode === 'multiple' || mode === 'tags'

  const [initialOpen, setInitialOpen] = useState<boolean>(!!open)

  const handleScroll = useCallback(() => {
    if (closeOnParentScroll && selectWrapperRef?.current) {
      setInitialOpen(false)
    }
  }, [closeOnParentScroll, selectWrapperRef])

  const handleOnChange = useCallback((value, option) => {
    let result = value
    if (allowNonUniqueValues && Array.isArray(result)) {
      if (Array.isArray(preparedValue) && preparedValue.length < result.length) {
        result = addNewValue(preparedValue, value)
      } else {
        result = removeValue(preparedValue, value)
      }
    }
    setValueInternal(result)
    onChange?.(result, option)
  }, [onChange, preparedValue, allowNonUniqueValues])

  useEffect(() => {
    const parent = findScrollableParent(selectWrapperRef?.current)

    if (!(parent instanceof Element) || !closeOnParentScroll) {
      return
    }

    parent.addEventListener('scroll', handleScroll)

    return () => parent.removeEventListener('scroll', handleScroll)
  }, [closeOnParentScroll, open, selectWrapperRef, handleScroll])

  const renderDropdownMenu = useCallback((menu: ReactElement) => {
    const dataTestId = testAttributes?.['data-testid'] ? `${testAttributes?.['data-testid']}-select-dropdown` : 'select-dropdown'
    const klId = testAttributes?.['kl-id'] ? `${testAttributes?.['kl-id']}-select-dropdown` : 'select-dropdown'

    return (
      <DropdownContent
        cssConfig={cssConfig}
        data-testid={dataTestId}
        kl-id={klId}
        isMultiSelect={isMultiSelect}
        t={t}
      >
        {loading
          ? <Loader centered testId="select-loader" klId="loader" />
          : <>
            {renderHeader && (
              <>
                {renderHeader()}
                <Divider mode="light" />
              </>
            )}
            {renderDropdown ? renderDropdown(menu) : menu}
            {renderFooter && (
              <>
                <Divider mode="light" />
                {renderFooter()}
              </>
            )}
          </>
        }
      </DropdownContent>
    )
  }, [renderFooter, renderHeader, loading, cssConfig, isMultiSelect, renderDropdown, testAttributes])

  const selectRef = useRef<BaseSelectRef>(null)

  const onDropdownVisibleChangeHandler = useCallback((open: boolean) => {
    if (open && selectRef.current) {
      const isArray = Array.isArray(preparedValue)

      if (!preparedValue || (isArray && !preparedValue.length)) {
        selectRef.current.scrollTo(0)
      } else if (isArray) {
        const indexToScroll = ([...preparedValue] as number[]).sort((a, b) => b - a).pop()

        selectRef.current.scrollTo(indexToScroll ?? 0)
      }
    }

    if (closeOnParentScroll) {
      setInitialOpen(open)
      return
    }

    onDropdownVisibleChange && onDropdownVisibleChange(open)
  }, [closeOnParentScroll, onDropdownVisibleChange, preparedValue])

  const loadingErrorContent = loadingError && <LoadingErrorContent cssConfig={cssConfig}>{loadingError}</LoadingErrorContent>

  return (
    // broken type infer because of styled components
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // div wrapper cause RC Select don't contain native select element in ref
    <SelectWrapper ref={selectWrapperRef}>
      <StyledSelect
        ref={selectRef}
        allowClear={isMultiSelect}
        aria-disabled={disabled}
        autoClearSearchValue={autoClearSearchValue}
        autoFocus={autoFocus}
        className={cn(className, { 'kl6-select-readonly': readOnly })}
        clearIcon={<ClearIcon />}
        cssConfig={cssConfig}
        data-validationstatus={validationStatus}
        data-value={preparedValue}
        disabled={disabled || readOnly}
        dropdownAlign={{ offset: [0, placement?.includes('top') ? -8 : 8] }}
        dropdownClassName={cn('dropdown-custom', dropdownClassName, rootHashClass, {
          'dropdown-loading': loading
        })}
        dropdownRender={renderDropdownMenu}
        filterOption={filterOption as never}
        getPopupContainer={
          getPopupContainer ?? ((triggerNode) => usePortal ? document.body : triggerNode.parentElement)
        }
        listHeight={256}
        loading={loading}
        maxTagPlaceholder={maxTagPlaceholder}
        menuItemSelectedIcon={null}
        mode={mode}
        notFoundContent={loadingErrorContent || notFoundContent || <EmptyData />}
        onChange={handleOnChange}
        onDropdownVisibleChange={onDropdownVisibleChangeHandler}
        open={closeOnParentScroll ? initialOpen : open}
        optionFilterProp={optionFilterProp}
        optionLabelProp={optionLabelProp}
        placement={placement}
        prefixCls="ant-select"
        showArrow={showSearch || showArrow}
        showSearch={showSearch}
        inputIcon={<ChevronIcon />}
        tagRender={(props) => <Tag {...(props as TagProps)} disabled={disabled} readOnly={readOnly} size="small" />}
        transitionName="ant-slide-up"
        validationStatus={validationStatus}
        value={preparedValue}
        virtual={virtual}
        {...rest}
        {...testAttributes}
      >
        {loadingError ? null : children}
      </StyledSelect>
    </SelectWrapper>
  )
})

SelectView.displayName = 'SelectView'

type SelectComponent = React.ForwardRefExoticComponent<
  SelectProps & React.RefAttributes<HTMLElement>
> & {
  Option: typeof RcOption,
  OptGroup: typeof RcOptGroup
}

Select.displayName = 'Select'

Select.Option = RcOption
Select.OptGroup = RcOptGroup
