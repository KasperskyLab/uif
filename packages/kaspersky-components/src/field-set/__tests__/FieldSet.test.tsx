import React from 'react'
import { render } from '@testing-library/react'
import { FieldSet } from '../FieldSet'
import { FieldSetItem, FieldSetProps } from '../types'

const DefaultFieldSet = (props: FieldSetProps) => (
  <FieldSet
    klId="kl-id"
    testId="test-id"
    {...props}
  />
)

// Codium AI
describe('FieldSet', () => {
  const items: FieldSetItem[] = [
    { control: { component: 'textbox' }, testId: 'item-1-id' },
    { control: { component: 'checkbox' }, testId: 'item-2-id' }
  ]

  it('should render', () => {
    const { container } = render(<DefaultFieldSet items={items} />)

    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  it('should render all items when items prop is provided', () => {
    const { container } = render(<FieldSet items={items} />)

    expect(container.querySelector('[data-testid="item-1-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="item-2-id"]')).toBeInTheDocument()
  })

  it('should apply className when className prop is provided', () => {
    const className = 'custom-class'
    const { container } = render(<FieldSet className={className} items={items} />)

    expect(container.firstChild).toHaveClass(className)
  })

  it('should handle empty items array gracefully', () => {
    const { container } = render(<FieldSet items={[]} />)
    expect(container.firstChild).toBeEmptyDOMElement()
  })

  it('should handle items with non-standard control components', () => {
    const NonStandardComponent = (props: any) => <div {...props}>NonStandard</div>
    const items = [{ control: <NonStandardComponent data-testid="non-standard-item-id" /> }]
    const { container } = render(<FieldSet items={items} />)

    expect(container.querySelector('[data-testid="non-standard-item-id"]')).toBeInTheDocument()
  })
})
