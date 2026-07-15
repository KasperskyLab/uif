import {
  extendPropPresentation,
  PropPresentationMap
} from '@sb/components/Documentation'

import { sharedPropConfig } from '@helpers/resolveDesignControls'
import { validationStatuses } from '@helpers/typesHelpers'

import { DEFAULT_LANGUAGES } from '../constants'

const languageOptions = Object.keys(DEFAULT_LANGUAGES)
const resizeAxisOptions = ['both', 'x', 'y', 'none'] as const

const fromSharedProp = (
  propName: keyof typeof sharedPropConfig,
  overrides = {}
) => extendPropPresentation(sharedPropConfig[propName], overrides)

export const codeViewerPropPresentation: PropPresentationMap = {
  language: {
    control: 'select',
    options: [...languageOptions]
  },
  initialValue: {
    control: 'text'
  },
  readonly: {
    control: 'boolean'
  },
  validationStatus: {
    control: 'select',
    options: [...validationStatuses]
  },
  resizable: {
    control: 'boolean'
  },
  resizeAxis: {
    control: 'select',
    options: [...resizeAxisOptions]
  },
  width: {
    control: 'number'
  },
  height: {
    control: 'number'
  },
  lineWrapping: {
    control: 'boolean'
  },
  theme: fromSharedProp('theme')
}
