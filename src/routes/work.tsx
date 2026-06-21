import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight } from "lucide-react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work • Pixel Ink Studio" },
      { name: "description", content: "Selected case studies • SAB, Heineken, Marriott, Rolls-Royce, Coca-Cola, Event Lab." },
      { property: "og:title", content: "Work • Pixel Ink Studio" },
      { property: "og:description", content: "Brand films, conferences and campaign systems for global brands." },
    ],
  }),
  component: WorkPage,
});

const cases = [
  {
    img: work1,
    tag: "Brand Experience",
    title: "SAB • Evolving Firsts",
    sub: "An Evening of Transformation",
    objective: "Reposition SAB's heritage as a living, evolving brand through a premium, immersive experience.",
    solution: "A \"living brand museum\" with visuals for OLED screens, holographic cubes and curved LED • blending heritage storytelling with modern digital execution.",
    outcome: "High-impact brand experience with strong narrative coherence and elevated perception of innovation and legacy.",
  },
  {
    img: work2,
    tag: "Global Conference",
    title: "Heineken • Make It Personal",
    sub: "Global Marketing, Sales & Distribution Conference 2025",
    objective: "Create a dynamic, future-focused conference identity aligned to Heineken's global brand ethos.",
    solution: "Motion-led visual system with layered gradients and kinetic design • consistent branding across stage, screens and content.",
    outcome: "Strong brand immersion with high-energy, modern visual language and a scalable system for multi-platform use.",
  },
  {
    img: work3,
    tag: "Brand System",
    title: "Marriott Residences JVC",
    sub: "Elevating the global brand experience in Dubai",
    objective: "Position a premium Dubai development in line with Marriott's global brand standards.",
    solution: "A refined \"Urban Chic\" visual identity and marketing system, applied consistently across digital and print assets.",
    outcome: "Cohesive, premium brand presence strengthening positioning within Dubai's luxury property market.",
  },
  {
    img: work1,
    tag: "Experiential Campaign",
    title: "Rolls-Royce • Customise Your Journey",
    sub: "Urban Drive across Middle East markets",
    objective: "Reposition Rolls-Royce as a modern luxury lifestyle brand for a younger, design-conscious audience.",
    solution: "Multi-city experiential events with immersive lifestyle moments and multi-sensory brand environments.",
    outcome: "A scalable premium concept demonstrating experience-led storytelling across the region.",
  },
  {
    img: work2,
    tag: "Brand Film",
    title: "Coca-Cola • Unified for Purpose",
    sub: "Culture Conference Opening Film",
    objective: "Create an emotionally engaging opening for the Coca-Cola Culture Conference around unity and shared purpose.",
    solution: "AI-assisted visual film synchronised to live spoken-word performance • fluid, emotive imagery paced to poetry cadence.",
    outcome: "A memorable, immersive opening that set the tone for the conference and aligned to a people-first ethos.",
  },
  {
    img: work3,
    tag: "Digital-First",
    title: "Event Lab • Jobseekers Campaign",
    sub: "Educate, empower, prepare",
    objective: "Support job seekers entering the events industry with practical recruitment guidance.",
    solution: "CV structure and ATS optimisation, professional formatting guidance and short-form digital content.",
    outcome: "Positioned Event Lab as a trusted industry resource and strengthened brand credibility.",
  },
];

function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-60" />
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-20 md:pt-52 md:pb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected work</p>
          <h1 className="font-display mt-4 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl">
            Stories we've <span className="text-gradient">shipped.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Case studies from across live events, content and digital • work performing in
            real-world environments where brand perception matters most.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32 space-y-6">
          {cases.map((c, i) => (
            <article key={c.title} className={`grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-border ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/3] md:aspect-auto">
                <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent md:hidden" />
              </div>
              <div className="p-8 md:p-12 bg-gradient-surface">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.tag}</span>
                <h2 className="font-display mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{c.title}</h2>
                <p className="mt-2 text-muted-foreground">{c.sub}</p>
                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="uppercase tracking-[0.18em] text-xs text-muted-foreground">Objective</dt>
                    <dd className="mt-1">{c.objective}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-[0.18em] text-xs text-muted-foreground">Solution</dt>
                    <dd className="mt-1">{c.solution}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-[0.18em] text-xs text-muted-foreground">Outcome</dt>
                    <dd className="mt-1">{c.outcome}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-90" />
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
            Want the <span className="text-gradient">full reel?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">We'll share the showreel and relevant case studies for your brief.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
            Request the reel <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
