import { ConfigProvider } from '@design-system/context'
import { Button } from '@src/button'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { Notification } from '../Notification'
import { notificationDestroy, openNotification } from '../NotificationService'
import { NotificationContainerProps, NotificationProps } from '../types'

describe('Notification', () => {
  const componentId = 'notification-test-id'
  const notificationProps: NotificationProps = {
    id: componentId,
    duration: 10,
    description: 'notification text',
    mode: 'success'
  }

  function Wrapper ({ noIcon, ...rawProps }: Partial<NotificationContainerProps> & Partial<NotificationProps>) {
    const props: NotificationProps = {
      ...notificationProps,
      ...rawProps
    }

    return (
      <ConfigProvider>
        <Notification id={props.id} noIcon={noIcon} />
        <Button
          klId="button"
          onClick={() => openNotification(props)}
        >
          Open the notification box
        </Button>
      </ConfigProvider>
    )
  }

  afterEach(() => {
    notificationDestroy()
  })

  test('should render container', () => {
    const { container } = render(<Wrapper />)

    expect(container.querySelector(`[id="${componentId}"]`)).toBeInTheDocument()
  })

  test('should render error', async () => {
    const { container } = render(<Wrapper mode="error" />)
    const notification = container.querySelector(`[id="${notificationProps.id}"]`) as HTMLElement
    const button = container.querySelector('[kl-id="button"]')!

    await userEvent.click(button)

    expect(notification.querySelector('[data-component-id="icon-error"]')).toBeInTheDocument()
  })

  test('should render warning', async () => {
    const { container } = render(<Wrapper mode="warning" />)
    const notification = container.querySelector(`[id="${notificationProps.id}"]`) as HTMLElement
    const button = container.querySelector('[kl-id="button"]')!

    await userEvent.click(button)

    expect(notification.querySelector('[data-component-id="icon-warning"]')).toBeInTheDocument()
  })

  test('should render success', async () => {
    const { container } = render(<Wrapper mode="success" />)
    const notification = container.querySelector(`[id="${notificationProps.id}"]`) as HTMLElement
    const button = container.querySelector('[kl-id="button"]')!

    await userEvent.click(button)

    expect(notification.querySelector('[data-component-id="icon-success"]')).toBeInTheDocument()
  })

  test('should render info', async () => {
    const { container } = render(<Wrapper mode="info" />)
    const notification = container.querySelector(`[id="${notificationProps.id}"]`)!
    const button = container.querySelector('[kl-id="button"]')!

    await userEvent.click(button)

    expect(notification.querySelector('[data-component-id="icon-info"]')).toBeInTheDocument()
  })

  test('should render without close icon', () => {
    const { container } = render(<Wrapper mode="success" noIcon />)

    const icon = container.querySelector('.ant-notification-notice-icon') as HTMLElement
    expect(icon).not.toBeInTheDocument()
  })

  test('should render a notification after calling the notification service', async () => {
    const { container } = render(<Wrapper mode="error" />)
    expect(container.querySelector('.ant-notification-notice')).not.toBeInTheDocument()
    const button = container.querySelector('[kl-id="button"]')!

    await userEvent.click(button)

    expect(container.querySelector('.ant-notification-notice')).toBeInTheDocument()
    expect(container.querySelector('.ant-notification-notice-close')).toBeInTheDocument()
  })

  test('should remove notification after click on the close icon', async () => {
    const { container } = render(<Wrapper mode="error" />)
    const button = container.querySelector('[kl-id="button"]')!

    await userEvent.click(button)
    await userEvent.click(container.querySelector('.ant-notification-notice-close')!)

    expect(container.querySelector('.ant-notification-notice')).not.toBeInTheDocument()
  })
})
