import type { PropPresentationMap } from '@sb/components/Documentation'

export const inputPasswordDesignPropPresentation: PropPresentationMap = {
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'focus | hover | enabled | disabled | readonly | active'
  },
  validationStatus: {
    description: 'Визуальный статус валидации поля',
    type: 'success | error | default'
  },
  success: {
    description: 'Состояние выполнения правила валидации в списке',
    type: 'Yes | No | true | false'
  },
  placeholder: {
    description: 'Отображение подсказки-плейсхолдера вместо введённого значения',
    type: 'false | true'
  },
  showPassword: {
    description: 'Отображение введённого пароля вместо маскировки',
    type: 'false | true'
  },
  placement: {
    description: 'Позиция всплывающей панели с правилами валидации относительно поля',
    type: 'rightBottom | rightTop | right | left | leftBottom | leftTop | bottom | bottomRight | bottomLeft | top | topRight | topLeft'
  },
  value: {
    description: 'Тип содержимого слота в правиле валидации',
    type: 'slot | text'
  },
  variant: {
    description: 'Вариант оформления вложенного элемента',
    type: 'compact | simple | default | iconButton | button'
  },
  mode: {
    description: 'Семантический режим оформления вложенного элемента',
    type: 'critical | warning | success | none | ghost | filled | onLight | ghostInverted'
  },
  size: {
    description: 'Размер вложенного элемента',
    type: 'small | medium | large'
  },
  orientation: {
    description: 'Ориентация расположения элементов в списке правил',
    type: 'horizontal | vertical'
  },
  description: {
    description: 'Отображение поясняющего текста под полем',
    type: 'Boolean',
    defaultValue: 'false'
  },
  boolean: {
    description: 'Отображение булевого индикатора в макете',
    type: 'Boolean',
    defaultValue: 'true'
  },
  scrollbar: {
    description: 'Отображение полосы прокрутки в панели правил валидации',
    type: 'Boolean',
    defaultValue: 'false'
  },
  children_: {
    label: '🔄 children',
    description: 'Слот для замены содержимого правила валидации',
    type: 'Instance Swap'
  },
  text: {
    label: '✏️ text',
    description: 'Текст сообщения валидации под полем',
    type: 'Text',
    defaultValue: 'validationText'
  },
  iconBefore: {
    description: 'Отображение иконки перед полем ввода',
    type: 'Boolean',
    defaultValue: 'true'
  },
  elementAfter: {
    description: 'Отображение дополнительного элемента после поля ввода',
    type: 'Boolean',
    defaultValue: 'false'
  }
}

export const inputPasswordItemDesignPropPresentation: PropPresentationMap = {
  placeholder: {
    description: 'Отображение подсказки-плейсхолдера вместо введённого значения',
    type: 'false | true'
  },
  showPassword: {
    description: 'Отображение введённого пароля вместо маскировки',
    type: 'false | true'
  },
  state: {
    description: 'Интерактивное состояние компонента',
    type: 'disabled | readonly | focus | enabled | hover | active'
  },
  variant: {
    description: 'Вариант оформления кнопки действия',
    type: 'iconButton | button'
  },
  mode: {
    description: 'Семантический режим оформления кнопки действия',
    type: 'ghost | filled | onLight | ghostInverted'
  },
  size: {
    description: 'Размер кнопки действия',
    type: 'large | medium | small'
  },
  value: {
    label: '✏️ value',
    description: 'Значение пароля в поле ввода',
    type: 'Text',
    defaultValue: 'Password'
  },
  iconBefore: {
    description: 'Отображение иконки перед полем ввода',
    type: 'Boolean',
    defaultValue: 'true'
  },
  elementAfter: {
    description: 'Отображение дополнительного элемента после поля ввода',
    type: 'Boolean',
    defaultValue: 'false'
  },
  text: {
    label: '✏️ text',
    description: 'Подпись кнопки действия',
    type: 'Text',
    defaultValue: 'Action'
  }
}
