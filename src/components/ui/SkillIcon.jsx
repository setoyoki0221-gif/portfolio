import { SKILL_ICONS } from './icons.js'

/**
 * Renders a brand icon by name, or a lettered badge when no icon exists for
 * that brand. Decorative either way - the skill name is always shown as real
 * text next to it, so screen readers never depend on the glyph.
 */
export default function SkillIcon({ name, label, className = 'h-5 w-5' }) {
  const Icon = name ? SKILL_ICONS[name] : null

  if (Icon) {
    return <Icon aria-hidden="true" className={className} />
  }

  return (
    <span
      aria-hidden="true"
      className={`${className} grid place-items-center rounded-[4px] bg-current/15 text-[9px] font-bold leading-none`}
    >
      {label ? label.slice(0, 3).toUpperCase() : '?'}
    </span>
  )
}
