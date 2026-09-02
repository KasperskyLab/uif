import { PropPresentationMap } from '@sb/components/Documentation'

import { ModalMode, ModalSize } from '../types'

const modalModes: ModalMode[] = ['default', 'warning', 'error', 'success', 'ai']
const modalSizes: ModalSize[] = ['small', 'large']

export const defaultArgs = {
  mode: 'default' as const,
  size: 'small' as const,
  centered: true,
  closable: true,
  header: 'Modal dialog',
  content: 'This is placeholder text for the modal content.'
}

export const modalPropPresentation: PropPresentationMap = {
  mode: {
    control: 'select',
    options: modalModes
  },
  size: {
    control: 'select',
    options: modalSizes
  },
  centered: {
    control: 'boolean'
  },
  closable: {
    control: 'boolean'
  },
  header: {
    control: 'text'
  },
  content: {
    control: 'text'
  }
}
