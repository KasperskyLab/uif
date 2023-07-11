import { SPACE_KEY, BORDER_RADIUS_KEY } from '../../types'

const getMappingSize = <T extends string | number | symbol>(
  count: number,
  quantum: number
) => {
  return new Array(count)
    .fill(0)
    .reduce<{ [key in T]: number }>((spaces, _, index) => {
    spaces[(index + 1) as T] = quantum * (index + 1)
    return spaces
  }, {} as { [key in T]: number })
}

const SPACES_QUANTUM = 2
const BORDER_RADIUS_QUANTUM = 2

const SPACES_COUNT = 32
const BORDER_RADIUS_COUNT = 8

export const SPACES = getMappingSize<SPACE_KEY>(SPACES_COUNT, SPACES_QUANTUM)
export const BORDER_RADIUS = getMappingSize<BORDER_RADIUS_KEY>(
  BORDER_RADIUS_COUNT,
  BORDER_RADIUS_QUANTUM
)
