import React, { useState } from 'react'
import { Search } from '../Search'
import styled from 'styled-components'
import { badges } from '../../../.storybook/badges'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'
import Meta from '../__meta__/meta.json'
import { ISearchProps } from '../types'
import { Space } from '../../space'
import { Button } from '../../button'
import { action } from '@storybook/addon-actions'
import { Text } from '../../typography'

const Wrapper = styled.div`
  width: 240px;
`

export default {
  title: 'Molecules/Search',
  component: Search,
  argTypes: {
    placeholder: {
      defaultValue: 'placeholder',
      options: 'text'
    },
    disabled: { table: { disable: true } },
    onChange: { table: { disable: true } },
    theme: { table: { disable: true } },
    size: { table: { disable: true } },
    error: { table: { disable: true } },
    value: { table: { disable: true } },
    maskOptions: { table: { disable: true } },
    klId: { table: { disable: true } }
  },
  parameters: {
    badges: [badges.dev],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const BasicTemplate = () => {
  const [value, setValue] = useState('')
  return (
    <Wrapper>
      <Search onChange={(value) => setValue(value as string)} value={value} />
    </Wrapper>
  )
}

export const Basic = BasicTemplate

const WithButtonTemplate = (props: ISearchProps) => {
  const [value, setValue] = useState('')

  return (
    <Wrapper>
      <Search.WithButton
        btnText="Search"
        {...props}
        onChange={(value) => setValue(value as string)}
        value={value}
      />
    </Wrapper>
  )
}

export const WithButton = WithButtonTemplate

const WithIconLeftTemplate = (props: ISearchProps) => {
  const [value, setValue] = useState('')
  return (
    <Wrapper>
      <Search.WithIconLeft
        {...props}
        onChange={(value) => setValue(value as string)}
        value={value}
      />
    </Wrapper>
  )
}

export const WithIconLeft = WithIconLeftTemplate

const WithIconRightTemplate = (props: ISearchProps) => {
  const [value, setValue] = useState('')
  return (
    <Wrapper>
      <Search.WithIconRight
        {...props}
        onChange={(value) => setValue(value as string)}
        value={value}
      />
    </Wrapper>
  )
}

export const WithIconRight = WithIconRightTemplate

const WithConfigurationTemplate = (props: ISearchProps) => {
  const [value, setValue] = useState('')
  return (
    <Wrapper>
      <Search.WithConfiguration
        {...props}
        onChange={(value) => setValue(value as string)}
        value={value}
      />
    </Wrapper>
  )
}

export const WithConfiguration = WithConfigurationTemplate

const WithDropdownTemplate = (props: ISearchProps) => {
  const [value, setValue] = useState('')
  return (
    <Wrapper>
      <Search.WithDropdown
        {...props}
        onChange={(value) => setValue(value as string)}
        value={value}
        overlay={<h3>Dropdown content</h3>}
      />
    </Wrapper>
  )
}

export const WithDropdown = WithDropdownTemplate

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

const WithResultTemplate = (props: ISearchProps) => {
  const [value, setValue] = useState('')
  const onFocus = action('onFocus')
  const onBlur = action('onBlur')

  return (
    <Search
      {...props}
      onChange={(value) => setValue(value as string)}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {value && <SearchResultsMock />}
    </Search>
  )
}

export const WithResult = WithResultTemplate
