import { useEffect, useState } from 'react'

/**
 * Types each phrase out, pauses, deletes it, moves to the next.
 * With reduced motion requested it just shows the first phrase.
 */
export default function TypeWriter({
  phrases,
  typeSpeed = 70,
  deleteSpeed = 35,
  pause = 1800,
  className = '',
}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduced || phrases.length === 0) return

    const current = phrases[index % phrases.length]

    // Finished typing: hold, then start deleting.
    if (!deleting && text === current) {
      const timer = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timer)
    }

    // Finished deleting: advance to the next phrase.
    if (deleting && text === '') {
      setDeleting(false)
      setIndex((value) => (value + 1) % phrases.length)
      return
    }

    const timer = setTimeout(
      () => {
        setText((value) =>
          deleting
            ? current.slice(0, value.length - 1)
            : current.slice(0, value.length + 1),
        )
      },
      deleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(timer)
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, pause, reduced])

  if (reduced) {
    return <span className={className}>{phrases[0]}</span>
  }

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-px animate-pulse bg-blue-400 align-middle">
        &nbsp;
      </span>
    </span>
  )
}
