import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks, profile } from '../data/content.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { scrollToSection } from '../hooks/useSmoothScroll.js'

// Defined outside the component so the observer effect keeps a stable dependency.
const SECTION_IDS = navLinks.map((link) => link.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    if (!open) return
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (id) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="w-full md:fixed md:top-4 md:left-1/2 md:w-auto md:-translate-x-1/2">
        {/* Animated gradient frame around the floating pill. */}
        <div className="animate-gradient-x bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 p-[2px] md:rounded-full">
          <nav
            aria-label="Main"
            className="bg-gray-900/90 px-4 py-2.5 backdrop-blur-md md:rounded-full md:px-6"
          >
            {/* Mobile bar */}
            <div className="flex items-center justify-between px-2 md:hidden">
              <button
                type="button"
                onClick={() => go('home')}
                className="text-sm font-bold text-white"
              >
                {profile.name.split(' ')[0]}
                <span className="text-blue-400">.</span>
              </button>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? 'Close menu' : 'Open menu'}
                className="rounded-lg p-1.5 text-gray-300 transition-colors hover:text-white"
              >
                {open ? (
                  <FiX className="h-5 w-5" />
                ) : (
                  <FiMenu className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Desktop links */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = active === link.id
                  return (
                    <li key={link.id}>
                      <button
                        type="button"
                        onClick={() => go(link.id)}
                        aria-current={isActive ? 'true' : undefined}
                        className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 -z-10 rounded-full bg-white/10"
                            transition={{
                              type: 'spring',
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                        {link.label}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Mobile dropdown */}
            <AnimatePresence>
              {open && (
                <motion.div
                  id="mobile-menu"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden md:hidden"
                >
                  <ul className="flex flex-col gap-1 pt-3 pb-1">
                    {navLinks.map((link) => (
                      <li key={link.id}>
                        <button
                          type="button"
                          onClick={() => go(link.id)}
                          className={`w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                            active === link.id
                              ? 'bg-white/10 text-blue-400'
                              : 'text-gray-400 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </div>
    </header>
  )
}
