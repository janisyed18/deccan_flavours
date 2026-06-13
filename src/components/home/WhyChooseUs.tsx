"use client";

import { motion } from "framer-motion";

import { RESTAURANT_CONFIG } from "@/config/restaurant";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function WhyChooseUs() {
  return (
    <section className="bg-smoke py-20">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* Left: sticky heading */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-turmeric-500">Why Choose Us</p>
            <h2 className="font-display text-5xl font-bold leading-[1.05] text-ink">
              Why Western Sydney Chooses Us
            </h2>
            <p className="mt-5 text-lg leading-7 text-charcoal/70">
              A family-friendly table, halal confidence and the spice craft of Hyderabad — right here in Wentworthville.
            </p>
          </div>

          {/* Right: numbered items */}
          <div className="flex flex-col">
            {RESTAURANT_CONFIG.whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="relative flex gap-6 pb-10 last:pb-0 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-black/8"
              >
                {/* Large background number */}
                <span
                  className="absolute -top-2 left-0 select-none font-black leading-none text-turmeric-300/25"
                  style={{ fontSize: "clamp(4rem,8vw,6rem)" }}
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative mt-8 flex-1">
                  <h3 className="text-xl font-black text-ink">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-charcoal/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
