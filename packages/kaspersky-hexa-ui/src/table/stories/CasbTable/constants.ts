export enum ECellType {
  GROUP_NAME = 'GROUP_NAME',
  GROUP_ACCESS = 'GROUP_ACCESS',
  RISK_LEVEL = 'RISK_LEVEL',
  SERVICE_NAME = 'SERVICE_NAME',
  ACCESS = 'ACCESS',
  BUTTON = 'BUTTON',
  TAGS = 'TAGS'
}

export enum ERiskLevelCode {
  low,
  medium,
  high
}

export enum AccessCode {
  allow = 0,
  block = 2
}

export const selectOptions = [
  { label: 'Allowed', value: AccessCode.allow },
  { label: 'Blocked', value: AccessCode.block }
]
