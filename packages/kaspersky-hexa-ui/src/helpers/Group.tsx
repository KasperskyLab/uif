import { Space } from '@src/space'
import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

export type ToGroupProps<T = Record<string, unknown>> = {
  /** Array of items */
  items: T[] | ReactElement<T>[],
  /** Direction of the elements */
  orientation?: 'horizontal' | 'vertical'
}

type GroupProps<T> = ToGroupProps<T> & {
  Component: FC<T>
}

const StyledSpace = styled(Space)`
  > .ant-tag {
    margin: 0;
  }
`

export const Group = <T, >({ items, Component, orientation = 'horizontal' }: GroupProps<T>): JSX.Element => (
  <StyledSpace direction={orientation} gap={4}>
    {items.map((item, index: number) => {
      if (React.isValidElement(item)) {
        return item
      }
      const typedItem = item as T
      return <Component key={index} {...typedItem} />
    })}
  </StyledSpace>
)
