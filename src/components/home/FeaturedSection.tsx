import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { DietaryBadge } from "@/components/ui";
import { FEATURED_ITEM_IDS } from "@/data/menu";
import { formatCurrency } from "@/lib/hours";
import type { MergedMenuItem } from "@/lib/menu";

export function FeaturedSection({ menuItems }: { menuItems: MergedMenuItem[] }) {
  const featured = FEATURED_ITEM_IDS.map((id) => menuItems.find((item) => item.id === id)).filter(Boolean) as MergedMenuItem[];

  return (
    <section className="bg-white py-20">
      <div className="container">
        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-turmeric-500">Best Sellers</p>
          <h2 className="font-display text-5xl font-bold leading-none text-ink md:text-6xl">Our Signatures</h2>
          <p className="mt-4 max-w-xl text-lg text-charcoal/70">
            Dum biryani, Indo-Deccan starters and weekend specials that regulars come back for.
          </p>
        </div>

        {/* Editorial horizontal cards */}
        <div className="flex flex-col gap-0">
          {featured.map((item, index) => {
            const imageLeft = index % 2 === 0;

            return (
              <div key={item.id}>
                <div
                  className={`grid grid-cols-1 items-center gap-0 lg:grid-cols-2 ${imageLeft ? "" : "lg:[&>*:first-child]:order-last"}`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition duration-700 hover:scale-105"
                    />
                    {item.popular && (
                      <span className="absolute left-4 top-4 rounded-full bg-turmeric-300 px-4 py-1.5 text-xs font-black text-forest-900">
                        Most Ordered
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col justify-center p-8 lg:p-14 ${imageLeft ? "" : ""}`}>
                    {item.category && (
                      <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-turmeric-500">
                        {item.category}
                      </p>
                    )}
                    <h3 className="font-display text-4xl font-bold leading-tight text-ink">{item.name}</h3>
                    <p className="mt-4 text-base leading-7 text-charcoal/70">{item.description}</p>
                    <p className="mt-6 text-5xl font-black text-turmeric-500">{formatCurrency(item.price)}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.dietaryTags.map((tag) => (
                        <DietaryBadge key={tag} tag={tag} />
                      ))}
                    </div>
                    <Link
                      href={`/order?item=${item.id}`}
                      className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 text-sm font-black text-white transition hover:bg-forest-700"
                    >
                      <ShoppingBag aria-hidden className="h-4 w-4" />
                      Add to Order
                    </Link>
                  </div>
                </div>

                {/* Subtle divider between cards */}
                {index < featured.length - 1 && (
                  <hr className="my-10 border-black/8" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
