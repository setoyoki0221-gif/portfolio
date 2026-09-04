import { about, profile } from '../data/content.js'
import Avatar from './ui/Avatar.jsx'

export default function About() {
  return (
    <section id="about" className="bg-ink py-16 text-white md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div>
          <span className="text-sm font-medium tracking-wide text-blue-400">
            {about.heading}
          </span>
          <h2 className="relative z-10 mt-3 max-w-xl text-4xl font-medium text-white lg:text-5xl">
            {about.subheading}
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-20">
          <div className="shrink-0">
            <Avatar
              src={profile.avatar}
              name={profile.name}
              size={260}
              className="rounded-[15px] shadow"
              rounded={false}
            />
          </div>

          <div className="relative space-y-4">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-white/90">
                {paragraph}
              </p>
            ))}

            <div className="pt-6">
              <blockquote className="border-l-4 border-gray-300 pl-4">
                <p className="text-white/90">{about.quote}</p>
                <cite className="mt-2 block text-sm font-medium text-gray-400 not-italic">
                  {about.quoteAuthor}
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
