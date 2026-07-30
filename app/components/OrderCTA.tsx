"use client";

import { motion } from "framer-motion";

export default function OrderCTA() {
  return (
    <motion.section
      id="order"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[var(--color-text-primary)] py-[var(--space-5xl)] px-[var(--space-lg)] md:px-[var(--space-xl)]"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[56ch]">
          <h2 className="font-[family-name:var(--font-display)] text-[var(--text-h2)] font-medium text-[var(--color-canvas)] leading-[1.2] mb-[var(--space-md)]">
            Order Stillwater
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[var(--text-body-lg)] text-[var(--color-canvas-muted)] leading-[1.6] mb-[var(--space-xl)]">
            Bottles ship fresh within 48 hours. Local delivery available.
          </p>
          <a href="#order" className="btn-primary">
            Order Now
          </a>
        </div>
      </div>
    </motion.section>
  );
}