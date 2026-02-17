import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiGet, apiPut } from '../../../../shared/Forma'
import type { SettingsFormValues } from './Settings.forma-config'

const SETTINGS_QUERY_KEY = ['settings'] as const

/** Backend DTO: GET /api/settings response */
export type SettingsResponseDto = {
  display_name: string
  language: string
  email_notifications: boolean
  theme: 'light' | 'dark' | 'system'
}

/** Backend DTO: PUT /api/settings request body */
export type SettingsRequestDto = SettingsResponseDto

export function settingsResponseToFormValues(
  dto: SettingsResponseDto
): SettingsFormValues {
  return {
    displayName: dto.display_name,
    language: dto.language,
    notifications: dto.email_notifications,
    theme: dto.theme
  }
}

export function formValuesToSettingsRequest(
  values: SettingsFormValues
): SettingsRequestDto {
  return {
    display_name: values.displayName,
    language: values.language,
    email_notifications: values.notifications,
    theme: values.theme
  }
}

export const settingsApi = {
  get: () => apiGet<SettingsResponseDto>('/settings'),
  update: (body: SettingsRequestDto) =>
    apiPut<SettingsResponseDto>('/settings', body)
}

export function useSettingsQuery() {
  return useQuery({
    queryKey: SETTINGS_QUERY_KEY,
    queryFn: settingsApi.get,
    select: settingsResponseToFormValues
  })
}

export function useSettingsMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (values: SettingsFormValues) =>
      settingsApi.update(formValuesToSettingsRequest(values)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SETTINGS_QUERY_KEY })
    }
  })
}
