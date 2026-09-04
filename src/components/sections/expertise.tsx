import { skillGroups } from "@/data/skills";

export function Expertise() {
  return <section id="expertise" className="border-t border-border"><div className="mx-auto max-w-6xl px-5 py-24 lg:px-8"><p className="mb-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">Expertise</p><h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">A modern stack, used with intention.</h2><div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">{skillGroups.map(group => <div key={group.title} className="bg-background p-7"><h3 className="font-medium">{group.title}</h3><ul className="mt-6 space-y-3 text-sm text-muted-foreground">{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></div></section>;
}
