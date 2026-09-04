import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { featuredProject, projects } from '../data/content.js'
import ProjectImage from './ui/ProjectImage.jsx'

/**
 * One card in the stack. Each is a full-height sticky panel, so as you scroll
 * the next card slides up over the previous one while the previous shrinks
 * slightly - the pile-of-cards effect.
 */
function ProjectCard({ project, index, total, progress, label }) {
  // Cards further down the stack settle at a smaller scale.
  const targetScale = 1 - (total - index) * 0.035
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center px-4">
      <motion.div
        style={{ scale, top: `calc(-12vh + ${index * 20}px)` }}
        className="relative h-auto w-full origin-top md:w-[85%] lg:w-[75%] xl:w-[65%]"
      >
        <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-zinc-900 shadow-xl md:flex-row">
          <div className="relative h-[250px] w-full overflow-hidden md:h-[400px] md:w-[55%] lg:h-[450px]">
            <ProjectImage
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              title={project.title}
              priority={index === 0}
            />
            <span className="absolute top-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md md:top-6 md:left-6 md:px-4 md:py-2 md:text-sm">
              {label}
            </span>
          </div>

          <div className="flex w-full min-w-0 flex-col justify-between p-6 md:w-[45%] md:p-8 lg:p-10">
            <div>
              <div className="mb-4 flex items-center justify-between gap-3 md:mb-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors hover:bg-teal-400/20"
                >
                  Live
                  <FiExternalLink className="h-3 w-3" />
                </a>
              </div>

              <h3 className="mb-2 text-xl font-bold text-white md:mb-4 2xl:text-2xl">
                {project.title}
              </h3>

              <p className="max-w-md text-sm leading-relaxed text-gray-400 md:text-base">
                {project.description}
              </p>

              <p className="mt-3 text-xs leading-relaxed text-gray-500">
                <span className="font-medium text-blue-400/90">My role: </span>
                {project.contribution}
              </p>
            </div>

            <div className="mt-4 pt-4 md:mt-auto">
              <div aria-hidden="true" className="mb-4 h-px w-full bg-gray-800 md:mb-6" />
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-gray-700 bg-gray-800/60 px-2.5 py-1 text-xs text-gray-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Projects() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const all = [...projects, featuredProject]

  return (
    <section id="projects" className="bg-ink">
      <div className="w-full pb-40 text-white">
        <div className="flex flex-col items-center justify-center pt-20">
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
            -Projects-
          </h2>
          <p className="px-4 text-center text-lg text-gray-300">
            Here are some of my projects that I&apos;ve worked on.
          </p>
        </div>

        <div ref={container} className="relative mt-10">
          {all.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              total={all.length}
              progress={scrollYProgress}
              label={
                index === all.length - 1
                  ? 'Latest Project'
                  : `Project ${index + 1}`
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
