'use client'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

export function Navigation({ data }: any) {
  const { heading } = data

  return (
    <div className="flex justify-between">
      <h1 className="">{heading}</h1>
      <div className="flex gap-6">
        <Link href="/sv" className="">
          sv
        </Link>
        /
        <Link href="/en" className="">
          en
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
