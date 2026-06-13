import { ArrowUpRight, Clock, MapPin, Phone, Train } from "lucide-react";

import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { formatTime } from "@/lib/hours";

export function MapSection() {
  const mapSrc = process.env.GOOGLE_MAPS_EMBED_API_KEY
    ? `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_EMBED_API_KEY}&q=${encodeURIComponent(RESTAURANT_CONFIG.address)}`
    : `https://www.google.com/maps?q=${encodeURIComponent(RESTAURANT_CONFIG.address)}&output=embed`;

  return (
    <section className="bg-white py-20">
      {/* Section heading */}
      <div className="container mb-10">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-turmeric-500">Location</p>
        <h2 className="font-display text-5xl font-bold leading-none text-ink md:text-6xl">
          Find Us in Wentworthville
        </h2>
        <p className="mt-4 max-w-xl text-lg text-charcoal/70">
          Unit 4/80 Station St — just steps from Wentworthville Station with nearby street parking.
        </p>
      </div>

      {/* Full-width map with overlay */}
      <div className="relative overflow-hidden">
        <iframe
          title="Deccan Flavours Wentworthville location map"
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[500px] w-full border-0"
        />

        {/* Overlay info panel */}
        <div className="absolute bottom-8 left-8 z-10 max-w-xs rounded-2xl bg-forest-900 p-6 text-white shadow-2xl">
          <h3 className="mb-4 font-display text-xl font-bold">Deccan Flavours</h3>

          <div className="flex flex-col gap-3 text-sm text-white/75">
            <p className="flex gap-2.5">
              <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-turmeric-300" />
              {RESTAURANT_CONFIG.address}
            </p>
            <p className="flex gap-2.5">
              <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-turmeric-300" />
              {RESTAURANT_CONFIG.phone}
            </p>
            <p className="flex gap-2.5">
              <Clock aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-turmeric-300" />
              Mon–Thu {formatTime(RESTAURANT_CONFIG.hours.monday.open)}–{formatTime(RESTAURANT_CONFIG.hours.monday.close)}
            </p>
            <p className="flex gap-2.5">
              <Train aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-turmeric-300" />
              2 min walk from Wentworthville Station
            </p>
          </div>

          <a
            href={RESTAURANT_CONFIG.googleMapsLink}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-turmeric-300 px-5 py-2.5 text-sm font-black text-forest-900 transition hover:bg-white"
          >
            Get Directions
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
