import { PropPresentationMap } from '@sb/components/Documentation'

export const iconBeforeOptions = ['none', 'placeholder', 'settings'] as const

export const elementAfterOptions = ['none', 'placeholder', 'button'] as const

export const defaultArgs = {
  title: 'Page title',
  description: 'Page description',
  iconBefore: 'placeholder' as const,
  elementAfter: 'placeholder' as const,
  breadcrumbs: true,
  tagsAfter: true
}

export const pageHeaderPropPresentation: PropPresentationMap = {
  title: {
    control: 'text',
    description: 'Заголовок страницы'
  },
  description: {
    control: 'text',
    description: 'Краткое описание страницы'
  },
  iconBefore: {
    control: 'select',
    options: [...iconBeforeOptions],
    description: 'Иконка перед заголовком'
  },
  elementAfter: {
    control: 'select',
    options: [...elementAfterOptions],
    description: 'Элемент в правой части шапки'
  },
  breadcrumbs: {
    control: 'boolean',
    description: 'Показывать хлебные крошки'
  },
  tagsAfter: {
    control: 'boolean',
    description: 'Показывать теги после заголовка'
  }
}
