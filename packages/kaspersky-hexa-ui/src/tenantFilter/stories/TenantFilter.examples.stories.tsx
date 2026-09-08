import { Space } from '@src/space'
import { Toggle } from '@src/toggle'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { TenantFilter } from '../TenantFilter'
import { TenantFilterProps } from '../types'
import { allTenantsKeys, defaultSelectedKeys, flatListArgs, tenantFilterStorySettings } from './TenantFilter.stories'

const meta: Meta<typeof TenantFilter> = {
  title: 'Other/TenantFilter/Stories',
  component: TenantFilter,
  tags: ['!autodocs'],
  ...tenantFilterStorySettings
}

export default meta

type Story = StoryObj<TenantFilterProps>

export const Basic: Story = {}

export const WithAllSelectedTenants: Story = {
  args: { defaultSelectedKeys: allTenantsKeys }
}

export const WithAllSomeTenants: Story = { args: { defaultSelectedKeys } }

export const FlatList: Story = { args: flatListArgs }

export const WithoutSearch: Story = { args: { withSearch: false } }

export const WithoutHeader: Story = {
  args: { titleText: undefined, counterText: undefined }
}

export const WithButton: Story = {
  args: { buttonText: 'Apply filter', withButton: true }
}

export const ChangeComponentTheme: Story = {
  render: args => {
    const [darkTheme, setDarkTheme] = useState(true)

    return (
      <Space size={24} direction="vertical" align="start">
        <Toggle checked={darkTheme} onChange={setDarkTheme}>Dark theme</Toggle>
        <div className={darkTheme ? 'theme-dark' : 'theme-light'} style={{ background: 'var(--bg--global)' }}>
          <TenantFilter theme={darkTheme ? 'dark' : 'light'} {...args} />
        </div>
      </Space>
    )
  },
  args: { buttonText: 'Apply filter', withButton: true }
}
