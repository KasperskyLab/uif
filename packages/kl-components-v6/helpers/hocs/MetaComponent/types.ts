export interface IDodList {
  designTokens: boolean,
  useThemedHook: boolean,
  unitTests: boolean,
  screenshotTests: boolean,
  migration: boolean,
  apiTable: boolean,
  storybook: boolean,
  figmaView?: boolean,
}

export interface IMeta {
  dod: IDodList,
  component: string,
  desctiption?: string,
  description?: string,
  usage: string,
  designLink?: string,
  figmaView?: string,
}
export interface IMetaList {
  dod: Record<keyof IDodList, string>,
}

export const metaList: IMetaList = {
  dod: {
    designTokens: 'Design tokens',
    useThemedHook: 'Theme hook usage',
    unitTests: 'Unit tests',
    screenshotTests: 'Screenshot tests',
    migration: 'Migration description',
    apiTable: 'API table',
    storybook: 'Storybook',
    figmaView: 'Figma Link'
  }
}
