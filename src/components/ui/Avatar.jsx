import { useState } from 'react'

/**
 * Portrait with an initials fallback, so a missing file never shows a broken
 * image. Pass `rounded={false}` for the squared-off about-section portrait.
 */
export default function Avatar({
  src,
  name,
  size = 56,
  className = '',
  rounded = true,
}) {
  const [failed, setFailed] = useState(!src)

  const shape = rounded ? 'rounded-full' : ''

  if (failed) {
    const initials = name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join('')

    return (
      <div
        aria-hidden="true"
        style={{ width: size, height: size, fontSize: Math.max(14, size / 4) }}
        className={`grid shrink-0 place-items-center bg-gradient-to-br from-blue-500/30 to-teal-400/30 font-semibold text-white ${shape} ${className}`}
      >
        {initials}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={`Portrait of ${name}`}
      width={size}
      height={size}
      loading="eager"
      decoding="async"
      onError={() => setFailed(true)}
      style={{ width: size, height: size }}
      className={`shrink-0 object-cover ${shape} ${className}`}
    />
  )
}
