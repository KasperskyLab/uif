import React, { useState } from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Modal } from '../Modal'
import { ModalProps } from '../types'
import userEvent from '@testing-library/user-event'
import { Button } from '@src/button'
import { Textbox } from '@src/input'

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

const sleep = (ms = 100) => new Promise(resolve => setTimeout(resolve, ms))

describe('Modal', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  const klId = 'modal-kl-id'
  const testId = 'modal-test-id'

  test('should render', async () => {
    const { baseElement } = render(
      <Modal klId={klId} testId={testId} mode="default" content="" visible />
    )

    await waitFor(() =>
      expect(baseElement.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument())
  })

  test('should render kl-id in buttons', async () => {
    const FIRST_ACTION_TEST_ID = 'firstActionTestId'
    const SECOND_ACTION_TEST_ID = 'secondActionTestId'
    const FIRST_CUSTOM_TEST_ID = 'firstCustomTestId'
    const SECOND_CUSTOM_TEST_ID = 'secondCustomTestId'
    const { baseElement } = render(
      <Modal
        klId={klId}
        mode="default"
        actions={{
          FIRST_ACTION: {
            text: '',
            klId: FIRST_ACTION_TEST_ID
          },
          SECOND_ACTION: {
            text: '',
            klId: SECOND_ACTION_TEST_ID
          }
        }}
        customButtons={[
          {
            text: '',
            klId: FIRST_CUSTOM_TEST_ID,
            onClick: console.log
          },
          {
            text: '',
            klId: SECOND_CUSTOM_TEST_ID,
            onClick: console.log
          }
        ]}
        visible
      />
    )

    await waitFor(() =>
      expect(baseElement.querySelector(`[kl-id="${FIRST_ACTION_TEST_ID}"]`)).toBeInTheDocument())
    await waitFor(() =>
      expect(baseElement.querySelector(`[kl-id="${SECOND_ACTION_TEST_ID}"]`)).toBeInTheDocument())
    await waitFor(() =>
      expect(baseElement.querySelector(`[kl-id="${FIRST_CUSTOM_TEST_ID}"]`)).toBeInTheDocument())
    await waitFor(() =>
      expect(baseElement.querySelector(`[kl-id="${SECOND_CUSTOM_TEST_ID}"]`)).toBeInTheDocument())
  })

  test('should recieve componentId prop', async () => {
    const { baseElement } = render(
      <Modal testId={testId} mode="default" content="" visible />
    )

    const modal = baseElement.querySelector(
      `[data-testid="${testId}"]`
    )

    await waitFor(() => expect(modal).toBeInTheDocument())
  })

  test('should render with warning mode', async () => {
    const { baseElement } = render(
      <Modal testId={testId} mode="warning" content="" visible />
    )
    const modal = baseElement.querySelector(
      `[data-testid="${testId}"]`
    )

    await waitFor(() => expect(modal).toBeInTheDocument())
  })

  test('should render with error mode', async () => {
    const { baseElement } = render(
      <Modal testId={testId} mode="error" content="" visible />
    )
    const modal = baseElement.querySelector(
      `[data-testid="${testId}"]`
    )

    await waitFor(() => expect(modal).toBeInTheDocument())
  })

  test('should render with success mode', async () => {
    const { baseElement } = render(
      <Modal testId={testId} mode="success" content="" visible />
    )
    const modal = baseElement.querySelector(
      `[data-testid="${testId}"]`
    )

    await waitFor(() => expect(modal).toBeInTheDocument())
  })

  test('should render the content', () => {
    const { queryByText } = render(
      <Modal
        testId={testId}
        mode="error"
        content="content"
        visible
      />
    )
    expect(queryByText('content')).toBeInTheDocument()
  })

  test('should render with header', async () => {
    const { queryByText } = render(
      <Modal
        testId={testId}
        mode="error"
        content="content"
        header="Title"
        visible
      />
    )
    expect(queryByText('Title')).toBeInTheDocument()
  })

  test('should render with icon / warning', async () => {
    render(
      <Modal
        testId={testId}
        mode="warning"
        content="content"
        header="Title"
        visible={true}
      />
    )

    await waitFor(() => expect(screen.getByTestId('icon-warning')).toBeInTheDocument())
  })

  test('should render with icon / error', async () => {
    render(
      <Modal
        testId={testId}
        mode="error"
        content="content"
        header="Title"
        visible={true}
      />
    )

    await waitFor(() => expect(screen.getByTestId('icon-error')).toBeInTheDocument())
  })

  test('should render with icon / success', async () => {
    render(
      <Modal
        testId={testId}
        mode="success"
        content="content"
        header="Title"
        visible={true}
      />
    )

    await waitFor(() => expect(screen.getByTestId('icon-success')).toBeInTheDocument())
  })

  test('should render without icon', () => {
    const { baseElement } = render(
      <Modal
        testId={testId}
        mode="error"
        content="content"
        header="Title"
        noIcon
        visible
      />
    )
    const icon = baseElement.querySelector(
      '[data-component-id="icon-error"]'
    )
    expect(icon).not.toBeInTheDocument()
  })

  test('should render with actions', () => {
    const { queryByText } = render(
      <Modal
        testId={testId}
        mode="error"
        content="content"
        header="Title"
        actions={actionsButtons}
        visible
      />
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
        <>
          <Button onClick={handleOpen}>
            Open Modal
          </Button>
          <Modal
            testId={testId}
            mode="error"
            content="content"
            header="Title"
            actions={actionsButtons}
            visible={visible}
            onCancel={handleClose}
          />
        </>
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

  describe('focus', () => {
    function TestComponent () {
      const [visible, setVisible] = useState(false)
      const [value, setValue] = useState('')

      return (
        <>
          <Button
            onClick={() => setVisible(true)}
            testId="open-modal"
          >
            Open Modal
          </Button>
          <Modal
            actions={{
              FIRST_ACTION: {
                text: 'OK',
                // @ts-ignore
                testId: 'first-action',
                onClick: () => setVisible(false)
              },
              SECOND_ACTION: {
                text: 'Cancel',
                onClick: () => setVisible(false)
              }
            }}
            content={(
              <>
                Text field:
                <Textbox
                  onChange={value => setValue(String(value))}
                  testId="input"
                  value={value}
                />
              </>
            )}
            mode="default"
            onCancel={() => setVisible(false)}
            testId={testId}
            visible={visible}
          />
        </>
      )
    }

    it('should focus focus on the first button', async () => {
      const { baseElement } = render(<TestComponent />)

      await userEvent.click(baseElement.querySelector('[data-testid="open-modal"]')!)
      await sleep()

      expect(baseElement.querySelector('[data-testid="first-action"]')).toHaveFocus()
    })

    it('should lose focus from the first button if there are user interactions with the modal content', async () => {
      const { baseElement } = render(<TestComponent />)

      await userEvent.click(baseElement.querySelector('[data-testid="open-modal"]')!)
      await sleep()
      await userEvent.type(baseElement.querySelector('[data-testid="input"]')!, 'lorem ipsum')
      await sleep()

      expect(baseElement.querySelector('[data-testid="input"]')).toHaveFocus()
      expect(baseElement.querySelector('[data-testid="first-action"]')).not.toHaveFocus()
    })
  })

  // Codium AI
  it('should display custom buttons when provided', () => {
    const customButtons: any[] = [{ text: 'Custom1' }, { text: 'Custom2' }, { text: 'Custom3' }]
    const { queryByText } = render(<Modal customButtons={customButtons} visible mode="default" />)

    expect(queryByText('Custom1')).toBeInTheDocument()
    expect(queryByText('Custom2')).toBeInTheDocument()
    expect(queryByText('Custom3')).toBeInTheDocument()
  })

  it('should render without header, content, or footer', async () => {
    const { baseElement } = render(<Modal visible mode="default" testId={testId} />)
    expect(baseElement.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument()
  })

  it('should handle empty actions and customButtons arrays', async () => {
    const { baseElement } = render(<Modal actions={{}} customButtons={[]} visible mode="default" testId={testId} />)
    expect(baseElement.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument()
  })
})
