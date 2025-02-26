export type ObjectValue = Record<string, unknown>

export type ObjectMergerConfig = {
  skipUndefined?: boolean
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const objectMerger = (config: ObjectMergerConfig = {}) => {
  type Hopper = {
    <T>(target: T): T,
    <T, S1>(target: T, source1: S1): T & S1,
    <T, S1, S2>(target: T, source1: S1, source2: S2): T & S1 & S2,
    <T, S1, S2, S3>(target: T, source1: S1, source2: S2, source3: S3): T & S1 & S2 & S3,
    <T, S1, S2, S3, S4>(target: T, source1: S1, source2: S2, source3: S3, source4: S4): T & S1 & S2 & S3 & S4,
    (target: ObjectValue, ...sources: ObjectValue[]): ObjectValue
  }

  const { skipUndefined = false } = config

  const allValuesAreObjects = (values: unknown[]): values is ObjectValue[] => {
    return values.every((value) => {
      return typeof value === 'object' && value !== null && !Array.isArray(value)
    })
  }

  const hopper: Hopper = (...values: unknown[]) => {
    if (!allValuesAreObjects(values)) {
      throw new Error('All merged values must be objects!')
    }

    const container = {}
    const [first, ...rest] = values

    const mergeResult = Object.assign(container, first, ...rest.map((value) => {
      const entries = Object.entries(value)

      const iterationResult = entries.filter(([, value]) => {
        if (skipUndefined && value === undefined) {
          return false
        }

        return true
      })

      return Object.fromEntries(iterationResult)
    }))

    return mergeResult
  }

  return hopper
}

const smartMerge = {
  objects: objectMerger
}

export default smartMerge
