import type {
  AlertListItem,
  AlertDetail,
  AlertStatus,
  AlertSeverity
} from '../types'

const statuses: AlertStatus[] = ['New', 'In progress', 'In incident', 'Closed']
const severities: AlertSeverity[] = ['Low', 'Medium', 'High', 'Critical']
const technologies = ['KUMA', 'EDR', 'NDR']
const tenants = ['Root tenant', 'Tenant A']

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function generateAlertList(count: number): AlertListItem[] {
  return Array.from({ length: count }, (_, i) => {
    const id = 1193776 - i
    const status = randomItem(statuses)
    return {
      key: String(id),
      id,
      registered: `02/15/2026 ${3 + (i % 12)}:${18 + (i % 40)}:${16 + (i % 44)} pm`,
      status,
      ...(status === 'In incident' && { statusIncidentId: 3794 }),
      severity: randomItem(severities),
      name: i === 1 ? 'cert_attribute_enum_via_ldap' : 'Test Sum - копия',
      ...(i === 1 && { nameTag: 'IOA' }),
      technology: randomItem(technologies),
      detected: i === 1 ? 'cert_attribute_enum_via_ldap' : 'Test Sum - копия',
      assignedTo: i % 3 === 0 ? 'Not assigned' : `Analyst ${(i % 5) + 1}`,
      tenant: randomItem(tenants)
    }
  })
}

const list = generateAlertList(50)

export function getAlertList(
  page: number,
  pageSize: number
): { items: AlertListItem[], total: number } {
  const start = (page - 1) * pageSize
  return {
    items: list.slice(start, start + pageSize),
    total: list.length
  }
}

export function getAlertById(id: number): AlertDetail | undefined {
  const item = list.find((a) => a.id === Number(id))
  if (!item) return undefined
  return {
    id: item.id,
    status: item.status,
    summary: {
      analyst: item.assignedTo,
      name: item.name,
      tenant: item.tenant,
      assetsUsers: 0,
      assetsDevices: 0,
      registered: item.registered,
      updated: item.registered,
      firstEvent: item.registered.replace(/\d{2}$/, '08'),
      lastEvent: item.registered.replace(/\d{2}$/, '37'),
      severity: item.severity,
      correlationRules: item.name,
      technology: item.technology
    },
    detailsEvents: [
      {
        key: '1',
        type: 'Correlated',
        tenant: item.tenant,
        timestamp: '2026-02-15 15:18:37',
        eventDetails: 'Hostip: 10.16.72.102, Host OS family: Windows, Host OS name: Microsoft Windows Enterprise, loAAlert: false, loASeverity: Medium, loATactics: Execution'
      },
      {
        key: '2',
        type: 'Correlated',
        tenant: item.tenant,
        timestamp: '2026-02-15 15:18:12',
        eventDetails: 'Hostip: 192.168.56.1, Host OS family: Linux, Host OS name: Ubuntu, loAAlert: false, loASeverity: Low'
      },
      {
        key: '3',
        type: 'Correlated',
        tenant: item.tenant,
        timestamp: '2026-02-15 15:18:08',
        eventDetails: 'Hostip: 10.16.72.102, Event ID: 12345, Severity: Medium'
      }
    ],
    observables: [
      { key: '1', type: 'IP', value: '10.16.72.102', additionalData: '—' },
      { key: '2', type: 'Hostname', value: 'WORKSTATION-01', additionalData: '—' }
    ]
  }
}
