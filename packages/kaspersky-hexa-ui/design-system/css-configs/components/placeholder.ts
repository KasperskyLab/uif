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
    gap: 'related',
    titleGap: 'dependent'
  },
  medium: {
    imageSize: 150,
    padding: 32,
    gap: 'grouped',
    titleGap: 'related'
  }
}
