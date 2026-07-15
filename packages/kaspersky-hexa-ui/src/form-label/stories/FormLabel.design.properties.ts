import type { PropPresentationMap } from '@sb/components/Documentation'

export const formLabelDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Цветовой режим подписи в макете',
    type: 'subtle | bold'
  },
  disabled: {
    description: 'Недоступное состояние подписи',
    type: 'false | true'
  },
  readonly: {
    description: 'Состояние только для чтения',
    type: 'false | true'
  },
  required: {
    description: 'Метка обязательного поля',
    type: 'true | false'
  },
  buttonInfo: {
    description: 'Иконка с подсказкой справа от подписи',
    type: 'true | false'
  },
  tagsAfter: {
    description: 'Теги справа от подписи',
    type: 'false | true'
  },
  text: {
    label: '✏️ text',
    description: 'Текст подписи',
    type: 'Text',
    defaultValue: 'Label'
  }
}
