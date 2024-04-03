import React from 'react'
import { Icon } from '../../src'
import { Text } from '../../src/typography'
import { data, Change } from './data'
import styled from 'styled-components'

import { Table as AntTable } from 'antd'

const ChangesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`

const StyledChanges = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledProp = styled(Text)`
  margin-right: 20px;
`

const StyledChange = styled(Text)`
  margin-bottom: 5px;
`

const StyledIcon = styled(Icon)`
  align-self: center;
  margin-bottom: 5px;
`

const Changes = (change: Change[] | string | undefined) => {
  if (!change) return <Text>Нет изменений</Text>

  if (typeof change === 'string') {
    return <Text>{change}</Text>
  }

  return <>
    {change.map(({ prop, changes }, i) => {
      return <div key={prop}>
        <ChangesContainer>
          <StyledProp type='BTM3'>{prop}</StyledProp>
          <StyledChanges>
            {
              typeof changes === 'object'
                ? (
                  <>
                    <StyledChange type='BTR3'>{changes.before}</StyledChange>
                    <StyledIcon size='small' name='Arrowdown' />
                    <StyledChange type='BTR3'>{changes.after}</StyledChange>
                    {changes.description && <StyledChange type='BTM3'>{changes.description}</StyledChange>}
                  </>
                )
                : changes
            }
          </StyledChanges>
        </ChangesContainer>
        {i !== change.length - 1 && <hr />}
      </div>
    })}
  </>
}

export const columns = [
  {
    title: 'Компонент',
    dataIndex: 'component',
    width: 100,
    render: (component: string) => {
      return <Text type='BTM1'>{component}</Text>
    }
  },
  {
    title: 'v6',
    dataIndex: 'v6',
    width: 300,
    render: (link: string) => {
      return <a href={`/?path=${link}`}>Api Table</a>
    }
  },
  {
    title: 'Переход с v3',
    dataIndex: 'v3',
    width: 300,
    align: 'right' as const,
    render: Changes
  },
  {
    title: 'Переход с v5',
    dataIndex: 'v5',
    width: 300,
    align: 'right' as const,
    render: Changes
  },
  {
    title: 'Общее',
    dataIndex: 'common',
    width: 300,
    align: 'right' as const,
    render: Changes
  }

]

export const Table = () => {
  return <AntTable
    pagination={false}
    dataSource={data}
    columns={columns}
   />
}
