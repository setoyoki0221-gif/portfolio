import { useMemo } from 'react'
import { experience } from '../data/content.js'

export default function Experience() {
  // Fixed once so the drifting dots do not jump on every re-render.
  const dots = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${(Math.random() * 5).toFixed(2)}s`,
        duration: `${(Math.random() * 4 + 4).toFixed(2)}s`,
      })),
    [],
  )

  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden pt-32 pb-20"
    >
      <div aria-hidden="true" className="bg-ink absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      <div aria-hidden="true" className="absolute inset-0">
        {dots.map((dot) => (
          <div
            key={dot.id}
            style={{
              left: dot.left,
              top: dot.top,
              animationDelay: dot.delay,
              animationDuration: dot.duration,
            }}
            className="animate-float absolute h-2 w-2 rounded-full bg-blue-500/20"
          />
        ))}
      </div>

      <div className="relative container mx-auto mt-10 px-6">
        <div className="mb-20 flex flex-col items-center space-y-8">
          <div className="relative">
            <h2 className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center text-5xl font-black text-transparent md:text-7xl">
              Professional Journey
            </h2>
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"
            />
          </div>
          <p className="max-w-2xl text-center text-lg font-medium tracking-wide text-gray-400 md:text-xl">
            &quot;Transforming ideas into digital reality, one project at a
            time&quot;
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {experience.map((job) => (
            <article
              key={`${job.role}-${job.period}`}
              className="group relative transform overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-lg bg-white/5 backdrop-blur-lg"
              />
              <div
                aria-hidden="true"
                className="animate-gradient-xy absolute -inset-[2px] rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 transition-all duration-500 group-hover:opacity-100"
              />

              <div className="relative h-full rounded-lg border border-gray-800/50 bg-gray-900/90 p-8 shadow-xl backdrop-blur-xl">
                <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                  {job.period}
                </span>

                <h3 className="mt-4 text-xl font-bold text-white">
                  {job.role}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {job.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-gray-700 bg-gray-800/60 px-2.5 py-1 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute top-20 left-20 h-96 w-96 animate-pulse rounded-full bg-cyan-500/10 blur-3xl filter"
      />
      <div
        aria-hidden="true"
        className="absolute right-20 bottom-20 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl filter"
      />
    </section>
  )
}
