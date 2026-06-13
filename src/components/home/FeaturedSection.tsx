import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DietaryBadge } from "@/components/ui";
import { FEATURED_ITEM_IDS } from "@/data/menu";
import { formatCurrency } from "@/lib/hours";
import type { MergedMenuItem } from "@/lib/menu";

export function FeaturedSection({ menuItems }: { menuItems: MergedMenuItem[] }) {
  const featured = FEATURED_ITEM_IDS
    .map((id) => menuItems.find((item) => item.id === id))
    .filter(Boolean) as MergedMenuItem[];

  return (
    <section className="bg-smoke py-24">
      <div className="container">
        {/* Heading */}
        <div className="mb-14 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-turmeric-500">
              Best Sellers
            </p>
            <h2
              className="font-display font-bold leading-none text-ink"
              style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
            >
              Our Signatures
            </h2>
          </div>
          <Link href="/menu" className="inline-flex items-center gap-2 text-sm font-black text-forest-700 transition hover:gap-3 self-start lg:self-auto">
            See full menu <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((item, idx) => (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-lift ${idx === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${idx === 0 ? "aspect-[4/3]" : "aspect-square"}`}>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="(min-width:768px) 50vw,100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                {item.popular && (
                  <span className="absolute left-4 top-4 rounded-full bg-turmeric-300 px-4 py-1.5 text-[11px] font-black text-forest-900">
                    Most Ordered
                  </span>
                )}
                {/* Gradient overlay for large card only */}
                {idx === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                )}
              </div>

              {/* Content */}
              {idx === 0 ? (
                /* Large card: text overlaid on image */
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.dietaryTags.map((tag) => <DietaryBadge key={tag} tag={tag} />)}
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl font-bold leading-tight">{item.name}</h3>
                      <p className="mt-1 text-sm text-white/70 line-clamp-2">{item.description}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-3xl font-black text-turmeric-300">{formatCurrency(item.price)}</p>
                      <Link href={`/order?item=${item.id}`}
                        className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-turmeric-300 px-4 py-2 text-xs font-black text-forest-900 transition hover:bg-white">
                        Order <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                /* Small cards: text below image */
                <div className="p-5">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {item.dietaryTags.map((tag) => <DietaryBadge key={tag} tag={tag} />)}
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-black leading-tight text-ink">{item.name}</h3>
                    <span className="shrink-0 text-lg font-black text-turmeric-500">{formatCurrency(item.price)}</span>
                  </div>
                  <p className="mt-1 text-xs text-charcoal/60 line-clamp-2">{item.description}</p>
                  <Link href={`/order?item=${item.id}`}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-forest-900 px-4 py-2 text-xs font-black text-white transition hover:bg-forest-700">
                    Add to Order <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
