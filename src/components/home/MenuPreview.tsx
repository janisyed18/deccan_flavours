"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Plus } from "lucide-react";

import { DietaryBadge } from "@/components/ui";
import type { MergedMenuCategory } from "@/lib/menu";
import { formatCurrency } from "@/lib/hours";
import { cn } from "@/lib/utils";

const allTab = { slug: "all", name: "All" };

export function MenuPreview({ menuCategories }: { menuCategories: MergedMenuCategory[] }) {
  const tabs = [allTab, ...menuCategories];
  const [active, setActive] = useState("all");
  const items = useMemo(() => {
    if (active === "all") {
      return menuCategories.flatMap((category) => category.items).slice(0, 12);
    }
    return menuCategories.find((category) => category.slug === active)?.items ?? [];
  }, [active, menuCategories]);

  return (
    <section className="bg-forest-900 py-20 text-white" id="menu-preview">
      <div className="container">
        {/* Section heading */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-turmeric-300">Explore the Menu</p>
          <h2 className="font-display text-5xl font-bold leading-none text-white md:text-6xl">
            Full Menu Preview
          </h2>
          <p className="mt-4 max-w-xl text-lg text-white/65">
            Filter through plates, starters, curries, naans, desserts and drinks before ordering.
          </p>
        </div>

        {/* Category tab bar */}
        <div className="sticky top-[4.5rem] z-20 -mx-4 mb-8 flex gap-2 overflow-x-auto border-y border-white/10 bg-forest-900/95 px-4 py-3 backdrop-blur md:static md:mx-0 md:border md:border-white/10 md:px-3 md:rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab.slug}
              type="button"
              onClick={() => setActive(tab.slug)}
              className={cn(
                "shrink-0 rounded-full px-5 py-2 text-sm font-black transition",
                active === tab.slug
                  ? "bg-turmeric-300 text-forest-900"
                  : "border border-white/20 text-white/70 hover:border-turmeric-300/50 hover:text-white",
              )}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] transition hover:bg-white/10"
            >
              <div className="relative aspect-video overflow-hidden bg-forest-700">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                {item.popular && (
                  <span className="absolute left-3 top-3 rounded-full bg-turmeric-300 px-3 py-1 text-xs font-black text-forest-900">
                    Most Ordered
                  </span>
                )}
                {item.weekendOnly && (
                  <span className="absolute right-3 top-3 rounded-full bg-forest-900/80 px-3 py-1 text-xs font-black text-white">
                    Weekend
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-black leading-tight text-white">{item.name}</h3>
                  <p className="shrink-0 text-xl font-black text-turmeric-300">{formatCurrency(item.price)}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/60 line-clamp-2">{item.description}</p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.dietaryTags.map((tag) => (
                      <DietaryBadge key={tag} tag={tag} />
                    ))}
                  </div>
                  <Link
                    href={`/order?item=${item.id}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-turmeric-300 px-4 py-2 text-xs font-black text-forest-900 transition hover:bg-white"
                  >
                    <Plus aria-hidden className="h-3.5 w-3.5" />
                    Add
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-turmeric-300/50 px-8 py-3 text-sm font-black text-turmeric-300 transition hover:bg-turmeric-300 hover:text-forest-900"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
