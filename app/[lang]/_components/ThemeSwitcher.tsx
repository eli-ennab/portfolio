'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { GiStripedSun } from 'react-icons/gi'
import { FaCircle } from 'react-icons/fa6'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed top-4 right-4">
      {theme === 'dark' ? (
        <button onClick={() => setTheme('light')}>
          <GiStripedSun className="dark:text-white text-2xl" />
        </button>
      ) : (
        <button onClick={() => setTheme('dark')}>
          <FaCircle className="text-2xl" />
        </button>
      )}
    </div>
  )
}

export default ThemeSwitcher
