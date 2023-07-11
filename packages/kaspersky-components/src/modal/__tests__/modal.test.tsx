import React, { useState } from 'react'
import {
  render,
  waitFor
} from '@testing-library/react'
import '@testing-library/jest-dom'
import { ConfigProvider } from '../../../design-system/context'
import { ThemeKey } from '../../../design-system/types'
import { Modal } from '../Modal'
import { ModalProps } from '../types'
import userEvent from '@testing-library/user-event'
import { Button } from '../../button'

const handleMockChange = jest.fn()
const actionsButtons: ModalProps['actions'] = {
  FIRST_ACTION: {
    text: 'OK',
    onClick: handleMockChange
  },
  SECOND_ACTION: {
    text: 'Cancel',
    onClick: handleMockChange
  }
}

describe('Modal', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  const componentId = 'modal-test-id'
  test('should recieve componentId prop', async () => {
    const { baseElement } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Modal componentId={componentId} mode="default" content="" visible />
      </ConfigProvider>
    )

    const modal = baseElement.querySelector(
      `[data-component-id="${componentId}"]`
    )

    await waitFor(() => expect(modal).toBeInTheDocument())
  })

  test('should render with warning mode', async () => {
    const { baseElement } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Modal componentId={componentId} mode="warning" content="" visible />
      </ConfigProvider>
    )
    const modal = baseElement.querySelector(
      `[data-component-id="${componentId}"]`
    )

    await waitFor(() => expect(modal).toBeInTheDocument())
  })

  test('should render with error mode', async () => {
    const { baseElement } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Modal componentId={componentId} mode="error" content="" visible />
      </ConfigProvider>
    )
    const modal = baseElement.querySelector(
      `[data-component-id="${componentId}"]`
    )

    await waitFor(() => expect(modal).toBeInTheDocument())
  })

  test('should render the content', () => {
    const { queryByText } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Modal
          componentId={componentId}
          mode="error"
          content="content"
          visible
        />
      </ConfigProvider>
    )
    expect(queryByText('content')).toBeInTheDocument()
  })

  test('should render with header', async () => {
    const { queryByText } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Modal
          componentId={componentId}
          mode="error"
          content="content"
          header="Title"
          visible
        />
      </ConfigProvider>
    )
    expect(queryByText('Title')).toBeInTheDocument()
  })

  test('should render with icon / warning', async () => {
    const { baseElement } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Modal
          componentId={componentId}
          mode="warning"
          content="content"
          header="Title"
          visible={true}
        />
      </ConfigProvider>
    )
    const icon = baseElement.querySelector(
      '[data-component-id="icon-warning"]'
    )
    await waitFor(() => expect(icon).toBeInTheDocument())
  })

  test('should render with icon / error', async () => {
    const { baseElement } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Modal
          componentId={componentId}
          mode="error"
          content="content"
          header="Title"
          visible={true}
        />
      </ConfigProvider>
    )
    const icon = baseElement.querySelector(
      '[data-component-id="icon-error"]'
    )
    await waitFor(() => expect(icon).toBeInTheDocument())
  })

  test('should render without icon', () => {
    const { baseElement } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Modal
          componentId={componentId}
          mode="error"
          content="content"
          header="Title"
          noIcon
          visible
        />
      </ConfigProvider>
    )
    const icon = baseElement.querySelector(
      '[data-component-id="icon-error"]'
    )
    expect(icon).not.toBeInTheDocument()
  })

  test('should render with actions', () => {
    const { queryByText } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Modal
          componentId={componentId}
          mode="error"
          content="content"
          header="Title"
          actions={actionsButtons}
          visible
        />
      </ConfigProvider>
    )

    expect(queryByText('OK')).toBeInTheDocument()
    expect(queryByText('Cancel')).toBeInTheDocument()
  })

  test('should render modal with event', async () => {
    const TestModal = () => {
      const [visible, setVisible] = useState(false)

      const handleOpen = () => {
        setVisible(true)
      }
      const handleClose = () => {
        setVisible(false)
      }

      return (
        <ConfigProvider theme={ThemeKey.Light}>
          <Button mode="primaryBlack" onClick={handleOpen}>
            Open Modal
          </Button>
          <Modal
            componentId={componentId}
            mode="error"
            content="content"
            header="Title"
            actions={actionsButtons}
            visible={visible}
            onCancel={handleClose}
          />
        </ConfigProvider>
      )
    }

    const { baseElement, queryByText } = render(<TestModal />)

    // open modal
    await userEvent.click(queryByText('Open Modal') as HTMLElement)

    const antModalWrap = baseElement.querySelector('.ant-modal-wrap')
    await waitFor(() => expect(queryByText('content')).toBeInTheDocument())
    await waitFor(() => expect(antModalWrap).toBeVisible())

    // close modal
    const modalCloseBtn = baseElement.querySelector('.ant-modal-close') as HTMLElement
    await userEvent.click(modalCloseBtn)

    await waitFor(() => expect(antModalWrap).not.toBeVisible())
  })
})
