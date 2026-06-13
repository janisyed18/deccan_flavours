import { ArrowUpRight, Clock, MapPin, Phone, Train } from "lucide-react";

import { RESTAURANT_CONFIG } from "@/config/restaurant";
import { formatTime } from "@/lib/hours";

export function MapSection() {
  const mapSrc = process.env.GOOGLE_MAPS_EMBED_API_KEY
    ? `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_EMBED_API_KEY}&q=${encodeURIComponent(RESTAURANT_CONFIG.address)}`
    : `https://www.google.com/maps?q=${encodeURIComponent(RESTAURANT_CONFIG.address)}&output=embed`;

  return (
    <section className="bg-white py-24">
      <div className="container mb-10">
        <p className="mb-3 text-[11px] font-black uppercase tracking-[0.28em] text-turmeric-500">
          Location
        </p>
        <h2
          className="font-display font-bold leading-none text-ink"
          style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
        >
          Find Us
        </h2>
      </div>

      {/* Map + info card */}
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-black/8 shadow-lift">
          {/* Map */}
          <iframe
            title="Deccan Flavours location map"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[480px] w-full border-0"
          />

          {/* Overlay info card */}
          <div className="absolute bottom-5 left-5 w-72 rounded-2xl bg-forest-900/95 p-5 text-white shadow-2xl backdrop-blur-sm">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.2em] text-turmeric-300">
              Deccan Flavours
            </p>

            <a href={RESTAURANT_CONFIG.googleMapsLink} target="_blank" rel="noreferrer"
              className="group mb-3 flex items-start gap-3 text-sm text-white/80 hover:text-turmeric-300">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turmeric-300" aria-hidden />
              <span>{RESTAURANT_CONFIG.address}</span>
            </a>

            <a href={`tel:${RESTAURANT_CONFIG.phone.replace(/\s/g,"")}`}
              className="mb-3 flex items-center gap-3 text-sm text-white/80 hover:text-turmeric-300">
              <Phone className="h-4 w-4 shrink-0 text-turmeric-300" aria-hidden />
              {RESTAURANT_CONFIG.phone}
            </a>

            <div className="mb-4 flex items-center gap-3 text-sm text-white/70">
              <Clock className="h-4 w-4 shrink-0 text-turmeric-300" aria-hidden />
              <span>
                Mon–Thu {formatTime(RESTAURANT_CONFIG.hours.monday.open)}–{formatTime(RESTAURANT_CONFIG.hours.monday.close)}
                {" · "}Fri–Sat until {formatTime(RESTAURANT_CONFIG.hours.saturday.close)}
              </span>
            </div>

            <div className="mb-5 flex items-center gap-3 text-sm text-white/60">
              <Train className="h-4 w-4 shrink-0 text-turmeric-300" aria-hidden />
              2 min walk from Wentworthville Station
            </div>

            <a href={RESTAURANT_CONFIG.googleMapsLink} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-turmeric-300 py-2.5 text-sm font-black text-forest-900 transition hover:bg-white">
              Get Directions <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
