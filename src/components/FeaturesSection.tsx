import { FeatureSteps } from "@/components/ui/feature-section";

const features = [
  {
    step: "Feature 01",
    title: "AI Drafting",
    content:
      "Generate first drafts, summaries, and reports instantly. Torvion's AI writes with your team's voice and context.",
    image: "/ai-drafting.svg",
  },
  {
    step: "Feature 02",
    title: "Smart Routing",
    content:
      "Tasks are automatically assigned to the right person or system based on context, priority, and availability.",
    image: "/smart-routing.svg",
  },
  {
    step: "Feature 03",
    title: "Automated Reviews",
    content:
      "Code, content, and documents are reviewed automatically before they reach your team, saving hours every week.",
    image: "/automated-reviews.svg",
  },
  {
    step: "Feature 04",
    title: "Tool Integrations",
    content:
      "Connect Slack, GitHub, Notion, Jira, and 100+ more. Torvion works inside the tools your team already loves.",
    image: "/tool-integrations.svg",
  },
  {
    step: "Feature 05",
    title: "Natural Language Control",
    content:
      "Describe what you need in plain English. No complex configuration — just tell Torvion what to do.",
    image: "/natural-language-control.svg",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-cream-2 py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="mb-4 flex justify-center">
          <span
            className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-brand"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
          >
            Features
          </span>
        </div>
      </div>
      <FeatureSteps
        features={features}
        title="Where Intelligence Works"
        autoPlayInterval={4000}
      />
    </section>
  );
}
