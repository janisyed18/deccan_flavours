"use client";

import { motion } from "framer-motion";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

export function WhyChooseUs() {
  return (
    <section className="bg-forest-900 py-24 text-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-turmeric-300">
              Why Us
            </p>
            <h2
              className="font-display font-bold leading-none text-white"
              style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
            >
              The Deccan Difference
            </h2>
          </div>
          <p className="max-w-sm text-base text-white/55 lg:text-right">
            Six reasons the Western Sydney community keeps coming back.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid gap-px bg-white/10 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {RESTAURANT_CONFIG.whyChooseUs.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="group relative flex flex-col gap-4 bg-forest-900 p-8 transition hover:bg-forest-700/50"
            >
              {/* Big background number */}
              <span
                className="absolute right-5 top-3 select-none font-black text-white/5"
                style={{ fontSize: "5rem", lineHeight: 1 }}
                aria-hidden
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <span className="text-4xl">{item.icon}</span>

              {/* Text */}
              <div>
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{item.desc}</p>
              </div>

              {/* Gold accent line on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-turmeric-300 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
