import React from 'react'
import styled from 'styled-components'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'
import Meta from '../__meta__/meta.json'
import { TenantFilter } from '../TenantFilter'
import { ITenantFilterProps, TenantFilterTreeDataItem } from '../types'
import { badges } from '../../../.storybook/badges'

export default {
  title: 'Organisms/TenantFilter',
  component: TenantFilter,
  parameters: {
    badges: [badges.dev],
    docs: {
      page: withMeta(Meta)
    }
  },
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Color Palette Theme'
    },
    titleText: {
      control: { type: 'text' },
      description: 'Filter header'
    },
    counterText: {
      control: { type: 'text' },
      description: 'Text displayed next to the counter of selected items in the tree'
    },
    buttonText: {
      control: { type: 'text' },
      description: 'Filter button text'
    },
    withButton: {
      control: { type: 'boolean' },
      description: 'Button display'
    },
    withSearch: {
      control: { type: 'boolean' },
      description: 'Search display'
    },
    withIcon: {
      control: { type: 'boolean' },
      description: 'Sign of the presence of an icon to the right of the counter (required for PinnableColumn in Product UI)'
    },
    defaultCheckedKeys: {
      description: 'Keys list of default selected elements'
    },
    treeData: {
      description: 'Tree Data'
    },
    handler: {
      description: 'The handler that will be called when the filter button is clicked'
    }
  },
  args: {
    theme: 'dark',
    titleText: 'Tenant filter',
    counterText: 'Selected',
    buttonText: 'Apply filter',
    withButton: false,
    withSearch: true,
    withIcon: false,
    defaultCheckedKeys: []
  }
}

const Wrapper = styled.div`
  height: 95vh;
  padding: 25px;
  background: #151515;
`

const treeDataMock = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          {
            title: '0-0-1-1',
            key: '0-0-1-1',
            children: []
          },
          {
            title: '0-0-1-2',
            key: '0-0-1-2',
            children: []
          }
        ]
      },
      {
        title: '0-0-2',
        key: '0-0-2',
        children: [
          {
            title: '0-0-2-1',
            key: '0-0-2-1',
            children: []
          },
          {
            title: '0-0-2-2',
            key: '0-0-2-2',
            children: []
          }
        ]
      }
    ]
  },
  {
    title: '0-1',
    key: '0-1',
    children: []
  },
  {
    title: '0-2',
    key: '0-2',
    children: [
      {
        title: '0-2-1',
        key: '0-2-1',
        children: [
          {
            title: '0-2-1-1',
            key: '0-2-1-1',
            children: []
          },
          {
            title: '0-2-1-2',
            key: '0-2-1-2',
            children: []
          }
        ]
      }
    ]
  },
  {
    title: '0-3',
    key: '0-3',
    children: [
      {
        title: '0-3-1',
        key: '0-3-1',
        children: [
          {
            title: '0-3-1-1',
            key: '0-3-1-1',
            children: []
          },
          {
            title: '0-3-1-2',
            key: '0-3-1-2',
            children: []
          }
        ]
      },
      {
        title: '0-3-2',
        key: '0-3-2',
        children: [
          {
            title: '0-3-2-1',
            key: '0-3-2-1',
            children: []
          },
          {
            title: '0-3-2-2',
            key: '0-3-2-2',
            children: []
          }
        ]
      }
    ]
  },
  {
    title: '0-4',
    key: '0-4',
    children: [
      {
        title: '0-4-1',
        key: '0-4-1',
        children: [
          {
            title: '0-4-1-1',
            key: '0-4-1-1',
            children: []
          },
          {
            title: '0-4-1-2',
            key: '0-4-1-2',
            children: []
          }
        ]
      },
      {
        title: '0-4-2',
        key: '0-4-2',
        children: [
          {
            title: '0-4-2-1',
            key: '0-4-2-1',
            children: []
          },
          {
            title: '0-4-2-2',
            key: '0-4-2-2',
            children: []
          }
        ]
      }
    ]
  }
]

const fetchTenantTreeData = async (): Promise<TenantFilterTreeDataItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(treeDataMock), 3000)
  })
}

const callback = (keys: string[]) => {
  const mappedKeys = keys.map(key => '\n ' + key)
  alert(`${mappedKeys.length} keys checked: ${mappedKeys}`)
}

const params = {
  titleText: 'Tenant filter',
  counterText: 'Selected',
  buttonText: 'Apply filter'
}

const TenantFilterTemplate = ({
  titleText = params.titleText,
  counterText = params.counterText,
  fetchTreeDataHandler = fetchTenantTreeData,
  ...rest
}: ITenantFilterProps) => {
  return (
    <Wrapper>
      <TenantFilter
        titleText={titleText}
        counterText={counterText}
        fetchTreeDataHandler={fetchTreeDataHandler}
        {...rest}
      />
    </Wrapper>
  )
}

const TenantFilterWithoutSearchTemplate = ({
  titleText = params.titleText,
  counterText = params.counterText,
  withSearch = false,
  fetchTreeDataHandler = fetchTenantTreeData,
  ...rest
}: ITenantFilterProps) => {
  return (
    <Wrapper>
      <TenantFilter
        titleText={titleText}
        counterText={counterText}
        withSearch={withSearch}
        fetchTreeDataHandler={fetchTreeDataHandler}
        {...rest}
      />
    </Wrapper>
  )
}

const TenantFilterWithoutHeaderTemplate = ({
  fetchTreeDataHandler = fetchTenantTreeData,
  ...rest
}: ITenantFilterProps) => {
  return (
    <Wrapper>
      <TenantFilter
        fetchTreeDataHandler={fetchTreeDataHandler}
        {...rest}
      />
    </Wrapper>
  )
}

const TenantFilterWithButtonTemplate = ({
  titleText = params.titleText,
  counterText = params.counterText,
  buttonText = params.buttonText,
  withButton = true,
  fetchTreeDataHandler = fetchTenantTreeData,
  applyHandler = callback,
  ...rest
}: ITenantFilterProps) => {
  return (
    <Wrapper>
      <TenantFilter
        titleText={titleText}
        counterText={counterText}
        buttonText={buttonText}
        withButton={withButton}
        applyHandler={applyHandler}
        fetchTreeDataHandler={fetchTreeDataHandler}
        {...rest}
      />
    </Wrapper>
  )
}

export const Basic = TenantFilterTemplate.bind({})
export const WithoutSearch = TenantFilterWithoutSearchTemplate.bind({})
export const WithoutHeader = TenantFilterWithoutHeaderTemplate.bind({})
export const WithButton = TenantFilterWithButtonTemplate.bind({})
