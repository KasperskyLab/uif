
export type MergingTableCounter = {
  new: number,
  affected: number,
  removed: number,
  deprecated: number
}

export type NewSectionsProps = {
  data: [string, Level4][]
}

export type MergingSectionData = {
  sectionName: string,
  latestSectionValue: Level3[],
  currentSectionWithChanges: Level3[]
}

export type MergingSectionProps = {
  section: MergingSectionData
}

export type ColorItemProps = {
  index: string,
  colorName: string,
  colorValue: ColorInfo
}

export type ColorInfo = {
  value: string,
  type: string,
  description?: string,
  category?: string,
  exportKey?: string,
  affected?: boolean,
  deprecated?: boolean,
  removed?: boolean,
  isNew?: boolean
}

export type Level3 = [string, ColorInfo] | [string, Level4]

export type Level4 = [string, ColorInfo][]
