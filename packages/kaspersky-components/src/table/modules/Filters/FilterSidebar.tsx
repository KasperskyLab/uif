import React from 'react'
import { Sidebar } from '@src/sidebar'
import { TableModule } from '../'
import { ITableProps } from '@src/table/types'
import FilterItem from './FilterItem'
import FilterRow from './FilterRow'
import styled from 'styled-components'
import { Select } from '@src/select'
import { Textbox } from '@src/input'
import FilterToolbar from './FilterToolbar'
import { Button } from '@src/button'

const FilterList = styled.div`
  display: grid;
  gap: 16px;

  & + & {
    padding-top: 16px;
  }
`

const StyledFooter = styled.div`
  display: flex;
  gap: 12px;
`

export const FilterSidebar: TableModule =
  (Component) => (props: ITableProps) => {
    return (
      <>
        <Sidebar
          size="small"
          onClose={props.onCloseFilterSidebar}
          visible={props.showFilterSidebar}
          title="Filter"
          subHeader={<FilterToolbar />}
          footer={
            <StyledFooter>
              <Button onClick={props.onCloseFilterSidebar}>Apply</Button>
              <Button onClick={props.onCloseFilterSidebar} mode="secondary">
                Cancel
              </Button>
            </StyledFooter>
          }
        >
          <FilterList>
            {[0, 1].map((n) => (
              <FilterItem key={`filter-list-${n}`}>
                <FilterRow title="Property">
                  <Select />
                </FilterRow>
                <FilterRow title="Condition">
                  <Select />
                </FilterRow>
                <FilterRow title="Value">
                  <Textbox />
                </FilterRow>
              </FilterItem>
            ))}
          </FilterList>
        </Sidebar>
        <Component {...props} />
      </>
    )
  }
