import { useMemo } from 'react'

/**
 * Diagonal shooting stars across the hero. Positions and timings are picked
 * once via useMemo so they stay put across re-renders.
 */
export default function Meteors({ count = 10 }) {
  const meteors = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.floor(Math.random() * 100)}%`,
        top: `${Math.floor(Math.random() * 60) - 10}%`,
        delay: `${(Math.random() * 4).toFixed(2)}s`,
        duration: `${(Math.random() * 6 + 4).toFixed(2)}s`,
      })),
    [count],
  )

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          style={{
            left: meteor.left,
            top: meteor.top,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
          className="animate-meteor pointer-events-none absolute size-0.5 rotate-[215deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
        >
          <span className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </div>
  )
}
