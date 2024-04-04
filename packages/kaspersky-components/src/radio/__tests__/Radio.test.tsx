import React, { FC, useState } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
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

const getRadio = () => screen.getByRole('radioList')
const getRadioElements = () => screen.getAllByRole('radio')
const [, { label: secondElementLabel }, { label: thirdElementLabel }] = defaultProps.options
const ELEMENTS_AMOUNT = defaultProps.options.length
const BUTTON_SELECTOR = '.ant-radio-button-wrapper .ant-radio-button'

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

  test('should render optionType Button layout', () => {
    render(<DefaultRadio {...defaultProps} optionType='button' />)
    expect(getRadio().querySelectorAll(BUTTON_SELECTOR).length).toBe(ELEMENTS_AMOUNT)
  })
})
