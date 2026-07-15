import { extendPropPresentation, PropPresentationMap } from '@sb/components/Documentation'

export const defaultArgs = {
  borderless: false
}

export const horizontalNavPropPresentation: PropPresentationMap = {
  activeKey: {
    control: 'text',
    description: 'Ключ активного пункта навигации в контролируемом режиме'
  },
  borderless: extendPropPresentation({
    control: { type: 'boolean' }
  })
}
