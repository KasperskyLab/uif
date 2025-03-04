import React from 'react'
import styled from 'styled-components'
import { badges as sbBadges, badgesConfig, SBBadges } from '@sb/badges'
import { Link } from '@src/link'
import { SectionMessage } from '@src/section-message'
import { linkTo } from '@storybook/addon-links'

const StorybookBadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > div:last-of-type {
    margin-bottom: 2rem;
  }
`

export const withBadges = (Story: any, context: any) => {
  const { parameters: { badges = [], deprecatedLink } } = context

  const filteredBadges = badges.filter((badge: SBBadges) => (
    ![sbBadges.stable, sbBadges.reviewedByDesign].includes(badge)
  ))

  return (
    <>
      <StorybookBadgeWrapper>
        {filteredBadges.map((badge: SBBadges, index: number) => {
          const { description, ...rest } = badgesConfig[badge]
          return (
            <SectionMessage {...rest} closable={false} key={index}>
              {description}
              {badge === 'deprecated' && deprecatedLink && (
                <Link onClick={linkTo(deprecatedLink, 'Basic')}>{deprecatedLink}</Link>
              )}
            </SectionMessage>
          )})}
      </StorybookBadgeWrapper>
      <Story {...context} />
    </>
  )
}
