import { LoadingOverlayColorConfig } from '@src/loading-overlay/types'

export const loadingOverlay = (): LoadingOverlayColorConfig => {
  return {
    background: 'var(--overlay--loader)'
  }
}
