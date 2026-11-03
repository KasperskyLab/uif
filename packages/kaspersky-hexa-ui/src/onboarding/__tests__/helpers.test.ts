import { ORIGIN, STATUS, TooltipRenderProps } from 'react-joyride'

import {
  getFinishReason,
  getJoyrideOptions,
  getTourButtonProps,
  isDismissOrigin,
  toJoyrideSteps
} from '../interactive-tour/helpers'
import { InteractiveTourStep } from '../types'

describe('toJoyrideSteps', () => {
  const steps: InteractiveTourStep[] = [
    { target: '#target', title: 'Title', text: 'Text' }
  ]

  it('should map the public step to the engine format', () => {
    const [step] = toJoyrideSteps(steps)

    expect(step).toMatchObject({
      target: '#target',
      title: 'Title',
      content: 'Text'
    })
  })

  it('should choose the side automatically by default', () => {
    const [step] = toJoyrideSteps(steps)

    expect(step.placement).toBe('auto')
  })

  it('should set the step id only when it is given', () => {
    expect(toJoyrideSteps(steps)[0]).not.toHaveProperty('id')
    expect(toJoyrideSteps([{ ...steps[0], id: 'intro' }])[0]).toHaveProperty('id', 'intro')
  })
})

describe('getTourButtonProps', () => {
  it('should keep the handler and the accessibility attributes and drop the native title', () => {
    const onClick = jest.fn()
    const props = {
      'aria-label': 'Next',
      'data-action': 'primary',
      onClick,
      role: 'button',
      title: 'Next'
    } as TooltipRenderProps['primaryProps']

    expect(getTourButtonProps(props)).toEqual({
      'aria-label': 'Next',
      'data-action': 'primary',
      onClick
    })
  })
})

describe('isDismissOrigin', () => {
  it.each([
    [ORIGIN.KEYBOARD, true],
    [ORIGIN.OVERLAY, true],
    [ORIGIN.BUTTON_PRIMARY, false],
    [null, false]
  ])('should detect a dismiss for %s', (origin, expected) => {
    expect(isDismissOrigin(origin)).toBe(expected)
  })
})

describe('getFinishReason', () => {
  it('should report a completed tour', () => {
    expect(getFinishReason(STATUS.FINISHED, ORIGIN.BUTTON_PRIMARY)).toBe('completed')
  })

  it('should report a skipped tour as closed', () => {
    expect(getFinishReason(STATUS.SKIPPED, ORIGIN.BUTTON_CLOSE)).toBe('closed')
  })

  it('should report a tour dismissed on the last step as closed', () => {
    expect(getFinishReason(STATUS.FINISHED, ORIGIN.KEYBOARD)).toBe('closed')
    expect(getFinishReason(STATUS.FINISHED, ORIGIN.OVERLAY)).toBe('closed')
  })
})
