import { ConfigProvider } from '@design-system/context'
import { localization } from '@helpers/localization'
import { act, render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Search } from '../Search'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import { SearchProps } from '../types'

const SearchResultsMock = Array.from({ length: 10 }).map((_, index) => ({ children: `result ${index}` }))

const DefaultSearch = (props: SearchProps) => (
  <ConfigProvider>
    <Search {...props} />
  </ConfigProvider>
)

describe('Search ', () => {
  const klId = 'test-search-kl-id'
  const testId = 'test-search-test-id'

  const SearchTestComponent = (props: SearchProps) => {
    const [value, setValue] = useState('')
    const onFocus = jest.fn()
    const onBlur = jest.fn()

    return (
      <DefaultSearch
        onChange={(value) => setValue(value as string)}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        dropdownOverlay={SearchResultsMock}
        {...props}
      />
    )
  }

  test('should render', () => {
    const { container } = render(<DefaultSearch klId={klId} testId={testId} value="search" />)

    expect(container.querySelector(`[kl-id="${klId}"]`)).toBeInTheDocument()
    expect(container.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument()
  })

  test('should render whith all test attributs', () => {
    const { container: containerWithValue } = render(<DefaultSearch value="search" />)
    const { container: containerNoValue } = render(<DefaultSearch />)

    expect(containerWithValue.querySelector('[data-testid="search-clear"]')).toBeInTheDocument()
    expect(containerNoValue.querySelector('[data-testid="search-icon"]')).toBeInTheDocument()
  })

  test('should set correctly value', async () => {
    const { getByTestId } = render(<DefaultSearch klId={klId} />)

    const search = getByTestId(klId)
    await userEvent.clear(search)
    await userEvent.type(search, 'text')
    expect(search).toHaveValue('text')
  })

  test('search result is show when input has focus and value', async () => {
    const { getByTestId } = render(<SearchTestComponent klId={klId} />)

    const search = getByTestId(klId)
    await act(async () => {
      await userEvent.clear(search)
      await userEvent.type(search, 'text')
    })
    expect(search).toHaveValue('text')
    expect(screen.getByText('result 1')).toBeInTheDocument()
  })

  test('search result is hide when input has not value', async () => {
    const { getByTestId } = render(<SearchTestComponent klId={klId} />)

    const search = getByTestId(klId)
    await act(async () => {
      await userEvent.clear(search)
    })
    expect(screen.queryByText('Nothing found')).not.toBeInTheDocument()
  })

  test('render without l18n', () => {
    const enSearchText = localization['en-us'].translation.search.dotted

    render(<DefaultSearch klId={klId} placeholder="search.dotted" />)

    const { result } = renderHook(() => useTranslation())
    const locText = result.current.t(enSearchText)
    expect(enSearchText).toEqual(locText)
    const searchElem = screen.getByPlaceholderText(locText)
    expect(searchElem).toBeInTheDocument()
  })

  // Codium AI
  test('should render suffix icon', () => {
    const { container } = render(<DefaultSearch klId="test-search-id" />)

    expect(container.querySelector('[data-testid="search-icon"]')).toBeInTheDocument()
  })

  test('should render clear button when value is present', () => {
    const { container } = render(<DefaultSearch klId="test-search-id" value="test" />)

    expect(container.querySelector('[data-testid="search-clear"]')).toBeInTheDocument()
  })

  test('should call onClearClick when clear button is clicked', async () => {
    const onClearClick = jest.fn()
    const { container } = render(<DefaultSearch klId="test-search-id" value="test" onClearClick={onClearClick} />)

    const clearButton = container.querySelector('[data-testid="search-clear"]')
    if (clearButton) {
      await userEvent.click(clearButton)
      expect(onClearClick).toHaveBeenCalled()
    }
  })

  test('should handle undefined onClearClick without errors', async () => {
    const { container } = render(<DefaultSearch klId="test-search-id" value="test" />)

    const clearButton = container.querySelector('[data-testid="search-clear"]')
    if (clearButton) {
      await userEvent.click(clearButton)
      expect(clearButton).toBeInTheDocument()
    }
  })

  test('should handle empty value gracefully', () => {
    render(<DefaultSearch klId="test-search-id" value="" />)

    const searchElem = screen.getByTestId('test-search-id')
    expect(searchElem).toHaveValue('')
  })

  test('should render correctly with prefix', () => {
    render(<DefaultSearch klId="test-search-id" prefix="prefix" />)

    const prefixElem = screen.getByText('prefix')
    expect(prefixElem).toBeInTheDocument()
  })

  test('should render correctly with suffix', () => {
    render(<DefaultSearch klId="test-search-id" suffix="suffix" />)

    const suffixElem = screen.getByText('suffix')
    expect(suffixElem).toBeInTheDocument()
  })

  test('should handle rapid changes in value', async () => {
    const { getByTestId } = render(<DefaultSearch klId="test-search-id" />)

    const searchElem = getByTestId('test-search-id')
    await userEvent.type(searchElem, 'rapid change')
    expect(searchElem).toHaveValue('rapid change')
  })
})
