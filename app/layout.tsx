import type { Metadata } from 'next'
import Providers from './providers'
import './css/globals.css'

export const metadata: Metadata = {
  title: 'eli ennab',
  description: 'developer eli ennab',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
