import { profile } from '../data/content.js'
import { scrollToSection } from '../hooks/useSmoothScroll.js'

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="transition-colors hover:text-blue-400"
        >
          Back to top
        </button>
      </div>
    </footer>
  )
}
