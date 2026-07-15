import { PopoverProps } from './types'

export const ALIGNS: Record<
  Required<PopoverProps>['placement'],
  Required<PopoverProps>['align']
> = {
  bottom: { offset: [0, -1] },
  left: { offset: [1, 0] },
  right: { offset: [-1, 0] },
  top: { offset: [0, 1] },
  topLeft: { offset: [-5, 1] },
  topRight: { offset: [5, 1] },
  bottomLeft: { offset: [-5, -1] },
  bottomRight: { offset: [5, -1] },
  leftTop: { offset: [1, -5] },
  leftBottom: { offset: [1, 5] },
  rightTop: { offset: [-1, -5] },
  rightBottom: { offset: [-1, 5] }
}
