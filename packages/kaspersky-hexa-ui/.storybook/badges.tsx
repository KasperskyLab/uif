import { AlertMode } from '@src/alert'

export const badges = {
  missingDesign: 'missingDesign',
  needsDesignReview: 'needsDesignReview',
  reviewedByDesign: 'reviewedByDesign',
  deprecated: 'deprecated',
  stable: 'stable',
  dev: 'dev',
  notProdReady: 'notProdReady'
}

export type SBBadges = typeof badges[keyof typeof badges]

type SBBadgeConfig = {
  mode: AlertMode,
  title: string,
  description?: string
}

export type SBBadgesConfig = Record<SBBadges, SBBadgeConfig>

export const badgesConfig: SBBadgesConfig = {
  [badges.stable]: {
    mode: 'success',
    title: 'Stable',
    description: 'The component is used in real projects, no major known issues'
  },
  [badges.deprecated]: {
    mode: 'error',
    title: 'Deprecated',
    description: 'The component is no longer supported'
  },
  [badges.missingDesign]: {
    mode: 'warning',
    title: 'Missing design',
    description: 'The component doesn\'t have layout page in pixso'
  },
  [badges.reviewedByDesign]: {
    mode: 'success',
    title: 'Reviewed by Design',
    description: 'The component is reviewed by design team and no further actions are required'
  },
  [badges.needsDesignReview]: {
    mode: 'warning',
    title: 'Needs Design Review',
    description: 'The component is implemented, but needs to be reviewed by design team'
  },
  [badges.dev]: {
    mode: 'info',
    title: 'In development',
    description: 'It is neseccary to demonstrate some dev features, no need in design sync'
  },
  [badges.notProdReady]: {
    mode: 'warning',
    title: 'Not production ready',
    description: 'This is experimental feature, not ready to use in production'
  }
}
