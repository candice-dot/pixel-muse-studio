import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import { ArrowUpRight, Sparkles, Film, Palette, Compass } from "lucide-react";
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

const services = [
  { icon: Compass, title: "Strategy & Creative", body: "Brand and campaign development, creative direction, storytelling and concept." },
  { icon: Palette, title: "Design & Content", body: "Visual identity, event branding, motion graphics, presentation and digital content." },
  { icon: Film, title: "Experience & Execution", body: "2D & 3D animation, on-screen and environmental design, end-to-end delivery." },
  { icon: Sparkles, title: "Live & Digital", body: "Built for live environments where brand perception and timing matter most." },
];

const work = [
  { img: work1, tag: "Brand Experience", title: "SAB — Evolving Firsts", blurb: "Heritage brand storytelling and exhibition design for Saudi Awwal Bank's flagship experience centre in Riyadh." },
  { img: work2, tag: "Global Conference", title: "Heineken — Make It Personal", blurb: "Stage design, motion graphics and on-screen branding for Heineken Beverages' 2025 Marketing & Distribution Conference." },
  { img: work3, tag: "Brand System", title: "Marriott Residences JVC", blurb: "Visual identity, sales collateral and CGI-led brand content for the Marriott Residences JVC property launch in Dubai." },
];

const clients = ["Heineken", "Coca-Cola", "Marriott", "SAB", "Rolls-Royce", "Event Lab"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
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
            <Link to="/work" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
              View our work <ArrowUpRight className="size-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-white/10 transition">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Who we are</p>
            <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              A brand and content studio for <span className="text-gradient">high-impact experiences.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              With 15+ years partnering with leading brands, we combine strategy, creativity and
              execution — and our work performs in real-world environments where brand perception
              matters most.
            </p>
            <Link to="/studio" className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:opacity-80 transition">
              More about the studio <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "15+", v: "Years experience" },
              { k: "Global", v: "Brand partners" },
              { k: "End-to-end", v: "Creative + delivery" },
              { k: "Live", v: "Environment expertise" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500">
                <div className="font-display text-4xl font-semibold text-gradient">{s.k}</div>
                <div className="mt-3 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="relative bg-gradient-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Capabilities</p>
              <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
                What we do.
              </h2>
            </div>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition inline-flex items-center gap-2">
              All services <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group relative overflow-hidden rounded-2xl glass p-8 shadow-card hover:-translate-y-1 hover:shadow-glow transition-all duration-500">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-brand opacity-0 group-hover:opacity-100 transition" />
                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-gradient-brand shadow-glow">
                  <s.icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="font-display mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work preview */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work</p>
              <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                Stories we've shipped.
              </h2>
            </div>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
              See all case studies <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {work.map((w) => (
              <Link key={w.title} to="/work" className="group relative overflow-hidden rounded-2xl shadow-card aspect-[4/5]">
                <img src={w.img} alt={w.title} loading="lazy" width={1024} height={1280} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{w.tag}</span>
                  <h3 className="font-display mt-2 text-xl font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.blurb}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 border-t border-border pt-10">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground text-center">In good company</p>
            <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-4 text-muted-foreground">
              {clients.map((c) => (
                <span key={c} className="font-display text-xl md:text-2xl opacity-70 hover:opacity-100 transition">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-90" />
        <div className="mx-auto max-w-5xl px-6 py-28 md:py-40 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Let's create something <span className="text-gradient">exceptional.</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            Tell us what you're building — we'll come back with a point of view, a plan and a timeline.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
              Get in touch <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
