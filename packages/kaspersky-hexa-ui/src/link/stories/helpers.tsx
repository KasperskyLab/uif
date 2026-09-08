import React from 'react'

import { ArrowRight, LinkExternal, Placeholder, SettingsGear } from '@kaspersky/hexa-ui-icons/16'

import { Link } from '../Link'
import { LinkProps } from '../types'

import { linkIconOptions } from './Link.controls'

export const linkIconVariants = {
  linkExternal: <LinkExternal />,
  arrowRight: <ArrowRight />,
  settingsGear: <SettingsGear />,
  placeholder: <Placeholder />
} as const

export type StoryLinkProps = Omit<LinkProps, 'icon'> & {
  icon: (typeof linkIconOptions)[number]
}

export const BasicLink = ({ decoration, icon, ...rest }: StoryLinkProps) => (
  <Link
    {...rest}
    decoration={decoration}
    icon={decoration === 'icon' ? linkIconVariants[icon] : undefined}
  />
)
