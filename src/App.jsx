import { MotionConfig } from 'framer-motion'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import { useSmoothScroll } from './hooks/useSmoothScroll.js'

export default function App() {
  useSmoothScroll()

  return (
    // reducedMotion="user" is opt-in: without it Framer Motion animates
    // regardless of the visitor's OS setting. Transforms are dropped and
    // opacity still resolves, so content always ends up visible.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  )
}
