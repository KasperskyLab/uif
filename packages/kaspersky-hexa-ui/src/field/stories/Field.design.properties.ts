import type { PropPresentationMap } from '@sb/components/Documentation'

export const fieldDesignPropPresentation: PropPresentationMap = {
  variant: {
    description: 'Тип контрола внутри поля',
    type: 'statusGroup | toggle | link | space | expand | tagGroup | elementsStack | text | treeList | radioGroup | checkboxGroup | toggleButtonGroupMedium | toggleButtonGroupSmall | segmentedButtonMedium | uploader | button | inputCodeViewer | inputPassword | inputTimePickerRange | inputTimePicker | inputDateTimePickerRange | inputDateTimePicker | inputDatePickerRange | inputDatePicker | inputNumber | inputMultiSelect | inputSelect | inputTextArea | segmentedButtonSmall | multiInput | inputText | radio | checkbox'
  },
  labelPosition: {
    description: 'Расположение метки относительно контрола',
    type: 'top | before | after',
    defaultValue: 'top'
  },
  label: {
    description: 'Видимость блока метки',
    type: 'Boolean',
    defaultValue: 'true'
  },
  buttons: {
    description: 'Видимость кнопок действий рядом с полем',
    type: 'Boolean',
    defaultValue: 'false'
  },
  icon: {
    description: 'Видимость иконки рядом с полем',
    type: 'Boolean',
    defaultValue: 'false'
  },
  secondElement_: {
    label: '🔄 secondElement',
    description: 'Слот для второго вспомогательного элемента рядом с контролом',
    type: 'Instance Swap'
  },
  icon_: {
    label: '🔄 icon',
    description: 'Слот для иконки',
    type: 'Instance Swap'
  },
  firstElement_: {
    label: '🔄 firstElement',
    description: 'Слот для первого вспомогательного элемента рядом с контролом',
    type: 'Instance Swap'
  },
  children_: {
    label: '🔄 children',
    description: 'Слот для контрола внутри поля',
    type: 'Instance Swap'
  },
  description: {
    description: 'Видимость вспомогательного текста под контролом',
    type: 'Boolean',
    defaultValue: 'false'
  },
  validation: {
    description: 'Видимость сообщения валидации',
    type: 'Boolean',
    defaultValue: 'false'
  }
}
