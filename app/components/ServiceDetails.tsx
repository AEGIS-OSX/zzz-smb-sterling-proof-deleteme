"use client";

import { motion } from "framer-motion";

export default function ServiceDetails() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[var(--color-canvas)] py-[var(--space-5xl)]"
    >
      <div className="mx-auto max-w-[1280px] px-[var(--space-xl)]">
        <div className="grid grid-cols-1 gap-[var(--space-4xl)] items-start md:grid-cols-[1.5fr_1fr]">
          
          {/* Right Column - Pricing Card (Mobile First: appears above inclusions) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="order-first md:order-last md:sticky md:top-[80px]"
          >
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-[var(--space-2xl)]">
              <p className="font-[family-name:var(--font-body)] text-[var(--text-label-size)] font-[var(--text-label-weight)] leading-[var(--text-label-line_height)] tracking-[var(--text-label-letter_spacing)] uppercase text-[var(--color-text-muted)] mb-[var(--space-md)]">
                Pricing
              </p>
              
              <div className="space-y-0">
                {[
                  { tier: "Studio / 1 Bedroom", price: "$140" },
                  { tier: "2 Bedroom", price: "$190" },
                  { tier: "3 Bedroom", price: "$240" },
                  { tier: "4+ Bedroom", price: "Custom Quote" },
                ].map((row, index, array) => (
                  <div
                    key={row.tier}
                    className="flex justify-between items-baseline py-[var(--space-sm)]"
                    style={{ borderBottom: index !== array.length - 1 ? "1px solid var(--color-border)" : "none" }}
                  >
                    <span className="font-[family-name:var(--font-body)] text-[var(--text-body-size)] text-[var(--color-text-secondary)]">
                      {row.tier}
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-[var(--text-mono_callout-size)] font-[var(--text-mono_callout-weight)] text-[var(--color-text-primary)]">
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Left Column - Content */}
          <div className="min-w-0">
            <span className="inline-block font-[family-name:var(--font-body)] text-[var(--text-label-size)] font-[var(--text-label-weight)] leading-[var(--text-label-line_height)] tracking-[var(--text-label-letter_spacing)] uppercase text-[var(--color-accent-primary)] mb-[var(--space-sm)]">
              Service Details
            </span>
            
            <h2 className="font-[family-name:var(--font-display)] text-[var(--text-h1-size)] font-[var(--text-h1-weight)] leading-[var(--text-h1-line_height)] tracking-[var(--text-h1-letter_spacing)] text-[var(--color-text-primary)] overflow-wrap-anywhere mb-[var(--space-md)]">
              One standard. No compromises.
            </h2>
            
            <p className="font-[family-name:var(--font-body)] text-[var(--text-body_large-size)] leading-[var(--text-body_large-line_height)] text-[var(--color-text-secondary)] max-w-[52ch] mb-[var(--space-2xl)]">
              We offer a singular, comprehensive cleaning package designed for NYC apartments.
            </p>

            <dl className="space-y-0">
              {[
                { dt: "All Rooms", dd: "Dusting, vacuuming, floor care, trash removal." },
                { dt: "Kitchen", dd: "Appliance exteriors, countertops, sink, floor." },
                { dt: "Bathroom", dd: "Sanitization, fixtures, mirrors, tile." },
                { dt: "Bedroom", dd: "Bed making, surface cleaning, organization." },
              ].map((item) => (
                <div key={item.dt} className="mb-[var(--space-lg)]">
                  <dt className="font-[family-name:var(--font-body)] text-[var(--text-label-size)] font-[var(--text-label-weight)] leading-[var(--text-label-line_height)] tracking-[var(--text-label-letter_spacing)] uppercase text-[var(--color-text-primary)] mb-[var(--space-xs)]">
                    {item.dt}
                  </dt>
                  <dd className="ml-0 font-[family-name:var(--font-body)] text-[var(--text-body-size)] leading-[var(--text-body-line_height)] text-[var(--color-text-secondary)]">
                    {item.dd}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
