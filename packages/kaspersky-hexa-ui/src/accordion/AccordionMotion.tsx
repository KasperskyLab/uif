import type { CSSMotionProps, MotionEndEventHandler, MotionEventHandler } from 'rc-motion'
import type { MotionEvent } from 'rc-motion/lib/interface'

import styles from './Accordion.module.scss'

const getCollapsedHeight: MotionEventHandler = () => ({ height: 0, opacity: 0 })

const getRealHeight: MotionEventHandler = (node) => {
  const { scrollHeight } = node
  return { height: scrollHeight, opacity: 1 }
}

const getCurrentHeight: MotionEventHandler = (node) => ({ height: node ? node.offsetHeight : 0 })

const skipOpacityTransition: MotionEndEventHandler = (_, event: MotionEvent) => (
  event?.deadline === true || (event as TransitionEvent).propertyName === 'height'
)

export const accordionMotion: CSSMotionProps = {
  motionName: styles['hexa-ui-motion-accordion'],
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500
}
