import { PropPresentationMap } from '@sb/components/Documentation'

export const defaultArgs = {
  titleText: 'Tenant filter',
  counterText: 'Selected',
  buttonText: '',
  withButton: false,
  withSearch: true,
  withIcon: false,
  defaultSelectedKeys: []
}

export const tenantFilterPropPresentation: PropPresentationMap = {
  titleText: { control: 'text', description: 'Текст заголовка фильтра.' },
  counterText: { control: 'text', description: 'Текст рядом со счётчиком выбранных тенантов.' },
  buttonText: { control: 'text', description: 'Текст кнопки применения фильтра.' },
  withButton: { control: 'boolean', description: 'Отображение кнопки применения фильтра.' },
  withSearch: { control: 'boolean', description: 'Отображение поля поиска по дереву тенантов.' },
  withIcon: { control: 'boolean', description: 'Отображение счётчика выбранных тенантов с иконкой.' }
}
