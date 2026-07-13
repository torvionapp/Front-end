import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps {
  className?: string;
  children?: React.ReactNode;
}

interface MarqueeContentProps {
  className?: string;
  children?: React.ReactNode;
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

interface MarqueeFadeProps {
  side: "left" | "right";
  className?: string;
}

interface MarqueeItemProps {
  className?: string;
  children?: React.ReactNode;
}

export function Marquee({ className, children }: MarqueeProps) {
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      {children}
    </div>
  );
}

export function MarqueeContent({
  className,
  children,
  speed = 40,
  reverse = false,
  pauseOnHover = false,
}: MarqueeContentProps) {
  return (
    <div
      className={cn("flex w-full overflow-hidden", className)}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex min-w-full shrink-0 items-center justify-around",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

export function MarqueeFade({ side, className }: MarqueeFadeProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-y-0 z-10 w-24",
        side === "left"
          ? "left-0 bg-gradient-to-r from-cream to-transparent"
          : "right-0 bg-gradient-to-l from-cream to-transparent",
        className,
      )}
    />
  );
}

export function MarqueeItem({ className, children }: MarqueeItemProps) {
  return (
    <div className={cn("flex shrink-0 items-center", className)}>
      {children}
    </div>
  );
}
