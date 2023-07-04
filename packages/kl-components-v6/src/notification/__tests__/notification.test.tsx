import React from 'react'
import { render } from '@testing-library/react'
import { ConfigProvider } from '../../../design-system/context'
import { ThemeKey } from '../../../design-system/types'
import { Notification } from '../Notification'
import '@testing-library/jest-dom'
import { Button } from '../../button'
import { notificationDestroy, openNotification } from '../NotificationService'
import { NotificationProps } from '../types'
import userEvent from '@testing-library/user-event'

describe('Notification', () => {
  const componentId = 'notification-test-id'

  afterEach(() => {
    notificationDestroy()
  })

  test('should recieve componentId prop', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Notification
          id={componentId}
          componentId={componentId}
          mode="infoAccent"
        />
      </ConfigProvider>
    )
    const notification = container.querySelector(
      `[data-component-id="${componentId}"]`
    )
    expect(notification).toBeInTheDocument()
  })

  test('should render the info notification component', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Notification id={componentId} componentId={componentId} mode="info" />
      </ConfigProvider>
    )
    const notification = container.querySelector(
      `[data-component-id="${componentId}"]`
    )
    expect(notification).toBeInTheDocument()
  })

  test('should render the infoAccent notification component', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Notification
          id={componentId}
          componentId={componentId}
          mode="infoAccent"
        />
      </ConfigProvider>
    )
    const notification = container.querySelector(
      `[data-component-id="${componentId}"]`
    )
    expect(notification).toBeInTheDocument()
  })

  test('should render the success notification component', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Notification
          id={componentId}
          componentId={componentId}
          mode="success"
        />
      </ConfigProvider>
    )
    const notification = container.querySelector(
      `[data-component-id="${componentId}"]`
    )
    expect(notification).toBeInTheDocument()
  })

  test('should render the error notification component', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Notification id={componentId} componentId={componentId} mode="error" />
      </ConfigProvider>
    )
    const notification = container.querySelector(
      `[data-component-id="${componentId}"]`
    )
    expect(notification).toBeInTheDocument()
  })

  test('should render the description', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Notification
          id={componentId}
          componentId={componentId}
          mode="error"
          description="some text"
        />
      </ConfigProvider>
    )

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const notification = container.querySelector(
      `[data-component-id="${componentId}"]`
    )!

    const descriprion = notification.getAttribute('description')
    expect(descriprion).toEqual('some text')
  })

  test('should render without antd prop title', async () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Notification
          id={componentId}
          componentId={componentId}
          mode="error"
          description="some text"
        />
      </ConfigProvider>
    )

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const notification = container.querySelector(
      `[data-component-id="${componentId}"]`
    )!

    const title = notification.getAttribute('title')
    expect(title).not.toBeInTheDocument()
  })

  test('should render with icon / info', async () => {
    const notificationProps: NotificationProps = {
      id: 'notify-1',
      componentId: 'component-notify-1',
      mode: 'info',
      delay: 10,
      description: 'notificationText'
    }
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Notification {...notificationProps} />
        <Button
          klId="button"
          onClick={() => openNotification(notificationProps)}
        >
          {' '}
          Open the notification box
        </Button>
      </ConfigProvider>
    )
    const notification = container.querySelector(
      '[data-component-id="' + notificationProps.componentId + '"]'
    ) as HTMLElement

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const buttonElement = await container.querySelector('[kl-id="button"]')!
    await userEvent.click(buttonElement)
    expect(await notification).toBeInTheDocument()

    const icon = notification.querySelector(
      '[data-component-id="icon-info"]'
    ) as HTMLElement
    expect(icon).toBeInTheDocument()
  })

  test('should render with icon / info-accent', async () => {
    const notificationProps: NotificationProps = {
      id: 'notify-1',
      componentId: 'component-notify-1',
      mode: 'infoAccent',
      delay: 10,
      description: 'notificationText'
    }
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Notification {...notificationProps} />
        <Button
          klId="button"
          onClick={() => openNotification(notificationProps)}
        >
          {' '}
          Open the notification box
        </Button>
      </ConfigProvider>
    )
    const notification = container.querySelector(
      '[data-component-id="' + notificationProps.componentId + '"]'
    ) as HTMLElement

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const buttonElement = await container.querySelector('[kl-id="button"]')!
    await userEvent.click(buttonElement)
    expect(await notification).toBeInTheDocument()

    const icon = notification.querySelector(
      '[data-component-id="icon-info-accent"]'
    ) as HTMLElement
    expect(icon).toBeInTheDocument()
  })

  test('should render with icon / success', async () => {
    const notificationProps: NotificationProps = {
      id: 'notify-1',
      componentId: 'component-notify-1',
      mode: 'success',
      delay: 10,
      description: 'notificationText'
    }
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Notification {...notificationProps} />
        <Button
          klId="button"
          onClick={() => openNotification(notificationProps)}
        >
          {' '}
          Open the notification box
        </Button>
      </ConfigProvider>
    )
    const notification = container.querySelector(
      '[data-component-id="' + notificationProps.componentId + '"]'
    ) as HTMLElement

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const buttonElement = await container.querySelector('[kl-id="button"]')!
    await userEvent.click(buttonElement)
    expect(await notification).toBeInTheDocument()

    const icon = notification.querySelector(
      '[data-component-id="icon-success"]'
    ) as HTMLElement
    expect(icon).toBeInTheDocument()
  })

  test('should render with icon / error', async () => {
    const notificationProps: NotificationProps = {
      id: 'notify-1',
      componentId: 'component-notify-1',
      mode: 'error',
      delay: 10,
      description: 'notificationText'
    }
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Notification {...notificationProps} />
        <Button
          klId="button"
          onClick={() => openNotification(notificationProps)}
        >
          {' '}
          Open the notification box
        </Button>
      </ConfigProvider>
    )
    const notification = container.querySelector(
      '[data-component-id="' + notificationProps.componentId + '"]'
    ) as HTMLElement

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const buttonElement = await container.querySelector('[kl-id="button"]')!
    await userEvent.click(buttonElement)
    expect(await notification).toBeInTheDocument()

    const icon = notification.querySelector(
      '[data-component-id="icon-error"]'
    ) as HTMLElement
    expect(icon).toBeInTheDocument()
  })

  test('should render without icon', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Notification
          id={componentId}
          componentId={componentId}
          mode="success"
          description="some text"
          noIcon
        />
      </ConfigProvider>
    )

    const icon = container.querySelector(
      '[data-component-id="icon-success"]'
    ) as HTMLElement
    expect(icon).not.toBeInTheDocument()
  })

  test('should render after call notification service', async () => {
    const notificationProps: NotificationProps = {
      id: 'notify-1',
      componentId: 'component-notify-1',
      mode: 'error',
      delay: 10,
      description: 'notificationText'
    }
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Notification {...notificationProps} />
        <Button
          klId="button"
          onClick={() => openNotification(notificationProps)}
        >
          {' '}
          Open the notification box
        </Button>
      </ConfigProvider>
    )
    expect(
      await container.querySelector('.ant-notification-notice')
    ).not.toBeInTheDocument()
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const buttonElement = await container.querySelector('[kl-id="button"]')!
    await userEvent.click(buttonElement)
    expect(
      await container.querySelector('.ant-notification-notice')
    ).toBeInTheDocument()
  })

  test('notification should close after click to close icon', async () => {
    const notificationProps: NotificationProps = {
      id: 'notify-1',
      componentId: 'component-notify-1',
      mode: 'error',
      delay: 10,
      description: 'notificationText'
    }
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light}>
        <Notification {...notificationProps} />
        <Button
          klId="button"
          onClick={() => openNotification(notificationProps)}
        >
          {' '}
          Open the notification box
        </Button>
      </ConfigProvider>
    )
    expect(
      await container.querySelector('.ant-notification-notice')
    ).not.toBeInTheDocument()
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const buttonElement = await container.querySelector('[kl-id="button"]')!
    await userEvent.click(buttonElement)

    expect(
      await container.querySelector('.ant-notification-notice')
    ).toBeInTheDocument()

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const btnClose = container.querySelector('.ant-notification-notice-close')!
    expect(await btnClose).toBeInTheDocument()
    await userEvent.click(btnClose)
    expect(
      await container.querySelector('.ant-notification-notice')
    ).not.toBeInTheDocument()
  })
})
