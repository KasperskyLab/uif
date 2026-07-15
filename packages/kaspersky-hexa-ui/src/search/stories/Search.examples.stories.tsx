import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Locale } from '@src/locale'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import Empty from 'antd/es/empty'
import React, { useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { Search } from '../Search'
import { SearchProps } from '../types'

import { searchStorySettings } from './Search.stories'

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const meta: Meta<SearchProps> = {
  title: 'Hexa UI Components/Search/Stories',
  component: Search,
  tags: ['!autodocs'],
  ...searchStorySettings
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

const EmptyData = () => {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      className="ant-empty-small"
      description={(
        <Text type="BTR3">
          <Locale localizationKey="common.empty" />
        </Text>
      )}
      style={{ width: '276px', margin: '8px 0' }}
    />
  )
}

const SearchResultsMock = Array.from({ length: 10 }).map((_, index) => ({ children: `result ${index}` }))

export const WithResult: Story = {
  render: (props: SearchProps) => {
    const [value, setValue] = useState('')
    const overlay = SearchResultsMock.filter((item) => item.children.indexOf(value) >= 0)

    return (
      <Wrapper>
        <Search
          {...props}
          onChange={(value) => setValue(value as string)}
          onClearClick={() => setValue('')}
          value={value}
          dropdownOverlay={overlay.length ? overlay : [{ children: <EmptyData /> }]}
        />
      </Wrapper>
    )
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.input_search },
  render: args => <ThemedPalette {...args} />
}
