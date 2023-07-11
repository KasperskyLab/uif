import { ThemeConfig } from '../../types'
import { BORDER_RADIUS, SPACES } from './variables'

export const COMMON_THEME: Pick<ThemeConfig, 'shapes' | 'spaces'> = {
  shapes: {
    borderRadius: BORDER_RADIUS
  },
  spaces: SPACES
}
