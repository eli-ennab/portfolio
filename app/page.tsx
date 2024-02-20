import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { SideLinks } from './components/SideLinks'

export default function Home() {
  return (
    <main>
      <div className="frame dark:border-white">
        <Navigation />
        <SideLinks />
        <Footer />
      </div>
    </main>
  )
}
