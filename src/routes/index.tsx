import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PricingSectionDemo } from "@/components/ui/pricing";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground" style={{ fontFamily: "var(--font-body)" }}>
      <Navbar />
      <main className="pt-16 sm:pt-[72px]">
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <FeaturesSection />
        <section id="pricing" className="bg-cream py-24">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
            <PricingSectionDemo />
          </div>
        </section>
        <TestimonialSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}
