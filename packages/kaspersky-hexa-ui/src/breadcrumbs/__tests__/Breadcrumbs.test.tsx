import { render, screen } from '@testing-library/react'
import React from 'react'

import { Breadcrumbs, ITEMS_AFTER_COLLAPSE, ITEMS_BEFORE_COLLAPSE, MAX_ITEMS, SEPARATOR } from '../Breadcrumbs'
import { generateRoutes } from '../helpers'
import { BreadcrumbsProps } from '../types'

const defaultProps = {
  routes: generateRoutes(MAX_ITEMS),
  klId: 'kl-id',
  testId: 'test-id'
}

const DefaultBreadcrumbs = (props: BreadcrumbsProps) => <Breadcrumbs {...defaultProps} {...props} />

const getBreadcrumbs = (klId = defaultProps.klId) => screen.getByTestId(klId)

describe('Breadcrumbs', () => {
  test('should render', () => {
    render(<DefaultBreadcrumbs />)
    expect(getBreadcrumbs()).toBeInTheDocument()
  })

  test('should receive qa props', () => {
    const { container } = render(<DefaultBreadcrumbs />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should display breadcrumbs names', () => {
    render(<DefaultBreadcrumbs />)
    for (let i = 1; i <= 5; i++) {
      expect(screen.getByText('Breadcrumb ' + i)).toBeInTheDocument()
    }
  })

  test('should display separator', () => {
    render(<DefaultBreadcrumbs />)
    expect(screen.getAllByText(SEPARATOR)).toHaveLength(MAX_ITEMS - 1)
  })

  test('should display breadcrumbs names when routes length is equal or less than the maximum number of items', () => {
    render(<DefaultBreadcrumbs />)
    for (let i = 1; i <= MAX_ITEMS; i++) {
      expect(screen.getByText('Breadcrumb ' + i)).toBeInTheDocument()
    }
  })

  test('should display breadcrumbs names when routes length is more than the maximum number of items', () => {
    render(<DefaultBreadcrumbs routes={generateRoutes(7)} />)
    for (let i = 1; i <= 7; i++) {
      if (i <= ITEMS_BEFORE_COLLAPSE || i > 7 - ITEMS_AFTER_COLLAPSE) {
        expect(screen.getByText('Breadcrumb ' + i)).toBeInTheDocument()
      } else {
        expect(screen.queryByText('Breadcrumb ' + i)).not.toBeInTheDocument()
      }
    }
  })
})
