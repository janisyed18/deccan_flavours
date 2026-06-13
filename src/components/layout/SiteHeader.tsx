"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, MapPin, Menu, Phone, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

import { DeccanFlavoursLogo } from "@/components/brand/DeccanFlavoursLogo";
import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order" },
  { href: "/reserve", label: "Reserve" },
  { href: "/catering", label: "Catering" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-forest-900/96 text-white shadow-[0_4px_24px_rgba(0,0,0,0.28)] backdrop-blur">
      <div className="container flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="group" aria-label="Deccan Flavours home">
          <DeccanFlavoursLogo tone="dark" />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white",
                pathname === link.href && "bg-turmeric-300/15 text-turmeric-300",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${RESTAURANT_CONFIG.phone.replace(/\s/g, "")}`}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-turmeric-300/50 px-4 text-sm font-bold text-turmeric-200 transition hover:bg-turmeric-300 hover:text-forest-900"
          >
            <Phone aria-hidden className="h-4 w-4" />
            {RESTAURANT_CONFIG.phone}
          </a>
          <Link
            href="/order"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-turmeric-300 px-5 text-sm font-black text-forest-900 transition hover:bg-white"
          >
            <ShoppingBag aria-hidden className="h-4 w-4" />
            Order Now
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-grid h-10 w-10 place-items-center rounded-full border border-white/20 lg:hidden"
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-forest-900 lg:hidden">
          <nav className="container grid gap-1 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-semibold",
                  pathname === link.href ? "bg-turmeric-300/15 text-turmeric-300" : "text-white/85",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-3">
              <Link href="/reserve" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-3 py-3 font-bold">
                <CalendarDays aria-hidden className="h-4 w-4" />
                Reserve
              </Link>
              <a
                href={RESTAURANT_CONFIG.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-3 py-3 font-bold"
              >
                <MapPin aria-hidden className="h-4 w-4" />
                Map
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
