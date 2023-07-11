import React from 'react'
import { SeverityCssConfig, SeverityProps } from './types'
import { useThemedSeverity } from './useThemeSeverity'
import styled from 'styled-components'
import { SeverityCss } from './severityCss'
import { Tag } from '../tag'
import { useLocalization } from '@helpers/localization/useLocalization'
import { severityTextLocalization } from './localization'

const StyledSeverity = styled(Tag).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${SeverityCss}
`

export const Severity = (rawProps: SeverityProps): JSX.Element => {
  const props = useThemedSeverity(rawProps)
  return (
      <SeverityView {...props} />
  )
}

export const SeverityView: React.FC<
  SeverityProps & {
    cssConfig: SeverityCssConfig
  }
> = ({ klId, children, theme: themeProps, mode, ...rest }) => {
  // eslint-disable-next-line security/detect-object-injection
  const modeDefaultText = useLocalization(severityTextLocalization[mode])
  const content = children || modeDefaultText
  return (
    <StyledSeverity kl-id={klId} {...rest}>
      {content}
    </StyledSeverity>
  )
}

export default Severity
