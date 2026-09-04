import { FiGithub, FiMail, FiSend } from 'react-icons/fi'
import { contact } from '../data/content.js'

const ICONS = {
  mail: FiMail,
  telegram: FiSend,
  github: FiGithub,
}

export default function Contact() {
  return (
    <section id="contact" className="bg-ink pt-20 text-white">
      <div className="relative flex flex-col items-center px-4 pt-20 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center justify-center">
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
            {contact.heading}
          </h2>
          <p className="text-center text-lg text-gray-300">{contact.intro}</p>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:flex-wrap sm:items-stretch">
            {contact.channels.map((channel) => {
              const Icon = ICONS[channel.icon] ?? FiMail
              const isExternal = channel.href.startsWith('http')

              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  {...(isExternal
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                  className="group flex w-full max-w-xs flex-col items-center gap-4 rounded-xl border border-gray-700 bg-gray-900/60 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <span
                    aria-hidden="true"
                    className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-blue-500/20 to-teal-400/20 text-blue-400 transition-transform group-hover:scale-110"
                  >
                    <Icon className="h-6 w-6" />
                  </span>

                  <span>
                    <span className="block text-lg font-semibold text-white">
                      {channel.label}
                    </span>
                    <span className="mt-1 block break-all text-sm text-gray-400">
                      {channel.value}
                    </span>
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
