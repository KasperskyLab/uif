import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Checkbox } from '../Checkbox'

const defaultProps = {
  text: 'Test Checkbox',
  children: 'Test Checkbox',
  testId: 'test-checkbox',
  name: 'key'
}

const getCheckbox = () => screen.getByRole('checkbox')

describe('Checkbox', () => {
  test('should render', () => {
    const { container } = render(<Checkbox{...defaultProps} testId="test-id"/>)

    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should render checkbox with correct name', () => {
    render(<Checkbox
      testId={defaultProps.testId}
      name={defaultProps.name}>{defaultProps.text}</Checkbox>)
    expect(getCheckbox().getAttribute('name')).toBe(defaultProps.name)
  })

  test('should render checkbox with children of ReactElement type', () => {
    render(
      <Checkbox
        testId={defaultProps.testId}
        name={defaultProps.name}>
          <div kl-id='test-react-element' />
      </Checkbox>
    )
    expect(screen.getByTestId('test-react-element')).toBeInTheDocument()
  })

  test('should render checkbox with children of ReactElement type with text', () => {
    render(
      <Checkbox
        testId={defaultProps.testId}
        name={defaultProps.name}>
          <div>{defaultProps.text}</div>
      </Checkbox>
    )
    expect(screen.getByText(defaultProps.text)).toBeInTheDocument()
  })

  test('should call onChange when clicked', () => {
    const handleChange = jest.fn()
    render(<Checkbox
      testId={defaultProps.testId}
      onChange={handleChange}
      name={defaultProps.name}>{defaultProps.text}</Checkbox>)
    fireEvent.click(screen.getByLabelText(defaultProps.text))
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('should change state when clicked', () => {
    const handleChange = jest.fn()
    render(<Checkbox
      testId={defaultProps.testId}
      onChange={handleChange}
      name={defaultProps.name}>{defaultProps.text}</Checkbox>)
    fireEvent.click(screen.getByLabelText(defaultProps.text))
    expect(screen.getByLabelText(defaultProps.text)).toBeChecked()
  })

  test('should initially checked with prop defaultChecked', () => {
    render(<Checkbox
      testId={defaultProps.testId}
      defaultChecked
      name={defaultProps.name}>{defaultProps.text}</Checkbox>)
    expect(screen.getByLabelText(defaultProps.text)).toBeChecked()
  })

  test('should initially be focused with prop autoFocus', () => {
    const handleFocus = jest.fn()
    render(<Checkbox
      testId={defaultProps.testId}
      autoFocus
      onFocus={handleFocus as any}
      name={defaultProps.name}>{defaultProps.text}</Checkbox>)
    expect(handleFocus).toHaveBeenCalledTimes(1)
  })

  test('should be disabled with disabled prop', () => {
    render(<Checkbox
      testId={defaultProps.testId}
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
    onChange: jest.fn(),
    testId: 'test-id'
  }

  test('should render', () => {
    const { container } = render(<Checkbox.Group {...defaultProps} />)

    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id-option1"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id-option2"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id-option3"]')).toBeInTheDocument()
  })

  test('should render options correctly', () => {
    render(<Checkbox.Group {...defaultProps} />)
    options.forEach((option) => {
      const checkbox = screen.getByLabelText(option.label)
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

  const optionsPartiallyDisabled = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2', disabled: true },
    { label: 'Option 3', value: 'option3', disabled: true }
  ]

  const defaultPropsPartiallyDisabled = {
    options: optionsPartiallyDisabled,
    componentId: 'test-checkbox-group-partially-disabled',
    defaultValue: ['option2'],
    onChange: jest.fn()
  }

  test('should render options correctly partially disabled', () => {
    render(<Checkbox.Group {...defaultPropsPartiallyDisabled} />)
    optionsPartiallyDisabled.forEach((option) => {
      const checkbox = screen.getByLabelText(option.label)
      expect(checkbox).toBeInTheDocument()
      if (option.disabled) {
        expect(checkbox).toBeDisabled()
      } else {
        expect(checkbox).not.toBeDisabled()
      }
    })
  })

  test('should handle onChange event correctly for partially disabled group', () => {
    const { getByLabelText } = render(<Checkbox.Group {...defaultPropsPartiallyDisabled} />)
    const option1 = getByLabelText('Option 1')
    const option2 = getByLabelText('Option 2')
    const option3 = getByLabelText('Option 3')

    fireEvent.click(option1)
    expect(defaultPropsPartiallyDisabled.onChange).toHaveBeenCalledWith(['option2', 'option1'])
    expect(defaultPropsPartiallyDisabled.onChange).toHaveBeenCalledTimes(1)

    fireEvent.click(option2)
    expect(defaultPropsPartiallyDisabled.onChange).toHaveBeenCalledTimes(1)

    fireEvent.click(option3)
    expect(defaultPropsPartiallyDisabled.onChange).toHaveBeenCalledTimes(1)

    fireEvent.click(option1)
    expect(defaultPropsPartiallyDisabled.onChange).toHaveBeenCalledWith(['option2'])
    expect(defaultPropsPartiallyDisabled.onChange).toHaveBeenCalledTimes(2)
  })
})
