import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './app/App'
import './main.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
    mutations: { retry: false }
  }
})

/**
 * MSW (mocks) vs real server:
 * - Dev default: MSW is ON — API calls are intercepted by mocks.
 * - To use a real backend in dev: set VITE_MSW=false (e.g. in .env or
 *   VITE_MSW=false npm run dev). Requests then go to VITE_API_BASE or /api.
 */
async function prepare() {
  const useMsw =
    import.meta.env.DEV && import.meta.env.VITE_MSW !== 'false'
  if (useMsw) {
    const { initFormaMocks } = await import('./shared/Forma')
    const { handlers } = await import('./app/mocks/handlers')
    return initFormaMocks(handlers)
  }
  return Promise.resolve()
}

prepare().then(() => {
  const container = document.getElementById('root')!
  ReactDOM.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
    container
  )
})
