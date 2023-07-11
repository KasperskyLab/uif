import { SeverityMode } from './types'

export const severityTextLocalization: {
  [key in SeverityMode]: string;
} = {
  critical: 'severity.critical',
  high: 'severity.high',
  medium: 'severity.medium',
  low: 'severity.low',
  info: 'severity.info',
  positive: 'severity.positive'
}
