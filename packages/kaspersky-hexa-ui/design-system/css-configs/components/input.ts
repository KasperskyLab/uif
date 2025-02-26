import { focus } from '@design-system/css-configs/tokens/focus'
import { ComponentContext } from '@design-system/css-configs/types'
import { InputColorConfig } from '@src/input/types'

export const input = ({ effects }: ComponentContext): InputColorConfig => ({
  enabled: {
    placeholderColor: 'var(--input_text--text--enabled--placeholder)',
    color: 'var(--input_text--text--enabled--value)',
    background: 'var(--input_text--bg--enabled)',
    border: 'var(--input_text--border--enabled)'
  },
  hover: {
    border: 'var(--input_text--border--hover)'
  },
  disabled: {
    color: 'var(--input_text--text--disabled--value)',
    background: 'var(--input_text--bg--disabled)',
    border: 'var(--input_text--bg--disabled)'
  },
  readonly: {
    color: 'var(--input_text--text--readonly--value)'
  },
  error: {
    border: 'var(--input_text--border--error)'
  },
  success: {
    border: 'var(--input_text--border--success)'
  },
  ...focus({ effects })
}
)
