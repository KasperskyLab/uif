import React from 'react'
import { render, screen } from '@testing-library/react'
import { TimeInput } from '../TimeInput'
import userEvent from '@testing-library/user-event'

const testId = 'test-time-input-id'

describe('TimeInput', () => {
  test('renders without crashing', () => {
    const { container } = render(<TimeInput testId={testId} />)

    expect(
      container.querySelector(`[data-testid="${testId}"]`)
    ).toBeInTheDocument()
  })

  test('displays the provided value', () => {
    render(<TimeInput value="10:30" format="HH:mm" />)
    const timeInputElement = screen.getByDisplayValue('10:30')
    expect(timeInputElement).toBeInTheDocument()
  })

  test('should check the display of the custom placeholder', () => {
    render(<TimeInput testId={testId} placeholder="Time" />)

    const timeInputElement = screen.getByPlaceholderText('Time')
    expect(timeInputElement).toBeInTheDocument()
  })

  test('should proper mask Hours and Minutes format', async () => {
    const { getByTestId } = render(
      <TimeInput format="HH:mm" testId={testId} klId={testId} />
    )
    const inputPhone = getByTestId(testId)
    await userEvent.clear(inputPhone)
    await userEvent.type(inputPhone, '1020')

    expect(inputPhone).toHaveValue('10:20')
  })

  test('should proper mask with Seconds format', async () => {
    const { getByTestId } = render(
      <TimeInput format="HH:mm:ss" testId={testId} klId={testId} />
    )
    const inputPhone = getByTestId(testId)
    await userEvent.clear(inputPhone)
    await userEvent.type(inputPhone, '102030')

    expect(inputPhone).toHaveValue('10:20:30')
  })

  test('should proper mask with Milliseconds format', async () => {
    const { getByTestId } = render(
      <TimeInput format="HH:mm:ss:ms" testId={testId} klId={testId} />
    )
    const inputPhone = getByTestId(testId)
    await userEvent.clear(inputPhone)
    await userEvent.type(inputPhone, '102030120')

    expect(inputPhone).toHaveValue('10:20:30:120')
  })

  test('should cut extra symbols', async () => {
    const { getByTestId } = render(
      <TimeInput format="HH:mm" testId={testId} klId={testId} />
    )
    const inputPhone = getByTestId(testId)
    await userEvent.clear(inputPhone)
    await userEvent.type(inputPhone, '102030120')

    expect(inputPhone).toHaveValue('10:20')
  })
})
