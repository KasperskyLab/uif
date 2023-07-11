import React from 'react'
import { render, screen } from '@testing-library/react'
import { Toggle } from '../Toggle'
import userEvent from '@testing-library/user-event'

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

  test('should recieve kl-id prop', () => {
    render(<Toggle klId={defaultProps.klId}>{defaultProps.text}</Toggle>)
    expect(screen.getByTestId(defaultProps.klId)).toBeInTheDocument()
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

  test('should be small then size prop is "small"', () => {
    const SmallClassName = 'ant-switch-small'
    render(<Toggle size='small'/>)
    expect(getToggleSwitch()).toHaveClass(SmallClassName)
  })
})
