import type { Metadata } from 'next'
import { LanguageWrapper } from '@/context/LanguageContext'
import Providers from './providers'
import './css/globals.css'

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
    <LanguageWrapper>
      <html lang={params.lang}>
        <body className="transition duration-700 ease-in-out">
          <Providers>{children}</Providers>
        </body>
      </html>
    </LanguageWrapper>
  )
}
