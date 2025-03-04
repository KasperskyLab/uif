import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ButtonHTMLType } from 'antd/es/button/button'
import React from 'react'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { Button } from '../Button'
import { ButtonProps } from '../types'

const defaultProps = {
  text: 'Test Button'
}

const getButton = (name: string = defaultProps.text) => screen.getByRole('button', { name })

const DefaultButton = (props: ButtonProps) => <Button {...defaultProps} {...props} />

describe('Button', () => {
  test('should render', () => {
    render(<DefaultButton />)
    expect(getButton()).toBeInTheDocument()
  })

  test('should receive qa props', () => {
    const { container } = render(<DefaultButton klId="kl-id" testId="test-id" />)

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should call onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<DefaultButton onClick={handleClick} />)
    userEvent.click(screen.getByRole('button', { name: defaultProps.text }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('should render iconBefore', () => {
    const iconKlId = 'test-iconBefore'
    render(<DefaultButton iconBefore={<Placeholder klId={iconKlId} />} />)
    expect(screen.queryByTestId(iconKlId)).toBeInTheDocument()
  })

  test('should render iconAfter', () => {
    const iconKlId = 'test-iconAfter'
    render(<DefaultButton iconAfter={<Placeholder klId={iconKlId} />} />)
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

  // Claude 3 Sonnet
  it('should render correctly with children', () => {
    const { container } = render(<Button>Child Content</Button>)
    expect(container.querySelector('.kl-components-button-text')).toHaveTextContent('Child Content')
  })

  it('should render correctly with both children and text', () => {
    const { container } = render(<DefaultButton>Child Content</DefaultButton>)
    expect(container.querySelector('.kl-components-button-text')).toHaveTextContent(defaultProps.text)
    expect(getButton()).toBeInTheDocument()
  })

  // Codium AI
  it('should render correctly when no props are provided', () => {
    render(<Button />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should combine className with icon-only when no text or children are provided', () => {
    const { container } = render(<Button />)
    expect(container.querySelector('.icon-only')).toBeInTheDocument()
  })
})
