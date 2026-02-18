import { ConfigProvider } from '@design-system/context'
import { render } from '@testing-library/react'
import React from 'react'

import { QuickFilter } from '../QuickFilter'
import { QuickFilterItem, QuickFilterProps } from '../types'

const defaultProps = {
  klId: 'quick-filter-kl-id',
  testId: 'quick-filter-test-id'
}

const DefaultQuickFilter = (props: QuickFilterProps) => (
  <ConfigProvider>
    <QuickFilter {...defaultProps} {...props} />
  </ConfigProvider>
)

describe('QuickFilter', () => {
  it('should render', () => {
    const filters: QuickFilterItem[] = [{ label: 'Select', component: 'select' }]
    const { container } = render(<DefaultQuickFilter filters={filters} />)

    expect(container.querySelector(`[data-testid=${defaultProps.testId}]`)).toBeInTheDocument()
  })

  it('should render all items when items prop is provided', () => {
    const filters: QuickFilterItem[] = [
      { label: 'Select', component: 'select', testId: 'filter-1-id' },
      {
        label: 'Segmented Button',
        component: 'segmented-button',
        value: ['3', '4'],
        onChange: (e) => e,
        items: [
          { text: 'None', value: '1' },
          { text: 'Very low', value: '2' },
          { text: 'Low', value: '3' },
          { text: 'Average', value: '4' },
          { text: 'High', value: '5' },
          { text: 'Very high', value: '6' }
        ],
        testId: 'filter-2-id'
      },
      { component: 'toggle', testId: 'filter-3-id' }
    ]
    const { container } = render(<DefaultQuickFilter filters={filters} />)

    expect(container.querySelector('[data-testid="filter-1-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="filter-2-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="filter-3-id"]')).toBeInTheDocument()
  })

  it('should handle empty filters array gracefully', () => {
    const { container } = render(<DefaultQuickFilter filters={[]} />)
    expect(container.firstChild).toBeEmptyDOMElement()
  })
})
