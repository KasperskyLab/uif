import React from 'react'
import { badges } from '../../.storybook/badges'
import { BadgeMode, IBadgeProps } from './types'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import Meta from './__meta__/meta.json'
import { Badge } from './Badge'
import styled from 'styled-components'

export default {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const defaultCount = 10

const BadgeTemplate = ({
  count = defaultCount,
  ...rest
}: IBadgeProps) => {
  return (
    <Badge count={count} {...rest} />
  )
}

export const Basic = BadgeTemplate.bind({})

const BadgeWithTextTemplate = ({
  ...rest
}: IBadgeProps) => {
  return (
    <Badge text='Badge' {...rest} />
  )
}

export const WithText = BadgeWithTextTemplate.bind({})

const BadgeWithOverflowTemplate = ({
  count = defaultCount,
  ...rest
}: IBadgeProps) => {
  return (
    <Badge count={count} overflowCount={9} {...rest} />
  )
}

export const WithOverflow = BadgeWithOverflowTemplate.bind({})

const BadgesContainer = styled.div`
  display: flex;
  gap: 12px;
`

const BadgeModesTemplate = ({
  count = defaultCount,
  ...rest
}: IBadgeProps) => {
  const modes: BadgeMode[] = ['neutral', 'accent', 'positive', 'medium', 'high', 'critical', 'new', 'dot']

  return (
    <BadgesContainer>
      {modes.map(mode => (
        <Badge count={count} mode={mode} {...rest} />
      ))}
    </BadgesContainer>
  )
}

export const BadgeModes = BadgeModesTemplate.bind({})
