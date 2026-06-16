import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — Pixel Ink Studio" },
      { name: "description", content: "Who we are and why brands choose Pixel Ink — 15+ years delivering brand experiences across strategy, design, motion and live execution." },
      { property: "og:title", content: "Studio — Pixel Ink Studio" },
      { property: "og:description", content: "A brand and content design studio specialising in high-impact experiences." },
    ],
  }),
  component: StudioPage,
});

const reasons = [
  { k: "15+ Years", v: "Proven experience delivering exceptional brand experiences." },
  { k: "Global Trust", v: "Trusted by leading international and regional brands." },
  { k: "Creative + Execution", v: "Strong capability across strategy and delivery." },
  { k: "Agile & Responsive", v: "A reliable partner for complex, time-sensitive projects." },
  { k: "Live Expertise", v: "Deep understanding of event production and execution." },
  { k: "Brand-Led", v: "Focused on lasting impact, not fleeting trends." },
];

const understand = [
  "Stakeholder pressure and competing priorities",
  "Brand governance and compliance requirements",
  "Tight timelines and production constraints",
  "High expectations and performance demands",
];

function StudioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-60" />
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-20 md:pt-52 md:pb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">The studio</p>
          <h1 className="font-display mt-4 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl">
            Who we <span className="text-gradient">are.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Pixel Ink Studio is a brand and content design studio specialising in high-impact brand
            experiences. With over 15 years of experience, we partner with global and regional brands
            to create meaningful, visually powerful campaigns — across live events, content and
            digital platforms.
          </p>
        </div>
      </section>

      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Why brands choose Pixel Ink</p>
          <h2 className="font-display mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Built for the moments that <span className="text-gradient">matter.</span>
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r) => (
              <div key={r.k} className="rounded-2xl glass p-8 shadow-card hover:shadow-glow transition">
                <div className="font-display text-2xl text-gradient">{r.k}</div>
                <p className="mt-3 text-muted-foreground">{r.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              We don't just design visuals — we design <span className="text-gradient">experiences that work</span> in real-world environments.
            </h2>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">We understand</p>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {understand.map((u) => (
                <li key={u} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-gradient-brand shadow-glow shrink-0" />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-display text-2xl">And we deliver on time.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
              Work with us <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
