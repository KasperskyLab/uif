import React, { FC, ReactElement } from 'react'
import { Anchor as AnchorAntd } from 'antd'
import styled from 'styled-components'
import { anchorCss, anchorLinksCss } from './AnchorCss'
import { useThemedAnchor, useThemedAnchorLink } from './useThemedAnchor'
import { AnchorCssConfig, AnchorLinkCssConfig, AnchorLinkProps, IAnchorProps, IAnchorViewProps } from './types'

const StyledAnchorLink = styled(AnchorAntd.Link).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${anchorLinksCss}
`

export const AnchorLinkView: FC<AnchorLinkProps & { cssConfig?: AnchorLinkCssConfig }> = (props): ReactElement => {
  const anchorLinkProps = useThemedAnchorLink(props)
  return <StyledAnchorLink
    {...anchorLinkProps}
  />
}

export const AnchorLink = (props: AnchorLinkProps): JSX.Element => {
  return <AnchorLinkView
    {...props}
  />
}

const StyledAnchor = styled(AnchorAntd).withConfig<IAnchorViewProps>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${anchorCss}
`

export const AnchorView: FC<IAnchorProps & { cssConfig?: AnchorCssConfig }> = (props): ReactElement => {
  const themedAnchorProps = useThemedAnchor(props)
  const { klId, ...anchorProps } = themedAnchorProps
  return <div kl-id={klId} >
    <StyledAnchor
      {...anchorProps}
    />
  </div>
}

export const Anchor = (props: IAnchorProps): JSX.Element => {
  return <AnchorView
    {...props}
  />
}
