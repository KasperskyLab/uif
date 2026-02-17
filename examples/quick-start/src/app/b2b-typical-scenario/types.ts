export type AlertStatus = 'New' | 'In progress' | 'In incident' | 'Closed'

export type AlertSeverity = 'Low' | 'Medium' | 'High' | 'Critical'

export interface AlertListItem {
  key: string
  id: number
  registered: string
  status: AlertStatus
  statusIncidentId?: number
  severity: AlertSeverity
  name: string
  nameTag?: string
  technology: string
  detected: string
  assignedTo: string
  tenant: string
}

export interface AlertSummary {
  analyst: string
  name: string
  tenant: string
  assetsUsers: number
  assetsDevices: number
  registered: string
  updated: string
  firstEvent: string
  lastEvent: string
  severity: AlertSeverity
  correlationRules: string
  technology: string
}

export interface DetailEventRow {
  key: string
  type: string
  tenant: string
  timestamp: string
  eventDetails: string
}

export interface ObservableRow {
  key: string
  type: string
  value: string
  additionalData: string
}

export interface AlertDetail {
  id: number
  status: AlertStatus
  summary: AlertSummary
  detailsEvents: DetailEventRow[]
  observables: ObservableRow[]
}

export type EntityCardFormState = {
  summary: Partial<AlertSummary>
}
