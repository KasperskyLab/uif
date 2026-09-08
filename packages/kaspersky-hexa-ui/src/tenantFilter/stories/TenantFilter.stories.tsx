import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { getPreparedTenantTreeData } from '../handlers/cookie-handlers'
import { TenantFilter } from '../TenantFilter'
import { TenantFilterProps } from '../types'
import { defaultArgs, tenantFilterPropPresentation } from './TenantFilter.controls'

const treeDataMock = [
  {
    name: '0-0',
    id: '0-0',
    subtenants: [
      {
        name: '0-0-1',
        id: '0-0-1',
        subtenants: [
          {
            name: '0-0-1-1',
            id: '0-0-1-1',
            subtenants: [
              {
                name: '0-0-1-1-1',
                id: '0-0-1-1-1',
                subtenants: []
              }
            ]
          },
          {
            name: '0-0-1-2',
            id: '0-0-1-2',
            subtenants: []
          }
        ]
      },
      {
        name: '0-0-2',
        id: '0-0-2',
        subtenants: [
          {
            name: '0-0-2-1',
            id: '0-0-2-1',
            subtenants: [
              {
                name: '0-0-2-1-1',
                id: '0-0-2-1-1',
                subtenants: []
              }
            ]
          },
          {
            name: '0-0-2-2',
            id: '0-0-2-2',
            subtenants: []
          }
        ]
      }
    ]
  },
  {
    name: '0-1',
    id: '0-1',
    subtenants: [
      {
        name: '0-1-1',
        id: '0-1-1',
        subtenants: [
          {
            name: '0-1-1-1',
            id: '0-1-1-1',
            subtenants: [
              {
                name: '0-1-1-1-1',
                id: '0-1-1-1-1',
                subtenants: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: '0-2',
    id: '0-2',
    subtenants: [
      {
        name: '0-2-1',
        id: '0-2-1',
        subtenants: [
          {
            name: '0-2-1-1',
            id: '0-2-1-1',
            subtenants: [
              {
                name: '0-2-1-1-1',
                id: '0-2-1-1-1',
                subtenants: []
              }
            ]
          },
          {
            name: '0-2-1-2',
            id: '0-2-1-2',
            subtenants: []
          }
        ]
      }
    ]
  },
  {
    name: '0-3',
    id: '0-3',
    subtenants: [
      {
        name: '0-3-1',
        id: '0-3-1',
        subtenants: [
          {
            name: '0-3-1-1',
            id: '0-3-1-1',
            subtenants: []
          },
          {
            name: '0-3-1-2',
            id: '0-3-1-2',
            subtenants: []
          }
        ]
      },
      {
        name: '0-3-2',
        id: '0-3-2',
        subtenants: [
          {
            name: '0-3-2-1',
            id: '0-3-2-1',
            subtenants: []
          },
          {
            name: '0-3-2-2',
            id: '0-3-2-2',
            subtenants: []
          }
        ]
      }
    ]
  },
  {
    name: '0-4',
    id: '0-4',
    subtenants: [
      {
        name: '0-4-1',
        id: '0-4-1',
        subtenants: [
          {
            name: '0-4-1-1',
            id: '0-4-1-1',
            subtenants: []
          },
          {
            name: '0-4-1-2',
            id: '0-4-1-2',
            subtenants: []
          }
        ]
      },
      {
        name: '0-4-2',
        id: '0-4-2',
        subtenants: [
          {
            name: '0-4-2-1',
            id: '0-4-2-1',
            subtenants: []
          },
          {
            name: '0-4-2-2',
            id: '0-4-2-2',
            subtenants: []
          }
        ]
      }
    ]
  }
]

const flatTreeDataMock = [
  { name: '1-0', id: '1-0', subtenants: [] },
  { name: '1-1', id: '1-1', subtenants: [] },
  { name: '1-2', id: '1-2', subtenants: [] },
  { name: '1-3', id: '1-3', subtenants: [] },
  { name: '1-4', id: '1-4', subtenants: [] }
]

const { mappedTenants, tenantsIds } = getPreparedTenantTreeData(treeDataMock)
const { mappedTenants: flatTenants, tenantsIds: flatTenantsKeys } = getPreparedTenantTreeData(flatTreeDataMock)
export const defaultSelectedKeys = ['0-0-2-1']
export const allTenantsKeys = tenantsIds
export const flatListArgs = {
  data: flatTenants,
  allTenantsKeys: flatTenantsKeys,
  defaultSelectedKeys: []
}
const callback = (keys: string[]) => {
  const mappedKeys = keys.map(key => '\n ' + key)
  console.log(`${mappedKeys.length} keys checked: ${mappedKeys}`)
}

export const tenantFilterStorySettings: Meta<TenantFilterProps> = {
  argTypes: buildStoryArgTypes(tenantFilterPropPresentation),
  args: {
    ...defaultArgs,
    data: mappedTenants,
    allTenantsKeys: tenantsIds,
    applyHandler: callback,
    testId: 'tenant-filter-test-id',
    klId: 'tenant-filter-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.missingDesign]
  }
}

const meta: Meta<typeof TenantFilter> = {
  title: 'Other/TenantFilter',
  component: TenantFilter,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['allTenantsKeys', 'defaultSelectedKeys', 'flatListArgs', 'tenantFilterStorySettings'],
  ...tenantFilterStorySettings
}

export default meta

type Story = StoryObj<TenantFilterProps>

export const Playground: Story = {
  parameters: {
    controls: {
      include: getControlsInclude(tenantFilterPropPresentation),
      sort: 'none'
    }
  }
}
