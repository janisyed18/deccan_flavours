import Link from "next/link";
import { ArrowUp, Camera, Mail, MapPin, Phone, Share2 } from "lucide-react";

import { DeccanFlavoursLogo } from "@/components/brand/DeccanFlavoursLogo";
import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { formatTime } from "@/lib/hours";

const footerLinks = [
  ["Menu", "/menu"],
  ["Order Online", "/order"],
  ["Reserve", "/reserve"],
  ["Catering", "/catering"],
  ["Allergens", "/allergens"],
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Privacy Policy", "/privacy"],
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* Pre-footer CTA strip */}
      <div className="border-b border-white/8 bg-forest-900">
        <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/55">
            Authentic Deccan cuisine · 100% Halal · Open 7 days
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={RESTAURANT_CONFIG.orderingLink} target="_blank" rel="noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-turmeric-300 px-5 text-xs font-black text-forest-900 transition hover:bg-white">
              Order Online
            </a>
            <Link href="/reserve"
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-white/20 px-5 text-xs font-black text-white/80 transition hover:border-turmeric-300 hover:text-turmeric-300">
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="container grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <DeccanFlavoursLogo className="mb-5" showSuburb={false} tone="dark" />
          <p className="max-w-xs text-sm leading-6 text-white/55">{RESTAURANT_CONFIG.tagline}</p>
          <div className="mt-6 flex gap-2">
            {[
              { href: RESTAURANT_CONFIG.social.facebook, label: "Facebook", Icon: Share2 },
              { href: RESTAURANT_CONFIG.social.instagram, label: "Instagram", Icon: Camera },
            ].map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Deccan Flavours on ${label}`}
                className="grid h-9 w-9 place-items-center rounded-xl border border-white/12 text-white/60 transition hover:border-turmeric-300/60 hover:text-turmeric-300">
                <Icon aria-hidden className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Visit */}
        <div>
          <h2 className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-turmeric-300">Visit</h2>
          <address className="not-italic space-y-3 text-sm text-white/60">
            <a href={RESTAURANT_CONFIG.googleMapsLink} target="_blank" rel="noreferrer"
              className="flex gap-2.5 hover:text-turmeric-300">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turmeric-300/70" aria-hidden />
              {RESTAURANT_CONFIG.address}
            </a>
            <a href={`tel:${RESTAURANT_CONFIG.phone.replace(/\s/g,"")}`}
              className="flex gap-2.5 hover:text-turmeric-300">
              <Phone className="h-4 w-4 shrink-0 text-turmeric-300/70" aria-hidden />
              {RESTAURANT_CONFIG.phone}
            </a>
            <a href={`mailto:${RESTAURANT_CONFIG.email}`}
              className="flex gap-2.5 hover:text-turmeric-300">
              <Mail className="h-4 w-4 shrink-0 text-turmeric-300/70" aria-hidden />
              {RESTAURANT_CONFIG.email}
            </a>
          </address>
        </div>

        {/* Hours */}
        <div>
          <h2 className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-turmeric-300">Hours</h2>
          <dl className="space-y-2 text-sm text-white/60">
            {Object.entries(RESTAURANT_CONFIG.hours).map(([day, h]) => (
              <div key={day} className="flex justify-between gap-4">
                <dt className="capitalize">{day}</dt>
                <dd className="tabular-nums">{formatTime(h.open)} – {formatTime(h.close)}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Links */}
        <div>
          <h2 className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-turmeric-300">Explore</h2>
          <nav className="grid gap-2.5 text-sm" aria-label="Footer navigation">
            {footerLinks.map(([label, href]) => (
              <Link key={href} href={href}
                className="text-white/60 transition hover:text-turmeric-300">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container flex flex-col gap-2 py-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Deccan Flavours Wentworthville. ABN available on request.</p>
          <a href="#main-content" className="inline-flex items-center gap-1.5 text-turmeric-300/70 hover:text-turmeric-300">
            Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
