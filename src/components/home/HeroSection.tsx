"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, ClipboardList, MapPin, Phone, ShoppingBag, Star, Utensils } from "lucide-react";

import { ButtonLink } from "@/components/ui";
import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { formatHeroReviewSummary } from "@/lib/review-summary";
import type { ReviewsResult } from "@/lib/reviews";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection({ hasHeroVideo, reviews }: { hasHeroVideo: boolean; reviews: ReviewsResult }) {
  const reviewSummary = formatHeroReviewSummary(reviews);

  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-ink text-white">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-forest-900/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="container relative flex min-h-[calc(100svh-4rem)] items-center py-16">
        <motion.div
          className="max-w-2xl"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div
            variants={fadeIn}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-turmeric-300/40 bg-forest-900/40 px-5 py-2.5 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-turmeric-300" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-turmeric-200">
              South Indian · Halal · Wentworthville NSW
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="font-display text-6xl font-bold leading-[0.92] text-white md:text-8xl"
          >
            Deccan
          </motion.h1>
          <motion.h1
            variants={fadeIn}
            className="font-display text-6xl font-bold leading-[0.92] text-turmeric-300 md:text-8xl"
          >
            Flavours
          </motion.h1>

          <motion.p variants={fadeIn} className="mt-6 max-w-xl text-lg leading-8 text-white/78">
            Experience the rich culinary heritage of the Deccan Plateau — authentic biryanis, slow-cooked curries, and timeless Deccan recipes, brought to Wentworthville.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="mt-5 inline-flex flex-wrap items-center gap-3 rounded-xl border border-white/12 bg-black/30 px-4 py-3 text-sm font-bold text-white shadow-2xl shadow-black/20 backdrop-blur"
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

          <motion.div variants={fadeIn} className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={RESTAURANT_CONFIG.orderingLink} icon={ShoppingBag} external>
              Order Online
            </ButtonLink>
            <ButtonLink href="/reserve" icon={CalendarDays} variant="outline">
              Reserve a Table
            </ButtonLink>
            <ButtonLink href="/menu" icon={Utensils} variant="outline">
              View Menu
            </ButtonLink>
            <ButtonLink href={`tel:${RESTAURANT_CONFIG.phone.replace(/\s/g, "")}`} icon={Phone} variant="outline">
              Call Us
            </ButtonLink>
            <ButtonLink href="/order" icon={ClipboardList} variant="outline">
              Click & Collect
            </ButtonLink>
          </motion.div>

          <motion.a
            variants={fadeIn}
            href={RESTAURANT_CONFIG.googleMapsLink}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition hover:text-turmeric-300"
          >
            <MapPin aria-hidden className="h-4 w-4 shrink-0" />
            {RESTAURANT_CONFIG.address}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
