import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { Field } from '@src/field'
import { textLikeControlsClassnames } from '@src/field/constants'
import styled, { css } from 'styled-components'

import { FieldSetItemConfig } from './types'

const labelLikeControlSelector = textLikeControlsClassnames.map(control => (
  `.kl6-field-control-box > ${control}`
)).join(', ')

export const StyledFieldSet = styled.div.withConfig({ shouldForwardProp })`
  width: 100%;
  max-width: 910px;
  display: flex;
  flex-direction: column;

  .kl6-field:not(:first-child) {
    margin-top: 16px;
  }
`

export const StyledField = styled(Field).withConfig({
  shouldForwardProp: prop => !['marginBefore', 'fieldClassName'].includes(prop)
})<FieldSetItemConfig>`
  ${({ marginBefore }) => {
    const isString = typeof marginBefore === 'string'
    return css`
      &&:not(:first-child) {
        margin-top: ${isString ? marginBefore : `${marginBefore || 16}px`};
      }
      &:has(${labelLikeControlSelector}) + &:has(${labelLikeControlSelector}) {
        margin-top: ${isString ? marginBefore : `${marginBefore || 8}px`};
      }
    `
  }}
`
