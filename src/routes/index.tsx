import { createFileRoute, Link } from "@tanstack/react-router";
import heroKv from "@/assets/pixel-kv-hero.png.asset.json";
import heineken from "@/assets/heineken-case.png.asset.json";
import marriott from "@/assets/marriott-case.png.asset.json";
import rolls from "@/assets/rolls-royce-case.png.asset.json";
import sab from "@/assets/sab-case.png.asset.json";
import heinekenLogo from "@/assets/heineken-logo.png.asset.json";
import marriottLogo from "@/assets/marriott-logo.png.asset.json";
import rollsLogo from "@/assets/rolls-royce-logo.jpg.asset.json";
import sabLogo from "@/assets/sab-logo.png.asset.json";
import { ArrowUpRight, Compass, Palette, Film, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pixel Ink Studio | Creative & Production Agency Johannesburg" },
      { name: "description", content: "Pixel Ink Studio is a Johannesburg based creative and production agency delivering brand experiences, event creative, design, content and production solutions across Africa." },
      { property: "og:title", content: "Pixel Ink Studio | Creative & Production Agency Johannesburg" },
      { property: "og:description", content: "Pixel Ink Studio is a Johannesburg based creative and production agency delivering brand experiences, event creative, design, content and production solutions across Africa." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixelinkstudio.co.za/" },
    ],
    links: [
      { rel: "canonical", href: "https://pixelinkstudio.co.za/" },
    ],
  }),
  component: Index,
});

const stats = [
  { k: "15+", v: "Years experience" },
  { k: "Global", v: "& Regional Brands" },
  { k: "Live", v: "Events & Campaigns" },
];

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
    items: ["3D & 2D animation", "On screen and environmental design", "End to end content delivery"],
  },
];

const cases = [
  { img: heineken.url, tag: "Global Conference", title: "Heineken • Make It Personal", sub: "Motion led visual system across stage, screens and content for the 2025 Global Marketing, Sales & Distribution Conference." },
  { img: sab.url, tag: "Brand Experience", title: "SAB • Evolving Firsts", sub: "An immersive \"living brand museum\" across OLED, holographic cubes and curved LED." },
  { img: marriott.url, tag: "Brand System", title: "Marriott Residences JVC", sub: "A refined Urban Chic identity and marketing system for a premium Dubai development." },
  { img: rolls.url, tag: "Experiential Campaign", title: "Rolls-Royce • Customise Your Journey", sub: "Multi city, multi sensory brand environments across Middle East markets." },
];

const processSteps = [
  { step: "01", title: "Discover", body: "Align on audience, objectives, context and success metrics." },
  { step: "02", title: "Shape", body: "Define the concept, narrative and visual language." },
  { step: "03", title: "Design & Build", body: "Produce systems, motion and assets ready for execution." },
  { step: "04", title: "Deliver & Scale", body: "Final production, on site support and reusable assets." },
];

const clients = [
  { name: "Heineken", logo: heinekenLogo.url },
  { name: "Marriott", logo: marriottLogo.url },
  { name: "Rolls-Royce", logo: rollsLogo.url },
  { name: "SAB", logo: sabLogo.url },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      {/* 1. Hero — KV with copy stacked left, no clipping */}
      <section id="top" className="relative isolate overflow-hidden scroll-mt-24 bg-gradient-hero">
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-40 md:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary shadow-glow" />
              Brand • Content • Experience Design
            </span>
            <h1 className="font-display mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Pixel Ink Studio,<br />
              <span className="text-gradient">built to deliver.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed">
              A Johannesburg based creative and production agency partnering with
              global and regional brands to deliver brand experiences, event creative,
              design, content and production across Africa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
                View our work <ArrowUpRight className="size-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-foreground/10 transition">
                Start a conversation
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border shadow-card">
            <img
              src={heroKv.url}
              alt="Pixel Ink Studio key visual"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* 2. Stats bar */}
      <section id="stats" className="relative border-y border-border bg-gradient-surface scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.v}>
              <div className="font-display text-4xl md:text-5xl font-extrabold text-gradient">{s.k}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About / What We Do */}
      <section id="about" className="relative scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About / What we do</p>
            <h2 className="font-display mt-4 text-4xl md:text-5xl font-bold leading-[1.1]">
              A brand and content studio for <span className="text-gradient">high impact experiences.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Four disciplines under one roof. Strategy, design, motion and execution moving in sync,
              without the handover tax.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <div key={c.title} className="glass rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500">
                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-gradient-brand shadow-glow">
                  <c.icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="font-display mt-6 text-xl font-semibold tracking-tight">{c.title}</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
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
        </div>
      </section>

      {/* 4. Showreel — smaller block */}
      <section id="showreel" className="relative bg-gradient-surface scroll-mt-24">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Showreel</p>
              <h2 className="font-display mt-3 text-3xl md:text-4xl font-bold leading-[1.1]">
                Work in <span className="text-gradient">motion.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              A short cut of recent brand films, conferences and live moments.
            </p>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              src="https://player.vimeo.com/video/1126076436?title=0&byline=0&portrait=0"
              title="Pixel Ink Studio Showreel"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* 5. Case studies */}
      <section id="work" className="relative scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work</p>
              <h2 className="font-display mt-4 text-4xl md:text-5xl font-bold leading-[1.1]">
                Stories we've <span className="text-gradient">shipped.</span>
              </h2>
            </div>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
              See all case studies <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="space-y-6">
            {cases.map((c, i) => (
              <article key={c.title} className={`grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-border ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative aspect-[4/3]">
                  <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="p-8 md:p-12 bg-gradient-surface flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.tag}</span>
                  <h3 className="font-display mt-3 text-2xl md:text-3xl font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-4 text-muted-foreground">{c.sub}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process */}
      <section id="process" className="relative bg-gradient-surface scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our process</p>
            <h2 className="font-display mt-4 text-4xl md:text-5xl font-bold leading-[1.1]">
              Discover. Shape. <span className="text-gradient">Deliver.</span>
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((p) => (
              <div key={p.step} className="rounded-2xl border border-border p-8 hover:border-primary/40 transition">
                <div className="font-display text-3xl font-bold text-gradient">{p.step}</div>
                <h3 className="font-display mt-4 text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Clients */}
      <section id="clients" className="relative scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground text-center">In good company</p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-x-14 gap-y-8">
            {clients.map((c) => (
              <img
                key={c.name}
                src={c.logo}
                alt={c.name}
                loading="lazy"
                className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition brightness-0 invert"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact */}
      <section id="contact" className="relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-90" />
        <div className="mx-auto max-w-5xl px-6 py-28 md:py-40 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Get in touch</p>
          <h2 className="font-display mt-4 text-4xl md:text-6xl font-bold leading-[1.05]">
            Let's create something <span className="text-gradient">exceptional.</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            Tell us what you're building. We'll come back with a point of view, a plan and a timeline.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
              Book a 15-minute call <ArrowUpRight className="size-4" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-foreground/10 transition">
              Send a brief
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
