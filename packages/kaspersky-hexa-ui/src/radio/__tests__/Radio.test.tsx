import { Textbox } from '@src/input'
import { fireEvent, render, screen } from '@testing-library/react'
import React, { FC, useState } from 'react'

import { Radio } from '../Radio'
import { RadioProps } from '../types'

type DefaultRadioProps = RadioProps & { initialValue: string }

const defaultProps = {
  name: 'radio group',
  options: [
    { label: 'First', value: '1' },
    { label: 'Second', value: '2' },
    { label: 'Third', value: '3', disabled: true }
  ],
  testId: 'radio-test',
  initialValue: '1'
}

const getRadioElements = () => screen.getAllByRole('radio')
const [, { label: secondElementLabel }, { label: thirdElementLabel }] = defaultProps.options
const ELEMENTS_AMOUNT = defaultProps.options.length

const getByComponentId = (container: HTMLElement, testId: string) => (
  container.querySelector(`[data-testid="${testId}"]`)
)

const DefaultRadio: FC<DefaultRadioProps> = ({ initialValue, ...rest }) => {
  const [currentValue, setCurrentValue] = useState<string>(initialValue)

  const onChange: RadioProps['onChange'] = rest.onChange || ((e) => {
    setCurrentValue(e.target.value)
  })

  return <Radio {...rest} value={currentValue} onChange={onChange} />
}

const AsyncSetValue: FC<RadioProps> = (props) => {
  const [currentValue, setCurrentValue] = useState<string>()

  setTimeout(() => { setCurrentValue('2') }, 1)

  const onChange: RadioProps['onChange'] = (e) => {
    setCurrentValue(e.target.value)
  }

  return <Radio {...props} value={currentValue} onChange={onChange} />
}

describe('Radio', () => {
  test('should render radio list', () => {
    const { container } = render(<DefaultRadio {...defaultProps} />)

    expect(getByComponentId(container, 'radio-test')).toBeInTheDocument()
    expect(getByComponentId(container, 'radio-test-1')).toBeInTheDocument()
    expect(getByComponentId(container, 'radio-test-2')).toBeInTheDocument()
    expect(getByComponentId(container, 'radio-test-3')).toBeInTheDocument()
  })

  test('should render radio correct amount of elements with correct name', () => {
    render(<DefaultRadio {...defaultProps} />)
    expect(getRadioElements().filter(el => el.getAttribute('name')).length).toBe(ELEMENTS_AMOUNT)
  })

  test('should render radio correct amount of elements with correct text', () => {
    render(<DefaultRadio {...defaultProps} />)
    expect(defaultProps.options.filter(el => {
      return screen.getByText(el.label)
    }).length).toBe(ELEMENTS_AMOUNT)
  })

  test('should change value', () => {
    render(<DefaultRadio {...defaultProps} />)
    fireEvent.click(screen.getByLabelText(secondElementLabel))
    expect(screen.getByLabelText(secondElementLabel)).toBeChecked()
  })

  test('should call onChange when the state changes', () => {
    const handleChange = jest.fn()
    render(<DefaultRadio {...defaultProps} onChange={handleChange} />)
    fireEvent.click(screen.getByLabelText(secondElementLabel))
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('list should be disabled and do not trigger onChange event', () => {
    const handleChange = jest.fn()
    render(<DefaultRadio {...defaultProps} onChange={handleChange} disabled={true} />)
    fireEvent.click(screen.getByLabelText(secondElementLabel))
    expect(handleChange).toHaveBeenCalledTimes(0)
  })

  test('third element should be disabled and do not trigger onChange event', () => {
    const handleChange = jest.fn()
    render(<DefaultRadio {...defaultProps} onChange={handleChange} />)
    fireEvent.click(screen.getByLabelText(thirdElementLabel))
    expect(handleChange).toHaveBeenCalledTimes(0)
  })

  test('should correctly set value asynchronously', () => {
    const { container } = render(<AsyncSetValue {...defaultProps} />)
    expect(container.querySelector('.ant-radio-input:checked')).toBeFalsy()
    setTimeout(() => {
      expect(container.querySelector('.ant-radio-input:checked')).toBeInTheDocument()
    }, 1)
  })

  test('should render description', () => {
    const description = 'some description'
    render(<DefaultRadio options={[{ label: '1', value: '1', description }]} initialValue="1" />)
    expect(screen.getByText(description)).toBeInTheDocument()
  })

  test('should render dependentElement', () => {
    const klId = 'dependend_element'
    render(
      <DefaultRadio
        options={[{ label: '1', value: '1', dependentElement: <Textbox klId={klId} /> }]}
        initialValue="1"
      />
    )
    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  // Codium AI
  test('should apply vertical class when vertical prop is true', () => {
    render(<Radio {...defaultProps} vertical />)
    expect(screen.getByRole('radioList')).toHaveClass('ant-radio-vertical')
  })

  test('should apply invalid class to the options, not to the group', () => {
    const { container } = render(<Radio {...defaultProps} invalid />)

    expect(screen.getByRole('radioList')).not.toHaveClass('kl-radio-invalid')
    container.querySelectorAll('.ant-radio-wrapper').forEach(wrapper => {
      expect(wrapper).toHaveClass('kl-radio-invalid')
    })
  })

  test('should disable radio buttons when disabled prop is true', () => {
    render(<Radio {...defaultProps} disabled />)
    screen.getAllByRole('radio').forEach(radio => {
      expect(radio).toBeDisabled()
    })
  })

  test('should render options with correct labels and values', () => {
    render(<Radio {...defaultProps} />)
    defaultProps.options.forEach(option => {
      expect(screen.getByLabelText(option.label)).toBeInTheDocument()
      expect(screen.getByLabelText(option.label)).toHaveAttribute('value', option.value)
    })
  })

  test('should apply invalid class to the option marked as invalid', () => {
    const { container } = render(
      <Radio
        {...defaultProps}
        options={[
          { label: 'Valid', value: '1' },
          { label: 'Invalid', value: '2', invalid: true }
        ]}
      />
    )
    const [first, second] = container.querySelectorAll('.ant-radio-wrapper')

    expect(first).not.toHaveClass('kl-radio-invalid')
    expect(second).toHaveClass('kl-radio-invalid')
  })

  test('should apply group state to every option', () => {
    const { container } = render(
      <Radio
        {...defaultProps}
        invalid
        readonly
        disabled
        options={[
          { label: 'First', value: '1' },
          { label: 'Second', value: '2' }
        ]}
      />
    )

    container.querySelectorAll('.ant-radio-wrapper').forEach(wrapper => {
      expect(wrapper).toHaveClass('kl-radio-invalid')
      expect(wrapper).toHaveClass('kl-radio-readonly')
      expect(wrapper).toHaveClass('ant-radio-wrapper-disabled')
    })
  })

  test('should let an option override the invalid state of the group', () => {
    const { container } = render(
      <Radio
        {...defaultProps}
        invalid
        options={[
          { label: 'First', value: '1' },
          { label: 'Second', value: '2', invalid: false }
        ]}
      />
    )
    const [first, second] = container.querySelectorAll('.ant-radio-wrapper')

    expect(first).toHaveClass('kl-radio-invalid')
    expect(second).not.toHaveClass('kl-radio-invalid')
  })

  test('should let an option override the disabled state of the group', () => {
    const handleChange = jest.fn()
    render(
      <DefaultRadio
        {...defaultProps}
        onChange={handleChange}
        disabled
        options={[
          { label: 'First', value: '1' },
          { label: 'Second', value: '2', disabled: false }
        ]}
      />
    )
    fireEvent.click(screen.getByLabelText(secondElementLabel))

    expect(screen.getByLabelText(secondElementLabel)).not.toBeDisabled()
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('readonly should block interaction on both the group and a single option', () => {
    const handleChange = jest.fn()
    const { rerender } = render(<DefaultRadio {...defaultProps} onChange={handleChange} readonly />)
    fireEvent.click(screen.getByLabelText(secondElementLabel))

    expect(screen.getByLabelText(secondElementLabel)).toBeDisabled()

    rerender(
      <DefaultRadio
        {...defaultProps}
        onChange={handleChange}
        options={[
          { label: 'First', value: '1' },
          { label: 'Second', value: '2', readonly: true }
        ]}
      />
    )
    fireEvent.click(screen.getByLabelText(secondElementLabel))

    expect(screen.getByLabelText(secondElementLabel)).toBeDisabled()
    expect(handleChange).toHaveBeenCalledTimes(0)
  })

  test('should let an option override the readonly state of the group', () => {
    const { container } = render(
      <Radio
        {...defaultProps}
        readonly
        options={[
          { label: 'First', value: '1' },
          { label: 'Second', value: '2', readonly: false }
        ]}
      />
    )
    const [first, second] = container.querySelectorAll('.ant-radio-wrapper')

    expect(first).toHaveClass('kl-radio-readonly')
    expect(second).not.toHaveClass('kl-radio-readonly')
    expect(second.querySelector('input')).not.toBeDisabled()
  })

  test('should paint the option as readonly when it is both disabled and readonly', () => {
    const { container } = render(
      <Radio
        {...defaultProps}
        options={[{ label: 'First', value: '1', disabled: true, readonly: true }]}
      />
    )
    const [wrapper] = container.querySelectorAll('.ant-radio-wrapper')

    // оба класса на месте, в css-модуле readonly объявлен после disabled и выигрывает
    expect(wrapper).toHaveClass('ant-radio-wrapper-disabled')
    expect(wrapper).toHaveClass('kl-radio-readonly')
  })

  test('should handle empty options array gracefully', () => {
    render(<Radio {...defaultProps} options={[]} />)
    expect(screen.queryAllByRole('radio').length).toBe(0)
  })

  test('should handle options with duplicate values', () => {
    console.error = jest.fn()
    render(
      <Radio
        {...defaultProps}
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option Duplicate', value: '1' }
        ]}
      />
    )
    expect(screen.queryAllByRole('radio').length).toBe(2)
    expect(console.error).toBeCalled()
  })
})
