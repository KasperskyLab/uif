import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SectionMessage } from '../SectionMessage'
import { ConfigProvider } from '../../../design-system/context'
import { ThemeKey } from '../../../design-system/types'
import { SectionMessageProps } from '../types'

const ActionsButtons: SectionMessageProps['actions'] = {
  FIRST_ACTION: {
    text: 'Action1',
    onClick: () => console.log('Action1')
  },
  SECOND_ACTION: {
    text: 'Action2',
    onClick: () => console.log('Action2')
  }
}

describe('SectionMessage', () => {
  const klId = 'section-message-kl-id'
  const testId = 'section-message-test-id'

  test('should render', () => {
    const { container } = render(
      <SectionMessage
        klId={klId}
        mode="success"
        testId={testId}
        title="Check!"
      >
        Success Alert
      </SectionMessage>
    )

    expect(container.querySelector(`[kl-id="${klId}"]`)).toBeInTheDocument()
    expect(container.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument()
  })

  test('should render the success SectionMessage component', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} >
        <SectionMessage testId={testId} title={'Check!'} mode="success">
          Success section message
        </SectionMessage>
      </ConfigProvider>
    )
    expect(container.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument()
    expect(container.querySelector('[data-component-id="icon-success"]')).toBeInTheDocument()
  })

  test('should render the warning SectionMessage component', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} >
        <SectionMessage testId={testId} title={'Check!'} mode="warning">
          Warning section message
        </SectionMessage>
      </ConfigProvider>
    )
    expect(container.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument()
    expect(container.querySelector('[data-component-id="icon-warning"]')).toBeInTheDocument()
  })

  test('should render the error SectionMessage component', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} >
        <SectionMessage testId={testId} title={'Check!'} mode="error">
          Error section message
        </SectionMessage>
      </ConfigProvider>
    )
    expect(container.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument()
    expect(container.querySelector('[data-component-id="icon-error"]')).toBeInTheDocument()
  })

  test('should render the info SectionMessage component', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} >
        <SectionMessage testId={testId} title={'Check!'} mode="info" type="alert">
          Info Alert
        </SectionMessage>
      </ConfigProvider>
    )
    expect(container.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument()
    expect(container.querySelector('[data-component-id="icon-info"]')).toBeInTheDocument()
  })

  test('should render the content', () => {
    render(
      <ConfigProvider theme={ThemeKey.Light} >
        <SectionMessage
          testId={testId}
          title={'Check!'}
          mode="info"
        >
          info SectionMessage
        </SectionMessage>
      </ConfigProvider>
    )
    expect(screen.getByText('info SectionMessage')).toBeInTheDocument()
  })

  test('should render with title', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} >
        <SectionMessage
          testId={testId}
          title={'Check!'}
          mode="info"
        >
          info SectionMessage
        </SectionMessage>
      </ConfigProvider>
    )

    expect(screen.getByText('Check!')).toBeInTheDocument()
  })
  test('should render without title', async () => {
    render(
      <ConfigProvider theme={ThemeKey.Light} >
        <SectionMessage testId={testId} mode="info" >
          info section message
        </SectionMessage>
      </ConfigProvider>
    )

    const title = screen.queryByTestId('alert-title')
    expect(await title).not.toBeInTheDocument()
  })

  test('should render with actions', () => {
    render(
      <ConfigProvider theme={ThemeKey.Light} >
        <SectionMessage testId={testId} mode="success" type="alert" actions={ActionsButtons} >
          section message text
        </SectionMessage>
      </ConfigProvider>
    )

    const button = screen.queryByText('Action1')
    expect(button).toBeInTheDocument()
  })

  // Codium AI
  test('should execute onClose callback when close button is clicked', () => {
    const onCloseMock = jest.fn()
    render(<SectionMessage closable onClose={onCloseMock} mode="success" />)
    fireEvent.click(screen.getByRole('button'))
    expect(onCloseMock).toHaveBeenCalled()
  })

  test('should handle missing children gracefully', () => {
    const { container } = render(<SectionMessage mode="success" />)
    expect(container).toBeInTheDocument()
  })

  test('should handle expandable prop set to true', () => {
    const { container } = render(<SectionMessage expandable mode="success" testId={testId} />)
    expect(container
      .querySelector(`[data-testid="${testId}-section-message-expansion-icon"]`))
      .toBeInTheDocument()
  })

  test('should handle closable prop set to true by default', () => {
    const { container } = render(<SectionMessage mode="success" testId={testId} />)
    expect(container
      .querySelector(`[data-testid="${testId}-section-message-close-icon"]`))
      .toBeInTheDocument()
  })
})
