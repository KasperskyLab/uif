import { Textbox } from '@src/input'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { Toggle } from '../Toggle'

const defaultProps = {
  text: 'Test Toggle',
  klId: 'test-toggle'
}

const getToggle = () => screen.getByRole('toggle')
const getToggleSwitch = () => screen.getByRole('switch')

describe('Toggle', () => {
  test('should render', () => {
    render(<Toggle>{defaultProps.text}</Toggle>)
    expect(getToggle()).toBeInTheDocument()
  })

  test('should receive qa props', () => {
    const { container } = render(<Toggle klId={defaultProps.klId} testId="test-id">{defaultProps.text}</Toggle>)

    expect(screen.getByTestId(defaultProps.klId)).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should call onChange when clicked', () => {
    const handleChange = jest.fn()
    render(<Toggle klId={defaultProps.klId} onChange={handleChange}>{defaultProps.text}</Toggle>)
    userEvent.click(screen.getByTestId(defaultProps.klId))
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('should be disabled with disabled prop', () => {
    render(<Toggle disabled>{defaultProps.text}</Toggle>)
    expect(getToggleSwitch()).toBeDisabled()
  })

  test('should render description', () => {
    const description = 'some description'
    render(<Toggle description={description}>{defaultProps.text}</Toggle>)
    expect(screen.getByText(description)).toBeInTheDocument()
  })

  test('should render dependentElement', () => {
    const klId = 'dependend_element'
    render(
      <Toggle dependentElement={<Textbox klId={klId} />}>{defaultProps.text}</Toggle>
    )
    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })
})
