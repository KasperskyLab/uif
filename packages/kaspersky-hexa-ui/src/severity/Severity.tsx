import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { Tag } from '../tag'

import { severityTextLocalization } from './localization'
import { SeverityCss } from './severityCss'
import { SeverityProps, SeverityViewProps } from './types'
import { useThemedSeverity } from './useThemedSeverity'

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

const SeverityView: FC<SeverityViewProps> = ({
  children,
  mode,
  testAttributes,
  ...rest
}: SeverityViewProps) => {
  const { t } = useTranslation()
  // eslint-disable-next-line security/detect-object-injection
  const modeDefaultText = t(severityTextLocalization[mode])
  const content = children || modeDefaultText
  return (
    <StyledSeverity {...testAttributes} {...rest}>
      {content}
    </StyledSeverity>
  )
}
