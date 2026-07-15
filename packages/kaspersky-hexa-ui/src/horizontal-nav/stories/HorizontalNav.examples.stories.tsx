import { ControllableActiveKeyInfo } from '@sb/components/Warnings'
import { Space } from '@src/space'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { HorizontalNav as HorizontalNavComponent } from '../HorizontalNav'
import { HorizontalNavProps } from '../types'

const Wrapper = styled.div`
  flex: 1;
  nav {
    width: 100%;
  }
`

const baseItems = [
  {
    label: 'One',
    key: 'one',
    componentsAfter: [
      <Placeholder key="placeholder-icon" />,
      <span key="badge" style={{ fontSize: 12, color: 'var(--hexa-ui-color-control-neutral-default)' }}>9</span>
    ]
  },
  { label: 'Two', key: 'two' },
  { label: 'Three', key: 'three' },
  { label: 'Four', key: 'four' },
  { label: 'Five', key: 'five' },
  { label: 'Six', key: 'six', disabled: true },
  { label: 'Seven Eleven', key: 'sevenEleven' }
]

const meta: Meta<typeof HorizontalNavComponent> = {
  title: 'Hexa UI Components/HorizontalNav/Stories',
  component: HorizontalNavComponent,
  tags: ['!autodocs'],
  parameters: {
    controls: {
      exclude: /(componentId|componentType|theme|klId|dataTestId)/
    }
  }
}

export default meta

type Story = StoryObj<HorizontalNavProps>

export const HorizontalNavBasic: Story = {
  name: 'HorizontalNav',
  render: (args) => (
    <Wrapper>
      <HorizontalNavComponent {...args} items={baseItems} />
    </Wrapper>
  ),
  args: {
    items: baseItems
  }
}

export const Borderless: Story = {
  render: (args) => (
    <Wrapper>
      <HorizontalNavComponent {...args} items={baseItems} borderless />
    </Wrapper>
  ),
  args: {
    borderless: true,
    items: baseItems
  },
  parameters: {
    controls: {
      exclude: /(borderless|componentId|componentType|theme|klId|dataTestId)/
    }
  }
}

export const ControllableActiveKey: Story = {
  name: 'Controllable Active Key',
  render: (args) => {
    const [activeKey, setActiveKey] = useState('two')

    const items = baseItems.map(item => ({
      ...item,
      selected: false,
      onClick: () => setActiveKey(item.key)
    }))

    return (
      <Space gap="separated" direction="vertical">
        <ControllableActiveKeyInfo />
        <HorizontalNavComponent
          {...args}
          activeKey={activeKey}
          items={items}
        />
      </Space>
    )
  },
  args: {
    items: baseItems,
    activeKey: 'two'
  },
  parameters: {
    controls: {
      include: ['activeKey']
    }
  }
}
