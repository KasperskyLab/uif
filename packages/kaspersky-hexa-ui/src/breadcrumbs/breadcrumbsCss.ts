import { getFromProps } from '@helpers/getFromProps'
import { Dropdown } from '@src/dropdown'
import styled, { css } from 'styled-components'

import { BreadcrumbsCssConfig } from './types'

const fromProps = getFromProps<BreadcrumbsCssConfig>()

const commonBreadcrumbsCss = css`
  font-family: ${fromProps('fontFamily')};
  font-size: ${fromProps('fontSize')};
  line-height: ${fromProps('lineHeight')};
  font-weight: ${fromProps('fontWeight')};
  font-style: ${fromProps('fontStyle')};
  letter-spacing: ${fromProps('letterSpacing')};
`

export const breadcrumbsCss = css`
  display: flex;
  align-items: center;

  && a {
    ${commonBreadcrumbsCss}
    &, &:link, &:visited, &:focus, &:active {
      color: ${fromProps('enabled.color')};
    }
    &:hover {
      color: ${fromProps('hover.color')};
    }
    &.kl-components-link_disabled {
      color: ${fromProps('disabled.color')};
    }
  }
`

export const StyledBreadcrumbsSeparator = styled.span`
  ${commonBreadcrumbsCss}
  color: ${fromProps('enabled.color')};
  margin: 0 ${fromProps('gap')};
`

export const StyledDropdownMenuItem = styled(Dropdown.MenuItem).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})<{ cssConfig: BreadcrumbsCssConfig }>`
  &:not(.ant-dropdown-menu-item-selected) {
    a:not(.kl-components-link_disabled) {
      &, &:link, &:visited, &:focus, &:active, &:hover {
        color: ${fromProps('selected.color')};
      }
    }
  }
`
