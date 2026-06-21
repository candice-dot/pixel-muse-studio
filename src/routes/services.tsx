import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight, Compass, Palette, Film, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services • Pixel Ink Studio" },
      { name: "description", content: "Strategy & creative, design & content, experience & execution • capabilities and our four-step process." },
      { property: "og:title", content: "Services • Pixel Ink Studio" },
      { property: "og:description", content: "What we do and how we work, from discovery to delivery." },
    ],
  }),
  component: ServicesPage,
});

const capabilities = [
  {
    icon: Compass,
    title: "Strategy & Creative",
    items: ["Brand and campaign development", "Creative direction and storytelling", "Concept development"],
  },
  {
    icon: Palette,
    title: "Design & Content",
    items: ["Visual identity and event branding", "Motion graphics and video", "Presentation and digital content"],
  },
  {
    icon: Film,
    title: "Experience & Execution",
    items: ["3D & 2D animation", "On-screen and environmental design", "End-to-end content delivery"],
  },
  {
    icon: Sparkles,
    title: "Live & Digital",
    items: ["Conference and event content", "Multi-platform campaigns", "Asset systems built to scale"],
  },
];

const process = [
  { step: "01", title: "Discover", body: "Stakeholder alignment, audience and objective analysis, context and constraints, success metrics.", outcome: "A clear creative direction aligned to business and brand goals." },
  { step: "02", title: "Shape", body: "Concept development and storytelling, visual language, mood and narrative, content mapping.", outcome: "A cohesive creative concept that guides all design and content." },
  { step: "03", title: "Design & Build", body: "Design systems and assets, motion and video production, presentation content, iteration.", outcome: "High-quality, on-brand assets ready for execution." },
  { step: "04", title: "Deliver & Scale", body: "Final production, optimisation for screen/print/digital, on-site support, reusable assets.", outcome: "Seamless delivery and long-term brand value." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-60" />
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-20 md:pt-52 md:pb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Capabilities</p>
          <h1 className="font-display mt-4 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl">
            What we <span className="text-gradient">do.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Four disciplines under one roof • strategy, design, motion and execution moving in sync,
            without the handover tax.
          </p>
        </div>
      </section>

      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-5">
          {capabilities.map((c) => (
            <div key={c.title} className="glass rounded-2xl p-8 shadow-card">
              <div className="inline-flex items-center justify-center size-12 rounded-xl bg-gradient-brand shadow-glow">
                <c.icon className="size-5 text-primary-foreground" />
              </div>
              <h2 className="font-display mt-6 text-2xl font-semibold">{c.title}</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 mt-0.5 text-primary shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our process</p>
          <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            Discover. Shape. <span className="text-gradient">Deliver.</span>
          </h2>

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {process.map((p) => (
              <div key={p.step} className="rounded-2xl border border-border p-8 hover:border-primary/40 transition">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="font-display text-3xl text-gradient">{p.step}</span>
                  <span className="uppercase tracking-[0.2em] text-xs">Step</span>
                </div>
                <h3 className="font-display mt-4 text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.body}</p>
                <p className="mt-4 text-sm"><span className="text-muted-foreground">Outcome • </span>{p.outcome}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
              Brief us on a project <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
