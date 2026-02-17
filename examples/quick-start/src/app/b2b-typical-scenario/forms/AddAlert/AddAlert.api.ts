import type { MutateOptions } from '@tanstack/react-query'
import { useFormaPost } from '../../../../shared/Forma'
import type { AddAlertFormValues } from './AddAlert.forma-config'

const ADD_ALERT_PATH = '/alerts'

/** Backend DTO: request body for POST /api/alerts */
export type AddAlertRequestDto = AddAlertFormValues

/** Backend DTO: response from POST /api/alerts */
export type AddAlertResponseDto = {
  id: number
}

export function useAddAlertMutation() {
  const mutation = useFormaPost<
    AddAlertResponseDto,
    AddAlertRequestDto
  >(ADD_ALERT_PATH, {
    onSuccess: (data) => {
      console.log('Add alert success', data)
    }
  })
  return {
    ...mutation,
    mutate: (
      values: AddAlertFormValues,
      options?: MutateOptions<
        AddAlertResponseDto,
        Error,
        AddAlertRequestDto
      >
    ) => mutation.mutate(values, options),
    mutateAsync: (values: AddAlertFormValues) =>
      mutation.mutateAsync(values)
  }
}
