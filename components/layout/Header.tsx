"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { TopBar } from "./TopBar";
import { Button } from "@/components/ui/Button";
import { megaMenu, navLinks, contactInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const dotColors = ["#097D7A", "#FD8B15", "#ED0F7D"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expertisesOpen, setExpertisesOpen] = useState(false);
  const pathname = usePathname();
  const expertiseHrefs = megaMenu.flatMap((c) => c.children.map((x) => x.href));
  const isExpertiseActive = expertiseHrefs.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <TopBar />
      <div
        className={cn(
          "w-full bg-white transition-shadow duration-300",
          scrolled ? "shadow-md" : "shadow-sm"
        )}
      >
        <div className="container-narrow flex h-20 items-center justify-between gap-6">
          <Link href="/" className="shrink-0" aria-label="SY&CO accueil">
            <Image
              src="/images/logo2.png"
              alt="SY&CO"
              width={190}
              height={64}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            <div className="group relative">
              <button
                className={cn(
                  "flex items-center gap-1 rounded-full px-3 py-2 font-heading text-[15px] font-bold transition-colors",
                  isExpertiseActive ? "text-teal" : "text-ink group-hover:text-teal"
                )}
              >
                Nos expertises
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              {/* Mega menu */}
              <div className="invisible absolute left-1/2 top-full z-50 w-[760px] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-3 gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-2xl">
                  {megaMenu.map((col, ci) => (
                    <div key={col.title}>
                      <h4 className="mb-3 flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wide text-teal">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: dotColors[ci % dotColors.length] }}
                        />
                        {col.title}
                      </h4>
                      <ul className="space-y-1">
                        {col.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className={cn(
                                "block rounded-xl px-3 py-2 text-sm leading-snug transition-colors hover:bg-teal/5 hover:text-teal",
                                pathname === child.href
                                  ? "bg-teal/5 font-semibold text-teal"
                                  : "text-ink/80"
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3 py-2 font-heading text-[15px] font-bold transition-colors after:absolute after:bottom-1 after:left-3 after:h-0.5 after:rounded-full after:bg-orange after:transition-all after:duration-300 hover:text-teal",
                    active
                      ? "text-teal after:w-[calc(100%-1.5rem)]"
                      : "text-ink after:w-0 hover:after:w-[calc(100%-1.5rem)]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
              className="ml-2 flex items-center gap-2 rounded-full border border-teal/20 px-3 py-2 text-sm font-semibold text-teal transition-colors hover:bg-teal/5"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{contactInfo.phone}</span>
            </a>

            <Button href="/contact" variant="pink" size="sm" className="ml-1">
              Contact
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            aria-label="Ouvrir le menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-7 w-7 text-teal" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-white p-6 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <Image
                  src="/images/logo2.png"
                  alt="SY&CO"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
                <button
                  aria-label="Fermer le menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-7 w-7 text-teal" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 overflow-y-auto">
                <button
                  className="flex items-center justify-between py-3 font-heading text-lg font-bold text-ink"
                  onClick={() => setExpertisesOpen((v) => !v)}
                >
                  Nos expertises
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      expertisesOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {expertisesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3"
                    >
                      {megaMenu.map((col) => (
                        <div key={col.title} className="mb-3">
                          <p className="mb-1 text-xs font-bold uppercase text-teal">
                            {col.title}
                          </p>
                          {col.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-1 text-sm text-ink/80"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-t border-black/5 py-3 font-heading text-lg font-bold text-ink"
                  >
                    {link.label}
                  </Link>
                ))}

                <Button
                  href="/contact"
                  variant="pink"
                  className="mt-4"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
