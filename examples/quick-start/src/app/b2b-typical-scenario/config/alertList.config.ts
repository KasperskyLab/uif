import type { AlertListTableConfig } from './types'

export const alertListTableConfig: AlertListTableConfig = {
  showSearch: true,
  showColumns: true,
  showFilterSidebar: true,
  columns: [
    {
      key: 'registered',
      title: 'Registered',
      dataIndex: 'registered',
      width: 160,
      isSortable: true,
      hideColumnAvailable: true,
      renderType: 'text'
    },
    {
      key: 'id',
      title: 'Alert ID',
      dataIndex: 'id',
      width: 120,
      hideColumnAvailable: true,
      renderType: 'link',
      linkPath: '/b2b-typical-scenario/entity/:id'
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      width: 140,
      hideColumnAvailable: true,
      renderType: 'status'
    },
    {
      key: 'severity',
      title: 'Severity',
      dataIndex: 'severity',
      width: 90,
      hideColumnAvailable: true,
      renderType: 'tag'
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      width: 200,
      hideColumnAvailable: true,
      renderType: 'nameWithTag'
    },
    {
      key: 'technology',
      title: 'Technology',
      dataIndex: 'technology',
      width: 100,
      hideColumnAvailable: true,
      renderType: 'technologyPopover'
    },
    {
      key: 'detected',
      title: 'Detected',
      dataIndex: 'detected',
      width: 160,
      hideColumnAvailable: true,
      renderType: 'text'
    },
    {
      key: 'assignedTo',
      title: 'Assigned to',
      dataIndex: 'assignedTo',
      width: 120,
      hideColumnAvailable: true,
      renderType: 'text'
    },
    {
      key: 'tenant',
      title: 'Tenant',
      dataIndex: 'tenant',
      width: 120,
      hideColumnAvailable: true,
      renderType: 'text'
    }
  ],
  toolbarLeft: [
    {
      type: 'button',
      key: 'refresh',
      label: 'Refresh',
      iconId: 'CloudSync',
      handlerKey: 'onRefresh',
      size: 'small'
    },
    {
      type: 'children',
      key: 'create-incident',
      childrenKey: 'createIncident'
    },
    {
      type: 'button',
      key: 'link-incident',
      label: 'Link to incident',
      iconId: 'Link',
      size: 'small'
    },
    {
      type: 'button',
      key: 'assign',
      label: 'Assign',
      iconId: 'UserAccount',
      size: 'small'
    },
    {
      type: 'button',
      key: 'change-status',
      label: 'Change status',
      iconId: 'SettingsControl',
      size: 'small'
    }
  ]
}
