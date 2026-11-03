import { TableColumn, TableRecord } from '@src/table'

export type ChildrenPath = {
  groupKey: string,
  groupIndex: number,
  itemIndex: number
}

export type ArrayGroupMove <T extends TableRecord> = {
  array: T[],
  from: ChildrenPath,
  to: ChildrenPath,
  groupingPropertyPath: string[]
}

export type PropertyPathArgs <T extends TableRecord> = {
  groupBy: string | undefined,
  columns: TableColumn<T>[]
}

export interface DraggableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  id: string;
  'data-row-key': string
}