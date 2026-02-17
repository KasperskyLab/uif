import type { AlertCardConfig } from './types'

export const alertCardConfig: AlertCardConfig = {
  toolbarLeft: [
    { type: 'button', key: 'edit', label: 'Edit', iconId: 'Edit' },
    {
      type: 'button',
      key: 'change-status',
      label: 'Change status',
      iconId: 'SettingsControl'
    },
    { type: 'button', key: 'assign', label: 'Assign', iconId: 'UserAccount' },
    {
      type: 'button',
      key: 'link-incident',
      label: 'Link to incident',
      iconId: 'Link'
    },
    {
      type: 'button',
      key: 'unlink-incident',
      label: 'Unlink from incident',
      iconId: 'Unlink'
    },
    {
      type: 'children',
      key: 'create-incident',
      childrenKey: 'createIncident'
    }
  ],
  tabs: [
    { key: 'summary', label: 'Summary', type: 'summary' },
    { key: 'details', label: 'Details', type: 'table', tableId: 'details' },
    { key: 'observables', label: 'Observables', type: 'table', tableId: 'observables' },
    {
      key: 'similar-alerts',
      label: 'Similar closed alerts',
      type: 'placeholder',
      placeholderText: 'No similar closed alerts.'
    },
    {
      key: 'history',
      label: 'History',
      type: 'placeholder',
      placeholderText: 'No history entries.'
    },
    {
      key: 'comments',
      label: 'Comments',
      type: 'placeholder',
      placeholderText: 'No comments.'
    }
  ],
  tableConfigs: {
    details: {
      columns: [
        { key: 'type', title: 'Type', dataIndex: 'type', width: 120 },
        { key: 'tenant', title: 'Tenant', dataIndex: 'tenant', width: 140 },
        { key: 'timestamp', title: 'Timestamp', dataIndex: 'timestamp', width: 180 },
        {
          key: 'eventDetails',
          title: 'Event details',
          dataIndex: 'eventDetails',
          width: 200
        }
      ],
      toolbarLeft: [
        {
          type: 'button',
          key: 'download-events',
          label: 'Download events',
          iconId: 'Download2'
        },
        {
          type: 'button',
          key: 'find-threat-hunting',
          label: 'Find in Threat hunting',
          iconId: 'Search'
        },
        {
          type: 'button',
          key: 'unlink-from-alert',
          label: 'Unlink from alert',
          iconId: 'Unlink'
        }
      ]
    },
    observables: {
      columns: [
        { key: 'type', title: 'Type', dataIndex: 'type', width: 120 },
        { key: 'value', title: 'Value', dataIndex: 'value', width: 200 },
        {
          key: 'additionalData',
          title: 'Additional data',
          dataIndex: 'additionalData',
          width: 200
        }
      ],
      toolbarLeft: [
        {
          type: 'button',
          key: 'select-response-actions',
          label: 'Select response actions',
          iconId: 'Settings21'
        },
        {
          type: 'button',
          key: 'export-csv',
          label: 'Export to CSV',
          iconId: 'Export'
        }
      ]
    }
  },
  summaryFields: [
    { name: 'analyst', label: 'Analyst', render: 'text' },
    { name: 'name', label: 'Name', render: 'text' },
    { name: 'tenant', label: 'Tenant', render: 'text' },
    {
      name: 'assets',
      label: 'Assets',
      render: 'text',
      getValue: (alert) => {
        const s = alert.summary as {
          assetsUsers?: number
          assetsDevices?: number
        }
        return `${s.assetsUsers ?? 0} users and ${s.assetsDevices ?? 0} devices`
      }
    },
    { name: 'registered', label: 'Registered', render: 'text' },
    { name: 'updated', label: 'Updated', render: 'text' },
    { name: 'firstEvent', label: 'First event', render: 'text' },
    { name: 'lastEvent', label: 'Last event', render: 'text' },
    { name: 'severity', label: 'Severity', render: 'tag' },
    { name: 'correlationRules', label: 'Correlation rules', render: 'text' },
    { name: 'technology', label: 'Technology', render: 'tag' }
  ],
  footer: {
    submitLabel: 'Save'
  }
}
