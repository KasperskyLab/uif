import { Icon } from '@src/icon'
import { Select } from '@src/select'
import React, { FC } from 'react'
import styled from 'styled-components'

import { AccessCode } from '../constants'
import { TOption } from '../types'

const IconNameByAccess = {
  [AccessCode.allow]: 'StatusOK',
  [AccessCode.block]: 'StatusError'
} as const

const IconColorByAccess = {
  [AccessCode.allow]: 'green',
  [AccessCode.block]: 'grey'
} as const

const Wrapper = styled.div`
  width: 180px;
`

const IconWrapper = styled.span(({ accessCode }: { accessCode: AccessCode }) => `
  display: inline-flex
  margin-right: 10px
  color: ${IconColorByAccess[accessCode]}
`)

export const AccessSelect: FC<{ options: TOption[], value: number }> = ({ options, value = AccessCode.block }) => {
  return (
    <Wrapper>
      <Select value={value}>
        {options.map((option) => (
          <Select.Option value={option.value} key={option.value} >
            <IconWrapper accessCode={option.value}>
              <Icon size="small" name={IconNameByAccess[option.value]} color="inherit" />
            </IconWrapper>
            <span>{option.label}</span>
          </Select.Option>
        ))}
      </Select>
    </Wrapper>
  )
}
