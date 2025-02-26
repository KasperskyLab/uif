import { LockGroupDesignTokens } from '@src/lock-group/types'

export const lockGroup = (): LockGroupDesignTokens => {
  return {
    iconColor: 'var(--lock_group--icon)',
    color: 'var(--lock_group--text)',
    borderColor: 'var(--divider--bg--light)',
    horizontalMargin: '4px'
  }
}
