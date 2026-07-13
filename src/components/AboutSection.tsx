import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const companies = [
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg", alt: "Arc" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg", alt: "Descript" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg", alt: "Mercury" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg", alt: "Ramp" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg", alt: "Retool" },
  { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg", alt: "Watershed" },
];

const achievements = [
  { label: "Companies", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

export function AboutSection({ className }: { className?: string }) {
  return (
    <section id="about" className={cn("py-16 md:py-24 bg-cream", className)}>
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 lg:w-2/3">
          <span
            className="inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-brand"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
          >
            About
          </span>
          <h1
            className="text-5xl font-semibold tracking-tighter text-ink lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why We Built Torvion
          </h1>
          <p className="text-base text-ink/60" style={{ fontFamily: "var(--font-body)" }}>
            Torvion combines deep automation with a calm, focused interface so
            your team spends less time coordinating and more time creating.
          </p>
        </div>

        {/* Image grid */}
        <div className="grid gap-4 lg:grid-cols-3">
          <img
            src="/about1.svg"
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-4 md:flex-row lg:flex-col">
            {/* Breakout card */}
            <div className="flex flex-col justify-between gap-4 rounded-xl bg-cream-2 p-5 md:w-1/2 lg:w-auto">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10">
                <img src="/about-icon.svg" alt="Feature Icon" className="h-10 w-10" />
              </div>
              <div>
                <p className="mb-2 text-lg font-semibold text-ink">
                  Hundreds of integrations at your fingertips
                </p>
                <p className="text-ink/60">
                  Providing teams with effective tools to improve workflows,
                  boost efficiency, and encourage growth.
                </p>
              </div>
              <Button
                variant="outline"
                className="mr-auto border-brand/30 text-brand hover:bg-brand/5"
                asChild
              >
                <a href="#features">Discover more</a>
              </Button>
            </div>
            <img
              src="/about2.svg"
              alt="Team working"
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>

        {/* Achievements */}
        <div className="relative mt-8 overflow-hidden rounded-xl bg-cream-2 p-5 md:p-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2
              className="text-2xl font-medium text-ink md:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Achievements in Numbers
            </h2>
            <p className="max-w-xl text-sm text-ink/60">
              Providing businesses with effective tools to improve workflows,
              boost efficiency, and encourage growth.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 md:flex md:flex-wrap md:justify-between">
            {achievements.map((item, idx) => (
              <div
                className="flex flex-col gap-2 text-center md:text-left"
                key={item.label + idx}
              >
                <span
                  className="font-mono text-3xl font-semibold text-brand md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.value}
                </span>
                <p className="text-xs text-ink/70 md:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company logos marquee */}
        <div className="py-10">
          <Marquee>
            <MarqueeContent speed={40}>
              {companies.map((company, idx) => (
                <MarqueeItem key={company.src + idx} className="mx-8 flex items-center">
                  <img
                    src={company.src}
                    alt={company.alt}
                    className="h-7 w-auto md:h-8 opacity-70 hover:opacity-100 transition-opacity"
                    style={{ filter: "brightness(0)" }}
                  />
                </MarqueeItem>
              ))}
            </MarqueeContent>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
          </Marquee>
        </div>



      </div>
    </section>
  );
}
