import React from 'react'
import { render, screen } from '@testing-library/react'
import { Textbox, Field, Checkbox } from '@src/index'
import { FieldProps } from '@src/field/types'

const DefaultField = (props: FieldProps) => (
  <Field
    control={<Textbox />}
    klId="kl-id"
    testId="test-id"
    {...props}
  />
)

describe('Field', () => {
  it('should render', () => {
    const { container } = render(<DefaultField />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  it('should render description and message', () => {
    const descriptionText = 'description'
    const messageText = 'messageText'
    render(
      <DefaultField
        description={descriptionText}
        message={messageText}
      />
    )

    expect(screen.getByText(descriptionText)).toBeInTheDocument()
    expect(screen.getByText(messageText)).toBeInTheDocument()
  })

  it('should render additional component', () => {
    const additionalComponentText = 'additional component'
    render(
      <DefaultField
        additionalComponent={<Checkbox>{additionalComponentText}</Checkbox>}
      />
    )

    expect(screen.getByText(additionalComponentText)).toBeInTheDocument()
  })
})
