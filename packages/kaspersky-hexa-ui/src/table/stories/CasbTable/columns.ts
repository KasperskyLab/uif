import { renderCell } from './renderCell'

export const columns = [
  {
    title: 'Service name and risk level',
    dataIndex: 'leadColumn',
    colSpan: 2,
    align: 'left' as const,
    width: 93,
    key: 'lead',
    render: renderCell
  },
  {
    colSpan: 0,
    align: 'left' as const,
    dataIndex: 'serviceName',
    key: 'name',
    width: 'auto',
    render: renderCell
  },
  {
    title: 'Access',
    align: 'left' as const,
    dataIndex: 'access',
    key: 'access',
    render: renderCell
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    colSpan: 2,
    align: 'left' as const,
    width: 'auto',
    key: 'tags',
    render: renderCell
  }
]
