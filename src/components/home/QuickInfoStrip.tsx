import { ArrowUpRight, Clock, MapPin, Phone, ShoppingBag } from "lucide-react";

import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { formatTime } from "@/lib/hours";

const tiles = [
  {
    label: "Call Us",
    value: RESTAURANT_CONFIG.phone,
    sub: "Reservations & enquiries",
    href: `tel:${RESTAURANT_CONFIG.phone.replace(/\s/g, "")}`,
    icon: Phone,
    external: false,
  },
  {
    label: "Today's Hours",
    value: `${formatTime(RESTAURANT_CONFIG.hours.monday.open)} – ${formatTime(RESTAURANT_CONFIG.hours.monday.close)}`,
    sub: "Mon–Thu · Fri–Sun vary",
    href: "/contact",
    icon: Clock,
    external: false,
  },
  {
    label: "Find Us",
    value: "80 Station St",
    sub: "Wentworthville NSW",
    href: RESTAURANT_CONFIG.googleMapsLink,
    icon: MapPin,
    external: true,
  },
  {
    label: "Order Online",
    value: "UberEats · DoorDash",
    sub: "Delivery & pickup",
    href: RESTAURANT_CONFIG.orderingLink,
    icon: ShoppingBag,
    external: true,
  },
];

export function QuickInfoStrip() {
  return (
    <section className="border-b border-black/8 bg-white">
      <div className="container grid grid-cols-1 gap-0 divide-y divide-black/8 md:grid-cols-4 md:divide-x md:divide-y-0">
        {tiles.map((tile) => (
          <a
            key={tile.label}
            href={tile.href}
            target={tile.external ? "_blank" : undefined}
            rel={tile.external ? "noreferrer" : undefined}
            className="group flex items-start gap-0 border-l-4 border-transparent pl-5 py-6 pr-4 transition hover:border-turmeric-300 hover:bg-turmeric-100/30"
          >
            <div className="flex-1">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-charcoal/50">{tile.label}</p>
              <p className="mt-1 text-2xl font-black text-forest-900 leading-tight">{tile.value}</p>
              <p className="mt-0.5 text-sm text-charcoal/60">{tile.sub}</p>
            </div>
            {tile.external && (
              <ArrowUpRight aria-hidden className="mt-1 h-4 w-4 shrink-0 text-charcoal/30 transition group-hover:text-turmeric-500" />
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
