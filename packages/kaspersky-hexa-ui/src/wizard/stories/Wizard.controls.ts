import { PropPresentationMap } from '@sb/components/Documentation'

export const defaultArgs = {
  lastItem: true,
  initialStep: 0,
  isVertical: false,
  cancelButtonText: 'Отмена',
  backButtonText: 'Назад',
  nextButtonText: 'Далее',
  finishButtonText: 'Завершить'
}

export const wizardPropPresentation: PropPresentationMap = {
  initialStep: {
    control: 'number',
    description: 'Номер шага, с которого начинается сценарий'
  },
  isVertical: {
    control: 'boolean',
    description: 'Вертикальное расположение индикаторов шагов'
  },
  lastItem: {
    control: 'boolean',
    description: 'Отображение завершающего сегмента после последнего шага'
  },
  cancelButtonText: {
    control: 'text',
    description: 'Текст кнопки отмены'
  },
  backButtonText: {
    control: 'text',
    description: 'Текст кнопки возврата'
  },
  nextButtonText: {
    control: 'text',
    description: 'Текст кнопки перехода к следующему шагу'
  },
  finishButtonText: {
    control: 'text',
    description: 'Текст кнопки завершения сценария'
  }
}
