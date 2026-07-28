"use client";

import { motion } from "framer-motion";

export default function NYCContext() {
  const testimonials = [
    {
      quote: "The first time I walked in after a Stillwater visit, I didn't just see the difference; I felt it. The apartment was finally quiet.",
      cite: "— Sarah, Williamsburg",
      type: "large",
    },
    {
      quote: "Reliable, professional, and they actually understand how to handle a pre-war apartment's quirks.",
      cite: "— James, Upper West Side",
      type: "offset",
    },
    {
      quote: "They are the only service I trust with my keys. The quality is consistent every single time.",
      cite: "— Elena, Astoria",
      type: "standard",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[var(--color-surface)] py-[var(--space-5xl)]"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--space-xl)]">
        {/* SUB-BLOCK A: NYC Context Prose */}
        <div className="grid grid-cols-1 md:grid-cols-[0.6fr_0.4fr] gap-[var(--space-4xl)] mb-[var(--space-4xl)]">
          <div className="flex flex-col gap-[var(--space-md)]">
            <span className="font-[family-name:var(--font-body)] text-[14px] font-500 tracking-[0.08em] uppercase text-[var(--color-accent-primary)]">
              NYC Context
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[40px] font-500 leading-[1.15] tracking-[-0.01em] text-[var(--color-text-primary)] overflow-wrap-anywhere min-w-0">
              Built for New York living.
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[18px] leading-[1.6] text-[var(--color-text-secondary)] max-w-[55ch]">
              We understand the logistics of the city. From walk-ups in Bushwick to doorman buildings on the Upper West Side, we manage the access, the elevators, and the specific requirements of NYC residential life. We are licensed, insured, and local.
            </p>
          </div>

          <div className="flex flex-col items-start gap-[var(--space-sm)]">
            {["Licensed & Insured", "NYC-Based Team", "Background-Checked Staff"].map((text) => (
              <div
                key={text}
                className="bg-[var(--color-canvas)] border border-[var(--color-border)] rounded-[2px] px-[var(--space-md)] py-[var(--space-sm)] font-[family-name:var(--font-body)] text-[14px] font-500 tracking-[0.08em] uppercase text-[var(--color-text-secondary)] inline-block"
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* SUB-BLOCK B: Testimonials */}
        <div className="flex flex-col gap-[var(--space-3xl)]">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
              className={`
                border-l-2 border-[var(--color-accent-secondary)] pl-[var(--space-lg)]
                ${t.type === "large" ? "max-w-[70ch]" : "max-w-[52ch]"}
                ${t.type === "offset" ? "md:ml-auto md:mr-0" : ""}
              `}
            >
              <p
                className={`
                font-[family-name:var(--font-display)] font-500 leading-[1.2] text-[var(--color-text-primary)]
                ${t.type === "large" ? "text-[32px]" : "text-[22px] leading-[1.3]"}
              `}
              >
                {t.quote}
              </p>
              <cite className="font-[family-name:var(--font-body)] text-[14px] text-[var(--color-text-muted)] not-italic block mt-[var(--space-md)]">
                {t.cite}
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
