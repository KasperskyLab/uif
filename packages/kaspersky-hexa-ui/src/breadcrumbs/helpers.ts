import { Route } from './types'

export const generateRoutes = (count = 7, name = 'Breadcrumb', url = 'breadcrumb'): Route[] =>
  Array.from({ length: count }, (_, i) => i)
    .map((i) => ({
      name: name + ' ' + (i + 1),
      url: '#/' + url + '_' + (i + 1),
      disabled: i === 2
    }))
