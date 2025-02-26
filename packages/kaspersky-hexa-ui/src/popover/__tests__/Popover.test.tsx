import { Button } from '@src/button'
import { act, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { Popover } from '../Popover'

const buttonKlId = 'popover-button'

const defaultProps = {
  content: 'Test',
  children: <Button klId={buttonKlId}>Trigger Popover</Button>,
  klId: 'test-popover'
}

const getPopoverButton = () => screen.getByTestId(buttonKlId)

const getPopover = (container: HTMLElement) => container.parentElement?.querySelector('.ant-popover')

describe('Popover', () => {
  test('should render', () => {
    const { container } = render(<Popover {...defaultProps} visible />)
    expect(getPopover(container)).toBeInTheDocument()
  })

  test('should render after hover', async () => {
    const { container } = render(<Popover {...defaultProps} />)
    act(() => {
      userEvent.click(getPopoverButton())
    })
    await waitFor(() => expect(getPopover(container)).toBeInTheDocument())
  })

  test('should render custom content inside popover', async () => {
    const contentClassName = 'popover-content'
    const { container } = render(
      <Popover
        {...defaultProps}
        content={<div className={contentClassName}>Test</div>}
      />
    )
    act(() => {
      userEvent.click(getPopoverButton())
    })
    await waitFor(() => {
      expect(
        container.parentElement?.querySelector(`.${contentClassName}`)
      ).toBeInTheDocument()
    })
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
