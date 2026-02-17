import { http, HttpResponse } from 'msw'
import { getAlertById } from '../../data/mockAlerts'

export const alertCardHandlers = [
  http.get('/api/alerts/:id', ({ params }) => {
    const id = Number((params as { id: string }).id)
    const alert = getAlertById(id)
    if (!alert) {
      return new HttpResponse(null, { status: 404 })
    }
    return HttpResponse.json(alert)
  }),
  http.put('/api/alerts/:id/summary', async ({ request }) => {
    await request.json()
    return HttpResponse.json(undefined, { status: 200 })
  })
]
