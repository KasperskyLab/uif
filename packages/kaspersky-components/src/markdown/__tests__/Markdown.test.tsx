import React from 'react'
import { render } from '@testing-library/react'
import { Markdown } from '../Markdown'

describe('Markdown', () => {
  it('should render', () => {
    const { container } = render(<Markdown klId="kl-id" testId="test-id" value="text" />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })
})
