import React from 'react'
import { metaList, IDodList } from '../types'
import { TableStyled, TdStyled } from './MetaTable.styles'

type MetaProps = {
  list: IDodList,
};

export const MetaTable: React.FC<MetaProps> = (props) => {
  const { list } = props

  return (
    <TableStyled>
      <thead>
        <tr>
          <td> Point </td>
          <td> Status </td>
        </tr>
      </thead>
      <tbody>
        {Object.keys(metaList.dod).map((key) => {
          const value = list[key as keyof IDodList]
          const status = value ? 'ready' : 'need'
          return (
            <tr key={key}>
              <TdStyled>{metaList.dod[key as keyof IDodList]}</TdStyled>
              <TdStyled value={value}>{status}</TdStyled>
            </tr>
          )
        })}
      </tbody>
    </TableStyled>
  )
}

export default MetaTable
