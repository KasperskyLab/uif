import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Search } from '../Search'
import { ThemeKey } from '../../../design-system/types'
import { useTranslation } from 'react-i18next'
import { renderHook } from '@testing-library/react-hooks'
import { localization } from '../../../helpers/localization'
import { ConfigProvider } from '../../../design-system/context/provider'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import { Text } from '../../typography'
import { Button } from '../../button'
import { Space } from '../../space'
import { SearchProps } from '../types'
import styled from 'styled-components'

const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`

const SearchResultsMock = () => (
  <SearchResults>
    <Text type="L3">Search only in</Text>
    <Space size={8} direction="horizontal" width="100%">
      <Button
        mode="primaryBlack"
        text="Foo"
        onClick={() => console.log('foo')}
      />
      <Button
        mode="primaryBlack"
        text="Bar"
        onClick={() => console.log('bar')}
      />
      <Button
        mode="primaryBlack"
        text="Lorem"
        onClick={() => console.log('lorem')}
      />
      <Button
        mode="primaryBlack"
        text="Ipsum"
        onClick={() => console.log('ipsum')}
      />
    </Space>
    <Button mode="secondary">Show all results</Button>
  </SearchResults>
)

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
        {...props}
      >
        {value && <SearchResultsMock />}
      </Search>
    )
  }
  test('should recieve kl-id prop', () => {
    const { getByTestId } = render(
      <ConfigProvider theme={ThemeKey.Light} locale="en">
        <Search klId={klId} value={'search'} />
      </ConfigProvider>
    )
    expect(getByTestId(klId)).toBeInTheDocument()
  })

  test('should set correctly value', async () => {
    const { getByTestId } = render(
      <ConfigProvider theme={ThemeKey.Light} locale="en">
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
      <ConfigProvider theme={ThemeKey.Light} locale="en">
        <SearchTestComponent klId={klId} />
      </ConfigProvider>
    )

    const search = getByTestId(klId)
    await userEvent.clear(search)
    await userEvent.type(search, 'text')
    expect(search).toHaveValue('text')
    expect(screen.getByText('Search only in')).toBeInTheDocument()
  })

  test('search result is hide when input has not value', async () => {
    const { getByTestId } = render(
      <ConfigProvider theme={ThemeKey.Light} locale="en">
        <SearchTestComponent klId={klId} />
      </ConfigProvider>
    )

    const search = getByTestId(klId)
    await userEvent.clear(search)
    expect(screen.queryByText('Search only in')).not.toBeInTheDocument()
  })

  test('render without l18n', () => {
    // @ts-ignore
    const enSearchText = localization.en.translation.search.dotted

    render(
      <ConfigProvider theme={ThemeKey.Light} locale="en">
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
