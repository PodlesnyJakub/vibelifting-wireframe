import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './lib/theme'
import { getThemeFromCookies } from './lib/theme-cookie-server'

export const metadata: Metadata = {
  title: 'Vibelifting wireframe',
  description: 'Building your MVP in 8 weeks. Or make your prototype production-ready.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = await getThemeFromCookies();
  
  return (
    <html lang="cs" data-theme={theme}>
      <body>
        <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  )
}

