import { Field } from '@src/field'
import { Select } from '@src/select'
import styled from 'styled-components'

export const StyledQuickFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`

export const StyledField = styled(Field)`
  width: unset;
  max-width: unset;

  && .kl6-field-control-wrapper .kl6-field-control-box {
    min-width: max-content;
  }

  &&.kl6-field-label-position-before .kl6-field-label {
    width: max-content;
    padding-right: 8px;
  }

  &&.kl6-field-label-position-top .kl6-field-control-wrapper {
    justify-content: end;
  }
`

export const StyledSelect = styled(Select)<{ $width?: string }>`
  ${(props) => props.$width && `width: ${props.$width};`}
`

export const ToggleWrapper = styled.span`
  height: 32px;
  display: flex;
  align-items: center;
`
