import { useMutation, useQuery } from '@tanstack/react-query'
import { apiGet, apiPut } from '../../../../shared/Forma'
import type { AlertDetail } from '../../types'
import type { AlertCardSummaryFormValues } from './AlertCard.forma-config'

const ALERTS_PATH = '/alerts'

/** Backend DTO: response from GET /api/alerts/:id */
export type AlertCardResponseDto = AlertDetail

/** Backend DTO: request body for PUT /api/alerts/:id/summary */
export type AlertCardSummaryRequestDto = AlertCardSummaryFormValues

export function useAlertCardQuery(id: number | undefined) {
  return useQuery<AlertCardResponseDto, Error>({
    queryKey: [ALERTS_PATH, id],
    queryFn: () =>
      apiGet<AlertCardResponseDto>(`${ALERTS_PATH}/${id}`),
    enabled: id != null
  })
}

export function useSaveAlertSummaryMutation(id: number | undefined) {
  return useMutation<void, Error, AlertCardSummaryFormValues>({
    mutationFn: (body) =>
      id != null
        ? apiPut<void, AlertCardSummaryRequestDto>(
            `${ALERTS_PATH}/${id}/summary`,
            body
          )
        : Promise.resolve()
  })
}
