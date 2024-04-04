import styled from 'styled-components'
import { labelLikeControlsClassnames } from '@src/field/constants'
import { Field } from '@src/field'
import { FieldSetItemWithControlElement } from '@src/field-set/types'

const labelLikeControlSelector = labelLikeControlsClassnames.map(control => (
  `.kl6-field-control-box > ${control}`
)).join(', ')

export const StyledFieldSet = styled.div`
  width: 100%;
  max-width: 910px;
  display: flex;
  flex-direction: column;
`

export const StyledField = styled(Field).withConfig({
  shouldForwardProp: prop => !['marginBefore'].includes(prop)
})<FieldSetItemWithControlElement>`
  &:not(:first-child) {
    margin-top: ${props => props.marginBefore || '16px'};
  }
  &:has(${labelLikeControlSelector}) + &:has(${labelLikeControlSelector}) {
    margin-top: ${props => props.marginBefore || '8px'};
  }
`
