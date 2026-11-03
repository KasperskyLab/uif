import {
  configure,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react'
import React from 'react'

import '@testing-library/jest-dom'
import '@helpers/localization/i18n'
import { Onboarding } from '../Onboarding'
import { InteractiveTourProps, InteractiveTourStep } from '../types'

jest.mock('../interactive-tour/InteractiveTour', () => ({
  InteractiveTour: ({ visible, onFinish, steps }: InteractiveTourProps) => (
    visible
      ? (
          <div data-testid="mock-tour" data-steps={steps.length}>
            <button type="button" onClick={() => onFinish?.('completed')}>finish tour</button>
          </div>
        )
      : null
  )
}))

const steps: InteractiveTourStep[] = [
  { target: '#first', title: 'First' },
  { target: '#second', title: 'Second' }
]

configure({ testIdAttribute: 'data-testid' })

const testId = 'onboarding-test-id'

describe('Onboarding', () => {
  describe('tour variant', () => {
    test('should render "Try now", "Skip" and the "Don\'t show again" checkbox', async () => {
      render(
        <Onboarding
          testId={testId}
          variant="tour"
          tour={{ steps }}
          header="Header"
          content="Content"
          visible
        />
      )

      await waitFor(() => expect(screen.getByTestId(testId)).toBeInTheDocument())
      expect(screen.getByTestId(`${testId}-try-now-button`)).toBeInTheDocument()
      expect(screen.getByTestId(`${testId}-skip-button`)).toBeInTheDocument()
      expect(screen.getByTestId(`${testId}-dont-show-again`)).toBeInTheDocument()
      expect(screen.queryByTestId(`${testId}-ok-button`)).not.toBeInTheDocument()
    })

    test('should pass the checkbox state to "Skip"', () => {
      const onSkip = jest.fn()
      const onDontShowAgainChange = jest.fn()

      render(
        <Onboarding
          testId={testId}
          variant="tour"
          tour={{ steps }}
          onSkip={onSkip}
          onDontShowAgainChange={onDontShowAgainChange}
          visible
        />
      )

      const skipButton = screen.getByTestId(`${testId}-skip-button`)

      fireEvent.click(skipButton)
      expect(onSkip).toHaveBeenLastCalledWith(false)

      fireEvent.click(screen.getByRole('checkbox'))
      expect(onDontShowAgainChange).toHaveBeenCalledWith(true)

      fireEvent.click(skipButton)
      expect(onSkip).toHaveBeenLastCalledWith(true)
    })

    test('should respect the initial checkbox state', async () => {
      const onTryNow = jest.fn()

      render(
        <Onboarding
          testId={testId}
          variant="tour"
          tour={{ steps }}
          defaultDontShowAgain
          onTryNow={onTryNow}
          visible
        />
      )

      fireEvent.click(await screen.findByTestId(`${testId}-try-now-button`))
      expect(onTryNow).toHaveBeenCalledWith(true)
    })

    test('should start the tour on "Try now", hide the dialog and stop the tour when it ends', async () => {
      const onFinish = jest.fn()

      render(
        <Onboarding
          testId={testId}
          variant="tour"
          tour={{ steps, onFinish }}
          visible
        />
      )

      expect(screen.queryByTestId('mock-tour')).not.toBeInTheDocument()

      fireEvent.click(await screen.findByTestId(`${testId}-try-now-button`))

      const tour = await screen.findByTestId('mock-tour')
      expect(tour).toHaveAttribute('data-steps', '2')
      await waitFor(() =>
        expect(document.querySelector(`[data-testid="${testId}"] .ant-modal-wrap, .ant-modal-wrap`)).toHaveStyle({ display: 'none' }))

      fireEvent.click(screen.getByText('finish tour'))
      expect(onFinish).toHaveBeenCalledWith('completed')
      await waitFor(() => expect(screen.queryByTestId('mock-tour')).not.toBeInTheDocument())
    })
  })

  describe('info variant', () => {
    test('should render the "OK" button', async () => {
      const onOk = jest.fn()

      render(
        <Onboarding
          testId={testId}
          variant="info"
          onOk={onOk}
          visible
        />
      )

      const okButton = await screen.findByTestId(`${testId}-ok-button`)

      expect(screen.getByTestId(`${testId}-ok-button`)).toBeInTheDocument()
      expect(screen.queryByTestId(`${testId}-try-now-button`)).not.toBeInTheDocument()
      expect(screen.queryByTestId(`${testId}-skip-button`)).not.toBeInTheDocument()
      expect(screen.queryByRole('checkbox')).not.toBeInTheDocument()

      fireEvent.click(okButton)
      expect(onOk).toHaveBeenCalledTimes(1)
    })

    test('should render the optional link', async () => {
      const onClick = jest.fn()

      render(
        <Onboarding
          testId={testId}
          variant="info"
          link={{ text: 'Learn more', href: '#learn-more', onClick }}
          visible
        />
      )

      const link = await screen.findByText('Learn more')

      expect(link.closest('a')).toHaveAttribute('href', '#learn-more')
      expect(screen.getByTestId(`${testId}-link`)).toBeInTheDocument()

      fireEvent.click(link)
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  test('should not render the tour before "Try now"', () => {
    render(
      <Onboarding
        testId={testId}
        variant="tour"
        tour={{ steps }}
        visible={false}
      />
    )

    expect(screen.queryByTestId('mock-tour')).not.toBeInTheDocument()
  })
})
