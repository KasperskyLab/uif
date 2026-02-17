import { http, HttpResponse } from 'msw'

export const addAlertHandlers = [
  http.post('/api/alerts', async ({ request }) => {
    const body = (await request.json()) as Record<string, unknown>
    return HttpResponse.json({
      id: 1193777,
      ...body
    })
  })
]
