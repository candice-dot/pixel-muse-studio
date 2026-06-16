import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import { ArrowUpRight, Sparkles, Film, Palette, Compass } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pixel Ink Studio — Design, Motion, Video & Strategy" },
      {
        name: "description",
        content:
          "Pixel Ink Studio (Pty) LTD is a creative content studio in Johannesburg crafting brand films, motion graphics, design systems and strategy for global brands.",
      },
      { property: "og:title", content: "Pixel Ink Studio — Built to Deliver" },
      {
        property: "og:description",
        content:
          "Design, motion, video & strategy. Award-winning creative studio working globally from Johannesburg.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Palette,
    title: "Design",
    body: "Identity systems, campaign design, and digital surfaces that hold up across every touchpoint.",
  },
  {
    icon: Film,
    title: "Motion",
    body: "Title sequences, explainers, social cuts and broadcast-grade motion graphics that move people.",
  },
  {
    icon: Sparkles,
    title: "Video",
    body: "Brand films and content production — concept, direction, shoot and post under one roof.",
  },
  {
    icon: Compass,
    title: "Strategy",
    body: "Positioning, narrative and creative direction that gives every frame a reason to exist.",
  },
];

const work = [
  { img: work1, tag: "Brand Film", title: "Heineken — Open Your World" },
  { img: work2, tag: "Documentary", title: "Mercedes-Benz — Built by Hand" },
  { img: work3, tag: "Motion System", title: "Marriott — Stay in Motion" },
];

const clients = ["Heineken", "Mercedes-Benz", "Marriott", "Coca-Cola", "MTN", "Standard Bank"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between glass rounded-none">
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-block h-7 w-7 bg-gradient-brand rounded-md shadow-glow" />
            <span className="font-display text-lg font-semibold tracking-tight">
              Pixel<span className="text-gradient">Ink</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#studio" className="hover:text-foreground transition-colors">Studio</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Start a project <ArrowUpRight className="size-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />

        <div className="mx-auto max-w-7xl px-6 pt-40 pb-32 md:pt-56 md:pb-44">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary shadow-glow" />
            Johannesburg · Working Globally
          </span>
          <h1 className="font-display mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight max-w-5xl">
            Built to <span className="text-gradient">deliver.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Pixel Ink is a creative content studio driven by clarity, craft and execution — design,
            motion, video and strategy for brands that need to move.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              View our work <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-white/10 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Stats / Studio */}
      <section id="studio" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">The studio</p>
            <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              An award-winning creative <span className="text-gradient">content studio.</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Based in Johannesburg, working globally. We create brand films, digital campaigns
                and motion graphics for some of the world's most recognisable brands.
              </p>
              <p>
                15+ years delivering for Heineken, Mercedes-Benz, Marriott and Coca-Cola — we merge
                strategy with execution, so the story you want to tell actually lands.
              </p>
              <p>
                From the early 2000s supporting large-scale events to today's multidisciplinary
                studio, we've evolved with the landscape — and stayed obsessed with the craft.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "15+", v: "Years experience" },
              { k: "50+", v: "Global projects" },
              { k: "20+", v: "Brand partners" },
              { k: "100%", v: "In-house craft" },
            ].map((s) => (
              <div
                key={s.v}
                className="glass rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500"
              >
                <div className="font-display text-5xl font-semibold text-gradient">{s.k}</div>
                <div className="mt-3 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative bg-gradient-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">What we do</p>
              <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
                Four disciplines. One studio.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              We move between strategy and execution without the handover tax — concept, craft and
              delivery sit on the same floor.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl glass p-8 shadow-card hover:-translate-y-1 hover:shadow-glow transition-all duration-500"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-brand opacity-0 group-hover:opacity-100 transition" />
                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-gradient-brand shadow-glow">
                  <s.icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="font-display mt-6 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work</p>
              <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                Stories we've shipped.
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              Request the full reel <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {work.map((w) => (
              <a
                key={w.title}
                href="#contact"
                className="group relative overflow-hidden rounded-2xl shadow-card aspect-[4/5]"
              >
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {w.tag}
                  </span>
                  <h3 className="font-display mt-2 text-xl font-semibold">{w.title}</h3>
                </div>
              </a>
            ))}
          </div>

          {/* Client marquee */}
          <div className="mt-20 border-t border-border pt-10">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground text-center">
              In good company
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-4 text-muted-foreground">
              {clients.map((c) => (
                <span key={c} className="font-display text-xl md:text-2xl opacity-70 hover:opacity-100 transition">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-90" />
        <div className="mx-auto max-w-5xl px-6 py-28 md:py-40 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Have a story that <span className="text-gradient">needs to move?</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            Tell us what you're building — we'll come back with a point of view, a plan and a
            timeline within 48 hours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@pixelink.studio"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              hello@pixelink.studio <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              Back to top
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-block h-5 w-5 bg-gradient-brand rounded-sm" />
            <span className="font-display text-foreground">Pixel Ink Studio (Pty) LTD</span>
          </div>
          <div>© {new Date().getFullYear()} Pixel Ink Studio. Johannesburg, South Africa.</div>
        </div>
      </footer>
    </div>
  );
}
