import { UploaderCssConfig } from '@src/upload/types'

export const upload = (): UploaderCssConfig => {
  return {
    active: {
      background: 'var(--upload--bg--active)',
      border: 'var(--upload--border--active)'
    },
    disabled: {
      background: 'var(--upload--bg--disabled)',
      border: 'var(--upload--border--disabled)',
      header: {
        icon: 'var(--upload_header--icon--disabled)',
        text: 'var(--upload_header--text--disabled)'
      },
      requirements: 'var(--upload--text--requirements_disabled)',
      total: 'var(--upload--text--total_disabled)'
    },
    enabled: {
      background: 'var(--upload--bg--enabled)',
      border: 'var(--upload--border--enabled)',
      header: {
        icon: 'var(--upload_header--icon--enabled)',
        text: 'var(--upload_header--text--enabled)'
      },
      requirements: 'var(--upload--text--requirements_enabled)',
      total: 'var(--upload--text--total_enabled)'
    },
    error: {
      border: 'var(--upload--border--error)'
    },
    invalid: {
      header: {
        icon: 'var(--upload_header--icon--invalid)',
        text: ''
      },
      validation: 'var(--upload--text--validation_text_invalid)'
    },
    file: {
      active: {
        background: 'var(--upload_file--bg--active)',
        border: 'var(--upload_file--border--active)',
        icon: 'var(--upload_file--icon--active)',
        name: 'var(--upload_file--text--name_active)'
      },
      disabled: {
        background: 'var(--upload_file--bg--disabled)',
        border: 'var(--upload_file--border--disabled)',
        icon: 'var(--upload_file--icon--disabled)',
        name: 'var(--upload_file--text--name_disabled)',
        size: 'var(--upload_file--text--weight_disabled)'
      },
      enabled: {
        background: 'var(--upload_file--bg--enabled)',
        border: 'var(--upload_file--border--enabled)',
        icon: 'var(--upload_file--icon--enabled)',
        name: 'var(--upload_file--text--name_enabled)',
        size: 'var(--upload_file--text--weight_enabled)'
      },
      hover: {
        background: 'var(--upload_file--bg--hover)',
        border: 'var(--upload_file--border--hover)',
        icon: 'var(--upload_file--icon--hover)',
        name: 'var(--upload_file--text--name_hover)'
      },
      invalid: {
        background: 'var(--upload_file--bg--invalid)',
        border: 'var(--upload_file--border--invalid)',
        icon: 'var(--upload_file--icon--invalid)',
        name: 'var(--upload_file--text--name_invalid)',
        validation: 'var(--upload--text--validation_text_invalid)'
      },
      loading: {
        background: 'var(--upload_file--bg--loading)',
        border: 'var(--upload_file--border--loading)',
        name: 'var(--upload_file--text--name_loading)'
      }
    }
  }
}
