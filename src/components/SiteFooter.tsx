import { Link } from "@tanstack/react-router";
import logo from "@/assets/pixel-ink-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 sm:grid-cols-3 items-center">
        <div className="flex items-center gap-2">
          <img src={logo.url} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
          <span className="font-display text-foreground">Pixel Ink Studio (Pty) LTD</span>
        </div>
        <nav className="flex justify-center gap-6 text-sm text-muted-foreground">
          <Link to="/work" className="hover:text-foreground transition">Work</Link>
          <Link to="/services" className="hover:text-foreground transition">Services</Link>
          <Link to="/studio" className="hover:text-foreground transition">Studio</Link>
          <Link to="/contact" className="hover:text-foreground transition">Contact</Link>
        </nav>
        <div className="text-sm text-muted-foreground sm:text-right">
          © {new Date().getFullYear()} Pixel Ink Studio.
        </div>
      </div>
    </footer>
  );
}
