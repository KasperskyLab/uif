import React, { useState } from 'react'
import styled from 'styled-components'
import { badges } from '@sb/badges'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { sbHideControls } from '@helpers/storybookHelpers'
import MetaData from '../__meta__/meta.json'
import { SearchProps } from '../types'
import { Search } from '@src/search'
import { Text } from '@src/typography'

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const meta: Meta<SearchProps> = {
  title: 'Molecules/Search',
  component: Search,
  argTypes: {
    placeholder: { description: 'Placeholder text' },
    className: { description: 'Textbox class name' },
    prefix: { description: 'Component before text' },
    suffix: { description: 'Component after text' },
    ...sbHideControls(['maskOptions', 'theme', 'size', 'error', 'tags', 'prefix', 'suffix', 'dropdownOverlay'])
  },
  args: {
    disabled: false,
    placeholder: 'Search...',
    testId: 'search-test-id',
    klId: 'search-kl-id'
  },
  parameters: {
    badges: [badges.dev, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<SearchProps>

export const Basic: Story = {
  render: (args: SearchProps) => {
    const [value, setValue] = useState('')
    return (
      <Wrapper>
        <Search
          {...args}
          onChange={(value) => setValue(value as string)}
          onClearClick={() => setValue('')}
          value={value}
        />
      </Wrapper>
    )
  }
}

export const Custom: Story = {
  render: (args: SearchProps) => {
    const [value, setValue] = useState('')
    const onClearClick = () => setValue('')
    return (
      <Wrapper>
        <Text type='BTM2'>
          НЕ ПРЕДСТАВЛЕНЫ В ДИЗАЙНЕ
        </Text>
        <Search.WithButton
          {...args}
          btnText="Search"
          placeholder='Search with button'
          onClearClick={onClearClick}
          onChange={(value) => setValue(value as string)}
          value={value}
        />
        <Search.WithIconLeft
          {...args}
          placeholder='Search with left icon'
          onClearClick={onClearClick}
          onChange={(value) => setValue(value as string)}
          value={value}
        />
        <Search.WithIconRight
          {...args}
          placeholder='Search with right icon'
          onClearClick={onClearClick}
          onChange={(value) => setValue(value as string)}
          value={value}
        />
        <Search.WithConfiguration
          {...args}
          placeholder='Search with configuration'
          onClearClick={onClearClick}
          onChange={(value) => setValue(value as string)}
          value={value}
        />
        <Search.WithDropdown
          {...args}
          placeholder='Search with button dropdown'
          onClearClick={onClearClick}
          onChange={(value) => setValue(value as string)}
          value={value}
          overlay={[{ children: 'Dropdown content' }]}
        />
      </Wrapper>
    )
  }
}

const SearchResultsMock = Array.from({ length: 10 }).map((_, index) => ({ children: `result ${index}` }))

export const WithResult: Story = {
  render: (props: SearchProps) => {
    const [value, setValue] = useState('')
    const onFocus = action('onFocus')
    const onBlur = action('onBlur')
    const overlay = SearchResultsMock.filter((item) => item.children.indexOf(value) >= 0)

    return (
      <Wrapper>
        <Search
          {...props}
          onChange={(value) => setValue(value as string)}
          onClearClick={() => setValue('')}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          dropdownOverlay={overlay.length ? overlay : [{ children: 'Nothing found' }] }
        />
      </Wrapper>
    )
  }
}
