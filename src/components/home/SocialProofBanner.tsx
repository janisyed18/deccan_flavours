import { CalendarDays, ShoppingBag } from "lucide-react";

import { RESTAURANT_CONFIG } from "@/config/restaurant";

export function SocialProofBanner() {
  return (
    <section className="relative overflow-hidden bg-turmeric-300 py-16">
      {/* Decorative SVG lotus pattern */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="lotus-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="60" cy="60" r="28" fill="none" stroke="#0a2e22" strokeWidth="1.5" />
            <circle cx="60" cy="60" r="16" fill="none" stroke="#0a2e22" strokeWidth="1" />
            <circle cx="60" cy="60" r="6" fill="#0a2e22" opacity="0.4" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <line
                key={deg}
                x1="60"
                y1="60"
                x2={60 + 28 * Math.cos((deg * Math.PI) / 180)}
                y2={60 + 28 * Math.sin((deg * Math.PI) / 180)}
                stroke="#0a2e22"
                strokeWidth="0.75"
                opacity="0.5"
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lotus-pattern)" />
      </svg>

      <div className="container relative z-10 flex flex-col items-center text-center">
        <h2 className="font-display text-5xl font-bold leading-tight text-forest-900 md:text-6xl">
          Ready to taste the Deccan?
        </h2>
        <p className="mt-4 max-w-xl text-lg text-forest-700">
          {RESTAURANT_CONFIG.tagline}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={RESTAURANT_CONFIG.orderingLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-forest-900 px-7 py-3 text-sm font-black text-white transition hover:bg-forest-700"
          >
            <ShoppingBag aria-hidden className="h-4 w-4" />
            Order Online
          </a>
          <a
            href={RESTAURANT_CONFIG.reservationLink}
            className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-forest-900 px-7 py-3 text-sm font-black text-forest-900 transition hover:bg-forest-900 hover:text-white"
          >
            <CalendarDays aria-hidden className="h-4 w-4" />
            Reserve a Table
          </a>
        </div>
      </div>
    </section>
  );
}
