"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendarDays, MapPin, Menu, Phone, ShoppingBag, X } from "lucide-react";

import { DeccanFlavoursLogo } from "@/components/brand/DeccanFlavoursLogo";
import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/menu",      label: "Menu" },
  { href: "/order",     label: "Order" },
  { href: "/reserve",   label: "Reserve" },
  { href: "/catering",  label: "Catering" },
  { href: "/about",     label: "About" },
  { href: "/contact",   label: "Contact" },
];

export function SiteHeader() {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isHome && !scrolled && !open
          ? "bg-gradient-to-b from-forest-900/90 via-forest-900/40 to-transparent backdrop-blur-sm"
          : "bg-forest-900/98 shadow-[0_2px_24px_rgba(0,0,0,0.4)] backdrop-blur",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" aria-label="Deccan Flavours home" className="shrink-0">
          <DeccanFlavoursLogo tone="dark" showSuburb={false} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-1.5 text-[13px] font-semibold transition-colors",
                pathname === link.href
                  ? "bg-white/15 text-white"
                  : "text-white/70 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <a
            href={`tel:${RESTAURANT_CONFIG.phone.replace(/\s/g, "")}`}
            title={RESTAURANT_CONFIG.phone}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/70 transition hover:border-turmeric-300 hover:text-turmeric-300"
          >
            <Phone aria-hidden className="h-4 w-4" />
            <span className="sr-only">Call us</span>
          </a>
          <Link
            href="/order"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-turmeric-300 px-5 text-[13px] font-black text-forest-900 transition hover:bg-white"
          >
            <ShoppingBag aria-hidden className="h-3.5 w-3.5" />
            Order Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/10 bg-forest-900 lg:hidden">
          <nav className="container grid gap-0.5 py-3">
            <Link href="/" onClick={() => setOpen(false)} className={cn("rounded-xl px-4 py-3 text-sm font-semibold", pathname === "/" ? "bg-white/10 text-turmeric-300" : "text-white/80")}>Home</Link>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                className={cn("rounded-xl px-4 py-3 text-sm font-semibold", pathname === link.href ? "bg-white/10 text-turmeric-300" : "text-white/80")}>
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link href="/reserve" onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-white/10 py-3 text-sm font-bold text-white">
                <CalendarDays className="h-4 w-4" /> Reserve
              </Link>
              <a href={RESTAURANT_CONFIG.googleMapsLink} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-white/10 py-3 text-sm font-bold text-white">
                <MapPin className="h-4 w-4" /> Map
              </a>
            </div>
            <a href={`tel:${RESTAURANT_CONFIG.phone.replace(/\s/g, "")}`}
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-turmeric-300 py-3 text-sm font-black text-forest-900">
              <Phone className="h-4 w-4" /> {RESTAURANT_CONFIG.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
