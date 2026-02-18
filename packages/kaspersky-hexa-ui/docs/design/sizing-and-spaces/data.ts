export type Row = {
  name: string,
  cssVarName: string,
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
    title: 'CSS-Var name',
    key: 'cssVarName',
    dataIndex: 'cssVarName',
    width: 200
  },
  {
    title: 'Base Spacing (px)',
    key: 'baseSpacing',
    dataIndex: 'baseSpacing',
    width: 150
  },
  {
    title: 'Usage',
    key: 'usage',
    dataIndex: 'usage'
  }
]

export const paddingData: Row[] = [
  {
    name: 'small',
    cssVarName: '--spacing--padding_s',
    baseSpacing: 4,
    usage: 'От элементов компонента до его краев.'
  },
  {
    name: 'semi_small',
    cssVarName: '--spacing--padding_sm',
    baseSpacing: 6,
    usage: 'От элементов компонента до его краев.'
  },
  {
    name: 'medium',
    cssVarName: '--spacing--padding_m',
    baseSpacing: 8,
    usage: 'От элементов компонента до его краев.'
  },
  {
    name: 'semi_large',
    cssVarName: '--spacing--padding_ml',
    baseSpacing: 12,
    usage: 'От элементов компонента до его краев.'
  },
  {
    name: 'large',
    cssVarName: '--spacing--padding_l',
    baseSpacing: 16,
    usage: 'От элементов компонента до его краев.'
  },
  {
    name: 'extra_large',
    cssVarName: '--spacing--padding_xl',
    baseSpacing: 24,
    usage: 'От элементов компонента до его краев. Отступ вокруг основного контента в лейауте страницы или сайдбаре.'
  }
]

export const gapData: Row[] = [
  {
    name: 'closest',
    cssVarName: '--spacing--gap_closest',
    baseSpacing: 2,
    usage: 'Самые плотные элементы. В основном, внутри компонентов.'
  },
  {
    name: 'dependent',
    cssVarName: '--spacing--gap_dependent',
    baseSpacing: 4,
    usage: 'В основном, внутри компонентов. Инпут и его дескриптор, лейбл над инпутом.'
  },
  {
    name: 'related',
    cssVarName: '--spacing--gap_related',
    baseSpacing: 8,
    usage: 'Между связанными элементами (например, поле и кнопка), между текстовыми Field.'
  },
  {
    name: 'grouped',
    cssVarName: '--spacing--gap_grouped',
    baseSpacing: 16,
    usage: 'Внутри группы или после H5–H6.'
  },
  {
    name: 'section',
    cssVarName: '--spacing--gap_section',
    baseSpacing: 24,
    usage: 'Внутри секции страницы, между логическими группами: после заголовков H4, заголовка страницы и Lock group, перед тулбаром страницы и якорными ссылками, а также перед и после табов (если они находятся внутри секции). Исключение — если новая секция начинается с табов без заголовка или с Lock group: в этом случае между секциями сохраняется отступ 32px.'
  },
  {
    name: 'separated',
    cssVarName: '--spacing--gap_separated',
    baseSpacing: 32,
    usage: 'Внутри страницы (между секциями) страницы, после H3.'
  }
]

export const borderRadiusData: Row[] = [
  {
    name: 'none',
    cssVarName: '--radius--none',
    baseSpacing: 0,
    usage: ''
  },
  {
    name: 'xs',
    cssVarName: '--radius--xs',
    baseSpacing: 2,
    usage: ''
  },
  {
    name: 's',
    cssVarName: '--radius--s',
    baseSpacing: 8,
    usage: ''
  },
  {
    name: 'sm',
    cssVarName: '--radius--sm',
    baseSpacing: 6,
    usage: ''
  },
  {
    name: 'm',
    cssVarName: '--radius--m',
    baseSpacing: 8,
    usage: ''
  },
  {
    name: 'ml',
    cssVarName: '--radius--ml',
    baseSpacing: 12,
    usage: ''
  },
  {
    name: 'l',
    cssVarName: '--radius--l',
    baseSpacing: 16,
    usage: ''
  },
  {
    name: 'l',
    cssVarName: '--radius--xl',
    baseSpacing: 24,
    usage: ''
  },
  {
    name: 'full',
    cssVarName: '--radius--full',
    baseSpacing: 999,
    usage: ''
  }
]