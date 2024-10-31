export type MetaList = {
  dod?: MetaDodProps['list'],
  component?: string,
  description?: string,
  usage?: string,
  designLink?: string,
  figmaView?: string
}

export const metaDod = {
  designTokens: 'Design tokens',
  useThemedHook: 'Theme hook',
  unitTests: 'Unit tests',
  screenshotTests: 'Screenshot tests',
  migration: 'Migration',
  apiTable: 'Api',
  storybook: 'Storybook',
  figmaView: 'Figma'
}

export type MetaDodProps = {
  list: Partial<Record<keyof typeof metaDod, boolean>>
}
