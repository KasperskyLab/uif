import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Checkbox } from '../Checkbox'

const defaultProps = {
  text: 'Test Checkbox',
  componentId: 'test-checkbox',
  name: 'key'
}

const getCheckbox = () => screen.getByRole('checkbox')

describe('Checkbox', () => {
  test('should render', () => {
    render(<Checkbox
      data-component-id={defaultProps.componentId}
      name={defaultProps.name}>{defaultProps.text}</Checkbox>)
    expect(getCheckbox()).toBeInTheDocument()
  })

  test('should render checkbox with correct name', () => {
    render(<Checkbox
      data-component-id={defaultProps.componentId}
      name={defaultProps.name}>{defaultProps.text}</Checkbox>)
    expect(getCheckbox().getAttribute('name')).toBe(defaultProps.name)
  })

  test('should call onChange when clicked', () => {
    const handleChange = jest.fn()
    render(<Checkbox
      data-component-id={defaultProps.componentId}
      onChange={handleChange}
      name={defaultProps.name}>{defaultProps.text}</Checkbox>)
    fireEvent.click(screen.getByLabelText(defaultProps.text))
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('should change state when clicked', () => {
    const handleChange = jest.fn()
    render(<Checkbox
      data-component-id={defaultProps.componentId}
      onChange={handleChange}
      name={defaultProps.name}>{defaultProps.text}</Checkbox>)
    fireEvent.click(screen.getByLabelText(defaultProps.text))
    expect(screen.getByLabelText(defaultProps.text)).toBeChecked()
  })

  test('should initially checked with prop defaultChecked', () => {
    render(<Checkbox
      data-component-id={defaultProps.componentId}
      defaultChecked
      name={defaultProps.name}>{defaultProps.text}</Checkbox>)
    expect(screen.getByLabelText(defaultProps.text)).toBeChecked()
  })

  test('should initially be focused with prop autoFocus', () => {
    const handleFocus = jest.fn()
    render(<Checkbox
      data-component-id={defaultProps.componentId}
      autoFocus
      onFocus={handleFocus as any}
      name={defaultProps.name}>{defaultProps.text}</Checkbox>)
    expect(handleFocus).toHaveBeenCalledTimes(1)
  })

  test('should be disabled with disabled prop', () => {
    render(<Checkbox
      data-component-id={defaultProps.componentId}
      name={defaultProps.name}
      disabled>{defaultProps.text}</Checkbox>)
    expect(getCheckbox()).toBeDisabled()
  })
})

describe('Checkbox.Group', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ]

  const defaultProps = {
    options,
    componentId: 'test-checkbox-group',
    onChange: jest.fn()
  }

  test('should have componentId prop', () => {
    const { getByRole } = render(<Checkbox.Group {...defaultProps} />)
    expect(getByRole('checkbox-group')).toHaveAttribute('data-component-id', defaultProps.componentId)
  })

  test('should render options correctly', () => {
    const { getByLabelText } = render(<Checkbox.Group {...defaultProps} />)
    options.forEach((option) => {
      const checkbox = getByLabelText(option.label)
      expect(checkbox).toBeInTheDocument()
    })
  })

  test('should handle onChange event correctly', () => {
    const { getByLabelText } = render(<Checkbox.Group {...defaultProps} />)
    const option1 = getByLabelText('Option 1')
    const option2 = getByLabelText('Option 2')

    fireEvent.click(option1)
    expect(defaultProps.onChange).toHaveBeenCalledWith(['option1'])

    fireEvent.click(option2)
    expect(defaultProps.onChange).toHaveBeenCalledWith(['option1', 'option2'])

    fireEvent.click(option1)
    expect(defaultProps.onChange).toHaveBeenCalledWith(['option2'])
  })
})
