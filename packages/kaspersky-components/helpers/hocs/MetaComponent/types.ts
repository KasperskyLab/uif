export type MetaList = {
  dod: MetaDodProps['list'],
  component: string,
  description?: string,
  usage: string,
  designLink?: string,
  figmaView?: string
}

export const metaDod = {
  designTokens: 'Дизайн токены',
  useThemedHook: 'Использование theme hook',
  unitTests: 'Unit tests',
  screenshotTests: 'Screenshot tests',
  migration: 'Описание миграции',
  apiTable: 'api table',
  storybook: 'storybook',
  figmaView: 'Отображение в Фигме'
}

export type MetaDodProps = {
  list: Partial<Record<keyof typeof metaDod, boolean>>
}
