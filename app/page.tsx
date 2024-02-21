import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { SideLinks } from './components/SideLinks'

export default function Home() {
  return (
    <main className="tracking-widest font-main flex flex-col items-center">
      <div className="frame flex flex-col p-10 gap-10 dark:border-white lg:justify-between md:border-solid md:border md:border-black">
        <Navigation />
        <SideLinks />
        <Footer />
      </div>
    </main>
  )
}
