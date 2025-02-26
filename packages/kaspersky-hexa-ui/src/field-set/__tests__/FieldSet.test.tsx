import { render } from '@testing-library/react'
import React from 'react'

import { FieldSet } from '../FieldSet'
import { FieldSetItem, FieldSetProps } from '../types'

const constants = {
  klId: 'field-set-kl-id',
  testId: 'field-set-test-id'
}

const DefaultFieldSet = ({
  klId = constants.klId,
  testId = constants.testId,
  ...rest
}: FieldSetProps) => (
  <FieldSet
    klId={klId}
    testId={testId}
    {...rest}
  />
)

describe('FieldSet', () => {
  it('should render', () => {
    const items: FieldSetItem[] = [
      {
        label: 'textbox',
        control: { component: 'textbox' }
      }
    ]
    const { container } = render(<DefaultFieldSet items={items} />)

    expect(container.querySelector(`[data-testid=${constants.testId}]`)).toBeInTheDocument()
  })

  it('should correctly set classes', () => {
    const items: FieldSetItem[] = [
      { className: 'class1' },
      {
        className: 'class21',
        wrapperClassNames: { labelClassName: 'class22', controlClassName: 'class23' }
      },
      {},
      {
        className: 'class31',
        wrapperClassNames: { labelClassName: 'class32', controlClassName: 'class33' }
      }
    ].map((item, index) => ({
      ...item,
      label: `field${index + 1}`,
      control: { component: 'textbox' }
    }))

    const { container } = render(<>
      <DefaultFieldSet items={[items[0], items[1]]}/>
      <DefaultFieldSet
        items={[items[2], items[3]]}
        fieldClassName="common-class1"
        fieldWrapperClassNames={{ labelClassName: 'common-class2', controlClassName: 'common-class3' }}
      />
    </>)

    expect(container.querySelector('.class1.kl6-field')).toBeInTheDocument()

    expect(container.querySelector('.class21.kl6-field')).toBeInTheDocument()
    expect(container.querySelector('.class22.kl6-field-label')).toBeInTheDocument()
    expect(container.querySelector('.class23.kl6-field-control-wrapper')).toBeInTheDocument()

    expect(container.querySelector('.common-class1.kl6-field:not(.class31)')).toBeInTheDocument()

    expect(container.querySelector('.class31.kl6-field.common-class1')).toBeInTheDocument()
    expect(container.querySelector('.class32.kl6-field-label.common-class2')).toBeInTheDocument()
    expect(container.querySelector('.class33.kl6-field-control-wrapper.common-class3')).toBeInTheDocument()
  })

  // Codium AI
  it('should render all items when items prop is provided', () => {
    const items: FieldSetItem[] = [
      { control: { component: 'textbox' }, testId: 'item-1-id' },
      { control: { component: 'checkbox' }, testId: 'item-2-id' }
    ]
    const { container } = render(<FieldSet items={items} />)

    expect(container.querySelector('[data-testid="item-1-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="item-2-id"]')).toBeInTheDocument()
  })

  it('should apply className when className prop is provided', () => {
    const items: FieldSetItem[] = [
      { control: { component: 'textbox' }, testId: 'item-1-id' },
      { control: { component: 'checkbox' }, testId: 'item-2-id' }
    ]
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
