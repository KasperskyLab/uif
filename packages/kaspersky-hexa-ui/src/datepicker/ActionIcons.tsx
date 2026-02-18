import { ActionButton } from '@src/action-button'
import React from 'react'

import {
  ArrowDoubleLeft,
  ArrowDoubleRight,
  ArrowLeftMini,
  ArrowRightMini
} from '@kaspersky/hexa-ui-icons/16'

export const ArrowDoubleRightIcon = ({ testId }: { testId?: string }): JSX.Element =>
  <ActionButton _wrapInSpan size="large" icon={<ArrowDoubleRight />} testId={`${testId}-calendar-super-next-icon`} role="calendar-super-next-icon" />

export const ArrowDoubleLeftIcon = ({ testId }: { testId?: string }): JSX.Element =>
  <ActionButton _wrapInSpan size="large" icon={<ArrowDoubleLeft />} testId={`${testId}-calendar-super-prev-icon`} role="calendar-super-prev-icon" />

export const ArrowRightMiniIcon = ({ testId }: { testId?: string }): JSX.Element =>
  <ActionButton _wrapInSpan size="large" icon={<ArrowRightMini />} testId={`${testId}-calendar-next-icon`} role="calendar-next-icon" />

export const ArrowLeftMiniIcon = ({ testId }: { testId?: string }): JSX.Element =>
  <ActionButton _wrapInSpan size="large" icon={<ArrowLeftMini />} testId={`${testId}-calendar-prev-icon`} role="calendar-prev-icon" />
