'use client'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'
import { useLanguageContext } from '@/context/LanguageContext'

export function Navigation({ data }: any) {
  const { heading } = data
  const { language } = useLanguageContext()
  const alternateLanguage = language === 'en' ? 'sv' : 'en'

  return (
    <div className="flex justify-between">
      <h1>{heading}</h1>
      <div className="flex gap-6">
        <Link href={alternateLanguage}>{alternateLanguage}</Link>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
