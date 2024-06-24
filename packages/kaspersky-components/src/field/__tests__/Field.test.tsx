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

  // GPT 4.0
  it('should render control element', () => {
    render(<DefaultField />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  // Codium AI
  it('should render label when label prop is provided', () => {
    const label = 'Test Label'
    render(<DefaultField label={label} />)

    expect(screen.getByText(label)).toBeInTheDocument()
  })

  it('should render without crashing when no props are provided', () => {
    const { container } = render(<Field />)

    expect(container).toBeInTheDocument()
  })

  it('should render correctly when gridLayout prop is provided', () => {
    const gridLayout = { firstCol: '1fr', secondCol: '2fr' }
    const { container } = render(<Field gridLayout={gridLayout} />)

    expect(container.querySelector('.kl6-field-grid-layout')).toBeInTheDocument()
  })

  it('should display help icon when onHelpClick prop is provided', () => {
    const onHelpClick = jest.fn()
    const { container } = render(<Field onHelpClick={onHelpClick} />)

    expect(container.querySelector('.kl6-field-control-additional')).toBeInTheDocument()
  })
})
