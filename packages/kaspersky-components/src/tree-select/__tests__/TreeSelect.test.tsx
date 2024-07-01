import React from 'react'
import { render } from '@testing-library/react'
import { TreeSelect } from '../TreeSelect'

const defaultProps = {
  klId: 'kl-tree-select-id',
  testId: 'test-tree-select-id'
}

describe('TreeSelect', () => {
  it('should render', () => {
    const { container } = render(<TreeSelect {...defaultProps} />)
    expect(container.querySelector(`[data-testid="${defaultProps.testId}"]`)).toBeInTheDocument()
  })

  // Codium AI
  it('should render SearchIcon when showSearch prop is true', () => {
    const { container } = render(<TreeSelect showSearch />)
    expect(container.querySelector('[data-testid="select-search-icon"]')).toBeInTheDocument()
  })

  it('should render ChevronIcon when showSearch prop is false', () => {
    const { container } = render(<TreeSelect showSearch={false} />)
    expect(container.querySelector('[data-testid="select-chevron-icon"]')).toBeInTheDocument()
  })
})
