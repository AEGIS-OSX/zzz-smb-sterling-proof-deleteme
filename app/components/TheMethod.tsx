"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Consistent Teams",
    body: "You get the same cleaner every visit. No strangers, no relearning your home.",
  },
  {
    title: "Transparent Pricing",
    body: "Flat rates. No hidden fees. No surprise charges after the fact.",
  },
  {
    title: "Verified & Insured",
    body: "Every cleaner is background-checked, insured, and trained on our protocol.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function TheMethod() {
  return (
    <section
      id="the-method"
      className="bg-[var(--color-canvas)] py-[var(--space-5xl)] px-[var(--space-lg)] md:px-[var(--space-xl)]"
    >
      <div className="max-w-[var(--breakpoint-desktop)] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] font-[500] text-[var(--color-text-primary)] mb-[var(--space-3xl)] text-left"
        >
          The Method
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`border-l-[2px] border-[var(--color-accent-primary)] pl-[var(--space-lg)] ${
                index !== 0 ? "pt-[var(--space-5xl)]" : "pt-0"
              }`}
            >
              <h3 className="font-[family-name:var(--font-display)] text-[length:var(--text-h3)] font-[500] text-[var(--color-text-primary)] mb-[var(--space-sm)]">
                {feature.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[length:var(--text-body-large)] text-[var(--color-text-secondary)] leading-[1.6] max-w-[48ch]">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
