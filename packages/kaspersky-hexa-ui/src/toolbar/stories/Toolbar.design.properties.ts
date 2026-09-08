import type { PropPresentationMap } from '@sb/components/Documentation'

export const toolbarDesignPropPresentation: PropPresentationMap = {
  'size': {
    description: 'Размер компонента',
    type: 'extraSmall | small | medium | large | extraLarge'
  },
  'inverted': {
    description: 'Инвертированное цветовое оформление',
    type: 'true | false'
  },
  'state': {
    description: 'Интерактивное состояние компонента',
    type: 'loading | disabled | active | hover | enabled | focus'
  },
  'loading': {
    description: 'Состояние загрузки',
    type: 'true | false'
  },
  'disabled': {
    description: 'Недоступность для взаимодействия',
    type: 'false | true'
  },
  'variant': {
    description: 'Визуальный вариант компонента',
    type: 'withBorder | withoutBorder | collapsible | default | buttons | slot | iconButton | button | compact | simple'
  },
  'mode': {
    description: 'Цветовой режим компонента',
    type: 'accent | not-active | new | update | inProgress | resolved | inIncident | critical | high | medium | low | info | positive | bold | inverted | onLightStatic | light | ghost | filled | onLight | ghostInverted'
  },
  'selected': {
    description: 'Выбранное состояние',
    type: 'true | false'
  },
  'numberOfButtons': {
    description: 'Количество кнопок в группе',
    type: '1button | 2buttons | 3buttons | 8buttons | 7buttons | 6buttons | 5buttons | 4buttons | swapInstance'
  },
  'collapsed': {
    description: 'Свёрнутое состояние поиска',
    type: 'false | true'
  },
  'placeholder': {
    description: 'Отображение плейсхолдера',
    type: 'false | true'
  },
  'orientation': {
    description: 'Ориентация расположения элементов',
    type: 'horizontal | vertical'
  },
  'count': {
    description: 'Количество элементов в группе',
    type: '10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1'
  },
  'direction': {
    description: 'Направление расположения элементов',
    type: 'vertical | horizontal'
  },
  'leftItems': {
    description: 'Отображение левой области панели',
    type: 'Boolean',
    defaultValue: 'true'
  },
  'search': {
    description: 'Отображение поля поиска',
    type: 'Boolean',
    defaultValue: 'true'
  },
  'rightItems': {
    description: 'Отображение правой области панели',
    type: 'Boolean',
    defaultValue: 'true'
  },
  'description': {
    description: 'Отображение описания рядом с элементом',
    type: 'Boolean',
    defaultValue: 'false'
  },
  'icon_': {
    description: 'Заменяемая иконка',
    label: '🔄 icon',
    type: 'Instance Swap'
  },
  'indicator': {
    description: 'Отображение индикатора',
    type: 'Boolean',
    defaultValue: 'false'
  },
  'iconBefore': {
    description: 'Отображение иконки перед текстом',
    type: 'Boolean',
    defaultValue: 'true'
  },
  'iconAfter': {
    description: 'Отображение иконки после текста',
    type: 'Boolean',
    defaultValue: 'false'
  },
  'IconBefore_': {
    description: 'Заменяемая иконка перед текстом',
    label: '🔄 IconBefore',
    type: 'Instance Swap'
  },
  'text': {
    description: 'Текст кнопки',
    label: '✏️ text',
    type: 'Text',
    defaultValue: 'Button'
  },
  'showMore': {
    description: 'Отображение дополнительного действия',
    type: 'Boolean',
    defaultValue: 'true'
  },
  'value': {
    description: 'Значение поля поиска',
    label: '✏️ value',
    type: 'Text',
    defaultValue: 'Search something and press Enter...'
  },
  'children_': {
    description: 'Заменяемое содержимое элемента',
    label: '🔄 children',
    type: 'Instance Swap'
  },
  'elementAfter': {
    description: 'Отображение элемента после содержимого',
    type: 'Boolean',
    defaultValue: 'false'
  }
}

export const toolbarLeftItemsDesignPropPresentation: PropPresentationMap = {
  'numberOfButtons': {
    description: 'Количество кнопок в группе',
    type: '1button | 2buttons | 3buttons | 8buttons | 7buttons | 6buttons | 5buttons | 4buttons | swapInstance'
  },
  'state': {
    description: 'Интерактивное состояние компонента',
    type: 'loading | disabled | active | hover | enabled'
  },
  'loading': {
    description: 'Состояние загрузки',
    type: 'true | false'
  },
  'disabled': {
    description: 'Недоступность для взаимодействия',
    type: 'false | true'
  },
  'size': {
    description: 'Размер компонента',
    type: 'extraSmall | small | medium | large | extraLarge'
  },
  'inverted': {
    description: 'Инвертированное цветовое оформление',
    type: 'true | false'
  },
  'variant': {
    description: 'Визуальный вариант компонента',
    type: 'compact | simple | default | withBorder | withoutBorder'
  },
  'mode': {
    description: 'Цветовой режим компонента',
    type: 'accent | not-active | new | update | inProgress | resolved | inIncident | critical | high | medium | low | info | positive | bold | inverted | onLightStatic | light'
  },
  'orientation': {
    description: 'Ориентация расположения элементов',
    type: 'horizontal | vertical'
  },
  'showMore': {
    description: 'Отображение дополнительного действия',
    type: 'Boolean',
    defaultValue: 'true'
  },
  'icon_': {
    description: 'Заменяемая иконка',
    label: '🔄 icon',
    type: 'Instance Swap'
  },
  'indicator': {
    description: 'Отображение индикатора',
    type: 'Boolean',
    defaultValue: 'false'
  },
  'iconBefore': {
    description: 'Отображение иконки перед текстом',
    type: 'Boolean',
    defaultValue: 'true'
  },
  'iconAfter': {
    description: 'Отображение иконки после текста',
    type: 'Boolean',
    defaultValue: 'false'
  },
  'IconBefore_': {
    description: 'Заменяемая иконка перед текстом',
    label: '🔄 IconBefore',
    type: 'Instance Swap'
  },
  'text': {
    description: 'Текст кнопки',
    label: '✏️ text',
    type: 'Text',
    defaultValue: 'Button'
  },
  'description': {
    description: 'Отображение описания рядом с элементом',
    type: 'Boolean',
    defaultValue: 'false'
  }
}

export const toolbarSearchDesignPropPresentation: PropPresentationMap = {
  'variant': {
    description: 'Визуальный вариант компонента',
    type: 'collapsible | default | withBorder | withoutBorder | iconButton | button'
  },
  'collapsed': {
    description: 'Свёрнутое состояние поиска',
    type: 'false | true'
  },
  'state': {
    description: 'Интерактивное состояние компонента',
    type: 'enabled | focus | hover | active | loading | disabled'
  },
  'placeholder': {
    description: 'Отображение плейсхолдера',
    type: 'false | true'
  },
  'selected': {
    description: 'Выбранное состояние',
    type: 'true | false'
  },
  'loading': {
    description: 'Состояние загрузки',
    type: 'false | true'
  },
  'disabled': {
    description: 'Недоступность для взаимодействия',
    type: 'false | true'
  },
  'size': {
    description: 'Размер компонента',
    type: 'extraSmall | small | medium | large | extraLarge'
  },
  'inverted': {
    description: 'Инвертированное цветовое оформление',
    type: 'true | false'
  },
  'mode': {
    description: 'Цветовой режим компонента',
    type: 'accent | not-active | new | update | inProgress | resolved | inIncident | critical | high | medium | low | info | positive | ghost | filled | onLight | ghostInverted'
  },
  'value': {
    description: 'Значение поля поиска',
    label: '✏️ value',
    type: 'Text',
    defaultValue: 'Search something and press Enter...'
  },
  'icon_': {
    description: 'Заменяемая иконка',
    label: '🔄 icon',
    type: 'Instance Swap'
  },
  'indicator': {
    description: 'Отображение индикатора',
    type: 'Boolean',
    defaultValue: 'false'
  },
  'description': {
    description: 'Отображение описания рядом с элементом',
    type: 'Boolean',
    defaultValue: 'false'
  },
  'iconBefore': {
    description: 'Отображение иконки перед текстом',
    type: 'Boolean',
    defaultValue: 'true'
  },
  'elementAfter': {
    description: 'Отображение элемента после содержимого',
    type: 'Boolean',
    defaultValue: 'false'
  },
  'text': {
    description: 'Текст кнопки',
    label: '✏️ text',
    type: 'Text',
    defaultValue: 'Action'
  }
}

export const toolbarRightItemsDesignPropPresentation: PropPresentationMap = {
  'variant': {
    description: 'Визуальный вариант компонента',
    type: 'buttons | slot | compact | simple | default | withBorder | withoutBorder'
  },
  'count': {
    description: 'Количество элементов в группе',
    type: '10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1'
  },
  'direction': {
    description: 'Направление расположения элементов',
    type: 'vertical | horizontal'
  },
  'state': {
    description: 'Интерактивное состояние компонента',
    type: 'loading | disabled | active | hover | enabled'
  },
  'loading': {
    description: 'Состояние загрузки',
    type: 'true | false'
  },
  'disabled': {
    description: 'Недоступность для взаимодействия',
    type: 'false | true'
  },
  'size': {
    description: 'Размер компонента',
    type: 'extraSmall | small | medium | large | extraLarge'
  },
  'inverted': {
    description: 'Инвертированное цветовое оформление',
    type: 'true | false'
  },
  'mode': {
    description: 'Цветовой режим компонента',
    type: 'accent | not-active | new | update | inProgress | resolved | inIncident | critical | high | medium | low | info | positive'
  },
  'children_': {
    description: 'Заменяемое содержимое элемента',
    label: '🔄 children',
    type: 'Instance Swap'
  },
  'icon_': {
    description: 'Заменяемая иконка',
    label: '🔄 icon',
    type: 'Instance Swap'
  },
  'indicator': {
    description: 'Отображение индикатора',
    type: 'Boolean',
    defaultValue: 'false'
  },
  'description': {
    description: 'Отображение описания рядом с элементом',
    type: 'Boolean',
    defaultValue: 'false'
  }
}

export const toolbarButtonDesignPropPresentation: PropPresentationMap = {
  'state': {
    description: 'Интерактивное состояние компонента',
    type: 'loading | disabled | active | hover | enabled'
  },
  'loading': {
    description: 'Состояние загрузки',
    type: 'true | false'
  },
  'disabled': {
    description: 'Недоступность для взаимодействия',
    type: 'false | true'
  },
  'size': {
    description: 'Размер компонента',
    type: 'extraSmall | small | medium | large | extraLarge'
  },
  'inverted': {
    description: 'Инвертированное цветовое оформление',
    type: 'true | false'
  },
  'variant': {
    description: 'Визуальный вариант компонента',
    type: 'withBorder | withoutBorder'
  },
  'mode': {
    description: 'Цветовой режим компонента',
    type: 'accent | not-active | new | update | inProgress | resolved | inIncident | critical | high | medium | low | info | positive'
  },
  'iconBefore': {
    description: 'Отображение иконки перед текстом',
    type: 'Boolean',
    defaultValue: 'true'
  },
  'iconAfter': {
    description: 'Отображение иконки после текста',
    type: 'Boolean',
    defaultValue: 'false'
  },
  'IconBefore_': {
    description: 'Заменяемая иконка перед текстом',
    label: '🔄 IconBefore',
    type: 'Instance Swap'
  },
  'text': {
    description: 'Текст кнопки',
    label: '✏️ text',
    type: 'Text',
    defaultValue: 'Button'
  },
  'indicator': {
    description: 'Отображение индикатора',
    type: 'Boolean',
    defaultValue: 'false'
  },
  'description': {
    description: 'Отображение описания рядом с элементом',
    type: 'Boolean',
    defaultValue: 'false'
  }
}

export const toolbarIconButtonDesignPropPresentation: PropPresentationMap = {
  'state': {
    description: 'Интерактивное состояние компонента',
    type: 'loading | disabled | active | hover | enabled'
  },
  'loading': {
    description: 'Состояние загрузки',
    type: 'true | false'
  },
  'disabled': {
    description: 'Недоступность для взаимодействия',
    type: 'false | true'
  },
  'size': {
    description: 'Размер компонента',
    type: 'extraSmall | small | medium | large | extraLarge'
  },
  'inverted': {
    description: 'Инвертированное цветовое оформление',
    type: 'true | false'
  },
  'variant': {
    description: 'Визуальный вариант компонента',
    type: 'withBorder | withoutBorder'
  },
  'mode': {
    description: 'Цветовой режим компонента',
    type: 'accent | not-active | new | update | inProgress | resolved | inIncident | critical | high | medium | low | info | positive'
  },
  'icon_': {
    description: 'Заменяемая иконка',
    label: '🔄 icon',
    type: 'Instance Swap'
  },
  'indicator': {
    description: 'Отображение индикатора',
    type: 'Boolean',
    defaultValue: 'false'
  },
  'description': {
    description: 'Отображение описания рядом с элементом',
    type: 'Boolean',
    defaultValue: 'false'
  }
}

export const toolbarToggleButtonDesignPropPresentation: PropPresentationMap = {
  'selected': {
    description: 'Выбранное состояние',
    type: 'true | false'
  },
  'state': {
    description: 'Интерактивное состояние компонента',
    type: 'loading | disabled | active | hover | enabled'
  },
  'loading': {
    description: 'Состояние загрузки',
    type: 'true | false'
  },
  'disabled': {
    description: 'Недоступность для взаимодействия',
    type: 'false | true'
  },
  'size': {
    description: 'Размер компонента',
    type: 'extraSmall | small | medium | large | extraLarge'
  },
  'inverted': {
    description: 'Инвертированное цветовое оформление',
    type: 'true | false'
  },
  'variant': {
    description: 'Визуальный вариант компонента',
    type: 'withBorder | withoutBorder'
  },
  'mode': {
    description: 'Цветовой режим компонента',
    type: 'accent | not-active | new | update | inProgress | resolved | inIncident | critical | high | medium | low | info | positive'
  },
  'iconBefore': {
    description: 'Отображение иконки перед текстом',
    type: 'Boolean',
    defaultValue: 'true'
  },
  'iconAfter': {
    description: 'Отображение иконки после текста',
    type: 'Boolean',
    defaultValue: 'false'
  },
  'IconBefore_': {
    description: 'Заменяемая иконка перед текстом',
    label: '🔄 IconBefore',
    type: 'Instance Swap'
  },
  'text': {
    description: 'Текст кнопки',
    label: '✏️ text',
    type: 'Text',
    defaultValue: 'Button'
  },
  'indicator': {
    description: 'Отображение индикатора',
    type: 'Boolean',
    defaultValue: 'false'
  },
  'description': {
    description: 'Отображение описания рядом с элементом',
    type: 'Boolean',
    defaultValue: 'false'
  }
}

export const toolbarToggleButtonIconDesignPropPresentation: PropPresentationMap = {
  'selected': {
    description: 'Выбранное состояние',
    type: 'true | false'
  },
  'state': {
    description: 'Интерактивное состояние компонента',
    type: 'loading | disabled | active | hover | enabled'
  },
  'loading': {
    description: 'Состояние загрузки',
    type: 'true | false'
  },
  'disabled': {
    description: 'Недоступность для взаимодействия',
    type: 'false | true'
  },
  'size': {
    description: 'Размер компонента',
    type: 'extraSmall | small | medium | large | extraLarge'
  },
  'inverted': {
    description: 'Инвертированное цветовое оформление',
    type: 'true | false'
  },
  'variant': {
    description: 'Визуальный вариант компонента',
    type: 'withBorder | withoutBorder'
  },
  'mode': {
    description: 'Цветовой режим компонента',
    type: 'accent | not-active | new | update | inProgress | resolved | inIncident | critical | high | medium | low | info | positive'
  },
  'icon_': {
    description: 'Заменяемая иконка',
    label: '🔄 icon',
    type: 'Instance Swap'
  },
  'indicator': {
    description: 'Отображение индикатора',
    type: 'Boolean',
    defaultValue: 'false'
  },
  'description': {
    description: 'Отображение описания рядом с элементом',
    type: 'Boolean',
    defaultValue: 'false'
  }
}
