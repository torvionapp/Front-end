import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import contactImg from "@/contact.svg";

export function ContactSection() {
  return (
    <section id="contact" className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-brand">
            Contact
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            How can we help you today?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-ink/70">
            Our dedicated customer support team is just a message or call away.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="space-y-8 rounded-[2rem] border border-border bg-background/90 p-6 shadow-xl shadow-ink/10 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_0.7fr] lg:items-start">
              <div className="overflow-hidden rounded-[2rem] bg-cream shadow-sm shadow-ink/10">
                <div className="relative h-44 sm:h-72">
                  <img
                    src={contactImg}
                    alt="Contact"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>

              <div className="space-y-4 rounded-[2rem] border border-border bg-background/90 p-6 shadow-sm shadow-ink/5">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Email</p>
                    <p className="font-semibold text-ink">connect@torvionapp.com</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Phone</p>
                    <p className="font-semibold text-ink">+1 (415) 555-2121</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Address</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=535+Mission+Street,+San+Francisco,+CA+94102"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-ink hover:underline"
                    >
                      535 Mission Street, San Francisco, CA 94102, USA
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-border bg-background/90 shadow-sm shadow-ink/5">
              <a
                href="https://www.google.com/maps/search/?api=1&query=535+Mission+Street,+San+Francisco,+CA+94102"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-72 w-full"
              >
                <iframe
                  src="https://www.google.com/maps?q=535+Mission+Street,+San+Francisco,+CA+94102&output=embed"
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Torvion office location"
                />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-background/90 p-8 shadow-xl shadow-ink/10 sm:p-10">
            <div className="space-y-6">
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="contact-first-name">First name</Label>
                    <Input id="contact-first-name" placeholder="First name" className="mt-3" />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="you@company.com" className="mt-3" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-phone">Phone number</Label>
                  <Input id="contact-phone" placeholder="US +1 (555) 000-0000" className="mt-3" />
                </div>
                <div>
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea id="contact-message" placeholder="Leave us a message..." className="mt-3 min-h-[160px]" />
                </div>
                <div className="rounded-3xl border border-border bg-background/80 p-4 text-sm text-ink/80">
                  <p className="mb-3 font-semibold uppercase tracking-[0.22em] text-ink/70">
                    Security check
                  </p>
                  <p className="mb-3 text-base text-foreground">
                    What is 9 + 9?
                  </p>
                  <Input
                    id="contact-captcha"
                    type="text"
                    placeholder="Enter answer"
                    className="mt-1 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/50"
                  />
                </div>
                <Button type="submit" className="w-full justify-center bg-brand text-white hover:bg-[#dd6800]">
                  Send message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
