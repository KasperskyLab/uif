import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Alert } from '../Alert'
import { ConfigProvider } from '../../../design-system/context'
import { ThemeKey } from '../../../design-system/types'
import { AlertProps } from '../types'

const ActionsButtons: AlertProps['actions'] = {
  FIRST_ACTION: {
    text: 'Action1',
    onClick: () => console.log('Action1')
  },
  SECOND_ACTION: {
    text: 'Action2',
    onClick: () => console.log('Action2')
  }
}

describe('Alert', () => {
  const testId = 'alert-test-id'

  it('should receive qa props', () => {
    const { container } = render(
      <Alert
        klId="kl-id"
        mode="success"
        testId="test-id"
        type="alert"
      >
        Success Alert
      </Alert>
    )

    expect(container.querySelector('[kl-id="kl-id"]')).toBeInTheDocument()
    expect(container.querySelector('[data-testid="test-id"]')).toBeInTheDocument()
  })

  test('should render the success alert component', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} >
        <Alert testId={testId} title={'Check!'} mode="success" type="alert">
          Success Alert
        </Alert>
      </ConfigProvider>
    )
    const alert = container.querySelector(
      `[data-testid="${testId}"]`
    )
    expect(alert).toBeInTheDocument()
  })

  test('should render the warning alert component', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} >
        <Alert testId={testId} title={'Check!'} mode="warning" type="alert">
          Warning Alert
        </Alert>
      </ConfigProvider>
    )
    const alert = container.querySelector(
      `[data-testid="${testId}"]`
    )
    expect(alert).toBeInTheDocument()
  })

  test('should render the error alert component', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} >
        <Alert testId={testId} title={'Check!'} mode="error" type="alert">
          Error Alert
        </Alert>
      </ConfigProvider>
    )
    const alert = container.querySelector(
      `[data-testid="${testId}"]`
    )
    expect(alert).toBeInTheDocument()
  })

  test('should render the info alert component', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} >
        <Alert testId={testId} title={'Check!'} mode="info" type="alert">
          Info Alert
        </Alert>
      </ConfigProvider>
    )
    const alert = container.querySelector(
      `[data-testid="${testId}"]`
    )
    expect(alert).toBeInTheDocument()
  })

  test('should render the content', () => {
    render(
      <ConfigProvider theme={ThemeKey.Light} >
        <Alert
          testId="alert"
          title={'Check!'}
          mode="info"
          type="alert"
        >
          Info Alert
        </Alert>
      </ConfigProvider>
    )
    expect(screen.getByText('Info Alert')).toBeInTheDocument()
  })

  test('should render with title', async () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} >
        <Alert
          testId="alert"
          title={'Check!'}
          mode="info"
          type='sectionMessage'
        >
          Info Alert
        </Alert>
      </ConfigProvider>
    )
    const title = container.querySelector(
      '[data-testid="alert-title"]'
    )
    await expect(title).toBeInTheDocument()
  })

  test('should render without title', async () => {
    render(
      <ConfigProvider theme={ThemeKey.Light} >
        <Alert testId={testId} mode="info" type="alert">
          Info Alert
        </Alert>
      </ConfigProvider>
    )

    const title = screen.queryByTestId('alert-title')
    expect(await title).not.toBeInTheDocument()
  })

  test('should render with icon / info', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} >
        <Alert testId={testId} mode="info" type="alert">
          Info Alert
        </Alert>
      </ConfigProvider>
    )
    const icon = container.querySelector(
      '[data-component-id="icon-info"]'
    )
    expect(icon).toBeInTheDocument()
  })

  test('should render with icon / success', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} >
        <Alert testId={testId} mode="success" type="alert">
          Success Alert
        </Alert>
      </ConfigProvider>
    )
    const icon = container.querySelector(
      '[data-component-id="icon-success"]'
    )
    expect(icon).toBeInTheDocument()
  })

  test('should render with icon / error', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} >
        <Alert testId={testId} mode="error" type="alert">
          Error Alert
        </Alert>
      </ConfigProvider>
    )
    const icon = container.querySelector(
      '[data-component-id="icon-error"]'
    )
    expect(icon).toBeInTheDocument()
  })

  test('should render with icon / warning', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} >
        <Alert testId={testId} mode="warning" type="alert">
          Warning Alert
        </Alert>
      </ConfigProvider>
    )
    const icon = container.querySelector(
      '[data-component-id="icon-warning"]'
    )
    expect(icon).toBeInTheDocument()
  })

  test('should render with actions', () => {
    render(
      <ConfigProvider theme={ThemeKey.Light} >
        <Alert testId={testId} mode="success" type="alert" actions={ActionsButtons} >
          alert text
        </Alert>
      </ConfigProvider>
    )

    const button = screen.queryByText('Action1')
    expect(button).toBeInTheDocument()
  })
})
