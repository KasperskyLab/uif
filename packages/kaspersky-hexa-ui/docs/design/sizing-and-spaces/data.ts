export type Row = {
  name: string,
  baseSpacing: number,
  usage: string
}

export const columns = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name'
  },
  {
    title: 'Base Spacing',
    key: 'baseSpacing',
    dataIndex: 'baseSpacing'
  },
  {
    title: 'Usage',
    key: 'usage',
    dataIndex: 'usage'
  }
]

export const marginsData: Row[] = [
  {
    name: 'related',
    baseSpacing: 8,
    usage: 'Между связанными компонентами'
  },
  {
    name: 'grouped',
    baseSpacing: 16,
    usage: 'Внутри группы компонентов,  после заголовка H6, H5'
  },
  {
    name: 'section',
    baseSpacing: 24,
    usage: 'Между группами компонентов, после заголовка H4, перед тулбаром, табами и якорными ссылками'
  },
  {
    name: 'separated',
    baseSpacing: 32,
    usage: 'Между блоками страницы, после заголовка H3 (главный на странице)'
  }
]

export const paddingData: Row[] = [
  {
    name: '2x small',
    baseSpacing: 4,
    usage: 'От элементов компонента до его краев'
  },
  {
    name: 'x small',
    baseSpacing: 6,
    usage: 'От элементов компонента до его краев'
  },
  {
    name: 'small',
    baseSpacing: 8,
    usage: 'От элементов компонента до его краев'
  },
  {
    name: 'medium',
    baseSpacing: 12,
    usage: 'От элементов компонента до его краев'
  },
  {
    name: 'large',
    baseSpacing: 16,
    usage: 'От элементов компонента до его краев'
  },
  {
    name: 'x large',
    baseSpacing: 24,
    usage: 'От элементов компонента до его краев'
  }
]

export const gapData: Row[] = [
  {
    name: 'closest',
    baseSpacing: 2,
    usage: 'Между ближайшими элементами'
  },
  {
    name: 'dependent',
    baseSpacing: 4,
    usage: 'Между близкими (радио/чекбокс и его лейбл, иконка и текст)'
  },
  {
    name: 'related',
    baseSpacing: 8,
    usage: 'Между связанными (текст и описание)'
  },
  {
    name: 'grouped',
    baseSpacing: 16,
    usage: 'Внутри группы (несколько кнопок)'
  }
]
