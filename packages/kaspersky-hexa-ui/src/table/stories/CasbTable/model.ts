import { ECellType, ERiskLevelCode } from './constants'

export const model = [
  {
    leadColumn: { type: ECellType.GROUP_NAME, name: 'Email' },
    access: { type: ECellType.GROUP_ACCESS, blockedCount: 0, totalCount: 384 },
    tags: { type: ECellType.TAGS, tags: ['Windows', 'Linux'] },
    children: [
      {
        leadColumn: { type: ECellType.RISK_LEVEL, riskLevel: ERiskLevelCode.medium },
        serviceName: { type: ECellType.SERVICE_NAME, serviceName: '1&1 Mail' },
        access: { type: ECellType.ACCESS, access: 0 },
        tags: { type: ECellType.TAGS, tags: ['Windows', 'Linux'] },
        type: ECellType.GROUP_NAME
      },
      {
        leadColumn: { type: ECellType.RISK_LEVEL, riskLevel: ERiskLevelCode.low },
        serviceName: { type: ECellType.SERVICE_NAME, serviceName: '1&1 Telecom Mail' },
        access: { type: ECellType.ACCESS, access: 2 },
        tags: { type: ECellType.TAGS, tags: ['Windows', 'Linux'] },
        type: ECellType.GROUP_NAME
      },
      {
        leadColumn: { type: ECellType.RISK_LEVEL, riskLevel: ERiskLevelCode.low },
        serviceName: { type: ECellType.SERVICE_NAME, serviceName: '10 Minute Mail' },
        access: { type: ECellType.ACCESS, access: 2 },
        tags: { type: ECellType.TAGS, tags: ['Linux'] },
        type: ECellType.GROUP_NAME
      },
      {
        leadColumn: { type: ECellType.BUTTON },
        type: ECellType.GROUP_NAME
      }
    ],
    key: 'email'
  },
  {
    leadColumn: { type: ECellType.GROUP_NAME, name: 'File Sharing' },
    access: { type: ECellType.GROUP_ACCESS, blockedCount: 0, totalCount: 502 },
    tags: { type: ECellType.TAGS, tags: ['Windows', 'Linux'] },
    children: [
      {
        leadColumn: { type: ECellType.RISK_LEVEL, riskLevel: ERiskLevelCode.low },
        serviceName: { type: ECellType.SERVICE_NAME, serviceName: 'File' },
        access: { type: ECellType.ACCESS, access: 2 },
        tags: { type: ECellType.TAGS, tags: ['Windows'] },
        type: ECellType.GROUP_NAME
      },
      {
        leadColumn: { type: ECellType.BUTTON }
      }
    ],
    key: 'fileSharing'
  }
]
