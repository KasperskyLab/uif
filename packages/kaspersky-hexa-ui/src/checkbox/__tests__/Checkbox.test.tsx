import { Textbox } from '@src/input'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'

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
        <div kl-id="test-react-element" />
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

  test('should render description', () => {
    const description = 'some description'
    render(<Checkbox description={description}>{defaultProps.text}</Checkbox>)
    expect(screen.getByText(description)).toBeInTheDocument()
  })

  test('should render dependentElement', () => {
    const klId = 'dependend_element'
    render(
      <Checkbox dependentElement={<Textbox klId={klId} />}>{defaultProps.text}</Checkbox>
    )
    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  // Claude 3 Sonnet
  test('should render with custom className', () => {
    const { container } = render(<Checkbox {...defaultProps} className="custom-class" />)
    expect(container.querySelector('.custom-class')).toBeInTheDocument()
  })

  test('should render as readonly when readonly prop is true', () => {
    const { container } = render(<Checkbox {...defaultProps} readonly />)
    expect(container.querySelector('.kl6-checkbox-readonly')).toBeInTheDocument()
  })

  test('should render as invalid when invalid prop is true', () => {
    const { container } = render(<Checkbox {...defaultProps} invalid />)
    expect(container.querySelector('.kl6-checkbox-invalid')).toBeInTheDocument()
  })

  test('should render with tooltip when tooltip prop is provided', async () => {
    const tooltip = 'This is a tooltip'
    const { container } = render(<Checkbox {...defaultProps} tooltip={tooltip} />)
    const infoIcon = container.querySelector('.form-label-info-icon')

    expect(infoIcon).toBeInTheDocument()

    if (infoIcon) {
      act(() => {
        fireEvent.click(infoIcon)
      })
      await waitFor(() => expect(screen.getByText(tooltip)).toBeInTheDocument())
    }
  })

  test('should render checkbox with label and correct htmlFor attribute', () => {
    const result = render(<Checkbox {...defaultProps} id="test-checkbox" />)
    expect(result.getByRole('checkbox')).toHaveAttribute('id', 'test-checkbox')
    expect(result.getByLabelText(defaultProps.text)).toHaveAttribute('id', 'test-checkbox')
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
