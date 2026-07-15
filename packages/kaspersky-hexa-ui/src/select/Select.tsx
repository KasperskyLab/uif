import { usePopupConfig } from '@helpers/components/PopupConfigProvider'
import { TextReducer } from '@helpers/components/TextReducer'
import { useGlobalStyles } from '@helpers/hooks/useGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { useGlobalComponentStyles } from '@helpers/useGlobalComponentStyles'
import { ActionButton } from '@src/action-button'
import { Divider } from '@src/divider'
import { Loader } from '@src/loader'
import { Space } from '@src/space'
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
import styles from './Select.module.scss'
import {
  DropdownContent,
  getSelectGlobalStyles,
  OptionContent,
  OptionDescription,
  OptionTextContent,
  selectCss,
  SelectInnerWrapper,
  SelectWrapper
} from './selectCss'
import { OptionAction, OptionType, SelectProps, SelectViewProps } from './types'
import { useThemedSelect } from './useThemedSelect'

const OPTION_ACTION_WIDTH = 16
const CHECKBOX_WIDTH = 18 + 4

const StyledSelect = styled(RcSelect).withConfig({
  shouldForwardProp: (prop) => !['cssConfig', 'validationStatus'].includes(prop)
})`${selectCss}`

export const maxTagPlaceholder: SelectProps['maxTagPlaceholder'] = omittedValues => <Tag size="small">{`+ ${omittedValues.length} ...`}</Tag>

const extractText = (node: React.ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') return String(node)

  if (React.isValidElement(node) && node.props.children) {
    return React.Children.toArray(node.props.children)
      .map(extractText)
      .join('')
  }

  return ''
}

export const Select = forwardRef<HTMLElement, SelectProps>((props, ref) => {
  const {
    children,
    hasMore,
    onLoadMore,
    options,
    cssConfig,
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

    const actionsWidth = option.actions?.length
      ? option.actions.length * OPTION_ACTION_WIDTH + option.actions.length * 4
      : 0
    const reservedSpace = (isMultiSelect ? CHECKBOX_WIDTH : 0) + actionsWidth

    return (
      <RcOption
        {...option}
        key={option.value}
        data-value={option.value}
        // Remove this line when TreeSelect will be available through adapter/ui-builder
        label={typeof option.label === 'string' ? option.label.trim() : option.label}
        data-label={option.dataLabel ?? extractText(option.label).trim()}
        role="option"
        className={styles.option}
      >
        <OptionContent>
          {isMultiSelect && <MultiSelectCheckBox />}
          <OptionTextContent reservedSpace={reservedSpace}>
            <TextReducer>
              {option.label}
            </TextReducer>
            {option.description && (
              <OptionDescription cssConfig={cssConfig}>
                <TextReducer>
                  {option.description}
                </TextReducer>
              </OptionDescription>
            )}
          </OptionTextContent>
        </OptionContent>
        {option.actions?.length
          ? (
              <Space gap="dependent" className={styles.optionActions} wrap="nowrap">
                {option.actions?.map(({ key, icon, onClick }: OptionAction, index: number) => (
                  <ActionButton
                    key={key ?? index}
                    icon={icon}
                    className={styles.optionAction}
                    onClick={(event) => {
                      event.stopPropagation()
                      onClick()
                    }}
                  />
                ))}
              </Space>
            )
          : null}
      </RcOption>
    )
  }

  return (
    <SelectView {...rest} ref={ref} mode={props.mode} cssConfig={cssConfig}>
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
  dropdownMaxHeight,
  filterOption,
  getPopupContainer,
  loading = false,
  loadingError,
  mode,
  notFoundContent,
  onChange,
  onDropdownVisibleChange,
  onSearch,
  onClear,
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
  virtual = false,
  ...rest
}: SelectViewProps, ref: any) => {
  useGlobalStyles()
  const rootHashClass = useGlobalComponentStyles(cssConfig, getSelectGlobalStyles, Select)

  const config = usePopupConfig()

  const { t } = useTranslation()
  const [valueInternal, setValueInternal] = useState(() => prepareValues(defaultValue, allowNonUniqueValues, mode))

  const preparedValueRaw = useMemo(
    () => prepareValues(value, allowNonUniqueValues, mode),
    [value]
  )
  const preparedValue = preparedValueRaw !== undefined ? preparedValueRaw : valueInternal

  const isMultiSelect = mode === 'multiple' || mode === 'tags'

  const [initialOpen, setInitialOpen] = useState<boolean>(!!open)

  const selectWrapperRef = useRef<HTMLDivElement>(null)

  const handleScrollAndWheel = useCallback((event) => {
    if (event?.target?.closest('.dropdown-custom')) {
      return
    }

    if (closeOnParentScroll && selectWrapperRef?.current) {
      setInitialOpen(false)
    }
  }, [closeOnParentScroll, selectWrapperRef])

  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (value: string) => {
    if (autoClearSearchValue || value !== '') {
      setSearchValue(value)
      onSearch?.(value)
    } else {
      onSearch?.(searchValue)
    }
  }

  const handleClear = () => {
    setSearchValue('')
    onClear?.()
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (showSearch && !autoClearSearchValue && e.code === 'Backspace' && searchValue.length === 1) {
      handleClear()
    }
  }

  const handleBlurCapture = () => {
    autoClearSearchValue && setSearchValue('')
  }

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
    autoClearSearchValue && setSearchValue('')
    onChange?.(result, option)
  }, [onChange, preparedValue, allowNonUniqueValues, autoClearSearchValue])

  useEffect(() => {
    if (!closeOnParentScroll) {
      return
    }

    const parent = findScrollableParent(selectWrapperRef?.current)

    if (!(parent instanceof Element)) {
      return
    }

    parent.addEventListener('scroll', handleScrollAndWheel)
    parent.addEventListener('wheel', handleScrollAndWheel)

    return () => {
      parent.removeEventListener('wheel', handleScrollAndWheel)
      parent.removeEventListener('scroll', handleScrollAndWheel)
    }
  }, [closeOnParentScroll, open, selectWrapperRef, handleScrollAndWheel])

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
          : (
              <>
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
            )
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

    onDropdownVisibleChange?.(open)

    if (closeOnParentScroll) {
      setInitialOpen(open)
      return
    }
  }, [closeOnParentScroll, onDropdownVisibleChange, preparedValue])

  const loadingErrorContent = loadingError && <LoadingErrorContent cssConfig={cssConfig}>{loadingError}</LoadingErrorContent>

  return (
    <SelectWrapper ref={ref}>
      <SelectInnerWrapper ref={selectWrapperRef}>
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
            getPopupContainer ??
            config.getPopupContainer ??
            (triggerNode => (usePortal ?? config.usePortal) ? document.body : triggerNode.parentElement)
          }
          listHeight={dropdownMaxHeight ?? 256}
          loading={loading}
          maxTagPlaceholder={maxTagPlaceholder}
          menuItemSelectedIcon={null}
          mode={mode}
          notFoundContent={loadingErrorContent || notFoundContent || <EmptyData />}
          // @ts-expect-error не разобрался
          onBlurCapture={handleBlurCapture}
          onChange={handleOnChange}
          onDropdownVisibleChange={onDropdownVisibleChangeHandler}
          onSearch={handleSearch}
          onClear={handleClear}
          onKeyDown={handleKeyDown}
          open={closeOnParentScroll ? initialOpen : open}
          optionFilterProp={optionFilterProp}
          optionLabelProp={optionLabelProp}
          placement={placement}
          prefixCls="ant-select"
          searchValue={searchValue}
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
      </SelectInnerWrapper>
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
