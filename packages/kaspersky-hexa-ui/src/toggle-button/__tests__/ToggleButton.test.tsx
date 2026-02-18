import { configure } from '@testing-library/dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { ToggleButton } from '../ToggleButton'
import styles from '../ToggleButton.module.scss'
import { ToggleButtonGroup } from '../ToggleButtonGroup'
import type { ToggleButtonGroupProps, ToggleButtonProps } from '../types'

jest.mock('uuid', () => ({ v4: () => 'uuid-fixed' }))

const baseBtnProps: ToggleButtonProps = {
  text: 'Toggle',
  size: 'medium',
  mode: 'marina',
  value: 'opt',
  onChange: jest.fn(),
  iconBefore: <Placeholder klId="before-icon" />
}

const getCheckbox = () => screen.getByRole('checkbox')

const DefaultToggle = (props?: Partial<ToggleButtonProps>) => (
  <ToggleButton {...baseBtnProps} {...props} />
)

beforeAll(() => {
  configure({ testIdAttribute: 'data-testid' })
})

describe('ToggleButton', () => {
  test('should render', () => {
    render(<DefaultToggle />)
    expect(getCheckbox()).toBeInTheDocument()
  })

  test('should render with QA props', () => {
    const testId = 'test-id'
    render(<DefaultToggle testId={testId} />)

    expect(screen.getByTestId(testId)).toBeInTheDocument()
    expect(screen.getByTestId(`${testId}-input`)).toBeInTheDocument()
    expect(screen.getByTestId(`${testId}-label`)).toBeInTheDocument()
  })

  test('should call onChange (controlled)', async () => {
    const onChange = jest.fn()
    const { rerender } = render(
      <ToggleButton testId="tid" value="opt" onChange={onChange} />
    )

    const label = screen.getByTestId('tid-label')
    await userEvent.click(label)
    expect(onChange).toHaveBeenNthCalledWith(1, 'opt', true)

    rerender(<ToggleButton testId="tid" value="opt" selected={true} onChange={onChange} />)

    await userEvent.click(label)
    expect(onChange).toHaveBeenNthCalledWith(2, 'opt', false)
  })


  test('should render iconBefore and elementAfter', () => {
    render(
      <DefaultToggle
        iconBefore={<Placeholder testId="before" />}
        elementAfter={<Placeholder testId="after" />}
      />
    )
    expect(screen.getByTestId('before')).toBeInTheDocument()
    expect(screen.getByTestId('after')).toBeInTheDocument()
  })

  test('should be disabled when disabled or loading', () => {
    const { rerender } = render(<DefaultToggle disabled />)
    expect(getCheckbox()).toBeDisabled()

    rerender(<DefaultToggle loading />)
    expect(getCheckbox()).toBeDisabled()
  })

  test('should apply size class modifiers on wrapper', () => {
    const { container, rerender } = render(<DefaultToggle size="medium" />)
    const wrapper = container.querySelector(`.${styles.container}`)!
    expect(wrapper).toHaveClass(styles['medium'])

    rerender(<DefaultToggle size="small" />)
    expect(container.querySelector(`.${styles['small']}`)).toBeInTheDocument()

    rerender(<DefaultToggle size="extraSmall" />)
    expect(container.querySelector(`.${styles['extraSmall']}`)).toBeInTheDocument()
  })
})

describe('ToggleButtonGroup', () => {
  const buildGroup = (overrides?: Partial<ToggleButtonGroupProps>) => {
    const onChange = jest.fn()
    const props: ToggleButtonGroupProps = {
      items: [
        { text: 'One', value: 'one' },
        { text: 'Two', value: 'two' },
        { text: 'Three', value: 'three', disabled: true }
      ],
      value: ['one', 'two'],
      onChange,
      isStretch: false
    }
    return { onChange, ...render(<ToggleButtonGroup {...props} {...overrides} />) }
  }

  test('should renders group and items', () => {
    buildGroup()
    expect(screen.getAllByRole('checkbox').length).toBe(3)
    expect(screen.getByText('One')).toBeInTheDocument()
    expect(screen.getByText('Two')).toBeInTheDocument()
    expect(screen.getByText('Three')).toBeInTheDocument()
  })

  test('should calls onChange with array without clicked value', async () => {
    const { onChange } = buildGroup({ value: ['one', 'two'] })
    await userEvent.click(screen.getByText('One'))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(['two'])
  })

  test('applies stretched class when isStretch = true', () => {
    const { container } = buildGroup({ isStretch: true })
    const space = container.querySelector(`.${styles.stretched}`)
    expect(space).toBeInTheDocument()
  })
})
