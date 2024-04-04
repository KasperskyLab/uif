import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Search } from '../Search'
import { ThemeKey } from '@design-system/types'
import { useTranslation } from 'react-i18next'
import { renderHook } from '@testing-library/react-hooks'
import { localization } from '../../../helpers/localization'
import { ConfigProvider } from '@design-system/context'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import { SearchProps } from '../types'

const SearchResultsMock = Array.from({ length: 10 }).map((_, index) => ({ children: `result ${index}` }))

describe('Search ', () => {
  const klId = 'test-search-id'

  const SearchTestComponent = (props: SearchProps) => {
    const [value, setValue] = useState('')
    const onFocus = jest.fn()
    const onBlur = jest.fn()

    return (
      <Search
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
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} locale="en-us">
        <Search klId={klId} testId="test-id" value={'search'} />
      </ConfigProvider>
    )

    expect(container.querySelector(`[kl-id="${klId}"]`)).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should set correctly value', async () => {
    const { getByTestId } = render(
      <ConfigProvider theme={ThemeKey.Light} locale="en-us">
        <Search klId={klId} />
      </ConfigProvider>
    )

    const search = getByTestId(klId)
    await userEvent.clear(search)
    await userEvent.type(search, 'text')
    expect(search).toHaveValue('text')
  })

  test('search result is show when input has focus and value', async () => {
    const { getByTestId } = render(
      <ConfigProvider theme={ThemeKey.Light} locale="en-us">
        <SearchTestComponent klId={klId} />
      </ConfigProvider>
    )

    const search = getByTestId(klId)
    await userEvent.clear(search)
    await userEvent.type(search, 'text')
    expect(search).toHaveValue('text')
    expect(screen.getByText('result 1')).toBeInTheDocument()
  })

  test('search result is hide when input has not value', async () => {
    const { getByTestId } = render(
      <ConfigProvider theme={ThemeKey.Light} locale="en-us">
        <SearchTestComponent klId={klId} />
      </ConfigProvider>
    )

    const search = getByTestId(klId)
    await userEvent.clear(search)
    expect(screen.queryByText('Nothing found')).not.toBeInTheDocument()
  })

  test('render without l18n', () => {
    // @ts-ignore
    const enSearchText = localization['en-us'].translation.search.dotted

    render(
      <ConfigProvider theme={ThemeKey.Light} locale="en-us">
        <Search klId={klId} placeholder="search.dotted" />
      </ConfigProvider>
    )

    const { result } = renderHook(() => useTranslation())
    const locText = result.current.t(enSearchText)
    expect(enSearchText).toEqual(locText)
    const searchElem = screen.getByPlaceholderText(locText)
    expect(searchElem).toBeInTheDocument()
  })
})
