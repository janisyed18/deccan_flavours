"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Plus } from "lucide-react";

import { DietaryBadge } from "@/components/ui";
import type { MergedMenuCategory } from "@/lib/menu";
import { formatCurrency } from "@/lib/hours";
import { cn } from "@/lib/utils";

const allTab = { slug: "all", name: "All" };

export function MenuPreview({ menuCategories }: { menuCategories: MergedMenuCategory[] }) {
  const tabs = [allTab, ...menuCategories];
  const [active, setActive] = useState("all");

  const items = useMemo(() => {
    if (active === "all") return menuCategories.flatMap((c) => c.items).slice(0, 9);
    return menuCategories.find((c) => c.slug === active)?.items ?? [];
  }, [active, menuCategories]);

  return (
    <section className="bg-ink py-24 text-white" id="menu-preview">
      {/* ── Header ── */}
      <div className="container mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-turmeric-300">
            Explore the Menu
          </p>
          <h2
            className="font-display font-bold leading-none text-white"
            style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
          >
            What's On
          </h2>
        </div>
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 self-start text-sm font-black text-turmeric-300 transition hover:gap-3 lg:self-auto"
        >
          Full menu <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      {/* ── Category tabs ── */}
      <div className="container mb-8">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.slug}
              type="button"
              onClick={() => setActive(tab.slug)}
              className={cn(
                "shrink-0 rounded-full border px-5 py-2 text-sm font-black transition",
                active === tab.slug
                  ? "border-turmeric-300 bg-turmeric-300 text-forest-900"
                  : "border-white/15 text-white/60 hover:border-white/40 hover:text-white",
              )}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* ── Bento grid ── */}
      <div className="container grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] lg:grid-cols-3">
        {items.map((item, idx) => {
          // First item in "all" tab gets a double-tall featured slot
          const featured = active === "all" && idx === 0;

          return (
            <article
              key={item.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/8 bg-forest-900",
                featured && "col-span-2 row-span-2 md:col-span-1 md:row-span-2",
              )}
            >
              {/* Image */}
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                sizes="(min-width:1024px) 33vw,(min-width:640px) 50vw,100vw"
                className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
              />

              {/* Dark overlay — stronger at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Badges */}
              {item.popular && (
                <span className="absolute left-3 top-3 rounded-full bg-turmeric-300 px-3 py-1 text-[11px] font-black text-forest-900">
                  Popular
                </span>
              )}

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  {item.dietaryTags.slice(0, 2).map((tag) => (
                    <DietaryBadge key={tag} tag={tag} />
                  ))}
                </div>
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <h3 className={cn("font-black leading-tight text-white", featured ? "text-xl" : "text-base")}>
                      {item.name}
                    </h3>
                    {featured && (
                      <p className="mt-1 text-sm text-white/60 line-clamp-2">{item.description}</p>
                    )}
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <span className="text-lg font-black text-turmeric-300">{formatCurrency(item.price)}</span>
                    <Link
                      href={`/order?item=${item.id}`}
                      className="grid h-8 w-8 place-items-center rounded-full bg-turmeric-300 text-forest-900 transition hover:bg-white"
                      aria-label={`Add ${item.name} to order`}
                    >
                      <Plus className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
