import { useEffect, useRef, useState } from 'react'
import { SKILL_ICONS } from './icons.js'

/**
 * Tech icons spread evenly over a sphere that rotates slowly, with depth faked
 * through scale and opacity. DOM-based rather than canvas so the icons stay
 * crisp at any size.
 *
 * Points come from a Fibonacci sphere, which distributes them far more evenly
 * than random placement.
 */
function spherePoints(count) {
  const points = []
  const golden = Math.PI * (3 - Math.sqrt(5))

  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2
    const radius = Math.sqrt(1 - y * y)
    const theta = golden * i
    points.push([Math.cos(theta) * radius, y, Math.sin(theta) * radius])
  }

  return points
}

export default function IconCloud({ icons = [], size = 320 }) {
  const [angle, setAngle] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let last = null

    const loop = (time) => {
      if (last !== null) {
        // Radians per millisecond - one revolution takes about 25 seconds.
        setAngle((value) => value + (time - last) * 0.00025)
      }
      last = time
      frameRef.current = requestAnimationFrame(loop)
    }

    const start = () => {
      if (frameRef.current === null) {
        last = null
        frameRef.current = requestAnimationFrame(loop)
      }
    }

    const stop = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }

    const onVisibility = () => (document.hidden ? stop() : start())

    start()
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  const points = spherePoints(Math.max(icons.length, 2))
  const radius = size / 2 - 22

  return (
    <div
      aria-hidden="true"
      style={{ width: size, height: size }}
      className="relative mx-auto"
    >
      {icons.map((name, i) => {
        const Icon = SKILL_ICONS[name]
        if (!Icon) return null

        const [x, y, z] = points[i]

        // Rotate around the Y axis.
        const cos = Math.cos(angle)
        const sin = Math.sin(angle)
        const rx = x * cos - z * sin
        const rz = x * sin + z * cos

        // Map depth (-1 behind .. 1 in front) onto scale and opacity.
        const depth = (rz + 1) / 2
        const scale = 0.45 + depth * 0.55
        const opacity = 0.2 + depth * 0.8

        return (
          <span
            key={name}
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate(${rx * radius}px, ${
                y * radius
              }px) scale(${scale})`,
              opacity,
              zIndex: Math.round(depth * 100),
            }}
            className="absolute text-white"
          >
            <Icon className="h-8 w-8" />
          </span>
        )
      })}
    </div>
  )
}
