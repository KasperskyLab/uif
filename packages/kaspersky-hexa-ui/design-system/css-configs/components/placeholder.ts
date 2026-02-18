import { PlaceholderColorConfig, PlaceholderMode, PlaceholderSize, PlaceholderSizeConfig } from '@src/placeholder/types'

export const placeholder = (): Record<PlaceholderMode, PlaceholderColorConfig> => ({
  base: {
    title: 'var(--placeholder--title)',
    description: 'var(--placeholder--description)',
    background: 'transparent'
  },
  filled: {
    title: 'var(--placeholder--title)',
    description: 'var(--placeholder--description)',
    background: 'var(--placeholder--bg)'
  }
})

export const placeholderSize: Record<PlaceholderSize, PlaceholderSizeConfig> = {
  small: {
    imageSize: 48,
    padding: 24,
    gap: 12,
    titleGap: 4
  },
  medium: {
    imageSize: 150,
    padding: 32,
    gap: 16,
    titleGap: 8
  }
}
