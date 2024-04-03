import type { ECellType, ERiskLevelCode, AccessCode } from './constants'

export type TGroupName = { type: ECellType.GROUP_NAME, name: string }
export type TGroupAccess = { type: ECellType.GROUP_ACCESS, blockedCount: number, totalCount: number }
export type TRiskLevel = { type: ECellType.RISK_LEVEL, riskLevel: ERiskLevelCode }
export type TServiceName = { type: ECellType.SERVICE_NAME, serviceName: string }
export type TAccess = { type: ECellType.ACCESS, access: number }
export type TButton = { type: ECellType.BUTTON }

export type TData = TGroupAccess | TGroupName | TRiskLevel | TServiceName | TAccess | TButton | undefined

export type TOption = { label: string, value: AccessCode }
