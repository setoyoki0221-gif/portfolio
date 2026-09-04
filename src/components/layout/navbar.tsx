import Link from "next/link";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Expertise", "#expertise"],
  ["Contact", "#contact"],
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="font-semibold tracking-tight">SY<span className="text-muted-foreground">.</span></Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="transition-colors hover:text-foreground">{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2"><ThemeToggle /></div>
      </div>
    </header>
  );
}
