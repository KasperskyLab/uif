import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from '../__meta__/meta.json'
import { TenantFilter } from '../TenantFilter'
import { TenantFilterProps } from '../types'
import { badges } from '@sb/badges'
import { Meta, StoryObj } from '@storybook/react'
import { getPreparedTenantTreeData } from '@src/tenantFilter'

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
            subtenants: []
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
            subtenants: []
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
    subtenants: []
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
            subtenants: []
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
const { mappedTenants, tenantsIds } = getPreparedTenantTreeData(treeDataMock)
const defaultSelectedKeys = ['0-0-2-1']
const callback = (keys: string[]) => {
  const mappedKeys = keys.map(key => '\n ' + key)
  alert(`${mappedKeys.length} keys checked: ${mappedKeys}`)
}

const meta: Meta<TenantFilterProps> = {
  title: 'Organisms/TenantFilter',
  component: TenantFilter,
  argTypes: {
    ...sbHideControls(['theme', 'allTenantsKeys'])
  },
  args: {
    titleText: 'Tenant filter',
    counterText: 'Selected',
    withButton: false,
    withSearch: true,
    withIcon: false,
    defaultSelectedKeys: [],
    data: mappedTenants,
    allTenantsKeys: tenantsIds,
    applyHandler: callback,
    testId: 'tenant-filter-test-id',
    klId: 'tenant-filter-kl-id'
  },
  parameters: {
    badges: [badges.dev],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

type Story = StoryObj<TenantFilterProps>

export const Basic: Story = {}

export const WithAllSelectedTenants: Story = {
  args: {
    defaultSelectedKeys: tenantsIds
  }
}

export const WithAllSomeTenants: Story = {
  args: {
    defaultSelectedKeys: defaultSelectedKeys
  }
}

export const WithoutSearch: Story = {
  args: {
    withSearch: false
  }
}

export const WithoutHeader: Story = {
  args: {
    titleText: undefined,
    counterText: undefined
  }
}

export const WithButton: Story = {
  args: {
    buttonText: 'Apply filter',
    withButton: true
  }
}
