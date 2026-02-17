import { http, HttpResponse } from 'msw'

/** Mock data for Settings API */
export const mockSettingsData = {
  display_name: 'Demo User',
  language: 'en',
  email_notifications: true,
  theme: 'light' as const
}

export const settingsHandlers = [
  http.get('/api/settings', () => {
    return HttpResponse.json(mockSettingsData)
  }),
  http.put('/api/settings', async ({ request }) => {
    const body = (await request.json()) as typeof mockSettingsData
    return HttpResponse.json(body)
  })
]
