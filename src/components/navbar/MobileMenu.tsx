import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";

export interface NavItem {
  id: string;
  label: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  activeId: string;
}

export function MobileMenu({ open, onClose, items, activeId }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] bg-ink/30 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        >
          <motion.aside
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="ml-auto flex h-dvh w-[86%] max-w-sm flex-col bg-cream shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span
                className="text-lg font-semibold text-brand"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Torvion
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-brand/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                <FiX className="size-6" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col px-4">
              <ul className="flex flex-col">
                {items.map((item) => {
                  const active = item.id === activeId;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => go(item.id)}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-4 text-left text-lg transition-colors ${
                          active
                            ? "bg-brand/10 text-brand"
                            : "text-ink hover:bg-brand/5 hover:text-brand"
                        }`}
                        style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
                      >
                        {item.label}
                        {active && (
                          <span className="ml-3 h-2 w-2 rounded-full bg-brand" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="my-6 h-px bg-ink/10" />

              <div className="flex flex-col gap-3 px-2 pb-6">
                <button
                  onClick={onClose}
                  className="h-12 w-full rounded-full bg-brand text-base text-white shadow-lg shadow-brand/25 transition-transform hover:scale-[1.02] hover:bg-[#E85F14]"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                >
                  TorvionX
                </button>
              </div>
            </nav>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
