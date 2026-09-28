export const CIRCULAR_SIZE = 24
const CIRCULAR_STROKE_WIDTH = 2

const center = CIRCULAR_SIZE / 2

export const circleProps = {
  cx: center,
  cy: center,
  r: (CIRCULAR_SIZE - CIRCULAR_STROKE_WIDTH) / 2,
  pathLength: 100,
  transform: `rotate(-90 ${center} ${center})`
}
