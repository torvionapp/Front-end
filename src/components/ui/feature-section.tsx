import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  autoPlayInterval?: number;
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="mx-auto w-full max-w-7xl">
        <h2
          className="mb-10 text-center text-3xl font-bold text-ink md:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:items-start md:gap-10">

          {/* Steps list */}
          <div className="order-2 space-y-6 md:order-1">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex cursor-pointer items-start gap-5"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.35 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setCurrentFeature(index);
                  setProgress(0);
                }}
              >
                <motion.div
                  className={cn(
                    "mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-all",
                    index === currentFeature
                      ? "scale-110 border-brand bg-brand text-white"
                      : index < currentFeature
                      ? "border-brand bg-brand/20 text-brand"
                      : "border-ink/20 bg-cream-2 text-ink/50",
                  )}
                >
                  {index < currentFeature ? "✓" : index + 1}
                </motion.div>

                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-ink md:text-xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {feature.title || feature.step}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60 md:text-base">
                    {feature.content}
                  </p>
                  {index === currentFeature && (
                    <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-brand/10">
                      <motion.div
                        className="h-full rounded-full bg-brand"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image panel — sticky so it stays visible alongside all steps */}
          <div className="order-1 w-full md:w-auto self-start md:order-2 md:sticky md:top-24">
            <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden rounded-2xl md:h-[480px] lg:h-[560px]">
              <AnimatePresence mode="wait">
                {features.map((feature, index) =>
                  index === currentFeature ? (
                    <motion.div
                      key={index}
                      className="absolute inset-0 overflow-hidden rounded-2xl"
                      initial={{ y: 60, opacity: 0, rotateX: -10 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -60, opacity: 0, rotateX: 10 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
