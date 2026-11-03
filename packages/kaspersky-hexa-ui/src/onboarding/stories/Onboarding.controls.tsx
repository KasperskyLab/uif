import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'
import { sharedPropConfig } from '@sb/resolveDesignControls'
import { Space } from '@src/space'
import { Tag } from '@src/tag'
import React from 'react'

import type { InteractiveTourPlacement, OnboardingVariant } from '../types'

const onboardingVariants: OnboardingVariant[] = ['tour', 'info']

const interactiveTourPlacements: InteractiveTourPlacement[] = [
  'auto',
  'center',
  'top',
  'bottom',
  'left',
  'right'
] as const

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  variant: 'tour' as OnboardingVariant,
  header: <Space><Tag mode="marina" outlined>New</Tag>Title</Space>,
  defaultDontShowAgain: false,
  linkText: 'Learn more'
}

export const defaultTourArgs = {
  placement: 'auto' as InteractiveTourPlacement,
  closeOnEsc: true
}

export const onboardingPropPresentation: PropPresentationMap = {
  variant: {
    description: 'Вариация футера. `tour` — кнопки «Try now», «Skip» и чекбокс «Don\'t show again»; «Try now» запускает интерактивный тур. `info` — кнопка «OK» и необязательная ссылка, тур не запускается',
    control: 'select',
    options: onboardingVariants,
    defaultValue: 'tour'
  },
  header: {
    description: 'Заголовок диалога',
    control: 'text'
  },
  defaultDontShowAgain: {
    description: 'Начальное состояние чекбокса «Don\'t show again». Только для вариации `tour`',
    control: 'boolean',
    defaultValue: false
  },
  link: {
    description: 'Ссылка рядом с кнопками в футере: `OnboardingLink` с текстом `text` и свойствами `Link`; пустое значение убирает ссылку',
    control: false,
    type: 'OnboardingLink'
  }
}

export const onboardingDesignPropPresentation: PropPresentationMap = {
  variant: {
    description: 'Вариация футера: `tour` или `info`',
    type: "'tour' | 'info'"
  },
  header: {
    description: 'Заголовок модального окна',
    type: 'OnboardingTour'
  },
  content: {
    description: 'Содержимое контентной области',
    type: 'OnboardingTour'
  },
  link: {
    description: 'Ссылка в футере',
    type: 'OnboardingLink'
  }
}

export const interactiveTourPropPresentation: PropPresentationMap = {
  steps: {
    description: 'Шаги тура: целевой элемент, изображение, заголовок и текст',
    control: false,
    type: 'InteractiveTourStep[]'
  },
  placement: {
    description: 'Сторона отображения подсказки относительно целевого элемента. `auto` подбирает сторону автоматически',
    control: 'select',
    options: [...interactiveTourPlacements],
    defaultValue: 'auto'
  },
  closeOnEsc: {
    description: 'Завершать тур по клавише Escape',
    control: 'boolean',
    defaultValue: true
  },
  width: {
    description: 'Ширина подсказки, px',
    control: 'number',
    defaultValue: 320
  },
  stepIndex: {
    description: 'Индекс текущего шага. Переводит тур в контролируемый режим',
    control: false,
    type: 'number'
  },
  initialStepIndex: {
    description: 'Шаг, с которого начинается неконтролируемый тур',
    control: false,
    type: 'number',
    defaultValue: 0
  },
  scrollToFirstStep: {
    description: 'Прокручивать страницу к целевому элементу первого шага',
    control: false,
    type: 'boolean',
    defaultValue: true
  },
  zIndex: {
    description: 'z-index затемнения и подсказки',
    control: false,
    type: 'number',
    defaultValue: 1000
  },
  portalElement: {
    description: 'Элемент, в который рендерится тур',
    control: false,
    type: 'string | HTMLElement | null'
  },
  onStepChange: {
    description: 'Вызывается при переходе на другой шаг',
    control: false,
    type: '(stepIndex: number, step: InteractiveTourStep) => void'
  },
  onFinish: {
    description: 'Вызывается при завершении тура: `completed` — пройден до конца, `closed` — закрыт досрочно',
    control: false,
    type: "(reason: 'completed' | 'closed') => void"
  },
  className: fromSharedProp('className'),
  testId: fromSharedProp('testId'),
  klId: fromSharedProp('klId')
}

export const interactiveTourStepDesignPropPresentation: PropPresentationMap = {
  title: {
    description: 'Заголовок шага',
    type: 'ReactNode'
  },
  text: {
    description: 'Описание шага',
    type: 'ReactNode'
  },
  image: {
    description: 'Иллюстрация над заголовком',
    type: 'ReactNode'
  },
  placement: {
    description: 'Позиция подсказки относительно целевого элемента. Переопределяет `placement` тура',
    type: 'InteractiveTourPlacement'
  }
}
