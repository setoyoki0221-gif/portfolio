import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Expertise } from "@/components/sections/expertise";
import { Contact } from "@/components/sections/contact";

// Server Component by default: the portfolio is rendered through the App Router.
export const dynamic = "force-dynamic";

export default function HomePage() {
  return <main><Hero /><About /><Projects /><Expertise /><Contact /><footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© {new Date().getFullYear()} Seto Yoki</span><span>Built with Next.js, TypeScript & shadcn/ui.</span></div></footer></main>;
}
