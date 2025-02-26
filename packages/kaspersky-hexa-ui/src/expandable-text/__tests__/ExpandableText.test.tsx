import { render } from '@testing-library/react'
import React from 'react'

import { ExpandableText } from '../ExpandableText'

describe('ExpandableText', () => {
  it('should receive qa props', () => {
    const { container } = render(<ExpandableText klId="kl-id" testId="test-id">text</ExpandableText>)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  // Codium AI
  it('should handle empty children prop gracefully', () => {
    const { container } = render(<ExpandableText />)
    expect(container.querySelector('span')).toBeInTheDocument()
    expect(container.querySelector('span')?.textContent).toBe('')
  })

  it('should handle non-string children prop gracefully', () => {
    const { container } = render(<ExpandableText><div className="sample-text">Sample Text</div></ExpandableText>)
    expect(container.querySelector('span')).toBeInTheDocument()
    expect(container.querySelector('.sample-text')).toBeInTheDocument()
  })
})
