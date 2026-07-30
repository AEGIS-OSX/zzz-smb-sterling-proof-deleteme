"use client";

import { motion } from "framer-motion";

const stockists = [
  "Blue Bottle Coffee — Williamsburg",
  "Devoción — Downtown Brooklyn",
  "La Colombe — Chelsea",
  "Joe Coffee — West Village",
  "Stumptown — Greenwich Village",
];

export default function Stockists() {
  return (
    <motion.section
      id="stockists"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[var(--color-surface)] py-[var(--space-5xl)] px-[var(--space-lg)] md:px-[var(--space-xl)]"
    >
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-[var(--text-h2)] font-medium text-[var(--color-text-primary)] mb-[var(--space-xl)] text-left">
          Find Stillwater
        </h2>
        <p className="font-[family-name:var(--font-body)] text-[var(--text-body-lg)] text-[var(--color-text-secondary)] leading-[1.6] max-w-[52ch] mb-[var(--space-2xl)]">
          Available at select cafés, grocers, and markets across the city.
        </p>
        <ul className="space-y-[var(--space-md)]">
          {stockists.map((stockist) => (
            <li
              key={stockist}
              className="font-[family-name:var(--font-body)] text-[var(--text-body)] text-[var(--color-text-primary)] pl-[var(--space-md)] border-l-[2px] border-[var(--color-border)]"
            >
              {stockist}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}