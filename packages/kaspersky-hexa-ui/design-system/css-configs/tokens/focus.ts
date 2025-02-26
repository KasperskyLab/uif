import { ComponentContext } from '@design-system/css-configs/types'

export type Focus = {
  focus?: {
    boxShadow: string
  }
}

export const focus = ({ effects }: ComponentContext): Focus => {
  return {
    focus: {
      boxShadow: `${effects.focus[1]} var(--focus--stroke)`
    }
  }
}
