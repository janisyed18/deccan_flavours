import { ArrowUpRight } from "lucide-react";

import { RECOGNITION_ITEMS } from "@/data/recognition";

export function RecognitionStrip() {
  return (
    <section className="bg-forest-900 py-8" aria-labelledby="recognition-heading">
      <div className="container">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
          {/* Left heading */}
          <div className="shrink-0">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-turmeric-300/70">Recognition</p>
            <h2
              id="recognition-heading"
              className="mt-1 font-display text-2xl font-bold text-white"
            >
              Listed Across Local Dining Guides
            </h2>
          </div>

          {/* Horizontal scroll of badge pills */}
          <div className="flex gap-3 overflow-x-auto pb-1 lg:pb-0">
            {RECOGNITION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-turmeric-300/30 px-5 py-2.5 text-sm font-bold text-white/80 transition hover:border-turmeric-300 hover:text-turmeric-300"
              >
                {item.title}
                <ArrowUpRight aria-hidden className="h-3.5 w-3.5 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
