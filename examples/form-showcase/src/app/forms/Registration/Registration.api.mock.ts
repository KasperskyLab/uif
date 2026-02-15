import { http, HttpResponse } from 'msw'

export const registrationHandlers = [
  http.post('/api/auth/register', async ({ request }) => {
    const body = (await request.json()) as {
      full_name: string
      email: string
      password: string
      country_code: string
    }
    return HttpResponse.json({
      id: 'mock-id-1',
      email: body.email,
      full_name: body.full_name
    })
  })
]
