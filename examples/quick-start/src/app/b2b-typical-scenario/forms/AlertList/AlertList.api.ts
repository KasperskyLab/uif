import { useQuery } from '@tanstack/react-query'
import { apiGet } from '../../../../shared/Forma'
import type { AlertListItem } from '../../types'

const ALERT_LIST_PATH = '/alerts'

/** Backend DTO: response from GET /api/alerts?page=&pageSize= */
export type AlertListResponseDto = {
  items: AlertListItem[]
  total: number
}

export function useAlertListQuery(page: number, pageSize: number) {
  return useQuery<AlertListResponseDto, Error>({
    queryKey: [ALERT_LIST_PATH, page, pageSize],
    queryFn: () =>
      apiGet<AlertListResponseDto>(
        `${ALERT_LIST_PATH}?page=${page}&pageSize=${pageSize}`
      )
  })
}
