import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { ControllableActiveKeyInfo } from '@sb/components/Warnings'
import { Badge } from '@src/badge'
import { Indicator } from '@src/indicator'
import { Space } from '@src/space'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from './__meta__/meta.json'
import { HorizontalNav as HorizontalNavComponent } from './HorizontalNav'
import { HorizontalNavProps } from './types'

const Wrapper = styled.div`
  flex: 1;
  nav {
    width: 100%;
  }
`

const items = [
  {
    label: 'One',
    key: 'one',
    testId: 'horizontal-nav-item-one-test-id',
    klId: 'horizontal-nav-item-one-kl-id',
    componentsAfter: [
      <Placeholder key="placeholder-icon" />,
      <Badge key="badge" mode="neutral" text="9" />
    ],
    onClick: () => console.log('Click One')
  },
  {
    label: 'Two',
    key: 'two',
    testId: 'horizontal-nav-item-two-test-id',
    klId: 'horizontal-nav-item-two-kl-id',
    onClick: () => console.log('Click Two')
  },
  {
    label: 'Three',
    key: 'three',
    onClick: () => console.log('Click Three'),
    selected: true
  },
  {
    label: 'Four',
    key: 'four',
    componentsAfter: [
      <Indicator key="indicator" />
    ],
    onClick: () => console.log('Click Four')
  },
  {
    label: 'Five',
    key: 'five',
    onClick: () => console.log('Click Five')
  },
  {
    label: 'Six',
    key: 'six',
    onClick: () => console.log('Click Six'),
    disabled: true
  },
  {
    label: 'Seven Eleven',
    key: 'sevenEleven',
    onClick: () => console.log('Click Seven Eleven')
  }
]

const storySettings: Meta<HorizontalNavProps> = {
  argTypes: {
    items: { control: 'object' },
    borderless: { control: 'boolean' }
  },
  args: {
    testId: 'horizontal-nav-test-id',
    klId: 'horizontal-nav-kl-id',
    items,
    borderless: false
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
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

const meta: Meta<HorizontalNavProps> = {
  title: 'Hexa UI Components/HorizontalNav',
  component: HorizontalNavComponent,
  ...withDesignControls<HorizontalNavProps>({
    componentName: 'horizontalNav',
    meta: storySettings
  })
}

export default meta

type Story = StoryObj<any>

export const HorizontalNav: Story = {}

export const HorizontalNavControllableActiveKey: Story = {
  render: (args) => {
    const [activeKey, setActiveKey] = useState('two')

    const handleActiveKeyChange = (key: string) => {
      console.log('new active key is', key)
      setActiveKey(key)
    }

    const newItems = items.map(item => ({ ...item, selected: false, onClick: () => { handleActiveKeyChange(item.key) } }))

    return (
      <Space gap="separated" direction="vertical">
        <ControllableActiveKeyInfo />
        <HorizontalNavComponent {...args} activeKey={activeKey} items={newItems} />
      </Space>
    )
  }
}
