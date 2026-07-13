import { useState } from "react";
import { cn } from "@/lib/utils";
import { ClipboardList, Cpu, Rocket, PlugZap, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PlugZap,
    title: "Connect Tools",
    summary: "Link your stack in just a few minutes.",
    image: "/connect-tools.svg",
    description:
      "Connect your apps, calendars, messaging, and collaboration tools so your workflows flow without manual handoffs.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Describe Intent",
    summary: "Tell Torvion what you need, plainly.",
    image: "/describe-intent.svg",
    description:
      "Tell Torvion what outcome you want in plain English and it will translate that into automated work for your team.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "AI Orchestrates",
    summary: "Torvion routes tasks and drafts content.",
    image: "/ai-orchestrates.svg",
    description:
      "The platform automatically assigns work, pulls in the right people, and triggers next steps across systems.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Review Progress",
    summary: "Monitor, adjust, approve in one click.",
    image: "/review-refine.svg",
    description:
      "Review status, give feedback, and refine the work before it moves forward — all from one dashboard.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Ship Faster",
    summary: "Your team moves quicker, together.",
    image: "/ship-faster.svg",
    description:
      "Deliver higher-quality outcomes faster while your team focuses on impact instead of manual coordination.",
  },
];

export function HowItWorksSection({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];

  return (
    <section
      id="how-it-works"
      className={cn("relative overflow-hidden bg-ink py-20", className)}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-12 text-center">
          <span
            className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-brand"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
          >
            How It Works
          </span>
          <h2
            className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Workflow, Optimized Automatically
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
            No manual tracking. No app-switching. Just intelligent execution from
            start to finish.
          </p>
        </div>

        {/* Step controls */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-3xl border px-4 py-5 text-left transition-all duration-300 sm:px-5 sm:py-6 ${
                activeIndex === index
                  ? "border-brand bg-brand/10 text-white shadow-lg shadow-brand/10"
                  : "border-white/10 bg-white/5 text-white/70 hover:border-brand/40 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
                  {step.number}
                </span>
                <span className="text-sm font-semibold text-white">
                  {step.title}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {step.summary}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-x-20 lg:gap-y-16 xl:gap-x-24 lg:items-center">
          <img
            src={activeStep.image}
            alt={activeStep.title}
            className="h-72 md:h-[450px] w-full rounded-[2rem] object-cover shadow-2xl shadow-black/10 lg:h-[32rem]"
          />
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/10 backdrop-blur-sm lg:p-12">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
              Step {activeStep.number}
            </span>
            <h3
              className="mt-4 text-3xl font-semibold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {activeStep.title}
            </h3>
            <p className="mt-6 text-lg leading-8 text-white/70">
              {activeStep.description}
            </p>
            <p className="mt-6 text-sm leading-7 text-white/50">
              This step is part of a cohesive workflow designed to help your
              team move faster, reduce manual effort, and keep the work flowing
              without interruptions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
