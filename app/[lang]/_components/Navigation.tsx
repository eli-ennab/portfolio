'use client'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

export function Navigation({ data }: any) {
  const { heading, buttonText } = data

  return (
    <div>
      <h1>{heading}</h1>
      <Link href="/sv">Svenska</Link>
      <Link href="/en">Engelska</Link>
      <button>{buttonText}</button>
      <ThemeSwitcher />
    </div>
  )
}
