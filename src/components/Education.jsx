import { education } from '../data/content.js'

export default function Education() {
  return (
    <section
      id="education"
      className="bg-ink relative min-h-screen overflow-hidden py-40"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="bg-grid-pattern absolute inset-0 opacity-10" />
        <div className="from-ink to-ink absolute inset-0 bg-gradient-to-t via-transparent" />
        <div className="absolute inset-0 grid grid-cols-2 border border-white/[0.05] md:grid-cols-4">
          <div className="border-r border-white/[0.05]" />
          <div className="border-r border-white/[0.05]" />
          <div className="border-r border-white/[0.05]" />
          <div />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Educational Journey
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {education.map((entry) => (
            <article
              key={entry.degree}
              className="relative rounded-xl border border-blue-400/20 bg-gray-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span aria-hidden="true" className="text-4xl">
                    {entry.emoji}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {entry.degree}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-blue-400">
                      {entry.school}
                    </p>
                    <p className="mt-1 text-sm text-gray-400">{entry.period}</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-gray-300">
                  {entry.description}
                </p>

                <div>
                  <p className="mb-3 text-sm font-semibold text-white">
                    Key Achievements
                  </p>
                  <ul className="space-y-2">
                    {entry.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
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
    </section>
  )
}
