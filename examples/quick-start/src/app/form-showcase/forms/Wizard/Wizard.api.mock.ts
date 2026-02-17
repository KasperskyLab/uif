import { http, HttpResponse } from 'msw'

export const wizardHandlers = [
  http.post('/api/wizard', async ({ request }) => {
    const body = (await request.json()) as {
      full_name: string
      email: string
      company: string
      role: string
    }
    return HttpResponse.json({
      id: 'wizard-1',
      full_name: body.full_name,
      email: body.email,
      company: body.company,
      role: body.role
    })
  })
]
