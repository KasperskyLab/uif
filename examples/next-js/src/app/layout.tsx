import type { Metadata } from 'next'
import './globals.css'
import AppLoader from './AppLoader'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Hexa UI Next.js (React 19)',
  description: 'Hexa UI family on Next.js 16 with React 19'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppLoader />
        {children}
      </body>
    </html>
  )
}
