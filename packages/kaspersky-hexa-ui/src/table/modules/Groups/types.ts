import { TableColumn, TableRecord } from '@src/table'
import React from 'react'

export type GroupTitleItem<T extends TableRecord = TableRecord> = {
  getGroupTitleText: () => string,
  groupTitleRender?: TableColumn<T>['renderGroupTitle'],
  groupTitleIconRender?: TableColumn<T>['renderGroupTitleIcon'],
  key: React.Key,
  isGroupTitle: true,
  count: number | false | undefined,
  children?: T[]
}
