import { extendPropPresentation, PropPresentationMap } from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'

import { SegmentedControlSize } from '../types'

const segmentedControlSizes: SegmentedControlSize[] = ['small', 'medium', 'large']

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const defaultArgs = {
  size: 'medium' as SegmentedControlSize,
  defaultActiveTab: 'two',
  tabsData: [
    { name: 'one', content: 'first', text: 'Первый' },
    { name: 'two', content: 'second', text: 'Второй' },
    { name: 'three', content: 'third', text: 'Третий' }
  ],
  contentData: {
    first: () => 'Содержимое первой вкладки',
    second: () => 'Содержимое второй вкладки',
    third: () => 'Содержимое третьей вкладки'
  }
}

export const segmentedControlPropPresentation: PropPresentationMap = {
  size: fromSharedProp('size', {
    options: segmentedControlSizes
  }),
  defaultActiveTab: {
    control: 'text',
    description: 'Имя вкладки, которая будет активна при первом отображении компонента'
  }
}
