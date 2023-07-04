import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Radio } from '../Radio'

const defaultProps = {
  componentId: 'test-radio',
  name: 'key',
  options: [
    { label: 'First', value: '1' },
    { label: 'Second', value: '2' },
    { label: 'Third', value: '3', disabled: true }
  ]
}

const getRadio = () => screen.getByRole('radioList')
const getRadioElements = () => screen.getAllByRole('radio')
const [, { label: secondElementLabel }, { label: thirdElementLabel }] = defaultProps.options
const ELEMENTS_AMOUNT = defaultProps.options.length
const BUTTON_SELECTOR = '.ant-radio-button-wrapper .ant-radio-button'

describe('Radio', () => {
  test('should render radio list', () => {
    render(<Radio
      options={defaultProps.options}
      data-component-id={defaultProps.componentId}
      name={defaultProps.name}/>)
    expect(getRadio()).toBeInTheDocument()
  })

  test('should render radio correct amount of elements with correct name', () => {
    render(<Radio
      options={defaultProps.options}
      data-component-id={defaultProps.componentId}
      name={defaultProps.name}/>)
    expect(getRadioElements().filter(el => el.getAttribute('name')).length).toBe(ELEMENTS_AMOUNT)
  })

  test('should render radio correct amount of elements with correct text', () => {
    render(<Radio
      options={defaultProps.options}
      data-component-id={defaultProps.componentId}
      name={defaultProps.name}/>)
    expect(defaultProps.options.filter(el => {
      return screen.getByText(el.label)
    }).length).toBe(ELEMENTS_AMOUNT)
  })

  test('should change value', () => {
    render(<Radio
      options={defaultProps.options}
      data-component-id={defaultProps.componentId}
      name={defaultProps.name}/>)
    fireEvent.click(screen.getByLabelText(secondElementLabel))
    expect(screen.getByLabelText(secondElementLabel)).toBeChecked()
  })

  test('list should be disabled and do not trigger onChange event', () => {
    const handleChange = jest.fn()
    render(<Radio
      disabled={true}
      options={defaultProps.options}
      data-component-id={defaultProps.componentId}
      name={defaultProps.name}/>)
    fireEvent.click(screen.getByLabelText(secondElementLabel))
    expect(handleChange).toHaveBeenCalledTimes(0)
  })

  test('third element should be disabled and do not trigger onChange event', () => {
    const handleChange = jest.fn()
    render(<Radio
      disabled={true}
      options={defaultProps.options}
      data-component-id={defaultProps.componentId}
      name={defaultProps.name}/>)
    fireEvent.click(screen.getByLabelText(thirdElementLabel))
    expect(handleChange).toHaveBeenCalledTimes(0)
  })

  test('should call onChange when the state changes', () => {
    const handleChange = jest.fn()
    render(<Radio
      options={defaultProps.options}
      data-component-id={defaultProps.componentId}
      name={defaultProps.name}
      onChange={handleChange} />)
    fireEvent.click(screen.getByLabelText(secondElementLabel))
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('should render optionType Button layout', () => {
    render(<Radio
      options={defaultProps.options}
      data-component-id={defaultProps.componentId}
      name={defaultProps.name}
      optionType='button'/>)
    expect(getRadio().querySelectorAll(BUTTON_SELECTOR).length).toBe(ELEMENTS_AMOUNT)
  })
})
