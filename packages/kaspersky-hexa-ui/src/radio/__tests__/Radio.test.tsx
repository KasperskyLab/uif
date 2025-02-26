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
    render(<DefaultRadio options={[{ label: '1', value: '1', description }]} initialValue="1"/>)
    expect(screen.getByText(description)).toBeInTheDocument()
  })

  test('should render dependentElement', () => {
    const klId = 'dependend_element'
    render(
      <DefaultRadio
        options={[{ label: '1', value: '1', dependentElement: <Textbox klId={klId}/> }]}
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

  test('should apply invalid class when invalid prop is true', () => {
    render(<Radio {...defaultProps} invalid />)
    expect(screen.getByRole('radioList')).toHaveClass('kl-radio-invalid')
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

  test('should handle empty options array gracefully', () => {
    render(<Radio {...defaultProps} options={[]}/>)
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
