import type { PropPresentationMap } from '@sb/components/Documentation'

import type { UploaderProps } from '../types'

export const defaultArgs = {
  description: 'Максимум 8 файлов, общий размер до 320 МБ',
  maxCount: 8,
  maxTotalSize: 320 * 1024,
  size: 'medium'
} as const satisfies Partial<UploaderProps>

export const uploaderPropPresentation: PropPresentationMap = {
  size: {
    control: 'inline-radio',
    options: ['small', 'medium']
  },
  disabled: {
    control: 'boolean'
  },
  manual: {
    control: 'boolean'
  },
  maxCount: {
    control: { type: 'number', min: 1 }
  },
  maxFileSize: {
    control: { type: 'number', min: 0 }
  },
  maxTotalSize: {
    control: { type: 'number', min: 0 }
  },
  showProgress: {
    control: 'boolean'
  },
  truncateFileName: {
    control: 'boolean'
  },
  fullHeight: {
    control: 'boolean'
  },
  validationStatus: {
    control: 'inline-radio',
    options: ['default', 'error']
  },
  description: {
    control: 'text'
  },
  accept: {
    control: 'text'
  },
  directory: {
    control: 'boolean'
  }
}
