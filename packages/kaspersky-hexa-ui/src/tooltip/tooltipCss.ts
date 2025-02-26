import { TooltipProps } from './types'

export const ALIGNS: Record<
  Required<TooltipProps>['placement'],
  Required<TooltipProps>['align']
> = {
  bottom: { offset: [0, -1] },
  left: { offset: [1, 0] },
  right: { offset: [-1, 0] },
  top: { offset: [0, 1] },
  // TODO set correct offsets for new placements below
  topLeft: { offset: [0, 0] },
  topRight: { offset: [0, 0] },
  bottomLeft: { offset: [0, 0] },
  bottomRight: { offset: [0, 0] },
  leftTop: { offset: [0, 0] },
  leftBottom: { offset: [0, 0] },
  rightTop: { offset: [0, 0] },
  rightBottom: { offset: [0, 0] }
}
