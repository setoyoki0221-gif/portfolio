import { motion } from 'framer-motion'
import { FiCode, FiStar, FiZap } from 'react-icons/fi'
import { heroChips, heroSnippet, profile } from '../data/content.js'
import { scrollToSection } from '../hooks/useSmoothScroll.js'
import CodeWindow from './ui/CodeWindow.jsx'
import Meteors from './ui/Meteors.jsx'
import TypeWriter from './ui/TypeWriter.jsx'

const CHIP_ICONS = { sparkles: FiZap, code: FiCode, bulb: FiStar }

const CHIP_TONES = {
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
}

// Absolute placement of the three floating chips, desktop only.
const CHIP_POSITIONS = [
  'left-[5.5rem] top-[2.3rem] animate-float-slow',
  'right-10 top-20 animate-float',
  'top-[17rem] left-[70%] -translate-x-1/2 animate-float',
]

const EASE = [0.22, 1, 0.36, 1]

// Mirrors the original's staggered fadeInLeft / fadeInDown / fadeInUp entrance.
const fadeIn = (axis, distance, delay) => ({
  initial: { opacity: 0, [axis]: distance },
  animate: { opacity: 1, [axis]: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="hero relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 md:py-16 lg:px-8 lg:py-0"
    >
      {/* Masked grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-20"
      >
        <div className="bg-grid-pattern absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]" />
      </div>

      <Meteors count={10} />

      <div className="relative z-10 container mx-auto flex flex-col items-center justify-between py-8 md:py-10 md:pt-28 lg:flex-row lg:py-12 xl:pt-28">
        {/* ---------- Left column ---------- */}
        <motion.div
          {...fadeIn('x', -60, 0)}
          className="relative mb-12 w-full min-w-0 lg:mb-0 lg:w-1/2"
        >
          <div
            aria-hidden="true"
            className="absolute hidden h-48 w-48 rounded-full bg-blue-500/10 blur-3xl lg:-top-20 lg:-left-20 lg:block lg:h-64 lg:w-64"
          />
          <div
            aria-hidden="true"
            className="absolute hidden h-48 w-48 rounded-full bg-teal-500/10 blur-3xl lg:top-40 lg:-right-20 lg:block lg:h-64 lg:w-64"
          />

          {/* Badge */}
          <motion.div
            {...fadeIn('y', -20, 0.35)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-700/50 bg-gray-800/50 px-3 py-2 backdrop-blur-sm sm:mb-8 sm:px-4"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            <span className="text-xs font-medium text-gray-300 sm:text-sm">
              {profile.badge}
            </span>
          </motion.div>

          {/* Name */}
          <div className="relative mb-6 sm:mb-8">
            <h1 className="text-4xl leading-tight font-bold sm:text-5xl lg:text-7xl">
              <span className="block text-white">Hello</span>
              <span className="relative inline-block">
                <span className="text-white">I&apos;m </span>
                <span className="typing-effect gradient-text">
                  {profile.name}
                </span>
              </span>
            </h1>
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/4 -z-10 h-24 w-24 -translate-y-1/2 animate-pulse rounded-full bg-blue-500/20 blur-2xl sm:h-32 sm:w-32"
            />
          </div>

          {/* Rotating role pill */}
          <motion.div
            {...fadeIn('y', 20, 0.5)}
            className="mb-6 inline-flex items-center gap-2 rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-teal-500/10 px-4 py-2 backdrop-blur-sm sm:mb-8 sm:gap-3 sm:rounded-2xl sm:px-6 sm:py-3"
          >
            <FiZap className="animate-bounce text-sm text-blue-400 sm:text-base" />
            <TypeWriter
              phrases={profile.roles}
              className="text-lg font-medium text-blue-400 sm:text-xl"
            />
          </motion.div>

          {/* Tagline */}
          <motion.div
            {...fadeIn('y', 20, 0.6)}
            className="mb-8 max-w-xl sm:mb-12"
          >
            <p className="text-base leading-relaxed text-gray-300/90 sm:text-xl">
              {profile.tagline}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            {...fadeIn('y', 20, 0.75)}
            className="flex flex-col gap-4 sm:flex-row sm:gap-6"
          >
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
            >
              <span className="block w-full rounded-[11px] bg-gray-900 px-6 py-3 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400 sm:px-8 sm:py-4">
                <span className="relative flex items-center justify-center gap-2 font-medium text-white">
                  {profile.ctaLabel}
                </span>
              </span>
            </button>
          </motion.div>

          {/* Floating chips */}
          {heroChips.map((chip, i) => {
            const Icon = CHIP_ICONS[chip.icon] ?? FiCode
            return (
              <div
                key={chip.label}
                aria-hidden="true"
                className={`absolute hidden lg:block ${CHIP_POSITIONS[i]}`}
              >
                <div
                  className={`flex items-center gap-2 rounded-lg border px-4 py-2 backdrop-blur-sm ${
                    CHIP_TONES[chip.tone]
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{chip.label}</span>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* ---------- Right column ---------- */}
        <motion.div
          {...fadeIn('y', -40, 0.15)}
          className="w-full min-w-0 lg:w-1/2 lg:pl-8"
        >
          <CodeWindow code={heroSnippet} />
        </motion.div>
      </div>
    </section>
  )
}
