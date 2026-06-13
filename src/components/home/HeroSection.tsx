"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, ChevronDown, MapPin, ShoppingBag, Star, Utensils } from "lucide-react";

import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { formatHeroReviewSummary } from "@/lib/review-summary";
import type { ReviewsResult } from "@/lib/reviews";

const TICKER_ITEMS = [
  "BIRYANI", "HALAL CERTIFIED", "WENTWORTHVILLE",
  "AUTHENTIC DECCAN", "EST. 2015", "DINE IN & TAKEAWAY",
  "BIRYANI", "HALAL CERTIFIED", "WENTWORTHVILLE",
  "AUTHENTIC DECCAN", "EST. 2015", "DINE IN & TAKEAWAY",
];

export function HeroSection({ hasHeroVideo, reviews }: { hasHeroVideo: boolean; reviews: ReviewsResult }) {
  const summary = formatHeroReviewSummary(reviews);

  return (
    <section className="relative -mt-16 flex min-h-[100svh] flex-col overflow-hidden bg-ink text-white">
      {/* ── Background ── */}
      <div className="absolute inset-0">
        {hasHeroVideo ? (
          <video src={RESTAURANT_CONFIG.heroVideo} poster={RESTAURANT_CONFIG.heroImage}
            autoPlay muted loop playsInline aria-hidden className="h-full w-full object-cover" />
        ) : (
          <Image src={RESTAURANT_CONFIG.heroImage} alt="" fill priority sizes="100vw" className="object-cover" />
        )}
        {/* layered gradient: darkens bottom + adds forest tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/40 to-transparent" />
      </div>

      {/* ── Main content ── */}
      <div className="container relative z-10 flex flex-1 flex-col items-center justify-center pt-24 pb-28 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-turmeric-300/40 bg-white/5 px-5 py-2.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-turmeric-300 animate-pulse" />
          <span className="text-[11px] font-black uppercase tracking-[0.28em] text-turmeric-200">
            Est. 2015 · Halal · Wentworthville NSW
          </span>
        </motion.div>

        {/* Giant headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-display font-bold leading-[0.85] tracking-tight"
          style={{ fontSize: "clamp(4.5rem, 14vw, 11rem)" }}
        >
          <span className="block text-white">Deccan</span>
          <span className="block" style={{ WebkitTextStroke: "2px #f0c040", color: "transparent" }}>
            Flavours
          </span>
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="my-7 h-px w-32 bg-gradient-to-r from-transparent via-turmeric-300 to-transparent"
        />

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-lg text-lg leading-8 text-white/70"
        >
          {RESTAURANT_CONFIG.tagline}
        </motion.p>

        {/* Reviews pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-5 py-2.5 backdrop-blur-sm"
          aria-label={summary.ariaLabel}
        >
          <span className="flex items-center gap-1.5 text-turmeric-300">
            <Star className="h-4 w-4 fill-current" aria-hidden />
            <span className="font-black">{summary.ratingLabel}</span>
          </span>
          <span className="h-4 w-px bg-white/20" />
          <span className="text-sm text-white/70">{summary.countLabel} {summary.sourceLabel}</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <a href={RESTAURANT_CONFIG.orderingLink} target="_blank" rel="noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-turmeric-300 px-7 text-sm font-black text-forest-900 transition hover:bg-white hover:scale-105">
            <ShoppingBag className="h-4 w-4" aria-hidden /> Order Online
          </a>
          <Link href="/reserve"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 px-7 text-sm font-black text-white backdrop-blur-sm transition hover:bg-white/10 hover:border-white/60">
            <CalendarDays className="h-4 w-4" aria-hidden /> Reserve
          </Link>
          <Link href="/menu"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 px-7 text-sm font-black text-white backdrop-blur-sm transition hover:bg-white/10 hover:border-white/60">
            <Utensils className="h-4 w-4" aria-hidden /> Menu
          </Link>
        </motion.div>

        {/* Address */}
        <motion.a
          href={RESTAURANT_CONFIG.googleMapsLink} target="_blank" rel="noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-turmeric-300"
        >
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          {RESTAURANT_CONFIG.address}
        </motion.a>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="h-6 w-6 text-white/40" aria-hidden />
      </motion.div>

      {/* ── Ticker strip ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/10 bg-black/40 py-3 backdrop-blur-sm">
        <div className="flex w-max animate-marquee gap-0 whitespace-nowrap">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="flex items-center gap-5 px-5 text-[11px] font-black uppercase tracking-[0.22em] text-white/50">
              {item}
              <span className="text-turmeric-300/60" aria-hidden>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
