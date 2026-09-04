import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Momentum scrolling, skipped entirely when the visitor asked for reduced
 * motion. Also exposes an instance on window so anchor links can hand off to
 * Lenis instead of fighting it with native smooth scroll.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    window.__lenis = lenis

    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      delete window.__lenis
    }
  }, [])
}

/** Scroll to a section by id, through Lenis when it is running. */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return

  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -72 })
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
