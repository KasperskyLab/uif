export type SpacingName = 'related' | 'grouped' | 'section' | 'separated'

type SpacingMap = {
  [k in SpacingName]: number
}

type Spacing = SpacingMap & {
  (name: SpacingName): string
}

const spacingMap: SpacingMap = {
  related: 8,
  grouped: 16,
  section: 24,
  separated: 32
}

const spacing = <Spacing> function (name: SpacingName) {
  return `${spacingMap[name]}px`
}

Object.assign(spacing, spacingMap)

export { spacing }
export default spacing
