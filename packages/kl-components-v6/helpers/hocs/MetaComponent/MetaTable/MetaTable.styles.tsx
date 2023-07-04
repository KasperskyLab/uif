import styled from 'styled-components'
import { getTextSizes, TextTypes } from '../../../../design-system/tokens'

export const TdStyled = styled.td<{ value?: boolean }>`

  color: ${({ theme, value }) => {
    if (value === undefined) {
      return theme.colors.textIconsElements.secondary
    } else {
      return value ? theme.colors.criticalitystatuses.positive : theme.colors.criticalitystatuses.critical
    }
  }};
`
export const TableStyled = styled.table`
${getTextSizes(TextTypes.BTM2)}
  border-collapse: collapse;
  margin-bottom:  ${({ theme: { spaces } }) => `${spaces[4]}px`};

  tbody {
    td {
      padding:  ${({ theme: { spaces } }) => `${spaces[2]}px ${spaces[4]}px`};
    }
  }
  thead {
    text-align: left;
    th {
      color: ${({ theme: { colors } }) => colors.textIconsElements.primary};
    }

    td {
      padding:  ${({ theme: { spaces } }) => `${spaces[4]}px 0px`};
      color:  ${({ theme: { colors } }) => colors.textIconsElements.primary};
    }
  }
`
