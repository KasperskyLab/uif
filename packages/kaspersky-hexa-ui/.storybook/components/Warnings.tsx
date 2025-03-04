import { Link } from '@src/link'
import { SectionMessage } from '@src/section-message'
import { Tag } from '@src/tag'
import { P } from '@src/typography'
import React from 'react'
import styled from 'styled-components'

export const StyledTag = styled(Tag)`
  margin: 0;
`

const TooltipStoryLink = () => <Link
  href="./?path=/story/hexa-ui-components-tooltip--with-disabled-component"
  target="_blank"
>Tooltip Story</Link>

export const TooltipCompositionWarning = ({ propName }: {propName?: string}) => <SectionMessage closable={false} mode="info" style={{ marginBottom: 16 }}>
  <P>
    <StyledTag>{propName || 'tooltip'}</StyledTag> is not a prop of this component. The example shows possible composition. If <StyledTag>Tooltip</StyledTag> not working with <StyledTag>disabled</StyledTag> components see <TooltipStoryLink />
  </P>
  <P>
    <StyledTag>{propName || 'tooltip'}</StyledTag> не является пропом компонента. Пример показывает возможную композицию. Если <StyledTag>Tooltip</StyledTag> на <StyledTag>disabled</StyledTag> компоненте не срабатывает смотри <TooltipStoryLink />
  </P>
</SectionMessage>
