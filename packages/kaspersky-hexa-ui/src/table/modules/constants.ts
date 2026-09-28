import Table from 'antd/es/table'

import { DND_COLUMN } from './Draggable'
export const READONLY_COLUMNS = [Table.SELECTION_COLUMN, Table.EXPAND_COLUMN, DND_COLUMN] as const

export const REACT_SERVICE_PARAMS = ['_owner', '_store']
