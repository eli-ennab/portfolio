'use client'
import ThemeSwitcher from './ThemeSwitcher'

export function Navigation() {
  return (
    <div className="flex justify-between">
      <h1>eli ennab</h1>
      <div className="flex gap-6">
        <ThemeSwitcher />
      </div>
    </div>
  )
}
