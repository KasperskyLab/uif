import styled from 'styled-components'
import {
  SPACES
} from '../../design-system/theme/themes/variables'

export const FieldFlexContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  width: 100%;
  max-width: 910px;
  margin: ${SPACES[10]}px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;

  .field-label {
    width: auto;
    min-width: auto;
    padding: ${SPACES[2]}px 0;

    .label-text {
      padding: 0;
    }
  }
  
  .field-control-wrapper {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

  .field-control {
    flex: 0 auto;
  }

  .field-helpTrigger {
    padding: 0 ${SPACES[2]}px;
    margin: 0 ${SPACES[2]}px;
  }
  
  .field-subtext {
    display: block;
    width: 100%;
    margin-top: ${SPACES[2]}px;
  }

  .field-control-wrapper:has(.ant-checkbox) ~ .field-subtext {
    margin-left: 23px;
  }

  .field-control-wrapper:has(.ant-switch.ant-switch-small) ~ .field-subtext {
    margin-left: 36px;
  }

  .field-control-wrapper:has(.ant-switch) ~ .field-subtext {
    margin-left: 52px;
  }

  &._label-before {
    .field-label {
      width: 235px;
      margin-right: ${SPACES[4]}px;
    }
  }

  &._label-after {
    .field-label {
      padding: ${SPACES[2]}px ${SPACES[4]}px;
    }
    
    .field-control {
      order: -1;
    }
  }

  &._label-top {
    .field-label {
      width: 100%;
      padding: 0;
    }
  }

  &._stretch {
    .field-control {
      flex: 1;
    }
  }
`
