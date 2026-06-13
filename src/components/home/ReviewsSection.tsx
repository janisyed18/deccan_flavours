import Image from "next/image";
import { Star } from "lucide-react";

import { getReviews } from "@/lib/reviews";
import type { ReviewsResult } from "@/lib/reviews";

export async function ReviewsSection({ reviews: initialReviews }: { reviews?: ReviewsResult }) {
  const reviews = initialReviews ?? (await getReviews());

  // Split into two rows for marquee
  const half = Math.ceil(reviews.reviews.length / 2);
  const row1 = [...reviews.reviews.slice(0, half), ...reviews.reviews.slice(0, half)];
  const row2 = [...reviews.reviews.slice(half),    ...reviews.reviews.slice(half)];

  return (
    <section className="bg-ink py-24 text-white overflow-hidden">
      <div className="container mb-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-turmeric-300">
              Google Reviews
            </p>
            <div className="flex items-baseline gap-3">
              <span
                className="font-black leading-none text-turmeric-300"
                style={{ fontSize: "clamp(4rem,10vw,7rem)" }}
              >
                {reviews.rating.toFixed(1)}
              </span>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} aria-hidden className={`h-5 w-5 ${i < Math.round(reviews.rating) ? "fill-turmeric-300 text-turmeric-300" : "text-white/20"}`} />
                  ))}
                </div>
                <p className="mt-1 text-sm text-white/50">
                  {reviews.totalReviews.toLocaleString()}+ verified Google reviews
                </p>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-5 py-2.5 text-sm font-bold text-white/60 lg:self-auto">
            <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-turmeric-300">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Verified on Google
          </div>
        </div>
      </div>

      {/* ── Marquee row 1 (left) ── */}
      <div className="mb-4 flex w-max animate-marquee-slow gap-4 px-0">
        {row1.map((review, i) => (
          <ReviewCard key={`r1-${i}`} review={review} />
        ))}
      </div>

      {/* ── Marquee row 2 (right) ── */}
      <div className="flex w-max animate-marquee-reverse gap-4">
        {row2.length > 0 ? row2.map((review, i) => (
          <ReviewCard key={`r2-${i}`} review={review} />
        )) : row1.map((review, i) => (
          <ReviewCard key={`r2-fallback-${i}`} review={review} />
        ))}
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: ReviewsResult["reviews"][number] }) {
  return (
    <article className="w-[320px] shrink-0 rounded-2xl border border-white/10 bg-white/[0.05] p-6">
      <div
        className="mb-2 font-display leading-none text-turmeric-300/30 select-none"
        style={{ fontSize: "3.5rem" }}
        aria-hidden
      >
        &ldquo;
      </div>
      <p className="text-sm italic leading-6 text-white/70 line-clamp-4">{review.text}</p>
      <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
        {review.profilePhotoUrl ? (
          <Image src={review.profilePhotoUrl} alt="" width={36} height={36} className="rounded-full" />
        ) : (
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest-700 text-sm font-black text-turmeric-300">
            {review.authorName.slice(0, 1)}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-black text-white">{review.authorName}</p>
          <p className="text-[11px] text-white/35">{review.relativeTimeDescription}</p>
        </div>
        <div className="flex shrink-0 gap-0.5 text-turmeric-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} aria-hidden className={`h-3 w-3 ${i < review.rating ? "fill-current" : "text-white/15"}`} />
          ))}
        </div>
      </div>
    </article>
  );
}
