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
    <header className="sticky top-0 z-40 bg-forest-900 text-white shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
      <div className="container flex min-h-[4.5rem] items-center justify-between gap-3">

        {/* Logo */}
        <Link href="/" aria-label="Deccan Flavours home" className="shrink-0">
          <DeccanFlavoursLogo tone="dark" showSuburb />
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden items-center xl:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-[13px] font-semibold text-white/75 transition-colors hover:text-white",
                pathname === link.href && "text-turmeric-300",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <a
            href={`tel:${RESTAURANT_CONFIG.phone.replace(/\s/g, "")}`}
            title={RESTAURANT_CONFIG.phone}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-turmeric-300/40 text-turmeric-300 transition hover:bg-turmeric-300 hover:text-forest-900"
          >
            <Phone aria-hidden className="h-4 w-4" />
            <span className="sr-only">Call {RESTAURANT_CONFIG.phone}</span>
          </a>
          <Link
            href="/order"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-turmeric-300 px-4 text-sm font-black text-forest-900 transition hover:bg-white"
          >
            <ShoppingBag aria-hidden className="h-4 w-4" />
            Order Now
          </Link>
        </div>

        {/* Tablet: show just the two CTAs */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:hidden">
          <a
            href={`tel:${RESTAURANT_CONFIG.phone.replace(/\s/g, "")}`}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-turmeric-300/40 px-3 text-sm font-semibold text-turmeric-200 transition hover:bg-turmeric-300 hover:text-forest-900"
          >
            <Phone aria-hidden className="h-4 w-4" />
            Call
          </a>
          <Link
            href="/order"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-turmeric-300 px-4 text-sm font-black text-forest-900 transition hover:bg-white"
          >
            <ShoppingBag aria-hidden className="h-4 w-4" />
            Order
          </Link>
        </div>

        {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-forest-900 lg:hidden">
          <nav className="container grid gap-0.5 py-3" aria-label="Mobile navigation">
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
              <Link
                href="/reserve"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-3 py-3 text-sm font-bold"
              >
                <CalendarDays aria-hidden className="h-4 w-4" />
                Reserve
              </Link>
              <a
                href={RESTAURANT_CONFIG.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-3 py-3 text-sm font-bold"
              >
                <MapPin aria-hidden className="h-4 w-4" />
                Directions
              </a>
            </div>
            <a
              href={`tel:${RESTAURANT_CONFIG.phone.replace(/\s/g, "")}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-turmeric-300 py-3 text-sm font-black text-forest-900"
            >
              <Phone aria-hidden className="h-4 w-4" />
              {RESTAURANT_CONFIG.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
