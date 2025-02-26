import React from 'react'

import { AccessSelect, GroupAccess, LoadMore, RiskLevel } from './components'
import { ECellType, selectOptions } from './constants'
import type { TData } from './types'

export const renderCell = (data: TData) => {
  switch (data?.type) {
    case ECellType.GROUP_NAME:
      return {
        children: data.name,
        props: {
          colSpan: 2,
          align: 'left'
        }
      }
    case ECellType.GROUP_ACCESS:
      return {
        children: <GroupAccess {...data} />,
        props: {
          width: '50%'
        }
      }
    case ECellType.RISK_LEVEL:
      return { children: <RiskLevel {...data} />, props: { width: 93 } }
    case ECellType.SERVICE_NAME:
      return data.serviceName
    case ECellType.ACCESS:
      return <AccessSelect options={selectOptions} value={data.access} />
    case ECellType.BUTTON:
      return {
        children: <LoadMore />,
        props: {
          colSpan: 3
        }
      }
    default:
      return { props: { colSpan: 0 } }
  }
}
