import { Tag } from '@src/tag'
import React, { FC } from 'react'

import { ERiskLevelCode } from '../constants'
import type { TRiskLevel } from '../types'

const RiskLevelModeByCode = {
  [ERiskLevelCode.low]: 'emerald',
  [ERiskLevelCode.medium]: 'yellow',
  [ERiskLevelCode.high]: 'red'
} as const

const RiskLevelLabelByCode = {
  [ERiskLevelCode.low]: 'Low',
  [ERiskLevelCode.medium]: 'Medium',
  [ERiskLevelCode.high]: 'High'
} as const

export const RiskLevel: FC<TRiskLevel> = ({ riskLevel }) => {
  // eslint-disable-next-line security/detect-object-injection
  const riskLevelLabel = RiskLevelLabelByCode[riskLevel]
  // eslint-disable-next-line security/detect-object-injection
  const riskLevelMode = RiskLevelModeByCode[riskLevel]

  return (
    <Tag mode={riskLevelMode} outlined>
      {riskLevelLabel}
    </Tag>
  )
}
