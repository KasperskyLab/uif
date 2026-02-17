import { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Tabs,
  Button,
  Space,
  Text,
  Tag,
  Table,
  Toolbar,
  Notification
} from '@kaspersky/hexa-ui'
import type { TableColumn } from '@kaspersky/hexa-ui'
import {
  Edit,
  SettingsControl,
  UserAccount,
  Link,
  Unlink,
  Plus,
  Download2,
  Search,
  Export,
  Settings21
} from '@kaspersky/hexa-ui-icons/16'
import styled from 'styled-components'

import {
  alertCardConfig,
  buildToolbarLeft,
  type AlertCardConfig,
  type SummaryFieldDescriptor
} from '../../config'
import type { AlertDetail, AlertSummary, EntityCardFormState } from '../../types'

import type { AlertCardSummaryFormValues } from './AlertCard.forma-config'
import { useAlertCardQuery, useSaveAlertSummaryMutation } from './AlertCard.api'

function summaryToFormState(s: AlertSummary): EntityCardFormState['summary'] {
  return {
    analyst: s.analyst,
    name: s.name,
    tenant: s.tenant,
    registered: s.registered,
    updated: s.updated,
    firstEvent: s.firstEvent,
    lastEvent: s.lastEvent,
    severity: s.severity,
    correlationRules: s.correlationRules,
    technology: s.technology
  }
}

const CardRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
`

const CardHeader = styled.div`
  flex-shrink: 0;
  margin-bottom: 16px;
`

const CardTabsWrapper = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`

const CardFooter = styled.div`
  flex-shrink: 0;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  margin-top: 16px;
`

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 32px;
  max-width: 720px;
`

const SummaryRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const SummaryTagWrap = styled.span`
  width: fit-content;
`

const SummaryLabel = styled(Text).attrs({ type: 'BTR4' })`
  color: rgba(0, 0, 0, 0.45);
`

const TabSection = styled.div`
  margin-bottom: 16px;
`

const CARD_ICON_REGISTRY = {
  Edit,
  SettingsControl,
  UserAccount,
  Link,
  Unlink,
  Plus,
  Download2,
  Search,
  Export,
  Settings21
} as const

function buildTableColumns(
  descriptors: AlertCardConfig['tableConfigs'][string]['columns']
): TableColumn[] {
  return descriptors.map((d) => ({
    key: d.key,
    title: d.title,
    dataIndex: d.dataIndex,
    width: d.width
  }))
}

export function AlertCardView() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const numericId = id ? Number(id) : undefined
  const { data: alertData, isLoading, isError } = useAlertCardQuery(numericId)
  const saveMutation = useSaveAlertSummaryMutation(numericId)
  const [formState, setFormState] = useState<EntityCardFormState>({
    summary: {}
  })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (alertData?.summary) {
      setFormState((prev) => ({
        ...prev,
        summary: summaryToFormState(alertData.summary)
      }))
    }
  }, [alertData?.id])

  const onSave = useCallback(() => {
    const summary = formState.summary as Record<string, unknown>
    const payload: AlertCardSummaryFormValues = {
      analyst: String(summary?.analyst ?? ''),
      name: String(summary?.name ?? ''),
      tenant: String(summary?.tenant ?? ''),
      registered: String(summary?.registered ?? ''),
      updated: String(summary?.updated ?? ''),
      firstEvent: String(summary?.firstEvent ?? ''),
      lastEvent: String(summary?.lastEvent ?? ''),
      severity: String(summary?.severity ?? ''),
      correlationRules: String(summary?.correlationRules ?? ''),
      technology: String(summary?.technology ?? '')
    }
    saveMutation.mutate(payload, {
      onSuccess: () => {
        setSaved(true)
        setTimeout(() => setSaved(false), 2000)
      },
      onError: (err) => {
        window.alert(err instanceof Error ? err.message : String(err))
      }
    })
  }, [formState, saveMutation])

  const cardToolbarLeft = useMemo(
    () =>
      buildToolbarLeft(alertCardConfig.toolbarLeft, {
        icons: CARD_ICON_REGISTRY as unknown as Record<
          string,
          React.ComponentType<Record<string, unknown>>
        >,
        children: {
          createIncident: (
            <Button mode="primary" iconBefore={<Plus />} size="small">
              Create incident
            </Button>
          )
        }
      }),
    []
  )

  if (isLoading || (numericId != null && !alertData && !isError)) {
    return <Text>Loading…</Text>
  }
  if (!numericId || !alertData) {
    return (
      <Space direction="vertical" size={16}>
        <Text>Alert not found.</Text>
        <Button
          mode="secondary"
          onClick={() => navigate('/b2b-typical-scenario')}
        >
          Back to list
        </Button>
      </Space>
    )
  }

  return (
    <CardRoot>
      <Notification />
      <CardHeader>
        <Toolbar left={cardToolbarLeft} />
      </CardHeader>

      <CardTabsWrapper>
        <Tabs defaultActiveKey="summary">
          {alertCardConfig.tabs.map((tab) => {
            if (tab.type === 'summary') {
              return (
                <Tabs.TabPane
                  tab={<Tabs.TabPaneHead text={tab.label} />}
                  key={tab.key}
                >
                  <TabSection>
                    <SummaryGrid>
                      {alertCardConfig.summaryFields.map((field) => (
                        <SummaryRow key={field.name}>
                          <SummaryLabel>{field.label}</SummaryLabel>
                          <SummaryFieldValue
                            field={field}
                            formState={formState}
                            alert={alertData}
                          />
                        </SummaryRow>
                      ))}
                    </SummaryGrid>
                  </TabSection>
                </Tabs.TabPane>
              )
            }
            if (tab.type === 'table' && tab.tableId) {
              const tableConf = alertCardConfig.tableConfigs[tab.tableId]
              if (!tableConf) return null
              const dataSource =
                tab.tableId === 'details'
                  ? alertData.detailsEvents
                  : tab.tableId === 'observables'
                    ? alertData.observables
                    : []
              const tableToolbarLeft = buildToolbarLeft(tableConf.toolbarLeft, {
                icons: CARD_ICON_REGISTRY as unknown as Record<
                  string,
                  React.ComponentType<Record<string, unknown>>
                >
              })
              return (
                <Tabs.TabPane
                  tab={<Tabs.TabPaneHead text={tab.label} />}
                  key={tab.key}
                >
                  <TabSection>
                    <Table
                      toolbar={{ left: tableToolbarLeft }}
                      columns={buildTableColumns(tableConf.columns)}
                      dataSource={dataSource}
                      pagination={false}
                    />
                  </TabSection>
                </Tabs.TabPane>
              )
            }
            if (tab.type === 'placeholder') {
              return (
                <Tabs.TabPane
                  tab={<Tabs.TabPaneHead text={tab.label} />}
                  key={tab.key}
                >
                  <TabSection>
                    <Text type="BTR4">{tab.placeholderText ?? ''}</Text>
                  </TabSection>
                </Tabs.TabPane>
              )
            }
            return null
          })}
        </Tabs>
      </CardTabsWrapper>

      <CardFooter>
        <Button
          mode="primary"
          onClick={onSave}
          disabled={saveMutation.isPending}
        >
          {saved ? 'Saved' : alertCardConfig.footer.submitLabel}
        </Button>
      </CardFooter>
    </CardRoot>
  )
}

function SummaryFieldValue({
  field,
  formState,
  alert
}: {
  field: SummaryFieldDescriptor
  formState: EntityCardFormState
  alert: AlertDetail
}) {
  const summaryRecord = formState.summary as Record<string, unknown>
  const alertSummaryRecord = alert.summary as unknown as Record<string, unknown>
  const raw =
    field.getValue != null
      ? field.getValue({ summary: alert.summary })
      : summaryRecord?.[field.name] ?? alertSummaryRecord[field.name] ?? '—'
  const value = raw === '' || raw == null ? '—' : String(raw)

  if (field.getValue != null) {
    return <>{raw}</>
  }
  if (field.render === 'tag') {
    return (
      <SummaryTagWrap>
        <Tag
          mode={field.name === 'severity' ? 'grey' : 'neutral'}
          size="small"
        >
          {value}
        </Tag>
      </SummaryTagWrap>
    )
  }
  return <Text>{value}</Text>
}
