import {
  FiCloud,
  FiCode,
  FiPenTool,
  FiServer,
  FiTool,
  FiZap,
} from 'react-icons/fi'
import { cloudIcons, skillGroups } from '../data/content.js'
import IconCloud from './ui/IconCloud.jsx'
import SkillIcon from './ui/SkillIcon.jsx'

const GROUP_ICONS = {
  code: FiCode,
  server: FiServer,
  palette: FiPenTool,
  cloud: FiCloud,
  wrench: FiTool,
  sparkles: FiZap,
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-ink relative min-h-screen pt-15 text-white lg:pt-0"
    >
      <div
        aria-hidden="true"
        className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-20"
      />

      <div className="relative z-10 container mx-auto px-4 py-11">
        <div className="flex items-center justify-center">
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-transparent px-8 pt-8 pb-12 sm:px-20 sm:pb-20">
            <IconCloud icons={cloudIcons} size={320} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = GROUP_ICONS[group.icon] ?? FiCode

            return (
              <div
                key={group.title}
                className="group relative overflow-hidden rounded-lg border border-gray-700 bg-gray-900/80 text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div
                  aria-hidden="true"
                  className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)]"
                />

                <div className="relative z-10 p-6">
                  <div className="mb-6 flex items-center gap-4">
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${group.accent} text-gray-900`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-md border border-gray-700 bg-gray-800/60 px-2.5 py-1.5 text-sm text-gray-300 transition-colors hover:border-blue-400/40 hover:text-white"
                      >
                        <SkillIcon
                          name={skill.icon}
                          label={skill.name}
                          className="h-4 w-4 text-gray-400"
                        />
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
