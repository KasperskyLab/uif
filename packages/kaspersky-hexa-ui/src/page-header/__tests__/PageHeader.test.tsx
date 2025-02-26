import { generateRoutes } from '@src/breadcrumbs/helpers'
import { render } from '@testing-library/react'
import React from 'react'

import { Placeholder } from '@kaspersky/icons/24'

import { PageHeader } from '../PageHeader'
import { PageHeaderProps } from '../types'

const defaultProps = {
  title: 'Test title',
  klId: 'page-header-kl-id',
  testId: 'page-header-test-id'
}

const DefaultPageHeader = (props: PageHeaderProps) => <PageHeader {...defaultProps} {...props} />

const getByTestId = (container: HTMLElement, testId: string) => container.querySelector(`[data-testid="${testId}"]`)

describe('PageHeader', () => {
  test('should render', () => {
    const { container } = render(<DefaultPageHeader />)
    expect(getByTestId(container, defaultProps.testId)).toBeInTheDocument()
  })

  test('should render iconBefore', () => {
    const testId = 'page-header-icon-before'
    const { container } = render(<DefaultPageHeader iconBefore={<Placeholder testId={testId} />} />)
    expect(getByTestId(container, testId)).toBeInTheDocument()
  })

  test('should render tagsAfter', () => {
    const testId = 'page-header-tag-after'
    const { container } = render(<DefaultPageHeader tagsAfter={[{ label: 'Tag', testId }]} />)
    expect(getByTestId(container, testId)).toBeInTheDocument()
  })

  test('should render elementAfter', () => {
    const testId = 'page-header-elementAfter'
    const { container } = render(<DefaultPageHeader elementAfter={<Placeholder testId={testId} />} />)
    expect(getByTestId(container, testId)).toBeInTheDocument()
  })

  test('should render breadcrumbs', () => {
    const testId = 'page-header-breadcrumbs'
    const { container } = render(<DefaultPageHeader breadcrumbs={{ routes: generateRoutes(), testId }} />)
    expect(getByTestId(container, testId)).toBeInTheDocument()
  })
})
