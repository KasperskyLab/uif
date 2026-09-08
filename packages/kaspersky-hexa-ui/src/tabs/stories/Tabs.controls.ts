import { PropPresentationMap } from '@sb/components/Documentation'

import { tabPositionArray, TabPosition } from '../types'

export const defaultArgs = {
  tabPosition: 'top' as TabPosition,
  defaultActiveKey: '1',
  padding: false,
  noMargin: false,
  destroyInactiveTabPane: false
}

export const tabsPropPresentation: PropPresentationMap = {
  tabPosition: {
    control: 'select',
    options: [...tabPositionArray]
  },
  padding: {
    control: 'boolean'
  },
  noMargin: {
    control: 'boolean'
  },
  destroyInactiveTabPane: {
    control: 'boolean'
  }
}
