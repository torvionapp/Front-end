import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-cream-2 text-foreground">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-8">
        <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-brand text-white p-8 shadow-2xl shadow-brand/20 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_0.5fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-soft">
                Newsletter
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Subscribe to our newsletter to get updates to our latest collections
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-brand-soft/90">
                Get 20% off on your first order just by subscribing to our newsletter.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/20 bg-white/10 p-6 pt-8 shadow-lg shadow-black/10 backdrop-blur-sm sm:p-8 sm:pt-10">
              <form className="space-y-4">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-full border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/20"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-background text-foreground text-sm font-semibold transition hover:bg-slate-100"
                >
                  Subscribe
                </button>
                <p className="text-xs text-white/75">
                  You will be able to unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="relative -mt-8">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-background/90 p-10 pt-20 shadow-xl shadow-black/5 backdrop-blur-xl sm:p-12 sm:pt-24">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-3 rounded-full bg-brand/10 px-4 py-2">
                  <img src="/logo.svg" alt="Torvion" className="h-10 w-auto" />
                </div>
                <p className="max-w-sm text-base leading-7 text-muted-foreground">
                  Build smarter workflows, accelerate handoffs, and keep every team aligned with automated work that actually feels human.
                </p>
                <div className="flex items-center gap-3 pt-2 text-foreground">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted">
                    <Facebook size={16} />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted">
                    <Instagram size={16} />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted">
                    <Youtube size={16} />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted">
                    <Linkedin size={16} />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Company
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-foreground/70">
                  <li>
                    <a href="#home" className="transition hover:text-foreground">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="transition hover:text-foreground">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="transition hover:text-foreground">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="transition hover:text-foreground">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="transition hover:text-foreground">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Contact Us
                </h3>
                <div className="mt-6 space-y-4 text-sm text-foreground/70">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Email
                    </p>
                    <p className="font-semibold text-foreground">connect@torvionapp.com</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Phone
                    </p>
                    <p className="font-semibold text-foreground">+1 (415) 555-2121</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Address
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=535+Mission+Street,+San+Francisco,+CA+94102"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground hover:underline"
                    >
                      535 Mission Street, San Francisco, CA 94102, USA
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-border/50 pt-6 text-sm text-foreground/70 sm:flex sm:items-center sm:justify-between">
              <p>© 2026 Torvion Inc. All rights reserved.</p>
              <div className="flex flex-wrap gap-4">
                <span>Privacy Policy</span>
                <span>Terms of Use</span>
                <span>Legal</span>
                <span>Site Map</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
