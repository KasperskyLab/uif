import styled from 'styled-components'
import { SPACES } from '@design-system/theme/themes/variables'
import { shouldForwardProp } from '@helpers/shouldForwardProp'

export const FormTriggerStyled = styled.div.withConfig({ shouldForwardProp })`
  margin-bottom: ${SPACES[16]}px;
  display: flex;
  flex-direction: row;
  gap: ${SPACES[12]}px;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACES[7]}px;
  width: 100%;
`
