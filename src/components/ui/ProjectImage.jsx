import { useState } from 'react'

const GRADIENTS = [
  'from-cyan-500/40 via-blue-600/30 to-indigo-700/40',
  'from-fuchsia-500/40 via-purple-600/30 to-indigo-700/40',
  'from-emerald-500/40 via-teal-600/30 to-cyan-700/40',
  'from-amber-500/40 via-orange-600/30 to-rose-700/40',
  'from-sky-500/40 via-indigo-600/30 to-violet-700/40',
  'from-rose-500/40 via-pink-600/30 to-fuchsia-700/40',
]

/** Deterministic pick, so a project keeps the same placeholder every reload. */
function gradientFor(title) {
  let hash = 0
  for (let i = 0; i < title.length; i += 1) {
    hash = (hash * 31 + title.charCodeAt(i)) >>> 0
  }
  return GRADIENTS[hash % GRADIENTS.length]
}

function initialsOf(title) {
  return title
    .replace(/[^A-Za-z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('')
}

/**
 * Project screenshot with a graceful fallback: if the file is missing the card
 * shows a generated gradient tile rather than a broken-image icon.
 */
export default function ProjectImage({
  src,
  alt,
  title,
  className = 'h-full w-full object-cover',
  priority = false,
}) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={`${title} - screenshot placeholder`}
        className={`flex items-center justify-center bg-gradient-to-br ${gradientFor(
          title,
        )} ${className}`}
      >
        <span className="font-mono text-5xl font-bold tracking-widest text-white/40">
          {initialsOf(title)}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}
