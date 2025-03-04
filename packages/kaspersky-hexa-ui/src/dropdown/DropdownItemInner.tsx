import { Tooltip } from '@src/tooltip'
import React, { FC, useMemo } from 'react'
import styled from 'styled-components'

import { ArrowRight } from '@kaspersky/hexa-ui-icons/16'

import { dropdownItemInnerCss } from './dropdownCss'
import { DropdownItemInnerProps } from './types'

const StyledDropdownItemInner = styled.div`
  ${dropdownItemInnerCss}
`

export const DropdownItemInner: FC<DropdownItemInnerProps> = ({
  children,
  type,
  tooltip,
  description,
  componentsBefore,
  componentsAfter
}: DropdownItemInnerProps) => {
  const dropdownItemInner = useMemo(() =>
    <StyledDropdownItemInner>
      <div className="kl6-dropdown-item-inner-block">
        {
          componentsBefore?.map((Component, index) => (
            <div key={index} className="kl6-dropdown-item-inner-additional">
              {Component}
            </div>
          ))
        }
        <div className="kl6-dropdown-item-inner-text-wrapper">
          <div className="kl6-dropdown-item-inner-text">{children}</div>
          {description && <div className="kl6-dropdown-item-description">{description}</div>}
        </div>
      </div>
      {(componentsAfter || type === 'submenu') && (
        <div className="kl6-dropdown-item-inner-block">
          {
            componentsAfter?.map((Component, index) => (
              <div key={index} className="kl6-dropdown-item-inner-additional">
                {Component}
              </div>
            ))
          }
          {
            type === 'submenu' && (
              <div className="kl6-dropdown-item-inner-expand-icon"><ArrowRight/></div>
            )
          }
        </div>
      )}
    </StyledDropdownItemInner>
  , [children, componentsAfter, componentsBefore, description, type])

  return tooltip
    ? <Tooltip text={tooltip}>
        {dropdownItemInner}
      </Tooltip>
    : dropdownItemInner
}
