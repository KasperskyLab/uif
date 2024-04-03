import React, { FC } from 'react'
import styled from 'styled-components'
import { dropdownItemInnerCss } from './dropdownCss'
import { DropdownItemInnerProps } from './types'
import { ArrowRight } from '@kaspersky/icons/16'

const StyledDropdownItemInner = styled.div`
  ${dropdownItemInnerCss}
`

export const DropdownItemInner: FC<DropdownItemInnerProps> = ({
  children,
  type,
  componentsBefore,
  componentsAfter
}: DropdownItemInnerProps) => {
  return (
    <StyledDropdownItemInner>
      <div className='kl6-dropdown-item-inner-block'>
        {
          componentsBefore?.map((Component, index) => (
            <div key={index} className='kl6-dropdown-item-inner-additional'>
              {Component}
            </div>
          ))
        }
        <div className='kl6-dropdown-item-inner-text'>{children}</div>
      </div>
      {(componentsAfter || type === 'submenu') && (
        <div className='kl6-dropdown-item-inner-block'>
          {
            componentsAfter?.map((Component, index) => (
              <div key={index} className='kl6-dropdown-item-inner-additional'>
                {Component}
              </div>
            ))
          }
          {
            type === 'submenu' && (
              <div className='kl6-dropdown-item-inner-expand-icon'>{<ArrowRight/>}</div>
            )
          }
        </div>
      )}
    </StyledDropdownItemInner>
  )
}
