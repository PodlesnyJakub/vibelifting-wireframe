import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './lib/theme'

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

