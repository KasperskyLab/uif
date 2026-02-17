import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Table,
  Button,
  Space,
  Text,
  Tag,
  Popover
} from '@kaspersky/hexa-ui'
import type { TableColumn, TableRecord } from '@kaspersky/hexa-ui'
import {
  CloudSync,
  Plus,
  Link as LinkIcon,
  UserAccount,
  SettingsControl
} from '@kaspersky/hexa-ui-icons/16'

import {
  alertListTableConfig,
  buildToolbarLeft,
  type AlertListColumnDescriptor
} from '../../config'
import type { AlertListItem, AlertStatus } from '../../types'

import { useAlertListQuery } from './AlertList.api'

const ICON_REGISTRY = {
  CloudSync,
  Plus,
  Link: LinkIcon,
  UserAccount,
  SettingsControl
} as const

function StatusCell({
  status,
  statusIncidentId
}: {
  status: AlertStatus
  statusIncidentId?: number
}) {
  if (status === 'In incident' && statusIncidentId) {
    return (
      <Tag mode="neutral" size="small">
        In incident ID {statusIncidentId}
      </Tag>
    )
  }
  const mode =
    status === 'New' ? 'purple' : status === 'Closed' ? 'grey' : 'neutral'
  return (
    <Tag mode={mode} size="small">
      {status}
    </Tag>
  )
}

function buildColumnsFromConfig(
  descriptors: AlertListColumnDescriptor[]
): TableColumn[] {
  return descriptors.map((d) => {
    const base = {
      key: d.key,
      title: <span>{d.title}</span>,
      dataIndex: d.dataIndex,
      width: d.width,
      hideColumnAvailable: d.hideColumnAvailable ?? false,
      isSortable: d.isSortable
    }
    if (!d.renderType || d.renderType === 'text') {
      return base
    }
    if (d.renderType === 'link') {
      return {
        ...base,
        render: (_: unknown, record: TableRecord) => {
          const row = record as AlertListItem
          const path = (d.linkPath ?? '').replace(':id', String(row.id))
          return (
            <Link to={path}>
              ID {row.id}
            </Link>
          )
        }
      }
    }
    if (d.renderType === 'status') {
      return {
        ...base,
        render: (_: unknown, record: TableRecord) => {
          const row = record as AlertListItem
          return (
            <StatusCell
              status={row.status}
              statusIncidentId={row.statusIncidentId}
            />
          )
        }
      }
    }
    if (d.renderType === 'tag') {
      return {
        ...base,
        render: (value: unknown) => (
          <Tag mode="grey" size="small">{String(value ?? '')}</Tag>
        )
      }
    }
    if (d.renderType === 'nameWithTag') {
      return {
        ...base,
        render: (value: unknown, record: TableRecord) => {
          const row = record as AlertListItem
          return (
            <Space size={4} wrap="nowrap" style={{ minWidth: 0 }}>
              <span
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  minWidth: 0
                }}
              >
                <Text>{String(value)}</Text>
              </span>
              {row.nameTag != null && (
                <Tag mode="grass" size="small" style={{ flexShrink: 0 }}>
                  {row.nameTag}
                </Tag>
              )}
            </Space>
          )
        }
      }
    }
    if (d.renderType === 'technologyPopover') {
      return {
        ...base,
        render: (value: unknown) => {
          const tech = String(value ?? '')
          const description =
            tech === 'KUMA'
              ? 'Unified monitoring and analytics platform.'
              : tech === 'EDR'
                ? 'Endpoint detection and response.'
                : tech === 'NDR'
                  ? 'Network detection and response.'
                  : 'Detection or response technology.'
          return (
            <Popover
              content={
                <>
                  <Text type="BTM3" style={{ display: 'block', marginBottom: 4 }}>
                    Technology
                  </Text>
                  <Text type="BTR4">{description}</Text>
                </>
              }
            >
              <span>
                <Tag mode="neutral" size="small">
                  {tech}
                </Tag>
              </span>
            </Popover>
          )
        }
      }
    }
    return base
  })
}

export function AlertListView() {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [pageSize] = useState(10)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const { data, refetch, isFetching } = useAlertListQuery(page, pageSize)
  const items = data?.items ?? []
  const total = data?.total ?? 0

  const columns = useMemo(
    () => buildColumnsFromConfig(alertListTableConfig.columns),
    []
  )

  const toolbarLeft = useMemo(
    () =>
      buildToolbarLeft(alertListTableConfig.toolbarLeft, {
        icons: ICON_REGISTRY as unknown as Record<
          string,
          React.ComponentType<Record<string, unknown>>
        >,
        handlers: {
          onRefresh: () => refetch()
        },
        children: {
          createIncident: (
            <Button
              mode="primary"
              size="small"
              iconBefore={<Plus />}
              onClick={() => navigate('/b2b-typical-scenario/create')}
            >
              Create
            </Button>
          )
        }
      }),
    [navigate, refetch]
  )

  return (
    <Table
      toolbar={{
        left: toolbarLeft,
        showSearch: alertListTableConfig.showSearch,
        showColumns: alertListTableConfig.showColumns,
        showFilterSidebar: alertListTableConfig.showFilterSidebar
      }}
      rowSelection={{
        selectedRowKeys,
        onChange: (keys) => setSelectedRowKeys(keys as React.Key[])
      }}
      columns={columns}
      dataSource={items}
      loading={isFetching}
      pagination={{
        current: page,
        pageSize,
        total,
        onChange: (current) => setPage(current ?? 1)
      }}
    />
  )
}
