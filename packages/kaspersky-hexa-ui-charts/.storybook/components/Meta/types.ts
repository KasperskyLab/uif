export type MetaList = {
  dod?: MetaDodProps['list'],
  component?: string,
  description?: string,
  usage?: string,
  designLink?: string,
  pixsoView?: string
}

export const metaDod = {
  designTokens: 'Design tokens',
  unitTests: 'Unit tests',
  screenshotTests: 'Screenshot tests',
  storybook: 'Storybook',
  pixsoView: 'Pixso'
}

export type MetaDodProps = {
  list: Partial<Record<keyof typeof metaDod, boolean>>
}
