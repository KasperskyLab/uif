import React, { FC } from 'react'
import { AnchorLinkContent } from './AnchorLinkContent'
import { StyledAnchorLink } from './StyledAnchorLink'
import { AnchorLinkProps, AnchorLinkViewProps } from './types'
import { useThemedAnchorLink } from './useThemedAnchorLink'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

export const AnchorLinkView: FC<AnchorLinkViewProps> = (props: AnchorLinkViewProps) => {
  const { counter, title, hasNotification, testAttributes, ...rest } = props

  return (
    <StyledAnchorLink
      title={
        <AnchorLinkContent
          title={title}
          counter={counter}
          hasNotification={hasNotification}
        />
      }
      {...testAttributes}
      {...rest}
    />
  )
}

export const AnchorLink: FC<AnchorLinkProps> = (rawProps: AnchorLinkProps) => {
  const themedProps = useThemedAnchorLink(rawProps)
  const props = useTestAttribute(themedProps)
  return <AnchorLinkView {...props} />
}
