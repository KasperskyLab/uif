import { BlockProps, PaddingProps } from 'victory'

export function getPaddings (padding?: PaddingProps): Required<BlockProps> {
  if (!padding) {
    return {
      top: 50,
      bottom: 50,
      left: 50,
      right: 50
    }
  }
  return typeof padding === 'object'
    ? { top: padding.top ?? 0, right: padding.right ?? 0, bottom: padding.bottom ?? 0, left: padding.left ?? 0 }
    : {
        top: padding,
        bottom: padding,
        left: padding,
        right: padding
      }
}
