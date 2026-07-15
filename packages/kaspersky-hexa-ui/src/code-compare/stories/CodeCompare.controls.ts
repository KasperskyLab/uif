import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'
import { sharedPropConfig } from '@helpers/resolveDesignControls'
import { ViewType } from 'react-diff-view'

import { IVersionOption } from '../types'

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

const compareModes: ViewType[] = ['split', 'unified']

export const playgroundVersions: IVersionOption[] = [
  { label: 'Code 2024-06-05 16:50:54', description: 'author.one', value: 'base' },
  { label: 'Changed Code 2024-06-05 16:50:54', description: 'author.two', value: 'changed' }
]

export const playgroundOldValue = `import React from 'react'

export const App = () => {
  return <div>Hello</div>
}`

export const playgroundNewValue = `import React from 'react'

export const App = () => {
  return <div>Hello, world</div>
}`

export const defaultArgs = {
  options: playgroundVersions,
  oldVersion: playgroundVersions[0],
  newVersion: playgroundVersions[1],
  oldValue: playgroundOldValue,
  newValue: playgroundNewValue,
  compareMode: 'split' as ViewType,
  loading: false
}

export const codeComparePlaygroundPresentation: PropPresentationMap = {
  compareMode: {
    control: 'select',
    description: 'Начальный режим отображения diff: split — две колонки, unified — одна.',
    options: [...compareModes]
  },
  loading: fromSharedProp('loading', {
    description: 'Состояние загрузки области сравнения. При отсутствии текстов показывается подсказка ожидания данных.'
  }),
  oldValue: {
    control: 'text',
    description: 'Текст левой (базовой) версии для сравнения.'
  },
  newValue: {
    control: 'text',
    description: 'Текст правой (сравниваемой) версии.'
  }
}
