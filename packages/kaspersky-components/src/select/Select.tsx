/* eslint-disable react/display-name */
import React, {
  PropsWithChildren,
  ReactElement,
  useCallback,
  useEffect,
  useState,
  useMemo
} from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { Select as AntdSelect, Empty } from 'antd'
import { useTranslation } from 'react-i18next'
import { useThemedSelect } from './useThemedSelect'
import { DropdownContent, getSelectGlobalStyles, selectCss, SelectWrapper } from './selectCss'
import { SelectProps, SelectViewProps, SelectRef } from './types'
import { prepareValues, addNewValue, removeValue } from './helpers'
import { ArrowDown1, Search } from '@kaspersky/icons/16'
import { Loader } from '../loader'
import { Divider } from '../divider'
import { Tag } from '../tag'
import { Text } from '../typography'
import { TagProps } from '../tag/types'
import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { WithGlobalComponentStyles } from '@helpers/hocs/WithGlobalComponentStyles'
import { ActionButton } from '@src/action-button'
import { Checkbox } from '@src/checkbox'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const DROPDOWN_ALIGN_TOP = 8

export const Option = AntdSelect.Option

export const MultiSelectCheckBox = styled(({ className }) => (
  <div className={cn('dropdown-v6-multi-checkbox', className)}>
    <Checkbox
      className="dropdown-v6-multi-checkbox-unchecked"
      checked={false}
    />
    <Checkbox className="dropdown-v6-multi-checkbox-checked" checked />
  </div>
))`
  width: 18px;
  display: inline-flex;

  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
  }

  .ant-checkbox {
    top: 4px;
  }

  .ant-select-item-option.ant-select-item-option-selected & .dropdown-v6-multi-checkbox-unchecked,
  .ant-select-item-option:not(.ant-select-item-option-selected) & .dropdown-v6-multi-checkbox-checked {
    display: none;
  }
`

const StyledSelect = styled(AntdSelect).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${selectCss}
`

export const EmptyData = () => {
  const { t } = useTranslation()
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={<Text type="BTR3">{t('select.empty')}</Text>}
      className="ant-empty-small"
      data-testid="select-no-data"
      kl-id="empty-data"
    />
  )
}

export const ChevronIcon = () => (
  <ArrowDown1
    testId="select-chevron-icon"
    klId="down-icon"
  />
)

export const SearchIcon = () => (
  <Search
    testId="select-search-icon"
    klId="search-icon"
  />
)

export const ClearIcon = () => (
  <ActionButton
    mode="filled"
    testId="select-clear-search-icon"
    klId="clear-icon"
  />
)

export const maxTagPlaceholder: SelectProps['maxTagPlaceholder'] =
  omittedValues => <Tag>{`+ ${omittedValues.length} ...`}</Tag>

type IOption = {
  label: React.ReactNode,
  value?: string | number | null,
  options?: IOption[]
}

const SelectViewComponent = React.forwardRef<SelectRef, SelectViewProps>(
  (props, ref: any) => {
    const {
      loading = false,
      showArrow = true,
      cssConfig,
      disabled = false,
      error = false,
      getPopupContainer,
      renderFooter,
      renderHeader,
      renderDropdown,
      rootHashClass,
      dropdownClassName,
      placement = 'bottomLeft',
      showSearch = false,
      mode,
      autoClearSearchValue = true,
      autoFocus = false,
      virtual = true,
      optionFilterProp = 'label',
      placeholder,
      className,
      closeOnParentScroll,
      onChange,
      onSelect,
      onDeselect,
      filterOption,
      options,
      optionLabelProp = 'label',
      children,
      usePortal,
      testAttributes,
      allowNonUniqueValues,
      ...rest
    } = props

    const preparedValue = (allowNonUniqueValues && mode === 'tags') ? prepareValues(rest.value ?? rest.defaultValue) : (rest.value ?? rest.defaultValue)
    const [locValue, setLocValue] = useState(preparedValue)
    const internalRef = React.useRef<HTMLElement | null>(null)
    const selectRef = closeOnParentScroll ? internalRef : ref
    const isMultiSelect = mode === 'multiple' || mode === 'tags'

    const { open, onDropdownVisibleChange } = props
    const [initialOpen, setInitialOpen] =
      React.useState<boolean | undefined>(open)
    const findScrollableParent = useCallback(
      (node: ParentNode | Element | null): Element | null => {
        while (node) {
          if (
            node instanceof Element &&
            (window.getComputedStyle(node).overflow === 'auto' ||
              window.getComputedStyle(node).overflow === 'scroll')
          ) {
            return node
          }
          node = (node as Node).parentNode
        }
        return null
      },
      []
    )

    const handleScroll = useCallback(() => {
      if (closeOnParentScroll && selectRef?.current) {
        setInitialOpen(false)
      }
    }, [closeOnParentScroll, selectRef])

    const handleOnChange = useCallback((value, option) => {
      let result = value
      if (allowNonUniqueValues && Array.isArray(result)) {
        if (Array.isArray(locValue) && locValue.length < result.length) {
          result = addNewValue(locValue, value)
        } else {
          result = removeValue(locValue, value)
        }
      }
      setLocValue(result as SelectProps['value'])
      onChange?.(result, option)
    }, [onChange, locValue])

    useEffect(() => {
      const parent = findScrollableParent(selectRef?.current)

      if (!(parent instanceof Element) || !closeOnParentScroll) {
        return
      }

      parent.addEventListener('scroll', handleScroll)

      return () => parent.removeEventListener('scroll', handleScroll)
    }, [closeOnParentScroll, findScrollableParent, open, selectRef])

    const handleDropdownVisibleChange = useCallback((open: boolean) => {
      setInitialOpen(open)
    }, [])

    const renderDropdownMenu = useCallback(
      (menu: ReactElement) => {
        const dataTestId = testAttributes?.['data-testid'] ? `${testAttributes?.['data-testid']}-select-dropdown` : 'select-dropdown'
        const klId = testAttributes?.['kl-id'] ? `${testAttributes?.['kl-id']}-select-dropdown` : 'select-dropdown'

        if (loading) {
          return (
            <DropdownContent
              cssConfig={cssConfig}
              data-testid={dataTestId}
              kl-id={klId}
              isMultiSelect={isMultiSelect}
            >
              <Loader centered testId="select-loader" klId="loader" />
            </DropdownContent>
          )
        }

        return (
          <DropdownContent
            cssConfig={cssConfig}
            data-testid={dataTestId}
            kl-id={klId}
            isMultiSelect={isMultiSelect}
          >
            {renderHeader && (
              <>
                {renderHeader()}
                <Divider margin={0} mode="light" />
              </>
            )}
            {menu}
            {renderFooter && (
              <>
                <Divider margin={0} mode="light" />
                {renderFooter()}
              </>
            )}
          </DropdownContent>
        )
      },
      [renderFooter, renderHeader, loading, cssConfig, isMultiSelect]
    )

    const dropdownAlignTop = useMemo(() => {
      const alignTop = DROPDOWN_ALIGN_TOP

      if (placement?.includes('top')) {
        return -alignTop
      }

      return alignTop
    }, [placement])

    return (
      // broken type infer because of styled components
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // div wrapper cause AntD Select don't contain native select element in ref - https://github.com/ant-design/ant-design/issues/41273
      <SelectWrapper ref={selectRef}>
        <StyledSelect
          onSelect={onSelect as never}
          filterOption={filterOption as never}
          onDeselect={onDeselect as never}
          className={cn(className, {
            'ant-select-error': error && !disabled
          })}
          optionLabelProp={optionLabelProp}
          mode={mode}
          open={closeOnParentScroll ? initialOpen : open}
          onClick={closeOnParentScroll ? () => setInitialOpen(open => !open) : undefined}
          onDropdownVisibleChange={
            closeOnParentScroll
              ? handleDropdownVisibleChange
              : onDropdownVisibleChange
          }
          dropdownClassName={cn(
            'dropdown-custom',
            { 'dropdown-loading': loading },
            dropdownClassName,
            rootHashClass
          )}
          getPopupContainer={
            getPopupContainer ?? ((triggerNode) => usePortal ? document.body : triggerNode.parentElement)
          }
          dropdownRender={renderDropdown || renderDropdownMenu}
          notFoundContent={<EmptyData />}
          clearIcon={<ClearIcon />}
          suffixIcon={<ChevronIcon />}
          showArrow={showSearch || showArrow}
          disabled={disabled}
          aria-disabled={disabled}
          cssConfig={cssConfig}
          dropdownAlign={{
            offset: [0, dropdownAlignTop]
          }}
          placement={placement}
          showSearch={showSearch}
          tagRender={(props) => (
            <Tag {...(props as TagProps)} disabled={disabled} />
          )}
          maxTagPlaceholder={maxTagPlaceholder}
          allowClear={isMultiSelect}
          autoClearSearchValue={autoClearSearchValue}
          autoFocus={autoFocus}
          loading={loading}
          virtual={virtual}
          optionFilterProp={optionFilterProp}
          placeholder={placeholder}
          {...testAttributes}

          value={locValue}
          onChange={handleOnChange}
          {...rest}
        >
          {children ||
            (options as IOption[])?.map((option) => {
              if (option.options) {
                return (
                  <AntdSelect.OptGroup label={option.label} key={option.value}>
                    {option.options.map(groupOption => (
                      <AntdSelect.Option {...groupOption} role="option" data-value={groupOption.value} key={groupOption.value}>
                        {isMultiSelect && <MultiSelectCheckBox />}
                        {groupOption.label}
                      </AntdSelect.Option>
                    ))}
                  </AntdSelect.OptGroup>
                )
              }

              return (
                <AntdSelect.Option {...option} role="option" data-value={option.value} key={option.value}>
                  {isMultiSelect && <MultiSelectCheckBox />}
                  {option.label}
                </AntdSelect.Option>
              )
            })}
        </StyledSelect>
      </SelectWrapper>
    )
  }
)

type SelectComponent = React.ForwardRefExoticComponent<
  PropsWithChildren<SelectProps> & React.RefAttributes<HTMLElement>
> & {
  Option: typeof AntdSelect.Option,
  OptGroup: typeof AntdSelect.OptGroup
};

const SelectView = WithGlobalComponentStyles(WithGlobalStyles(SelectViewComponent), getSelectGlobalStyles)

export const Select = React.forwardRef<
  SelectRef,
  PropsWithChildren<SelectProps>
>((props, ref) => {
  const themedProps = useThemedSelect(props)
  const behavior = useTestAttribute(themedProps)
  return <SelectView ref={ref} {...behavior} mode={props.mode} />
}) as unknown as SelectComponent

Select.Option = AntdSelect.Option
Select.OptGroup = AntdSelect.OptGroup
