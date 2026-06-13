import Link from "next/link";
import { CalendarDays, Phone, ShoppingBag } from "lucide-react";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

export function SocialProofBanner() {
  return (
    <section className="relative overflow-hidden bg-turmeric-300 py-20">
      {/* Decorative arch pattern */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="arch" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 5 Q80 5 80 40 L80 95 L20 95 L20 40 Q20 5 50 5Z"
              fill="none" stroke="#0a2e22" strokeWidth="1.5"/>
            <circle cx="50" cy="35" r="8" fill="none" stroke="#0a2e22" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arch)"/>
      </svg>

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.28em] text-forest-700/70">
            Ready to dine?
          </p>
          <h2
            className="font-display font-bold leading-tight text-forest-900"
            style={{ fontSize: "clamp(2.5rem,6vw,4rem)" }}
          >
            Taste the Deccan — tonight.
          </h2>
          <p className="mt-4 text-lg text-forest-700/80">
            Dine in, click & collect, or order delivery. Open 7 days.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={RESTAURANT_CONFIG.orderingLink} target="_blank" rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-forest-900 px-8 text-sm font-black text-white transition hover:bg-forest-700 hover:scale-105">
              <ShoppingBag className="h-4 w-4" aria-hidden/> Order Online
            </a>
            <Link href="/reserve"
              className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-forest-900/40 px-8 text-sm font-black text-forest-900 transition hover:bg-forest-900 hover:text-white">
              <CalendarDays className="h-4 w-4" aria-hidden/> Reserve a Table
            </Link>
            <a href={`tel:${RESTAURANT_CONFIG.phone.replace(/\s/g,"")}`}
              className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-forest-900/40 px-8 text-sm font-black text-forest-900 transition hover:bg-forest-900 hover:text-white">
              <Phone className="h-4 w-4" aria-hidden/> {RESTAURANT_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
