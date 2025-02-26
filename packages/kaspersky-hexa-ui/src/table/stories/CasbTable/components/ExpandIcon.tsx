import { Icon } from '@src/icon'
import type { ITableProps } from '@src/table'
import React from 'react'
import styled from 'styled-components'

const Button = styled.button(({ expanded }: { expanded: boolean }) => `
  outline: 'none';
  rotate: ${expanded ? '0deg' : '-90deg'};
  transition: rotate .2s;
  border: none;
  box-shadow: none;
  background: transparent;
`)

export const ExpandIcon: ITableProps['expandIcon'] = ({ expanded, onExpand, record }) => {
  return (
    record.children
      ? <Button type="button" expanded={expanded} onClick={(e) => onExpand(record, e)}>
          <Icon name="Down" size="extraSmall" />
        </Button>
      : null
  )
}
