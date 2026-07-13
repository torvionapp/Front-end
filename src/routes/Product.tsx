import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/Product")({
  component: Product,
});

function Product() {
  return (
    <div className="min-h-dvh bg-background text-foreground" style={{ fontFamily: "var(--font-body)" }}>
      <Navbar />
      <main className="pt-16 sm:pt-[72px]">
        {/* Hero */}
        <section className="bg-[#070707] text-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28 lg:py-32">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
              <div className="lg:w-1/2">
                <h1 className="text-4xl font-medium leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                  TorvionX — AI that does the heavy lifting
                </h1>
                <p className="mt-4 text-lg text-white/75">
                  A context-aware team automation platform that turns conversations and tools into coordinated action. Built to keep your brand voice, accelerate decisions, and handle the noisy work so teams ship faster.
                </p>

                <div className="mt-8 flex gap-4">
                  <a
                    href="https://app.torvionapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg hover:brightness-105"
                  >
                    Launch TorvionX
                    <span className="ml-3">
                      <ArrowRight />
                    </span>
                  </a>

                  <a href="#features" className="inline-flex items-center rounded-md border border-white/10 px-4 py-3 text-sm text-white/90">
                    See features
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/3 p-6">
                  <h3 className="text-sm font-medium text-white/90">What TorvionX does</h3>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    <li>Transforms unstructured tool outputs into actionable tasks.</li>
                    <li>Routes work automatically to the right teammate at the right time.</li>
                    <li>Adapts generated content to your team's unique brand voice.</li>
                    <li>Integrates with existing webhooks, GitHub, Slack, and calendar systems.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <h2 className="text-2xl font-medium">Key capabilities</h2>
            <p className="mt-2 text-white/70">Built around human workflows — not just models.</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border bg-cream p-6">
                <h4 className="font-semibold">Smart Routing</h4>
                <p className="mt-2 text-sm text-ink/80">Automatically classifies incoming events and routes them to the right person or automation based on intent, priority, and workload.</p>
              </div>

              <div className="rounded-xl border bg-cream p-6">
                <h4 className="font-semibold">Voice & Style Preservation</h4>
                <p className="mt-2 text-sm text-ink/80">Fine-tune outputs so every message, summary, or draft reads like it was written by your team.</p>
              </div>

              <div className="rounded-xl border bg-cream p-6">
                <h4 className="font-semibold">Real-time Integrations</h4>
                <p className="mt-2 text-sm text-ink/80">Connect streams of events from Slack, GitHub, Jira, and custom webhooks for immediate AI-driven triage.</p>
              </div>

              <div className="rounded-xl border bg-cream p-6">
                <h4 className="font-semibold">Automated Workflows</h4>
                <p className="mt-2 text-sm text-ink/80">Define text-to-action rules that turn conversations into tickets, PRs, or scheduled tasks with audit trails.</p>
              </div>

              <div className="rounded-xl border bg-cream p-6">
                <h4 className="font-semibold">Team Analytics</h4>
                <p className="mt-2 text-sm text-ink/80">Understand throughput, handoffs, and friction points with GPU-accelerated analytics.</p>
              </div>

              <div className="rounded-xl border bg-cream p-6">
                <h4 className="font-semibold">Security & Controls</h4>
                <p className="mt-2 text-sm text-ink/80">Permissions, audit logs, and integration guards keep automations safe and accountable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-[#0b0b0b] py-20 text-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <h2 className="text-2xl font-medium">How TorvionX works</h2>
            <p className="mt-2 text-white/70">A short, human-first summary of the system flow.</p>

            <div className="mt-8 space-y-6">
              <div>
                <h4 className="font-semibold">1. Ingest</h4>
                <p className="text-white/70">Streams, webhooks, and files are normalized into a common event feed.</p>
              </div>

              <div>
                <h4 className="font-semibold">2. Classify & Route</h4>
                <p className="text-white/70">Lightweight models classify intent and priority; rules and AI combine to route work to people or automated runners.</p>
              </div>

              <div>
                <h4 className="font-semibold">3. Draft & Execute</h4>
                <p className="text-white/70">Drafts, summaries, and suggested actions are generated in your brand voice, then executed with human review or automatically.</p>
              </div>
            </div>
          </div>
        </section>

        {/* NVIDIA SDKs (scannable tech section) */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <h2 className="text-2xl font-medium">Scalable AI foundation (tech highlights)</h2>
            <p className="mt-2 text-white/70">Core pieces we leverage for production-grade, fast, and private AI.</p>

            <div className="mt-6 space-y-4">
              <div className="rounded-md border bg-cream p-4">
                <strong>NVIDIA NeMo Framework:</strong> Fine-tune LLMs on historical team docs and messages to preserve voice and context.
              </div>

              <div className="rounded-md border bg-cream p-4">
                <strong>NVIDIA NIM:</strong> Deploy hardware-optimized inference microservices for low-latency, high-throughput model serving.
              </div>

              <div className="rounded-md border bg-cream p-4">
                <strong>NVIDIA Morpheus:</strong> Real-time stream processing for webhook ingestion, classification, and smart routing.
              </div>

              <div className="rounded-md border bg-cream p-4">
                <strong>NVIDIA RAPIDS:</strong> GPU-accelerated analytics to optimize routing decisions and priority scoring.
              </div>

              <p className="mt-4 text-sm text-white/70">These technologies power the invisible infrastructure — fast inference, robust audits, and efficient analytics — while TorvionX focuses on human outcomes and brand fidelity.</p>
            </div>
          </div>
        </section>

        {/* CTA / Pricing */}
        <section className="bg-brand py-16 text-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Ready to try TorvionX?</h3>
                <p className="text-white/90">Start a pilot or connect your first webhook — get AI that actually helps teams ship.</p>
              </div>

              <div className="flex gap-3">
                <a href="https://app.torvionapp.com" target="_blank" rel="noopener noreferrer" className="rounded-md bg-white/10 px-4 py-3 text-sm font-semibold text-white">
                  Open the app
                </a>
                <a href="#contact" className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-brand">
                  Talk to sales
                </a>
              </div>
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}

export default Product;
