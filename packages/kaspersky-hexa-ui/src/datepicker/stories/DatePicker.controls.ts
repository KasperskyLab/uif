import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'
import { validationStatuses } from '@helpers/typesHelpers'

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const datePickerPropPresentation: PropPresentationMap = {
  showTime: {
    control: 'boolean'
  },
  format: {
    control: 'text'
  },
  placeholder: {
    control: 'text'
  },
  disabled: fromSharedProp('disabled'),
  readonly: {
    control: 'boolean'
  },
  validationStatus: {
    control: 'select',
    options: [...validationStatuses]
  },
  open: {
    control: 'boolean'
  },
  dropdownClassName: {
    control: 'text'
  },
  theme: fromSharedProp('theme')
}
