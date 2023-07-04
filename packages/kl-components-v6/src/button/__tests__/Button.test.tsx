import React from 'react'
import { render, screen } from '@testing-library/react'
import { Icon } from '../../icon'
import { Button } from '../Button'
import userEvent from '@testing-library/user-event'
import { ButtonHTMLType } from 'antd/es/button/button'
import { IButtonProps } from '../types'

const defaultProps = {
  text: 'Test Button'
}

const getButton = (name: string = defaultProps.text) => screen.getByRole('button', { name })

const DefaultButton = (props: IButtonProps) => <Button {...defaultProps} {...props} />

describe('Button', () => {
  test('should render', () => {
    render(<DefaultButton />)
    expect(getButton()).toBeInTheDocument()
  })

  test('should receive kl-id prop', () => {
    const klId = 'test-button'
    render(<DefaultButton klId={klId} />)
    expect(screen.getByTestId(klId)).toBeInTheDocument()
  })

  test('should call onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<DefaultButton onClick={handleClick} />)
    userEvent.click(screen.getByRole('button', { name: defaultProps.text }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('should render icon', () => {
    const iconKlId = 'test-icon'
    render(<DefaultButton icon={<Icon name='Add' size='small' klId={iconKlId} />} />)
    expect(screen.queryByTestId(iconKlId)).toBeInTheDocument()
  })

  test('should be disabled with disabled prop', () => {
    render(<DefaultButton disabled />)
    expect(getButton()).toBeDisabled()
  })

  test('should have correct html type', () => {
    const button: ButtonHTMLType = 'button'
    const submit: ButtonHTMLType = 'submit'
    const reset: ButtonHTMLType = 'reset'

    render(<Button text={button} type={button} />)
    expect(getButton(button)).toHaveAttribute('type', button)

    render(<Button text={submit} type={submit} />)
    expect(getButton(submit)).toHaveAttribute('type', submit)

    render(<Button text={reset} type={reset} />)
    expect(getButton(reset)).toHaveAttribute('type', reset)
  })

  test('should have loading icon if loading prop was given', () => {
    render(<DefaultButton loading />)
    expect(screen.getByRole('img', { name: 'loading' }))
  })

  test('should pass className prop', () => {
    const className = 'button-test-class'
    render(<DefaultButton className={className} />)
    expect(getButton()).toHaveClass(className)
  })

  test('should render button group', () => {
    const buttonGroupKlId = 'test-button-group'
    const buttonKlIds = ['first', 'second']
    render(
      <Button.Group klId={buttonGroupKlId}>
        <Button klId={buttonKlIds[0]} />
        <Button klId={buttonKlIds[1]} />
      </Button.Group>
    )
    expect(screen.getByTestId(buttonGroupKlId)).toBeInTheDocument()
    expect(screen.getByTestId(buttonKlIds[0])).toBeInTheDocument()
    expect(screen.getByTestId(buttonKlIds[1])).toBeInTheDocument()
  })
})
