import { ConfigProvider } from '@design-system/context'
import { Button } from '@src/button'
import { Calendar, RangePicker } from '@src/datepicker'
import { Dropdown } from '@src/dropdown'
import { Trigger } from '@src/dropdown/types'
import { Popover } from '@src/popover'
import { Select } from '@src/select'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

const buttonKlId = 'test-dropdown-button'

const dropdownDefaultProps = {
  overlay: [{ children: 'Menu item' }],
  children: <Button klId={buttonKlId}>Trigger Dropdown</Button>,
  klId: 'test-dropdown',
  trigger: ['click'] as Trigger[]
}

const popoverDefaultProps = {
  content: 'Test',
  children: <Button klId={buttonKlId}>Trigger Popover</Button>
}

const selectDefaultProps = {
  klId: 'test-select',
  open: true
}

const waitForDropdown = async (klId = selectDefaultProps.klId) => {
  const dropdownKlId = `${klId}-select-dropdown`
  await waitFor(() => screen.getByTestId(dropdownKlId))
  return screen.getByTestId(dropdownKlId)
}

const getButton = () => screen.getByTestId(buttonKlId)

describe('Global', () => {
  test('should pass overlayClassName as className to dropdown', async () => {
    const className = 'test-dropdown-class-name'
    const { container } = render(
      <Dropdown {...dropdownDefaultProps} overlayClassName={className} />
    )

    await act(async () => {
      userEvent.click(getButton())
      await screen.findByTestId(dropdownDefaultProps.klId)
    })
    expect(
      container.parentElement?.querySelector(`.${className}`)
    ).toBeInTheDocument()
  })

  test('should pass overlayClassName as className to popover', async () => {
    const className = 'test-popover-class-name'
    const { container } = render(
      <Popover {...popoverDefaultProps} overlayClassName={className} />
    )

    act(() => { userEvent.click(getButton()) })
    expect(
      container.parentElement?.querySelector(`.${className}`)
    ).toBeInTheDocument()
  })

  test('should pass dropdownClassName as className to select', async () => {
    const className = 'test-select-class-name'
    render(
      <ConfigProvider>
        <Select dropdownClassName={className} {...selectDefaultProps} />
      </ConfigProvider>
    )

    await waitForDropdown()

    expect(
      document.querySelector(`.${className}.ant-select-dropdown`)
    ).toBeInTheDocument()

    expect(
      document.querySelector('.ant-select-dropdown-hidden')
    ).not.toBeInTheDocument()
  })

  test('should pass dropdownClassName as className to range picker', async () => {
    const className = 'test-range-picker-class-name'
    render(<RangePicker dropdownClassName={className} open />)

    expect(
      document.querySelector(`.${className}.ant-picker-dropdown`)
    ).toBeInTheDocument()

    expect(
      document.querySelector('.ant-picker-dropdown-hidden')
    ).not.toBeInTheDocument()
  })

  test('should pass dropdownClassName as className to calendar', async () => {
    const className = 'test-calendar-class-name'
    render(<Calendar dropdownClassName={className} open />)

    expect(
      document.querySelector(`.${className}.ant-picker-dropdown`)
    ).toBeInTheDocument()

    expect(
      document.querySelector('.ant-picker-dropdown-hidden')
    ).not.toBeInTheDocument()
  })
})
