import type { PropPresentationMap } from '@sb/components/Documentation'

export const progressBarDesignPropPresentation: PropPresentationMap = {
  size: {
    description: 'Высота полосы прогресса',
    type: 'small | medium | large'
  },
  mode: {
    description: 'Семантический цвет активной полосы',
    type: 'accent | success | violet | warning | critical | grass | neutralSubtle | neutralBold | purple | orange | coldgray'
  },
  background: {
    description: 'Видимость фоновой дорожки под активной полосой',
    type: 'Boolean',
    defaultValue: 'false'
  }
}

export const progressBarModeDesignPropPresentation: PropPresentationMap = {
  mode: {
    description: 'Семантический цвет активной полосы',
    type: 'accent | success | violet | warning | critical | grass | neutralSubtle | neutralBold | purple | orange | coldgray'
  }
}
