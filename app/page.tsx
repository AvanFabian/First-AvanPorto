import About from '@/components/About'
import Works from '@/components/Works'
import Contact from '@/components/Contact'
import Certificate from '@/components/Certificate'

export default function Home() {
  return (
    <main>
      <About />
      <Certificate />
      <Works />
      <div className="relative z-0">
          <Contact />
      </div>
    </main>
  )
}
