"use client";

import Link from "next/link";
import { ArrowRight, CreditCard, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

import { StatusTracker } from "@/components/ui";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

const steps = [
  { num: "01", text: "Scan QR or click link" },
  { num: "02", text: "Select items & pay via Stripe" },
  { num: "03", text: "Track your order status live" },
  { num: "04", text: "Pick up when ready — skip the queue" },
];

export function ClickCollectSection() {
  return (
    <section className="spice-texture py-20 text-white">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Left: steps */}
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-turmeric-300">Click & Collect</p>
          <h2 className="font-display text-5xl font-bold leading-none md:text-6xl">
            Order Ahead.<br />Skip the Queue.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-white/72">
            Scan at the table or order from home, pay online via Stripe, track the order, then collect fresh from the counter.
          </p>

          {/* Numbered steps with dotted connector */}
          <div className="mt-10 flex flex-col gap-0">
            {steps.map((step, index) => (
              <div key={step.num} className="relative flex gap-6">
                {/* Dotted vertical line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[2.75rem] top-14 h-[calc(100%-2rem)] w-px border-l-2 border-dashed border-turmeric-300/25" aria-hidden />
                )}
                {/* Step number */}
                <div className="relative shrink-0 pb-10 last:pb-0">
                  <span
                    className="block font-black leading-none text-turmeric-300/25 select-none"
                    style={{ fontSize: "clamp(3rem,6vw,4.5rem)" }}
                    aria-hidden
                  >
                    {step.num}
                  </span>
                </div>
                <div className="flex flex-col justify-center pb-10 last:pb-0">
                  <p className="text-lg font-black text-white">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <StatusTracker activeIndex={1} />
          </div>
        </div>

        {/* Right: QR card */}
        <div className="rounded-3xl bg-white p-8 text-ink shadow-2xl">
          <div className="mb-5 flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-forest-700">
            <QrCode aria-hidden className="h-4 w-4" />
            Restaurant QR
          </div>
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <div className="shrink-0 rounded-xl border border-black/8 bg-white p-3">
              <QRCodeSVG value={RESTAURANT_CONFIG.qrCodeValue} size={160} includeMargin aria-label="QR code to order online" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-ink">Scan to start your pickup order</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/65">
                The same link powers counter QR scans and the online click-and-collect checkout.
              </p>
              <Link
                href="/order"
                className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-forest-900 px-6 py-3 text-sm font-black text-white transition hover:bg-forest-700"
              >
                <CreditCard aria-hidden className="h-4 w-4" />
                Pay Online
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
