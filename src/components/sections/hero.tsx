import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-14 px-5 py-16 lg:grid-cols-[1fr_340px] lg:px-8 lg:py-24">
      <div className="animate-fade-up">
        <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground"><span className="h-2 w-2 rounded-full bg-foreground" /> Available for selected opportunities</div>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">Seto Yoki</p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-8xl">Full-Stack<br />Developer<span className="text-muted-foreground">.</span></h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">I build thoughtful digital products with modern web technologies, clean architecture, and a strong focus on user experience.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg"><Link href="#work">View selected work <ArrowDownRight size={17} /></Link></Button>
          <Button asChild variant="outline" size="lg"><Link href="#contact">Let&apos;s connect <ArrowUpRight size={17} /></Link></Button>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[340px] animate-fade-in lg:mx-0 lg:ml-auto">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-muted shadow-2xl">
          <Image src="/images/seto-yoki.jpg" alt="Seto Yoki" fill priority className="object-cover" sizes="(max-width: 1024px) 340px, 340px" />
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground"><span>Tokyo / Japan</span><span className="inline-flex items-center gap-1"><MapPin size={12} /> Remote-friendly</span></div>
      </div>
    </section>
  );
}
