import React, { FC, useMemo } from 'react'
import styled from 'styled-components'
import { Tag } from '@src/tag'
import { metaDod, MetaDodProps } from './types'

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
    <StyledTableContainer>
      <table>
        <thead>
          <tr>
            {
              metaDodKeys.map(key => (
                <td>{metaDod[key]}</td>
              ))
            }
          </tr>
        </thead>
        <tbody>
        <tr>
        {
          metaDodKeys.map(key => (
              <td>
                <Tag mode={list[key] ? 'grass' : 'red'}>
                  {list[key] ? 'ready' : 'need'}
                </Tag>
              </td>
          ))
        }
        </tr>
        </tbody>
      </table>
    </StyledTableContainer>
  )
}
