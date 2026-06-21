import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact • Pixel Ink Studio" },
      { name: "description", content: "Let's create something exceptional. Email candice@pixel-ink.co.za or call +27 73 305 2114." },
      { property: "og:title", content: "Contact • Pixel Ink Studio" },
      { property: "og:description", content: "Brief us on your next brand experience, film or campaign." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-70" />
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-20 md:pt-52 md:pb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
          <h1 className="font-display mt-4 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl">
            Let's create something <span className="text-gradient">exceptional.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Tell us what you're building • we'll come back with a point of view, a plan and a
            timeline.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32 grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <a href="mailto:candice@pixel-ink.co.za" className="group flex items-start gap-5 rounded-2xl glass p-8 shadow-card hover:shadow-glow transition">
              <div className="inline-flex items-center justify-center size-12 rounded-xl bg-gradient-brand shadow-glow shrink-0">
                <Mail className="size-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</p>
                <p className="font-display mt-2 text-2xl">candice@pixel-ink.co.za</p>
                <p className="mt-2 text-sm text-muted-foreground">Candice Ashwin • new business & creative partnerships</p>
              </div>
              <ArrowUpRight className="size-5 mt-1 opacity-50 group-hover:opacity-100 transition" />
            </a>

            <a href="tel:+27733052114" className="group flex items-start gap-5 rounded-2xl glass p-8 shadow-card hover:shadow-glow transition">
              <div className="inline-flex items-center justify-center size-12 rounded-xl bg-gradient-brand shadow-glow shrink-0">
                <Phone className="size-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</p>
                <p className="font-display mt-2 text-2xl">+27 73 305 2114</p>
                <p className="mt-2 text-sm text-muted-foreground">Mon–Fri · South Africa Standard Time</p>
              </div>
              <ArrowUpRight className="size-5 mt-1 opacity-50 group-hover:opacity-100 transition" />
            </a>
          </div>

          <div className="rounded-2xl border border-border p-8 md:p-10 bg-gradient-surface">
            <h2 className="font-display text-2xl font-semibold">Brief us</h2>
            <p className="mt-2 text-sm text-muted-foreground">Share a few details and we'll get back within 48 hours.</p>
            <form className="mt-8 space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:candice@pixel-ink.co.za"; }}>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Name</span>
                  <input required className="mt-2 w-full rounded-lg bg-background/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition" />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Company</span>
                  <input className="mt-2 w-full rounded-lg bg-background/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition" />
                </label>
              </div>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</span>
                <input type="email" required className="mt-2 w-full rounded-lg bg-background/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition" />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">About the project</span>
                <textarea rows={5} required className="mt-2 w-full rounded-lg bg-background/50 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none" />
              </label>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
                Send brief <ArrowUpRight className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
