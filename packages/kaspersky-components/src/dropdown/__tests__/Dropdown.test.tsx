import React from 'react'
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Dropdown } from '../Dropdown'
import { DropdownProps, Trigger } from '../types'

import { Button } from '@src/button'
import { Link } from '@src/link'
import { Text } from '@src/typography'

const overlay = [
  {
    children: (
      <Link target="_blank" href="#">
        1st menu item
      </Link>
    )
  },
  {
    children: <Button>2nd menu item</Button>
  },
  {
    children: <Text type="BTR3">3rd menu item</Text>,
    disabled: true
  }
]

const buttonKlId = 'dropdown-button'

const defaultProps = {
  overlay,
  children: <Button klId={buttonKlId}>Trigger Dropdown</Button>,
  klId: 'test-dropdown',
  testId: 'test-dropdown',
  trigger: ['click'] as Trigger[]
}

const DefaultDropdown = (props: Partial<DropdownProps>) => (
  <Dropdown {...defaultProps} {...props} />
)

const TRIGGER_TO_USER_EVENT: Record<Trigger, (element: Element) => void> = {
  click: userEvent.click,
  hover: userEvent.hover,
  contextMenu: fireEvent.contextMenu
}

const getDropdownButton = () => screen.getByTestId(buttonKlId)

const getDropdown = (klId = defaultProps.klId) => screen.getByTestId(klId)

const getDropdownAfterAction = async (
  trigger: Trigger,
  klId = defaultProps.klId
) => {
  await act(async () => {
    TRIGGER_TO_USER_EVENT[trigger](getDropdownButton())
  })
  await waitFor(() => getDropdown(klId))
  return getDropdown(klId)
}

describe('Dropdown', () => {
  test('should render', () => {
    const { baseElement } = render(<DefaultDropdown visible />)

    expect(getDropdown()).toBeInTheDocument()
    expect(baseElement.querySelector(`[kl-id="${defaultProps.klId}"]`)).toBeInTheDocument()
    expect(baseElement.querySelector(`[data-testid="${defaultProps.testId}"]`)).toBeInTheDocument()
  })

  test('should not render without visible and action', () => {
    render(<DefaultDropdown />)
    expect(screen.queryByTestId(defaultProps.klId)).not.toBeInTheDocument()
  })

  test('should render after click', async () => {
    render(<DefaultDropdown trigger={['click']} />)
    expect(await getDropdownAfterAction('click')).toBeInTheDocument()
  })

  test('should render after hover', async () => {
    render(<DefaultDropdown trigger={['hover']} />)
    expect(await getDropdownAfterAction('hover')).toBeInTheDocument()
  })

  test('should render after contextMenu', async () => {
    render(<DefaultDropdown trigger={['contextMenu']} />)
    expect(await getDropdownAfterAction('contextMenu')).toBeInTheDocument()
  })

  test('button should be disabled with disabled prop', () => {
    render(<DefaultDropdown disabled />)
    expect(getDropdownButton()).toBeDisabled()
  })

  test('should pass overlayClassName as className to dropdown', async () => {
    const className = 'dropdown-test-class'
    const { container } = render(
      <DefaultDropdown overlayClassName={className} />
    )
    await getDropdownAfterAction('click')
    expect(
      container.parentElement?.querySelector(`.${className}`)
    ).toBeInTheDocument()
  })

  test('should pass className as className to dropdown child', async () => {
    const className = 'dropdown-child-test-class'
    const { container } = render(<DefaultDropdown className={className} />)
    expect(container.querySelector(`.${className}`)).toBeInTheDocument()
  })

  test('should call onVisibleChange when visible is changed', async () => {
    const onVisibleChange = jest.fn()
    render(<DefaultDropdown onVisibleChange={onVisibleChange} />)
    await getDropdownAfterAction('click')
    expect(onVisibleChange).toHaveBeenCalledTimes(1)
  })

  test('should render popup to body by default', async () => {
    const bodyChildrenCount = 3

    render(<DefaultDropdown />)
    await getDropdownAfterAction('click')
    expect(document.body.childElementCount).toEqual(bodyChildrenCount)
  })
})
