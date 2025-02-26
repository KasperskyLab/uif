import { ProgressBarColorConfig, ProgressBarMode, ProgressBarSize, ProgressBarSizeConfig } from '@src/progress-bar/types'

export const progressBar = (): Record<ProgressBarMode, ProgressBarColorConfig> => ({
  critical: {
    color: 'var(--progress_bar--critical)',
    background: 'var(--progress_bar--background)'
  },
  accent: {
    color: 'var(--progress_bar--marina)',
    background: 'var(--progress_bar--background)'
  },
  success: {
    color: 'var(--progress_bar--success)',
    background: 'var(--progress_bar--background)'
  },
  warning: {
    color: 'var(--progress_bar--warning)',
    background: 'var(--progress_bar--background)'
  },
  coldgray: {
    color: 'var(--progress_bar--coldgray)',
    background: 'var(--progress_bar--background)'
  },
  grass: {
    color: 'var(--progress_bar--grass)',
    background: 'var(--progress_bar--background)'
  },
  orange: {
    color: 'var(--progress_bar--orange)',
    background: 'var(--progress_bar--background)'
  },
  purple: {
    color: 'var(--progress_bar--purple)',
    background: 'var(--progress_bar--background)'
  },
  violet: {
    color: 'var(--progress_bar--violet)',
    background: 'var(--progress_bar--background)'
  },
  neutralBold: {
    color: 'var(--progress_bar--neutral_bold)',
    background: 'var(--progress_bar--background)'
  },
  neutralSubtle: {
    color: 'var(--progress_bar--neutral_subtle)',
    background: 'var(--progress_bar--background)'
  }
})

export const progressBarSize: Record<ProgressBarSize, ProgressBarSizeConfig> = {
  small: {
    height: '4px'
  },
  medium: {
    height: '8px'
  },
  large: {
    height: '12px'
  }
}
