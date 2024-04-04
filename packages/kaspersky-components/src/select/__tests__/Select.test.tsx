import React from 'react'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConfigProvider } from '@design-system/context'
import { Button } from '../../button'
import { Tag } from '../../tag'
import { Text } from '../../typography'
import { Select } from '../Select'
import { SelectProps } from '../types'

const defaultProps = {
  options: [
    { label: 'first option', value: '1' },
    { label: 'second option', value: '2' },
    { label: 'third option', value: '3' }
  ],
  defaultValue: ['1'],
  klId: 'test-select',
  mode: 'multiple' as SelectProps['mode'],
  open: true,
  testId: 'test-id'
}

const getFirstOption = (container: HTMLElement) => container.querySelector('.ant-select-item')

const waitForDropdown = async (klId = defaultProps.klId) => {
  const dropdownKlId = `${klId}-select-dropdown`
  await waitFor(() => screen.getByTestId(dropdownKlId))
  return screen.getByTestId(dropdownKlId)
}

const getSelect = async (klId = defaultProps.klId) => {
  await waitForDropdown(klId)
  return screen.getByTestId(klId)
}

const DefaultSelect = (props: SelectProps) => (
  <ConfigProvider>
    <Select {...defaultProps} {...props} />
  </ConfigProvider>
)

describe('Select', () => {
  test('should render', async () => {
    const { baseElement } = render(<DefaultSelect />)

    expect(await getSelect()).toBeInTheDocument()
    expect(baseElement.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should render footer with renderFooter prop', async () => {
    const klId = 'test-footer'
    const renderFooter = () => <><Button klId={klId} /></>
    render(<DefaultSelect renderFooter={renderFooter} />)

    await waitForDropdown()

    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  test('should show clear button with multiselect or tags mode', () => {
    const klId = 'clear-icon'
    render(<DefaultSelect mode='tags' />)
    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  test('should not auto clear search value with autoClearSearchValue false', async () => {
    const inputValue = defaultProps.options[0].label.substring(0, 4)
    const { container } = render(<DefaultSelect defaultValue={undefined} autoClearSearchValue={false} showSearch />)

    await waitForDropdown()

    userEvent.type(screen.getByRole('combobox'), inputValue)
    const selectItem = getFirstOption(container)

    expect(selectItem).toBeDefined()

    if (selectItem) {
      (selectItem as HTMLDivElement).click()
    }

    expect((await getSelect()).querySelector('input')).toHaveValue(inputValue)
  })

  test('should be focused with autoFocus prop', async () => {
    render(<DefaultSelect autoFocus />)
    expect((await getSelect()).querySelector('input')).toHaveFocus()
  })

  test('should select defaultValue', () => {
    const defaultValue = defaultProps.options[1]
    render(<DefaultSelect open={false} defaultValue={defaultValue.value} />)
    expect(screen.getByText(defaultValue.label)).toBeInTheDocument()
  })

  test('should use filterOption function on searching', async () => {
    const filterOption = () => false
    const { container } = render(<DefaultSelect searchValue='test' filterOption={filterOption} />)

    await waitForDropdown()

    const selectItem = getFirstOption(container)

    expect(selectItem).not.toBeInTheDocument()
  })

  test('should sort options with filterSort function', async () => {
    const filterSort: SelectProps['filterSort'] = (optionA: unknown, optionB: unknown) => {
      const { label: a } = optionA as { label: string }
      const { label: b } = optionB as { label: string }

      if (!a || !b) {
        return 0
      }

      return a < b ? 1 : a > b ? -1 : 0
    }

    const { container } = render(<DefaultSelect filterSort={filterSort} />)

    await waitForDropdown()

    const filteredOptions = [...defaultProps.options].sort(filterSort)
    const selectItem = getFirstOption(container)
    expect(selectItem).toHaveTextContent(filteredOptions[0].label)
  })

  test('should have loader when in loading state', async () => {
    render(<DefaultSelect loading />)

    await waitForDropdown()

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  test('should render notFoundContent', async () => {
    const klId = 'test-not-found'
    const notFoundContent = <><Text klId={klId}>test</Text></>
    render(<DefaultSelect defaultValue={undefined} options={[]} notFoundContent={notFoundContent} />)

    await waitForDropdown()

    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  test('should not render dropdown with open false', async () => {
    render(<DefaultSelect open={false} />)
    expect(screen.queryByTestId(`${defaultProps.klId}-select-dropdown`)).not.toBeInTheDocument()
  })

  test('should change prop value of option to show as content of select with optionLabelProp', async () => {
    const { container } = render(<DefaultSelect optionLabelProp='value' />)

    await waitFor(() => container.querySelector('.kl-components-tag-text'))

    expect(container.querySelector('.kl-components-tag-text')).toHaveTextContent(defaultProps.options[0].value.toString())
  })

  test('should have placeholder with placeholder prop', async () => {
    const placeholder = 'test-placeholder'
    const { container } = render(<DefaultSelect defaultValue={undefined} placeholder={placeholder} />)

    await waitFor(() => container.querySelector('.ant-select-selection-placeholder'))

    expect(container.querySelector('.ant-select-selection-placeholder')).toHaveTextContent(placeholder)
  })

  test('should pass searchValue as value in search input', async () => {
    const searchValue = 'test-search-value'
    const { container } = render(<DefaultSelect searchValue={searchValue} showSearch />)

    await waitFor(() => container.querySelector('.ant-select-selection-search-mirror'))

    expect(container.querySelector('.ant-select-selection-search-mirror')).toHaveTextContent(searchValue)
  })

  test('should show arrow icon with showArrow prop', async () => {
    render(<DefaultSelect showArrow />)

    await waitForDropdown()

    expect(screen.getByTestId('down-icon')).toBeInTheDocument()
  })

  test('should have current selected option as value prop', () => {
    const value = defaultProps.options[2]
    render(<DefaultSelect open={false} value={value.value} />)
    expect(screen.getByText(value.label)).toBeInTheDocument()
  })

  test('should have defined number of tags if maxTagCount is provided', () => {
    const value = defaultProps.options.map(({ value }) => value)
    const maxTagCount = 1
    const { container } = render(
      <DefaultSelect
        open={false}
        value={value}
        maxTagCount={maxTagCount}
        tagRender={props => <Tag {...props} className="my-custom-tag" />}
      />
    )

    expect(container.querySelectorAll('.my-custom-tag')).toHaveLength(maxTagCount)
  })

  test('should have correct placeholder with maxTagPlaceholder prop', () => {
    const value = defaultProps.options.map(({ value }) => value)
    const maxTagCount = 1
    const klId = 'test-placeholder'
    const maxTagPlaceholder = <><Text klId={klId}>test placeholder</Text></>
    render(
      <DefaultSelect
        open={false}
        value={value}
        maxTagCount={maxTagCount}
        maxTagPlaceholder={maxTagPlaceholder}
      />
    )

    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  test('should correctly ellipse tag text with maxTagTextLength prop', async () => {
    const maxTagTextLength = 1
    const value = defaultProps.options[0]
    const { container } = render(
      <DefaultSelect
        value={value.value}
        maxTagTextLength={maxTagTextLength}
      />
    )

    await waitForDropdown()

    const trimmedLabel = value.label.substring(0, maxTagTextLength) + '...'
    expect(container.querySelector('.kl-components-tag-text')).toHaveTextContent(trimmedLabel)
  })

  test('should use correct prop value of option for filter if optionFilterProp is set', async () => {
    const optionFilterProp = 'value'
    const option = defaultProps.options[1]
    const { container } = render(
      <DefaultSelect
        showSearch
        searchValue={option.value.toString()}
        optionFilterProp={optionFilterProp}
      />
    )

    await waitForDropdown()

    const selectItem = getFirstOption(container)
    expect(selectItem).toHaveTextContent(option.label)
  })

  test('should call onBlur', () => {
    const onBlur = jest.fn()
    render(<>
      <DefaultSelect autoFocus onBlur={onBlur} />
      <Button klId='test-button' />
    </>)
    act(() => {
      userEvent.click(screen.getByTestId('test-button'))
    })
    expect(onBlur).toHaveBeenCalledTimes(1)
  })

  test('should call onSearch when search input value changed', async () => {
    const onSearch = jest.fn()
    render(<DefaultSelect showSearch onSearch={onSearch} />)

    act(() => {
      userEvent.type(screen.getByRole('combobox'), 'f')
    })

    expect(onSearch).toHaveBeenCalledTimes(1)
  })

  test('should call onChange when select value changed', async () => {
    const onChange = jest.fn()
    const { container } = render(<DefaultSelect defaultValue={2} mode={undefined} onChange={onChange} />)

    await waitForDropdown()

    const selectItem = getFirstOption(container)
    expect(selectItem).toBeDefined()

    if (selectItem) {
      (selectItem as HTMLDivElement).click()
    }

    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('should call onSelect when select some value', async () => {
    const onSelect = jest.fn()
    const { container } = render(<DefaultSelect defaultValue={undefined} mode={undefined} onSelect={onSelect} />)

    await waitForDropdown()

    const selectItem = getFirstOption(container)
    expect(selectItem).toBeDefined()

    if (selectItem) {
      (selectItem as HTMLDivElement).click()
    }

    expect(onSelect).toHaveBeenCalledTimes(1)
  })

  test('should call onDeselect when deselect some value', async () => {
    const onDeselect = jest.fn()
    const { container } = render(<DefaultSelect onDeselect={onDeselect} />)

    await waitForDropdown()

    const selectItem = getFirstOption(container)
    expect(selectItem).toBeDefined()

    if (selectItem) {
      (selectItem as HTMLDivElement).click()
    }

    expect(onDeselect).toHaveBeenCalledTimes(1)
  })

  test('should call onDropdownVisibleChange when dropdown opened', async () => {
    const onDropdownVisibleChange = jest.fn()
    render(<DefaultSelect open={false} onDropdownVisibleChange={onDropdownVisibleChange} />)

    act(() => {
      userEvent.click(screen.getByRole('combobox'))
    })

    expect(onDropdownVisibleChange).toHaveBeenCalledTimes(1)
  })

  test('should call onFocus when select focused', async () => {
    const onFocus = jest.fn()
    render(<DefaultSelect autoFocus onFocus={onFocus} />)

    await waitForDropdown()

    expect(onFocus).toHaveBeenCalledTimes(1)
  })

  test('should call onMouseEnter when mouse enters select', () => {
    const onMouseEnter = jest.fn()
    render(<DefaultSelect onMouseEnter={onMouseEnter} />)

    act(() => {
      fireEvent.mouseEnter(screen.getByRole('combobox'))
    })

    expect(onMouseEnter).toHaveBeenCalledTimes(1)
  })

  test('should call onMouseLeave when mouse leaves select', () => {
    const onMouseLeave = jest.fn()
    render(<DefaultSelect onMouseLeave={onMouseLeave} />)

    act(() => {
      fireEvent.mouseLeave(screen.getByRole('combobox'))
    })

    expect(onMouseLeave).toHaveBeenCalledTimes(1)
  })

  test('should call onClear when close button was clicked', () => {
    const onClear = jest.fn()
    render(<DefaultSelect allowClear onClear={onClear} />)

    act(() => {
      userEvent.click(screen.getByTestId('clear-icon'))
    })

    expect(onClear).toHaveBeenCalledTimes(1)
  })

  test('dropdown should be rendered in the select ancestor', async () => {
    render(<DefaultSelect open />)
    const dropdown = await waitForDropdown()
    const select = await getSelect()

    expect(dropdown).toBeInTheDocument()
    expect(select.parentNode).toContainElement(dropdown)
  })

  test('usePortal should render dropdown in document.body', async () => {
    render(<DefaultSelect open usePortal />)
    const dropdown = await waitForDropdown()
    const select = await getSelect()

    expect(dropdown).toBeInTheDocument()
    expect(select.parentNode).not.toContainElement(dropdown)
  })

  test('should receive test attributes', async () => {
    const testId = 'test-select'

    const { container } = render(<DefaultSelect open klId={testId} testId={testId}/>)
    const dropdown = await waitForDropdown(testId)
    const select = await getSelect(testId)
    const firstItem = container.querySelector('[role="option"][data-value="1"]')

    expect(select).toBeInTheDocument()
    expect(dropdown).toBeInTheDocument()
    expect(firstItem).toBeInTheDocument()
  })
})
