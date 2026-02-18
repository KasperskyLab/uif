import { assertUnreachable } from '@helpers/typesHelpers'
import { Tag, TagMode } from '@src/tag'
import { Text } from '@src/typography'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { StatusErrorSolid, StatusOkSolid} from '@kaspersky/hexa-ui-icons/16'

import { LicenseCardMode } from './types'

export const copyLicenseKey =  async (licenseKey: string) => {
  try {
    await navigator.clipboard.writeText(licenseKey)
  } catch (error) {
    console.error(error)
  }
}

export const getTagModeFromLicenseCardMode = (mode: LicenseCardMode): TagMode => {
  switch (mode) {
    case 'valid':
    case 'expired':
    case 'finished':
      return 'neutral'
    case 'warning':
      return 'yellow'
    case 'expiresSoon':
      return 'red'
    default:
      assertUnreachable(mode, 'Invalid LicenseCard mode')
      return 'neutral'
  }
}

type RenderDaysProps = {
  mode: LicenseCardMode,
  daysRemaining: number | undefined
}

export const RenderDaysRemaining = ({ mode, daysRemaining }: RenderDaysProps) => {
  const { t } = useTranslation()

  const getDaysLeftTranslation = (count: number): string => {

    if (count === 1) {
      return t('licenseCard.dayLeft', { count }) ?? `${count} day left`
    }

    return t('licenseCard.daysLeft', { count }) ?? `${count} days left`
  }

  if (mode === 'valid') {
    return <Text>{getDaysLeftTranslation(daysRemaining ?? 0)}</Text>
  }

  return (
    <Tag
      mode={getTagModeFromLicenseCardMode(mode)}
      outlined
      size="small"
    >
      {getDaysLeftTranslation(daysRemaining ?? 0)}
    </Tag>
  )
}

export const shouldShowRemainingField = (mode: LicenseCardMode): boolean => {
  return !['expired', 'finished'].includes(mode)
}

const STATUS_TO_PROPS_MAP = {
  valid: {
    icon: <StatusOkSolid />,
    label: 'status',
    mode: 'positive' 
  },
  warning: {
    icon: <StatusOkSolid />,
    label: 'status',
    mode: 'positive' 
  },
  expiresSoon: {
    icon: <StatusOkSolid />,
    label: 'status',
    mode: 'positive' 
  },
  expired: {
    icon: <StatusErrorSolid />,
    label: 'expired',
    mode: 'critical'
  },
  finished: {
    icon: <StatusErrorSolid />,
    label: 'expired',
    mode: 'critical'
  }
} as const

export const statusToProps = (mode: LicenseCardMode) => {
  return STATUS_TO_PROPS_MAP[mode] || STATUS_TO_PROPS_MAP.valid
}
