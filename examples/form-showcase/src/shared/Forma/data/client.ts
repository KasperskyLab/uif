const BASE =
  (import.meta.env.VITE_API_BASE as string | undefined)?.replace(/\/$/, '') ??
  '/api'

export async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const url = path.startsWith('http') ? path : `${BASE}${path}`
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    }
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }))
    throw new Error((err as { message?: string }).message ?? res.statusText)
  }
  return res.json() as Promise<T>
}

export function apiPost<T, B = unknown>(path: string, body: B): Promise<T> {
  return apiFetch(path, {
    method: 'POST',
    body: JSON.stringify(body)
  })
}

export function apiGet<T>(path: string): Promise<T> {
  return apiFetch(path, { method: 'GET' })
}

export function apiPut<T, B = unknown>(path: string, body: B): Promise<T> {
  return apiFetch(path, {
    method: 'PUT',
    body: JSON.stringify(body)
  })
}
