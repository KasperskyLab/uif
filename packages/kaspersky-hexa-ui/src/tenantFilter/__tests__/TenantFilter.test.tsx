import { ConfigProvider } from '@design-system/context'
import { act, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { TenantFilter } from '../TenantFilter'
import { Tenant, TenantFilterProps, TenantFilterTreeDataItem } from '../types'

const getPreparedTenantTreeData = (tenants: Tenant[], testId: string) => {
  const tenantsIds: string[] = []
  const mappedTenants = tenants.map(({ id, name, subtenants }) => {
    tenantsIds.push(id)

    const mappedTenant: TenantFilterTreeDataItem = {
      key: id,
      title: name,
      // @ts-ignore
      'data-testid': `${testId}-${id}`
    }

    if (subtenants && subtenants.length > 0) {
      const { mappedTenants, tenantsIds: childTenantsIds } = getPreparedTenantTreeData(subtenants, testId)

      mappedTenant.children = mappedTenants
      tenantsIds.push(...childTenantsIds)
    }

    return mappedTenant
  })

  return { mappedTenants, tenantsIds }
}

describe('TenantFilter', () => {
  const { mappedTenants, tenantsIds } = getPreparedTenantTreeData([
    {
      name: '0-0',
      id: '0-0',
      subtenants: [
        {
          name: '0-0-0',
          id: '0-0-0',
          subtenants: [
            {
              name: '0-0-0-0',
              id: '0-0-0-0',
              subtenants: []
            },
            {
              name: '0-0-0-1',
              id: '0-0-0-1',
              subtenants: []
            }
          ]
        },
        {
          name: '0-0-1',
          id: '0-0-1',
          subtenants: [
            {
              name: '0-0-1-0',
              id: '0-0-1-0',
              subtenants: []
            },
            {
              name: '0-0-1-1',
              id: '0-0-1-1',
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
    }
  ], 'test-id')

  const defaultProps = {
    allTenantsKeys: tenantsIds,
    buttonText: 'Apply filter',
    counterText: 'Selected',
    data: mappedTenants,
    defaultSelectedKeys: [],
    testId: 'test-id',
    titleText: 'Tenant filter'
  }

  const DefaultTenantFilter = (props: Partial<TenantFilterProps>) => (
    <ConfigProvider>
      <TenantFilter {...defaultProps} {...props} />
    </ConfigProvider>
  )

  const clickOnNodeCheckbox = async (container: HTMLElement, id: string) => {
    const checkbox = container.querySelector(`[data-testid="test-id-${id}"] > .ant-tree-checkbox`) as HTMLElement

    await userEvent.click(checkbox)
    act(() => {
      jest.advanceTimersByTime(5000)
    })
  }

  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  it('should render', () => {
    const { container } = render(<DefaultTenantFilter withButton />)

    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id-counter"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="tenant-filter-search"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id-tree"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id-apply-filter"]')).toBeInTheDocument()
  })

  it('should check a single node', async () => {
    const applyHandler = jest.fn()
    const { container } = render(<DefaultTenantFilter applyHandler={applyHandler} />)

    await clickOnNodeCheckbox(container, '0-0-0-0')

    expect(applyHandler).toBeCalledTimes(1)
    expect(applyHandler).toBeCalledWith(['0-0-0-0'])
  })

  it('should check multiple nodes', async () => {
    const applyHandler = jest.fn()
    const { container } = render(<DefaultTenantFilter applyHandler={applyHandler} />)

    await clickOnNodeCheckbox(container, '0-0-0')

    expect(applyHandler).toBeCalledTimes(1)
    expect(applyHandler).toBeCalledWith(['0-0-0', '0-0-0-0', '0-0-0-1'])
  })

  it('should uncheck multiple nodes', async () => {
    const applyHandler = jest.fn()
    const { container } = render(<DefaultTenantFilter applyHandler={applyHandler} />)

    await clickOnNodeCheckbox(container, '0-0')
    await clickOnNodeCheckbox(container, '0-0-0')

    expect(applyHandler).toBeCalledWith(['0-0', '0-0-1', '0-0-1-0', '0-0-1-1']
    )
  })

  it('should not uncheck parent node', async () => {
    const applyHandler = jest.fn()
    const { container } = render(<DefaultTenantFilter applyHandler={applyHandler} />)

    await clickOnNodeCheckbox(container, '0-0-0')
    await clickOnNodeCheckbox(container, '0-0-0-0')
    await clickOnNodeCheckbox(container, '0-0-0-1')

    expect(applyHandler).toBeCalledWith(['0-0-0']
    )
  })
})
