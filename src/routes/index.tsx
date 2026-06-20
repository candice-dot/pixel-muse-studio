import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import { ArrowUpRight, Compass, Palette, Film, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pixel Ink Studio — Brand • Content • Experience Design" },
      { name: "description", content: "A brand and content design studio creating high-impact experiences across design, motion, video and strategy. 15+ years partnering with global brands." },
      { property: "og:title", content: "Pixel Ink Studio — Built to Deliver" },
      { property: "og:description", content: "Design, motion, video and strategy for brands that need to move." },
      { property: "og:type", content: "website" },
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
    items: ["3D & 2D animation", "On-screen and environmental design", "End-to-end content delivery"],
  },
];

const cases = [
  { img: work1, tag: "Global Conference", title: "Heineken — Make It Personal", sub: "Motion-led visual system across stage, screens and content for the 2025 Global Marketing, Sales & Distribution Conference." },
  { img: work2, tag: "Brand Film", title: "Coca-Cola — Unified for Purpose", sub: "AI-assisted opening film synchronised to live spoken-word performance for the Culture Conference." },
  { img: work3, tag: "Brand Experience", title: "SAB — Evolving Firsts", sub: "An immersive \"living brand museum\" across OLED, holographic cubes and curved LED." },
  { img: work1, tag: "Brand System", title: "Marriott Residences JVC", sub: "A refined Urban Chic identity and marketing system for a premium Dubai development." },
  { img: work2, tag: "Experiential Campaign", title: "Rolls-Royce — Customise Your Journey", sub: "Multi-city, multi-sensory brand environments across Middle East markets." },
];

const processSteps = [
  { step: "01", title: "Discover", body: "Align on audience, objectives, context and success metrics." },
  { step: "02", title: "Shape", body: "Define the concept, narrative and visual language." },
  { step: "03", title: "Design & Build", body: "Produce systems, motion and assets ready for execution." },
  { step: "04", title: "Deliver & Scale", body: "Final production, on-site support and reusable assets." },
];

const clients = ["Heineken", "Coca-Cola", "Marriott", "SAB", "Rolls-Royce"];


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      {/* 1. Hero */}
      <section id="top" className="relative isolate overflow-hidden scroll-mt-24">
        <img src={heroBg} alt="" width={1920} height={1080} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />

        <div className="mx-auto max-w-7xl px-6 pt-40 pb-32 md:pt-56 md:pb-44">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary shadow-glow" />
            Brand • Content • Experience Design
          </span>
          <h1 className="font-display mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight max-w-5xl">
            Built to <span className="text-gradient">deliver.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Pixel Ink Studio partners with global and regional brands to create meaningful, visually
            powerful campaigns — across live events, content and digital platforms.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
              View our work <ArrowUpRight className="size-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-white/10 transition">
              Start a conversation
            </a>
          </div>
        </div>
      </section>

      {/* 2. Stats bar */}
      <section id="stats" className="relative border-y border-border bg-gradient-surface scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.v}>
              <div className="font-display text-4xl md:text-5xl font-semibold text-gradient">{s.k}</div>
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
            <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              A brand and content studio for <span className="text-gradient">high-impact experiences.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Four disciplines under one roof — strategy, design, motion and execution moving in sync,
              without the handover tax.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <div key={c.title} className="glass rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500">
                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-gradient-brand shadow-glow">
                  <c.icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="font-display mt-6 text-xl font-semibold">{c.title}</h3>
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

      {/* 4. Showreel */}
      <section id="showreel" className="relative bg-gradient-surface scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Showreel</p>
              <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                Work in <span className="text-gradient">motion.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
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
              <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
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
                <div className="relative aspect-[4/3] md:aspect-auto">
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
            <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Discover. Shape. <span className="text-gradient">Deliver.</span>
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((p) => (
              <div key={p.step} className="rounded-2xl border border-border p-8 hover:border-primary/40 transition">
                <div className="font-display text-3xl text-gradient">{p.step}</div>
                <h3 className="font-display mt-4 text-xl font-semibold">{p.title}</h3>
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
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-muted-foreground">
            {clients.map((c) => (
              <span key={c} className="font-display text-xl md:text-2xl opacity-70 hover:opacity-100 transition">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section id="testimonials" className="relative bg-gradient-surface scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Testimonials</p>
            <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              What partners <span className="text-gradient">say.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <figure key={t.author} className="glass rounded-2xl p-8 shadow-card">
                <Quote className="size-6 text-primary" />
                <blockquote className="mt-4 text-foreground leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-medium">{t.author}</div>
                  <div className="text-muted-foreground">{t.company}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact */}
      <section id="contact" className="relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-90" />
        <div className="mx-auto max-w-5xl px-6 py-28 md:py-40 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Get in touch</p>
          <h2 className="font-display mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Let's create something <span className="text-gradient">exceptional.</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            Tell us what you're building — we'll come back with a point of view, a plan and a timeline.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
              Book a 15-minute call <ArrowUpRight className="size-4" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-white/10 transition">
              Send a brief
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
