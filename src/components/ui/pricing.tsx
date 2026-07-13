import * as React from "react";
import { motion, useSpring } from "framer-motion";
import { Check, Star as LucideStar } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular?: boolean;
}

interface PricingSectionProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    const result = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => {
      setValue(event.matches);
    };

    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}

const PricingContext = React.createContext<{
  isMonthly: boolean;
  setIsMonthly: (value: boolean) => void;
}>({
  isMonthly: true,
  setIsMonthly: () => {},
});

export function PricingSection({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that's right for you. All plans include our core features and support.",
}: PricingSectionProps) {
  const [isMonthly, setIsMonthly] = React.useState(true);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = React.useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <PricingContext.Provider value={{ isMonthly, setIsMonthly }}>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: null, y: null })}
        className="relative w-full bg-background dark:bg-neutral-950 py-20 sm:py-24"
      >
        <InteractiveStarfield
          mousePosition={mousePosition}
          containerRef={containerRef}
        />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-brand">
              Pricing
            </span>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-neutral-900 dark:text-white">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg whitespace-pre-line">
              {description}
            </p>
          </div>
          <PricingToggle />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 items-start gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </div>
    </PricingContext.Provider>
  );
}

function Star({
  mousePosition,
  containerRef,
}: {
  mousePosition: { x: number | null; y: number | null };
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const [initialPos] = React.useState({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });

  const springConfig = { stiffness: 100, damping: 15, mass: 0.1 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  React.useEffect(() => {
    if (!containerRef.current || mousePosition.x === null || mousePosition.y === null) {
      springX.set(0);
      springY.set(0);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const starX =
      containerRect.left +
      (parseFloat(initialPos.left) / 100) * containerRect.width;
    const starY =
      containerRect.top +
      (parseFloat(initialPos.top) / 100) * containerRect.height;

    const deltaX = mousePosition.x - starX;
    const deltaY = mousePosition.y - starY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    const radius = 600;

    if (distance < radius) {
      const force = 1 - distance / radius;
      springX.set(deltaX * force * 0.5);
      springY.set(deltaY * force * 0.5);
    } else {
      springX.set(0);
      springY.set(0);
    }
  }, [mousePosition, initialPos, containerRef, springX, springY]);

  return (
    <motion.div
      className="absolute bg-foreground rounded-full"
      style={{
        top: initialPos.top,
        left: initialPos.left,
        width: `${1 + Math.random() * 2}px`,
        height: `${1 + Math.random() * 2}px`,
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 2 + Math.random() * 3,
        repeat: Infinity,
        delay: Math.random() * 5,
      }}
    />
  );
}

function InteractiveStarfield({
  mousePosition,
  containerRef,
}: {
  mousePosition: { x: number | null; y: number | null };
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {Array.from({ length: 150 }).map((_, i) => (
        <Star
          key={`star-${i}`}
          mousePosition={mousePosition}
          containerRef={containerRef}
        />
      ))}
    </div>
  );
}

function PricingToggle() {
  const { isMonthly, setIsMonthly } = React.useContext(PricingContext);
  const annualBtnRef = React.useRef<HTMLButtonElement>(null);
  const monthlyBtnRef = React.useRef<HTMLButtonElement>(null);
  const [pillStyle, setPillStyle] = React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    const btnRef = isMonthly ? monthlyBtnRef : annualBtnRef;
    if (btnRef.current) {
      setPillStyle({
        width: btnRef.current.offsetWidth,
        transform: `translateX(${btnRef.current.offsetLeft}px)`,
      });
    }
  }, [isMonthly]);

  const handleToggle = (monthly: boolean) => {
    if (isMonthly === monthly) return;
    setIsMonthly(monthly);

    if (!monthly) {
      const rect = annualBtnRef.current?.getBoundingClientRect();
      if (!rect) return;

      const originX = (rect.left + rect.width / 2) / window.innerWidth;
      const originY = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 80,
        spread: 80,
        origin: { x: originX, y: originY },
        colors: ["hsl(var(--primary))", "hsl(var(--background))", "hsl(var(--accent))"],
        ticks: 300,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="relative flex w-fit items-center rounded-full bg-muted p-1">
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full bg-primary p-1"
          style={pillStyle}
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
        />
        <button
          ref={monthlyBtnRef}
          onClick={() => handleToggle(true)}
          className={cn(
            "relative z-10 rounded-full px-4 sm:px-6 py-2 text-sm font-medium transition-colors",
            isMonthly ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          Monthly
        </button>
        <button
          ref={annualBtnRef}
          onClick={() => handleToggle(false)}
          className={cn(
            "relative z-10 rounded-full px-4 sm:px-6 py-2 text-sm font-medium transition-colors",
            !isMonthly ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          Annual
          <span className={cn("hidden sm:inline", !isMonthly ? "text-primary-foreground/80" : "")}> (Save 20%)</span>
        </button>
      </div>
    </div>
  );
}

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const { isMonthly } = React.useContext(PricingContext);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        y: plan.isPopular && isDesktop ? -20 : 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.15,
      }}
      className={cn(
        "rounded-2xl p-8 flex flex-col relative bg-background/70 backdrop-blur-sm",
        plan.isPopular ? "border-2 border-primary shadow-xl" : "border border-border",
      )}
    >
      {plan.isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <div className="bg-primary py-1.5 px-4 rounded-full flex items-center gap-1.5">
            <LucideStar className="text-primary-foreground h-4 w-4 fill-current" />
            <span className="text-primary-foreground text-sm font-semibold">Most Popular</span>
          </div>
        </div>
      )}
      <div className="flex-1 flex flex-col text-center">
        <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
        <div className="mt-6 flex items-baseline justify-center gap-x-1">
          <span className="text-5xl font-bold tracking-tight text-foreground">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            }).format(isMonthly ? Number(plan.price) : Number(plan.yearlyPrice))}
          </span>
          <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">/ {plan.period}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {isMonthly ? "Billed Monthly" : "Billed Annually"}
        </p>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-left text-muted-foreground">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-8">
          <Button asChild variant={plan.isPopular ? "default" : "outline"} size="lg" className="w-full">
            <a href={plan.href}>{plan.buttonText}</a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function PricingSectionDemo() {
  const demoPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: "129",
      yearlyPrice: "103",
      period: "month",
      features: [
        "Up to 10 projects",
        "Basic analytics",
        "48-hour support response time",
        "Limited API access",
        "Community support",
      ],
      description: "Perfect for individuals and small projects.",
      buttonText: "Start Free Trial",
      href: "#",
    },
    {
      name: "Professional",
      price: "219",
      yearlyPrice: "175",
      period: "month",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "24-hour support response time",
        "Full API access",
        "Priority support & Team collaboration",
      ],
      description: "Ideal for growing teams and businesses.",
      buttonText: "Get Started",
      href: "#",
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "319",
      yearlyPrice: "255",
      period: "month",
      features: [
        "Everything in Professional",
        "Custom solutions & integrations",
        "Dedicated account manager",
        "SSO Authentication & Advanced security",
      ],
      description: "For large organizations with specific needs.",
      buttonText: "Get started",
      href: "#",
    },
  ];

  return (
    <PricingSection
      plans={demoPlans}
      title="Plans Built to Scale"
      description="Select the ideal package for your needs and start building today."
    />
  );
}
