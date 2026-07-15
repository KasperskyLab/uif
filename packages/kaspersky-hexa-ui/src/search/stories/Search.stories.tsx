import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import MetaData from '../__meta__/meta.json'
import { Search } from '../Search'
import { SearchProps } from '../types'

import { defaultArgs, searchPropPresentation } from './Search.controls'

const Wrapper = styled.div`
  width: 300px;
`

export const searchStorySettings: Meta<SearchProps> = {
  argTypes: buildStoryArgTypes(searchPropPresentation),
  args: {
    ...defaultArgs,
    testId: 'search-test-id',
    klId: 'search-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  },
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    )
  ]
}

const meta: Meta<SearchProps> = {
  title: 'Hexa UI Components/Search',
  component: Search,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['searchStorySettings'],
  ...searchStorySettings
}

export default meta

type Story = StoryObj<SearchProps>

const SearchPlayground: React.FC<SearchProps> = ({
  value: valueProp,
  onChange,
  onClearClick,
  ...rest
}) => {
  const [value, setValue] = React.useState(valueProp ?? '')

  React.useEffect(() => {
    setValue(valueProp ?? '')
  }, [valueProp])

  return (
    <Search
      {...rest}
      value={value}
      onChange={(newValue) => {
        setValue(newValue as string)
        onChange?.(newValue)
      }}
      onClearClick={() => {
        setValue('')
        onClearClick?.()
      }}
    />
  )
}

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <SearchPlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(searchPropPresentation),
      sort: 'none'
    }
  }
}
