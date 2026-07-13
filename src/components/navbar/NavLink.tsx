import { motion } from "motion/react";
import { useCallback } from "react";

interface NavLinkProps {
  id: string;
  label: string;
  active: boolean;
  onNavigate?: () => void;
}

export function NavLink({ id, label, active, onNavigate }: NavLinkProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      onNavigate?.();
    },
    [id, onNavigate],
  );

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      aria-current={active ? "page" : undefined}
      className={`group relative inline-flex items-center px-1 py-2 text-[17px] font-medium tracking-tight transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm ${
        active ? "text-brand" : "text-ink hover:text-brand"
      }`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {label}
      <span className="pointer-events-none absolute inset-x-1 -bottom-0.5 h-0.5 overflow-hidden">
        <motion.span
          initial={false}
          animate={{ scaleX: active ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="block h-full origin-left rounded-full bg-brand"
        />
        <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-brand/60 transition-transform duration-300 group-hover:scale-x-100" />
      </span>
    </a>
  );
}
