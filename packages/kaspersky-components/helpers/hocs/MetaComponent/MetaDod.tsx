import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import { Subtitle } from '@storybook/blocks'
import { metaDod, MetaDodProps } from './types'
import { Tag } from '@src/tag'

const StyledTableContainer = styled.div`
  &&&&& {
    width: 300px;
    td, th, tr {
      background: transparent;
      border: none;
    }
  }
`

type MetaDodKeys = keyof MetaDodProps['list']

export const MetaDod: FC<MetaDodProps> = ({ list }: MetaDodProps) => {
  const metaDodKeys = useMemo(() => Object.keys(metaDod) as MetaDodKeys[], [])

  return (
    <>
      <Subtitle>
        {`Definition of done ${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`}
      </Subtitle>
      <StyledTableContainer>
        <table>
          <thead>
            <tr>
              <td><b>Point</b></td>
              <td><b>Status</b></td>
            </tr>
          </thead>
          <tbody>
          {
            metaDodKeys.map(key => (
              <tr key={key}>
                <td>{metaDod[key]}</td>
                <td>
                  <Tag mode={list[key] ? 'grass' : 'red'}>
                    {list[key] ? 'ready' : 'need'}
                  </Tag>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </StyledTableContainer>
    </>
  )
}
