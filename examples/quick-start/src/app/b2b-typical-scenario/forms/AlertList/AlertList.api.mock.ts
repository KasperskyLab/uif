import { http, HttpResponse } from 'msw'
import { generateAlertList } from '../../data/mockAlerts'

const list = generateAlertList(50)

export const alertListHandlers = [
  http.get('/api/alerts', ({ request }) => {
    const url = new URL(request.url)
    const page = Number(url.searchParams.get('page')) || 1
    const pageSize = Number(url.searchParams.get('pageSize')) || 10
    const start = (page - 1) * pageSize
    const items = list.slice(start, start + pageSize)
    return HttpResponse.json({
      items,
      total: list.length
    })
  })
]
