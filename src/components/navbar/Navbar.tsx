import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useCallback, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

import { useActiveSection } from "@/hooks/useActiveSection";

import { MobileMenu, type NavItem } from "./MobileMenu";
import { NavLink } from "./NavLink";

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((i) => i.id));
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 80);
  });

  const scrollToTop = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(245, 231, 198, 0.9)" : "rgba(245, 231, 198, 0)",
          borderColor: scrolled ? "rgba(34, 34, 34, 0.1)" : "rgba(34, 34, 34, 0)",
          boxShadow: scrolled
            ? "0 10px 30px -18px rgba(34, 34, 34, 0.25)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[80] border-b backdrop-blur-${scrolled ? "xl" : "none"}`}
        style={{ backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "none" }}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={scrollToTop}
            aria-label="Torvion home"
            className="flex items-center"
          >
            <img
              src="/logo.svg"
              alt="Torvion"
              className="h-10 w-auto"
            />
          </a>

          {/* Center menu — desktop/laptop only */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex lg:items-center lg:gap-1 xl:gap-2"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                id={item.id}
                label={item.label}
                active={activeId === item.id}
              />
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/Product"
              className="inline-flex h-10 items-center rounded-full bg-brand px-5 text-sm text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.04] hover:bg-[#E85F14] hover:shadow-xl hover:shadow-brand/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
            >
              TorvionX
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-brand/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 lg:hidden"
            >
              <FiMenu className="size-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={NAV_ITEMS}
        activeId={activeId}
      />
    </>
  );
}
