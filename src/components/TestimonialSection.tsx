import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import w1 from "@/w1.svg";
import w2 from "@/w2.svg";
import w3 from "@/w3.svg";
import m1 from "@/m1.svg";
import m2 from "@/m2.svg";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Margaret Bennett",
    designation: "Product Manager at TechFlow",
    src: w1,
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Claire Whitfield",
    designation: "CTO at InnovateSphere",
    src: w2,
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Amara Osei",
    designation: "Operations Director at CloudScale",
    src: w3,
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "Ethan Caldwell",
    designation: "Engineering Lead at DataPro",
    src: m1,
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Ryan Ashford",
    designation: "VP of Technology at FutureNet",
    src: m2,
  },
];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="bg-cream-2 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-brand">
            Testimonials
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Trusted by High-Performing Teams
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-ink/70">
            Real feedback from teams who’ve scaled faster with our product.
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
}
