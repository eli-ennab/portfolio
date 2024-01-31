import type { Metadata } from 'next'
import Providers from './providers'
import ThemeSwitcher from './_components/ThemeSwitcher'
import './globals.css'

export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'Developer Portfolio',
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: {
    lang: string
  }
}>) {
  return (
    <html lang={params.lang}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
