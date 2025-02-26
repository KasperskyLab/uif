import { SPACES } from '@design-system/theme/themes/variables'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { Text } from '@src/typography'
import styled from 'styled-components'

export const FormTriggerStyled = styled.div.withConfig({ shouldForwardProp })`
  margin-bottom: ${SPACES[16]}px;
  display: flex;
  flex-direction: row;
  gap: ${SPACES[8]}px;
  max-width: 710px;
`

export const TitleWrapper = styled.div`
  flex: 0 0 calc(235px - ${SPACES[8]}px);
`

export const Description = styled(Text)`
  display: block;
  margin-top: 2px;
  
  span + & {
    margin-top: -1px;
  }
`
