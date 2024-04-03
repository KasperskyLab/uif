import React from 'react'
import { render } from '@testing-library/react'
import { ExpandableText } from '../ExpandableText'

describe('ExpandableText', () => {
  it('should receive qa props', () => {
    const { container } = render(<ExpandableText klId="kl-id" testId="test-id">text</ExpandableText>)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })
})
