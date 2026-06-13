"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, ChevronDown, MapPin, ShoppingBag, Star, Utensils } from "lucide-react";

import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { formatHeroReviewSummary } from "@/lib/review-summary";
import type { ReviewsResult } from "@/lib/reviews";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection({ hasHeroVideo, reviews }: { hasHeroVideo: boolean; reviews: ReviewsResult }) {
  const reviewSummary = formatHeroReviewSummary(reviews);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink text-white">
      {/* Background media */}
      <div className="absolute inset-0">
        {hasHeroVideo ? (
          <video
            className="h-full w-full object-cover"
            src={RESTAURANT_CONFIG.heroVideo}
            poster={RESTAURANT_CONFIG.heroImage}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
          />
        ) : (
          <Image
            src={RESTAURANT_CONFIG.heroImage}
            alt="Authentic South Indian cuisine at Deccan Flavours"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/30 via-forest-900/60 to-ink" />
      </div>

      {/* Centered content */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-4 py-24 text-center"
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.12 }}
      >
        {/* Badge */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-turmeric-300/60 bg-forest-900/50 px-5 py-2.5 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-turmeric-300" aria-hidden />
          <span className="text-xs font-black uppercase tracking-[0.22em] text-turmeric-300">
            EST. {RESTAURANT_CONFIG.establishedYear} · HALAL · WENTWORTHVILLE
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="font-display font-bold leading-[0.88] text-white"
          style={{ fontSize: "clamp(4rem,12vw,10rem)" }}
        >
          Deccan
        </motion.h1>
        <motion.div
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="font-display font-bold leading-[0.88] text-turmeric-300"
          style={{ fontSize: "clamp(4rem,12vw,10rem)" }}
        >
          Flavours
        </motion.div>

        {/* Gold divider */}
        <motion.hr
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="my-6 w-24 border-turmeric-300/50"
          aria-hidden
        />

        {/* Subtext */}
        <motion.p
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-lg leading-8 text-white/75"
        >
          Experience the rich culinary heritage of the Deccan Plateau — authentic biryanis, slow-cooked curries, and timeless recipes brought to Wentworthville.
        </motion.p>

        {/* Rating badge */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/12 bg-black/30 px-5 py-3 text-sm font-bold text-white backdrop-blur"
          aria-label={reviewSummary.ariaLabel}
        >
          <span className="inline-flex items-center gap-1.5 text-turmeric-300">
            <Star aria-hidden className="h-4 w-4 fill-current" />
            {reviewSummary.ratingLabel}
          </span>
          <span className="h-4 w-px bg-white/20" aria-hidden />
          <span className="text-white/80">{reviewSummary.countLabel} {reviewSummary.sourceLabel}</span>
          <span className="rounded-full bg-forest-500/90 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-white">
            Halal Certified
          </span>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <a
            href={RESTAURANT_CONFIG.orderingLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-turmeric-300 px-6 py-3 text-sm font-black text-forest-900 transition hover:bg-white"
          >
            <ShoppingBag aria-hidden className="h-4 w-4" />
            Order Online
          </a>
          <a
            href={RESTAURANT_CONFIG.reservationLink}
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-black text-white transition hover:border-turmeric-300 hover:text-turmeric-300"
          >
            <CalendarDays aria-hidden className="h-4 w-4" />
            Reserve a Table
          </a>
          <a
            href="/menu"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-black text-white transition hover:border-turmeric-300 hover:text-turmeric-300"
          >
            <Utensils aria-hidden className="h-4 w-4" />
            View Menu
          </a>
        </motion.div>
      </motion.div>

      {/* Address — bottom left */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        href={RESTAURANT_CONFIG.googleMapsLink}
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-8 left-6 z-10 inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-turmeric-300 md:left-10"
      >
        <MapPin aria-hidden className="h-4 w-4 shrink-0" />
        {RESTAURANT_CONFIG.address}
      </motion.a>

      {/* Scroll indicator — bottom center */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden
      >
        <ChevronDown className="h-6 w-6 text-white/40" />
      </motion.div>
    </section>
  );
}
