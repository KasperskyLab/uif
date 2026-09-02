import { PropPresentationMap } from '@sb/components/Documentation'

import { SubmenuProps } from '../types'

export const defaultArgs: Pick<SubmenuProps, 'collapseOnTextClick' | 'truncateText'> = {
  collapseOnTextClick: true,
  truncateText: false
}

export const submenuPropPresentation: PropPresentationMap = {
  truncateText: {
    control: 'boolean',
    description: 'Сокращать длинный текст с многоточием'
  },
  collapseOnTextClick: {
    control: 'boolean',
    description: 'Раскрывать и сворачивать вложенные пункты по клику на текст'
  }
}
