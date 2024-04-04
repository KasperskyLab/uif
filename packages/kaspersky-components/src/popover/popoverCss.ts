import { PopoverProps } from './types'

export const ALIGNS: Record<Required<PopoverProps>['placement'], Required<PopoverProps>['align']> = {
  bottom: { offset: [0, -1] },
  left: { offset: [1, 0] },
  right: { offset: [-1, 0] },
  top: { offset: [0, 1] }
}
