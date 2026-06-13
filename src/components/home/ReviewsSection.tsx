import Image from "next/image";
import { Star } from "lucide-react";

import { getReviews } from "@/lib/reviews";
import type { ReviewsResult } from "@/lib/reviews";

export async function ReviewsSection({ reviews: initialReviews }: { reviews?: ReviewsResult }) {
  const reviews = initialReviews ?? (await getReviews());

  return (
    <section className="bg-ink py-20 text-white">
      <div className="container">
        {/* Top: rating summary */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-turmeric-300">Google Reviews</p>
            <div className="flex items-baseline gap-3">
              <span className="font-black leading-none text-turmeric-300" style={{ fontSize: "clamp(4rem,10vw,8rem)" }}>
                {reviews.rating.toFixed(1)}
              </span>
              <span className="text-3xl font-black text-white/40">/5</span>
            </div>
            <p className="mt-3 text-lg text-white/60">{reviews.totalReviews.toLocaleString()}+ verified reviews</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-turmeric-300/30 px-5 py-3 text-sm font-bold text-white/80">
            <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-turmeric-300">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google Reviews
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.reviews.map((review) => (
            <article
              key={`${review.authorName}-${review.relativeTimeDescription}`}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6"
            >
              {/* Opening quote */}
              <div
                className="font-display leading-none text-turmeric-300/40 select-none"
                style={{ fontSize: "clamp(3rem,6vw,5rem)" }}
                aria-hidden
              >
                &ldquo;
              </div>

              {/* Review text */}
              <details className="-mt-4">
                <summary className="cursor-pointer list-none text-sm italic leading-6 text-white/80">
                  <span className="line-clamp-4">{review.text}</span>
                  <span className="mt-2 inline-block text-xs font-black not-italic uppercase tracking-[0.18em] text-turmeric-300/70">Read more</span>
                </summary>
                <p className="mt-3 text-sm italic leading-6 text-white/80">{review.text}</p>
              </details>

              {/* Bottom: avatar, name, stars, time */}
              <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                {review.profilePhotoUrl ? (
                  <Image src={review.profilePhotoUrl} alt="" width={40} height={40} className="rounded-full" />
                ) : (
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest-700 text-sm font-black text-turmeric-300">
                    {review.authorName.slice(0, 1)}
                  </span>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="truncate font-black text-white">{review.authorName}</h3>
                  <p className="text-xs text-white/40">{review.relativeTimeDescription}</p>
                </div>
                <div className="flex text-turmeric-500 shrink-0" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} aria-hidden className={i < review.rating ? "h-3.5 w-3.5 fill-current" : "h-3.5 w-3.5 text-white/15"} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
