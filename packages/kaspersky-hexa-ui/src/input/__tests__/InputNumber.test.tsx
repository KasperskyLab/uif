import { validationStatuses } from '@helpers/typesHelpers'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import '@testing-library/jest-dom'
import 'jest-styled-components'
import { Textbox } from '../Textbox'

describe('Input - Textbox - Number ', () => {
  const klId = 'input-id'
  test('should recieve kl-id prop', () => {
    const { getByTestId } = render(<Textbox.Number klId={klId} />)
    expect(getByTestId(klId)).toBeInTheDocument()
  })

  test('should not render text value', () => {
    const { getByTestId } = render(<Textbox.Number allowEmpty klId={klId} />)
    const textboxNumber = getByTestId(klId)

    userEvent.clear(textboxNumber)
    userEvent.type(textboxNumber, 'aaa')
    userEvent.click(document.body)
    expect(textboxNumber).toHaveValue('')
  })

  test('should render only numeric value', () => {
    const { getByTestId } = render(<Textbox.Number klId={klId} />)
    const textboxNumber = getByTestId(klId)

    userEvent.clear(textboxNumber)
    userEvent.type(textboxNumber, '444')
    userEvent.click(document.body)
    expect(textboxNumber).toHaveValue('444')
  })

  test('should prevent non-integer input when integerOnly is true', () => {
    const { getByTestId } = render(<Textbox.Number integerOnly klId={klId} />)
    const textboxNumber = getByTestId(klId)

    userEvent.clear(textboxNumber)
    userEvent.type(textboxNumber, '1.')
    expect(textboxNumber).toHaveValue('1')
  })

  test('should prevent negative input when min is set to 0', () => {
    const { getByTestId } = render(<Textbox.Number min={0} klId={klId} />)
    const textboxNumber = getByTestId(klId)

    userEvent.clear(textboxNumber)
    userEvent.type(textboxNumber, '-1')
    expect(textboxNumber).toHaveValue('1')
  })

  test('should allow negative numbers when min is negative', () => {
    const { getByTestId } = render(<Textbox.Number klId={klId} min={-10} />)
    const textboxNumber = getByTestId(klId)

    userEvent.type(textboxNumber, '-5')
    userEvent.click(document.body)
    expect(textboxNumber).toHaveValue('-5')
  })

  test('should normalize empty value with allowEmpty false and min', () => {
    const { getByTestId } = render(<Textbox.Number klId={klId} min={10} allowEmpty={false} />)
    const textboxNumber = getByTestId(klId)

    userEvent.clear(textboxNumber)
    userEvent.click(document.body)
    expect(textboxNumber).toHaveValue('10')
  })

  test('should clamp to max when value exceeds max', () => {
    const { getByTestId } = render(<Textbox.Number klId={klId} max={100} />)
    const textboxNumber = getByTestId(klId)

    userEvent.type(textboxNumber, '150')
    userEvent.click(document.body)
    expect(textboxNumber).toHaveValue('100')
  })

  test('should strip leading zeros on blur', () => {
    const { getByTestId } = render(<Textbox.Number klId={klId} />)
    const textboxNumber = getByTestId(klId)

    userEvent.type(textboxNumber, '00123')
    userEvent.click(document.body)
    expect(textboxNumber).toHaveValue('123')
  })

  test('should call onChange with parsed value', () => {
    const onChange = jest.fn()
    const parser = jest.fn((value?: string) => value?.replace(/1/g, '') || '')

    const { getByTestId } = render(<Textbox.Number parser={parser} onChange={onChange} klId={klId} />)
    const textboxNumber = getByTestId(klId)

    userEvent.clear(textboxNumber)
    userEvent.type(textboxNumber, '123')
    userEvent.click(document.body)
    expect(onChange).toHaveBeenLastCalledWith(23)
    expect(parser).toHaveBeenCalled()
  })

  test('should apply parser on blur before normalization', () => {
    const { getByTestId } = render(<Textbox.Number parser={() => '100'} max={50} klId={klId} />)
    const textboxNumber = getByTestId(klId)

    userEvent.clear(textboxNumber)
    userEvent.type(textboxNumber, '10')
    userEvent.click(document.body)
    expect(textboxNumber).toHaveValue('50')
  })

  test('should not show arrow buttons when controls equals to false', () => {
    render(<Textbox.Number klId={klId} controls={false} />)

    const upBtn = document.querySelector('.hexa-ui-input-number-controls-up')!
    const downBtn = document.querySelector('.hexa-ui-input-number-controls-down')!
    expect(upBtn).toBeNull()
    expect(downBtn).toBeNull()
  })

  test('should call onStep when arrow buttons are clicked', () => {
    const onStep = jest.fn()

    const { getByTestId } = render(<Textbox.Number klId={klId} step={2} onStep={onStep} />)
    const textboxNumber = getByTestId(klId)

    userEvent.type(textboxNumber, '5')
    const upBtn = document.querySelector('.hexa-ui-input-number-controls-up')!
    userEvent.click(upBtn)
    expect(onStep).toHaveBeenCalledWith('5', { offset: 2, type: 'up' })
    expect(textboxNumber).toHaveValue('7')
  })

  test('should disable up button when value equals to max', () => {
    render(<Textbox.Number klId={klId} max={0} value={0} />)

    const upBtn = document.querySelector('.hexa-ui-input-number-controls-up')!
    expect(upBtn).toBeDisabled()
  })

  test('should disable down button when value equals to min', () => {
    render(<Textbox.Number klId={klId} min={0} value={0} />)

    const downBtn = document.querySelector('.hexa-ui-input-number-controls-down')!
    expect(downBtn).toBeDisabled()
  })

  test('should disable arrow buttons when disabled', () => {
    render(<Textbox.Number klId={klId} disabled />)

    const upBtn = document.querySelector('.hexa-ui-input-number-controls-up')!
    const downBtn = document.querySelector('.hexa-ui-input-number-controls-down')!
    expect(upBtn).toBeDisabled()
    expect(downBtn).toBeDisabled()
  })

  test('should disable arrow buttons when readOnly', () => {
    render(<Textbox.Number klId={klId} readOnly />)

    const upBtn = document.querySelector('.hexa-ui-input-number-controls-up')!
    const downBtn = document.querySelector('.hexa-ui-input-number-controls-down')!
    expect(upBtn).toBeDisabled()
    expect(downBtn).toBeDisabled()
  })

  test('should handle arrow up/down keys when keyboard prop is true', () => {
    const { getByTestId } = render(<Textbox.Number klId={klId} keyboard step={3} />)
    const textboxNumber = getByTestId(klId)

    userEvent.type(textboxNumber, '10')
    userEvent.keyboard('{ArrowUp}')
    expect(textboxNumber).toHaveValue('13')
    userEvent.keyboard('{ArrowDown}')
    expect(textboxNumber).toHaveValue('10')
  })

  test('should not step with arrow keys when keyboard is false', () => {
    const { getByTestId } = render(<Textbox.Number klId={klId} keyboard={false} />)
    const textboxNumber = getByTestId(klId)

    userEvent.type(textboxNumber, '5')
    userEvent.keyboard('{ArrowUp}')
    expect(textboxNumber).toHaveValue('5')
  })

  test('should display validation status', () => {
    validationStatuses.forEach(validationStatus => {
      render(<Textbox.Number validationStatus={validationStatus} klId={klId} />)
      expect(document.querySelector(`.ant-input-affix-wrapper.${validationStatus}`)).toBeInTheDocument()
    })
  })
})
