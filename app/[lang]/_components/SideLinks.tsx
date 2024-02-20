'use client'
import Link from 'next/link'

export function SideLinks() {
  return (
    <div className="flex justify-left items-center h-80vh">
      <div className="flex flex-col text-7xl gap-6">
        <Link
          href="/sv"
          className="road-link dark:text-gray hover:dark:text-white"
        >
          text
        </Link>
        <Link
          href="/en"
          className="road-link dark:text-gray hover:dark:text-white"
        >
          resume
        </Link>
        <Link
          href="/en"
          className="road-link dark:text-gray hover:dark:text-white"
        >
          pdf
        </Link>
      </div>
    </div>
  )
}
