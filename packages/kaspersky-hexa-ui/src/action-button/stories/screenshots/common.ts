import { StatesMatrixItem } from '@sb/components/StatesMatrix'
import { StoryObj } from '@storybook/react'

import { ActionButton } from '../../ActionButton'
import { ActionButtonMode, ActionButtonSize } from '../../types'

export type Story = StoryObj<typeof ActionButton>

export type StateRow = StatesMatrixItem & {
  disabled?: boolean
}

export type VariantColumn = StatesMatrixItem & {
  mode: ActionButtonMode,
  background?: string
}

export type SizeRow = StatesMatrixItem & {
  key: ActionButtonSize
}

// Строки readonly и loading нет: у ActionButton нет этих пропов в API.
// Отдельного правила :focus нет — ring задаёт :focus-visible.
export const stateRows: StateRow[] = [
  { key: 'default', label: 'Default' },
  { key: 'hover', label: 'Hover' },
  { key: 'active', label: 'Active' },
  { key: 'focus-visible', label: 'Focus visible' },
  { key: 'disabled', label: 'Disabled', disabled: true }
]

// mode filledInverted помечен как deprecated
export const variantColumns: VariantColumn[] = [
  { key: 'ghost', label: 'Ghost', mode: 'ghost' },
  { key: 'ghostInverted', label: 'Ghost Inverted', mode: 'ghostInverted', background: 'var(--common--danger--enabled)' },
  { key: 'filled', label: 'Filled', mode: 'filled' },
  { key: 'onLight', label: 'On Light', mode: 'onLight', background: 'var(--fg--warning--muted)' }
]

export const sizeRows: SizeRow[] = (['small', 'medium', 'large'] as ActionButtonSize[]).map(size => ({
  key: size,
  label: size
}))

export const wrapperStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  minWidth: '120px',
  minHeight: '40px'
}
