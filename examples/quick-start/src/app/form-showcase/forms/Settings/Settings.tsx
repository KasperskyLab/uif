import { Forma } from '../../../../shared/Forma'

import { useSettingsMutation, useSettingsQuery } from './Settings.api'
import {
  settingsDefaultValues,
  settingsFormConfig,
  type SettingsFormValues
} from './Settings.forma-config'

export function SettingsView() {
  const query = useSettingsQuery()
  const mutation = useSettingsMutation()

  const onSubmit = (data: SettingsFormValues) => {
    mutation.mutate(data, {
      onSuccess: () => {
        alert('Settings saved')
      },
      onError: (err) => {
        alert(err instanceof Error ? err.message : String(err))
      }
    })
  }

  if (query.isLoading) {
    return (
      <Forma<SettingsFormValues>
        config={{
          ...settingsFormConfig,
          defaultValues: settingsDefaultValues
        }}
        onSubmit={onSubmit}
        title="Settings / Preferences"
        description="Loading…"
      />
    )
  }

  return (
    <Forma<SettingsFormValues>
      key={query.dataUpdatedAt ?? 0}
      config={{
        ...settingsFormConfig,
        defaultValues: query.data ?? settingsDefaultValues
      }}
      onSubmit={onSubmit}
      isLoading={mutation.isPending}
      title="Settings / Preferences"
      description={
        <>
          Mix of Textbox, Select, Toggle and Radio. Data loaded via GET
          /api/settings (MSW). Save uses PUT.
        </>
      }
    />
  )
}
