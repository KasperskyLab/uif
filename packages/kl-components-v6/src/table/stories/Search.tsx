import React from 'react'
import styled from 'styled-components'
import { Link } from '../../link'
import { Table } from '..'
import { boolean } from '@storybook/addon-knobs'

const Wrapper = styled.div`
  background-color: #F6F6F6;
  padding: 50px;
`

type row = { name: string, description: string, children?: row[] }

const columns = [{
  title: 'table.column.name',
  dataIndex: 'name',
  width: 300
}, {
  title: 'table.column2.name',
  dataIndex: 'description',
  width: 200,
  render: (a: string) => (
    <Link href={'#'} >{a}</Link>
  )
}]

const data: row[] = [{
  name: 'John Doe',
  description: 'Nice guy'
}, {
  name: 'Jane Doe',
  description: 'Cool girl'
}, {
  name: 'James Doe',
  description: 'Noble man',
  children: [{
    name: 'Mary Sue',
    description: 'Dubious character',
    children: [{
      name: 'Dirk Gently',
      description: 'Best detective'
    }]
  }, {
    name: 'John Snow',
    description: 'Knows nothing'
  }]
}, {
  name: 'Judy Doe',
  description: 'Great person'
}, {
  name: 'One more detective',
  description: 'smth'
}]

const patchKeys = (data: row[], prefix: number[] = []): row[] => {
  return data.map((item, index) => ({
    ...item,
    ...item.children && { children: patchKeys(item.children, [...prefix, index]) },
    key: [...prefix, index].join(',')
  }))
}

export const Search = (): React.ReactElement => {
  return (
    <Wrapper>
      <Table
        toolbar={{
          showSearch: true
        }}
        enableSearchHighlighting={boolean('Enable results highlighting', true)}
        dataSource={patchKeys(data)}
        header={'Search'}
        columns={columns} />
    </Wrapper>
  )
}

const columnsWithRender = [{
  title: 'table.column.name',
  dataIndex: 'name',
  width: 300,
  render: (data: React.ReactNode) => {
    return {
      children:
        <b>
          {data}
          in jsx
        </b>,
      props: {}
    }
  }
}, {
  title: 'table.column2.name',
  dataIndex: 'name',
  width: 300,
  render: (data: React.ReactNode) => {
    return {
      children: <>
        <span dangerouslySetInnerHTML={{ __html: '<a href="">Text in jsx</a>' }} />
        <b> {data}</b>
      </>,
      props: {}
    }
  }
}, {
  title: 'table.column2.name',
  dataIndex: 'description',
  width: 300,
  render: (data: React.ReactNode) => <Link href={'#'} >Link: {data}</Link>
}]

export const SearchInRender = (): React.ReactElement => {
  return (
    <Wrapper>
      <Table
        toolbar={{
          showSearch: true
        }}
        filterItems={
          [
            {
              text: 'Filter1',
              onClose: () => console.log('1')
            },
            {
              text: 'Filter2',
              onClose: () => console.log('2')
            },
            {
              text: 'Filter1',
              onClose: () => console.log('1')
            },
            {
              text: 'Filter2',
              onClose: () => console.log('2')
            },
            {
              text: 'Filter1',
              onClose: () => console.log('1')
            },
            {
              text: 'Filter2',
              onClose: () => console.log('2')
            },
            {
              text: 'Filter1',
              onClose: () => console.log('1')
            },
            {
              text: 'Filter2',
              onClose: () => console.log('2')
            },
            {
              text: 'Filter1',
              onClose: () => console.log('1')
            },
            {
              text: 'Filter2',
              onClose: () => console.log('2')
            },
            {
              text: 'Filter1',
              onClose: () => console.log('1')
            },
            {
              text: 'Filter2',
              onClose: () => console.log('2')
            },
            {
              text: 'Filter1',
              onClose: () => console.log('1')
            },
            {
              text: 'Filter2',
              onClose: () => console.log('2')
            },
            {
              text: 'Filter1',
              onClose: () => console.log('1')
            },
            {
              text: 'Filter2',
              onClose: () => console.log('2')
            },
            {
              text: 'Filter1',
              onClose: () => console.log('1')
            },
            {
              text: 'Filter2',
              onClose: () => console.log('2')
            }
          ]
        }
        enableSearchHighlighting={boolean('Enable results highlighting', true)}
        dataSource={patchKeys(data)}
        header={'Search'}
        columns={columnsWithRender}
      />
    </Wrapper>
  )
}
