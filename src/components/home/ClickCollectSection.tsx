"use client";

import Link from "next/link";
import { ArrowRight, CreditCard, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

import { RESTAURANT_CONFIG } from "@/config/restaurant";

const steps = [
  { num: "01", title: "Scan or click",    desc: "Scan the QR code at our counter or click the Order link" },
  { num: "02", title: "Build your order", desc: "Pick dishes, choose a pickup time, add any notes" },
  { num: "03", title: "Pay securely",     desc: "Checkout via Stripe — card, Apple Pay or Google Pay" },
  { num: "04", title: "Collect & enjoy",  desc: "Get a notification when your order is ready — skip the queue" },
];

export function ClickCollectSection() {
  return (
    <section className="spice-texture grain py-24 text-white">
      <div className="container grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left: steps */}
        <div>
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.28em] text-turmeric-300">
            Click & Collect
          </p>
          <h2
            className="font-display font-bold leading-none text-white"
            style={{ fontSize: "clamp(2.5rem,6vw,4rem)" }}
          >
            Order Ahead,<br />
            <span className="text-turmeric-300">Skip the Queue.</span>
          </h2>
          <p className="mt-5 max-w-md text-base text-white/60">
            Pay online before you arrive and walk straight to the counter for a piping-hot pickup.
          </p>

          {/* Steps */}
          <ol className="mt-10 space-y-0">
            {steps.map((step, idx) => (
              <li key={step.num} className="flex gap-5">
                {/* Number + connector */}
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-turmeric-300/50 text-sm font-black text-turmeric-300">
                    {step.num}
                  </span>
                  {idx < steps.length - 1 && (
                    <span className="mt-1 w-px flex-1 border-l border-dashed border-turmeric-300/20" />
                  )}
                </div>
                {/* Text */}
                <div className={`pb-8 ${idx === steps.length - 1 ? "pb-0" : ""}`}>
                  <h3 className="font-black text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-white/55">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right: QR card */}
        <div className="rounded-3xl bg-white p-8 text-ink shadow-2xl">
          <div className="flex items-center gap-2 mb-6 text-xs font-black uppercase tracking-[0.2em] text-forest-700">
            <QrCode className="h-4 w-4" aria-hidden /> Restaurant QR Code
          </div>

          <div className="flex justify-center mb-6">
            <div className="rounded-2xl border border-black/8 bg-smoke p-4">
              <QRCodeSVG
                value={RESTAURANT_CONFIG.qrCodeValue}
                size={180}
                includeMargin
                aria-label="QR code to order online at Deccan Flavours"
              />
            </div>
          </div>

          <h3 className="text-center text-xl font-black text-ink">Scan to start your order</h3>
          <p className="mt-2 text-center text-sm text-charcoal/60">
            Works on any smartphone. No app needed.
          </p>

          <Link
            href="/order"
            className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-forest-900 py-4 text-sm font-black text-white transition hover:bg-forest-700"
          >
            <CreditCard className="h-4 w-4" aria-hidden />
            Pay Online Now
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>

          <p className="mt-3 text-center text-xs text-charcoal/40">
            Powered by Stripe · Secure checkout
          </p>
        </div>
      </div>
    </section>
  );
}
