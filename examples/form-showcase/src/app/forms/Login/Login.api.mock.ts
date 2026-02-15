import { http, HttpResponse } from 'msw'

export const loginHandlers = [
  http.post('/api/auth/login', async ({ request }) => {
    const body = (await request.json()) as {
      email: string
      password: string
      remember_me?: boolean
    }
    return HttpResponse.json({
      token: 'mock-jwt-token',
      user: { email: body.email, name: body.email.split('@')[0] }
    })
  })
]
