'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export function Footer() {
  const [isScrolled, setIsScrolled] = useState(false)

  const isBrowser = () => typeof window !== 'undefined'

  const scrollToTop = () => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="flex justify-start gap-8">
      <Link
        href="/files/elina_ennab_resume.pdf"
        target="_blank"
        className="hover:dark:text-gray hover:text-gray"
      >
        resume
      </Link>
      <Link
        href="https://github.com/eli-ennab"
        target="_blank"
        className="hover:dark:text-gray hover:text-gray"
      >
        github
      </Link>
      <Link
        href="https://www.linkedin.com/in/elina-ennab-13ba57249/"
        target="_blank"
        className="hover:dark:text-gray hover:text-gray"
      >
        linkedin
      </Link>
      {isScrolled && <p onClick={scrollToTop}>up</p>}
    </div>
  )
}
