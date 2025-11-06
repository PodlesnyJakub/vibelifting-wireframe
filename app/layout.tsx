import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vibelifting wireframe',
  description: 'Building your MVP in 8 weeks. Or make your prototype production-ready.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  )
}

