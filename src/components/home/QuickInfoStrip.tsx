import { ArrowUpRight, Clock, MapPin, Phone, ShoppingBag } from "lucide-react";

import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { formatTime } from "@/lib/hours";

export function QuickInfoStrip() {
  const stats = [
    {
      value: "Est. 2015",
      label: "Serving the community",
      sub: "Wentworthville's favourite",
      icon: null,
      href: "/about",
    },
    {
      value: RESTAURANT_CONFIG.phone,
      label: "Call us",
      sub: "Reservations & enquiries",
      icon: Phone,
      href: `tel:${RESTAURANT_CONFIG.phone.replace(/\s/g, "")}`,
    },
    {
      value: `${formatTime(RESTAURANT_CONFIG.hours.monday.open)} – ${formatTime(RESTAURANT_CONFIG.hours.friday.close)}`,
      label: "Open daily",
      sub: "Fri & Sat until 10:30 pm",
      icon: Clock,
      href: "/contact",
    },
    {
      value: "100% Halal",
      label: "Certified kitchen",
      sub: "Family & community dining",
      icon: null,
      href: "/about#halal",
    },
  ];

  return (
    <section className="bg-forest-900 text-white">
      <div className="container grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
        {stats.map((stat) => (
          <a
            key={stat.label}
            href={stat.href}
            className="group flex flex-col gap-1 px-6 py-7 transition hover:bg-white/5"
          >
            <span className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-turmeric-300/70">
                {stat.label}
              </span>
              {stat.icon ? (
                <stat.icon className="h-4 w-4 text-white/25 transition group-hover:text-turmeric-300" aria-hidden />
              ) : (
                <ArrowUpRight className="h-4 w-4 text-white/25 transition group-hover:text-turmeric-300" aria-hidden />
              )}
            </span>
            <span className="text-xl font-black text-white">{stat.value}</span>
            <span className="text-xs text-white/45">{stat.sub}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
