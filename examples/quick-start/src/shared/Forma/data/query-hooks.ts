/**
 * Optional TanStack Query integration for Forma data client.
 * Use useFormaGet / useFormaPost / useFormaPut to wrap apiGet / apiPost / apiPut
 * with useQuery / useMutation. Requires @tanstack/react-query to be installed
 * in the app. If the app does not use TanStack Query, use apiGet / apiPost /
 * apiPut directly and do not import this module.
 */

import {
  useMutation,
  useQuery,
  type UseMutationOptions,
  type UseQueryOptions
} from '@tanstack/react-query'
import { apiGet, apiPost, apiPut } from './client'

export function useFormaGet<T>(
  path: string,
  options?: Omit<UseQueryOptions<T, Error>, 'queryKey' | 'queryFn'>
) {
  return useQuery<T, Error>({
    queryKey: [path],
    queryFn: () => apiGet<T>(path),
    ...options
  })
}

export function useFormaPost<T, B = unknown>(
  path: string,
  options?: Omit<UseMutationOptions<T, Error, B>, 'mutationFn'>
) {
  return useMutation<T, Error, B>({
    mutationFn: (body) => apiPost<T, B>(path, body),
    ...options
  })
}

export function useFormaPut<T, B = unknown>(
  path: string,
  options?: Omit<UseMutationOptions<T, Error, B>, 'mutationFn'>
) {
  return useMutation<T, Error, B>({
    mutationFn: (body) => apiPut<T, B>(path, body),
    ...options
  })
}
