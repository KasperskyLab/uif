import React, { FC } from 'react'
import { SeverityProps, SeverityViewProps } from './types'
import { useThemedSeverity } from './useThemedSeverity'
import styled from 'styled-components'
import { SeverityCss } from './severityCss'
import { Tag } from '../tag'
import { useLocalization } from '@helpers/localization/useLocalization'
import { severityTextLocalization } from './localization'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledSeverity = styled(Tag).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${SeverityCss}
`

export const Severity: FC<SeverityProps> = (rawProps: SeverityProps) => {
  const themedProps = useThemedSeverity(rawProps)
  const props = useTestAttribute(themedProps)
  return <SeverityView {...props} />
}

export const SeverityView: FC<SeverityViewProps> = ({
  children,
  mode,
  testAttributes,
  ...rest
}: SeverityViewProps) => {
  // eslint-disable-next-line security/detect-object-injection
  const modeDefaultText = useLocalization(severityTextLocalization[mode])
  const content = children || modeDefaultText
  return (
    <StyledSeverity {...testAttributes} {...rest}>
      {content}
    </StyledSeverity>
  )
}
