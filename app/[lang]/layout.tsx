import type { Metadata } from 'next'
import Providers from './providers'
import './globals.css'
import ThemeSwitcher from './_components/ThemeSwitcher'

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
      <body className="transition duration-700 ease-in-out">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
