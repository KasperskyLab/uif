import type { PropPresentationMap } from '@sb/components/Documentation'

export const dropdownDesignPropPresentation: PropPresentationMap = {
  variant: {
    description: 'Вариант отображения выпадающего списка',
    type: 'slot | singleChoice | multipleChoice | treeSingleChoice | treeMultipleChoice | withSubitems | placeHolder | loading'
  },
  scrollbar: {
    description: 'Отображение полосы прокрутки',
    type: 'Boolean',
    defaultValue: 'false'
  },
  stickyHeader: {
    description: 'Закрепление заголовка выпадающего списка',
    type: 'Boolean',
    defaultValue: 'false'
  },
  stickyFooter: {
    description: 'Закрепление нижней части выпадающего списка',
    type: 'Boolean',
    defaultValue: 'false'
  }
}
