import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import heroBg from "@/hero.svg";
import w1 from "@/w1.svg";
import w2 from "@/w2.svg";
import w3 from "@/w3.svg";
import m1 from "@/m1.svg";
import m2 from "@/m2.svg";

const teamAvatars = [
  { initials: "JD", src: w1 },
  { initials: "HJ", src: w2 },
  { initials: "PI", src: w3 },
  { initials: "KD", src: m1 },
  { initials: "LD", src: m2 },
];

const stats = [
  { emoji: "🚀", label: "IN CLIENT REVENUE GENERATED", value: "$5M+" },
  { emoji: "📈", label: "BUSINESSES LAUNCHED", value: "200+" },
  { emoji: "💰", label: "SAVED IN OPERATIONAL COSTS", value: "$500K+" },
];

function AvatarStack() {
  return (
    <div className="flex -space-x-3 px-4 pt-6 sm:px-8 lg:px-16">
      {teamAvatars.map((member, i) => (
        <Avatar
          key={member.initials}
          className="size-12 border-2 border-white/30 bg-ink"
          style={{ zIndex: teamAvatars.length - i }}
        >
          <AvatarImage alt={member.initials} src={member.src} />
          <AvatarFallback className="bg-ink text-cream text-xs font-bold">
            {member.initials}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}

function StatsMarquee() {
  return (
    <Marquee
      className="w-full border-white/10 border-y bg-black/40 py-3 backdrop-blur-sm [--duration:30s] [--gap:2rem]"
      pauseOnHover
      repeat={4}
    >
      {stats.map((stat) => (
        <div className="flex items-center gap-3 whitespace-nowrap" key={stat.label}>
          <span className="font-bold font-mono text-brand text-sm tracking-wide">
            {stat.value}
          </span>
          <span className="font-medium font-mono text-sm text-white/70 uppercase tracking-[0.15em]">
            {stat.label}
          </span>
          <span className="text-base">{stat.emoji}</span>
        </div>
      ))}
    </Marquee>
  );
}

export default function HeroUI() {
  return (
    <section id="home" className="relative flex min-h-[100dvh] w-full flex-col justify-between bg-[#0a0a0a]">
      {/* Background image — visible on all screen sizes */}
      <div className="absolute inset-0 overflow-hidden z-0 bg-black">
        <img
          src={heroBg}
          alt="Hero Background"
          className="h-full w-full object-contain object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ── TOP: Avatar stack + marquee ── */}
      <div className="relative z-10 w-full">
        <AvatarStack />
        <div className="mt-4">
          <StatsMarquee />
        </div>
      </div>

      {/* ── BOTTOM: Headline + description ── */}
      <div className="relative z-10 w-full px-4 pb-16 sm:px-8 sm:pb-24 lg:px-16 lg:pb-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
          {/* Left — headline + CTA */}
          <div className="w-full space-y-6 sm:w-1/2">
            <h1
              className="font-medium text-white leading-[1.05] tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              }}
            >
              Your AI Productivity Suite
              <br />
              Built for Smarter Execution.
            </h1>
            <Button
              className="rounded-none py-0 pr-0 font-normal text-lg bg-brand text-white hover:bg-brand/90"
            >
              TorvionX
              <span className="border-white/30 border-l p-3">
                <ArrowRight />
              </span>
            </Button>
          </div>

          {/* Right — italic description */}
          <div className="w-full sm:w-1/2">
            <p
              className="text-base italic sm:text-right md:text-2xl"
              style={{ fontFamily: "var(--font-body)", color: "var(--brand)" }}
            >
              Plan less.
              <br />
              Execute more.
              <br />
              Let AI run the coordination
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
