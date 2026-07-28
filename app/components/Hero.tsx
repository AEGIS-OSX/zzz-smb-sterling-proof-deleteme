"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

export default function Hero(): JSX.Element {
  return (
    <motion.section
      id="hero"
      className="bg-[var(--color-anchor)] pt-[var(--space-5xl)] pb-[calc(var(--space-5xl)*1.4)] px-[var(--space-md)] sm:px-[var(--space-xl)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[58%_42%] gap-[var(--space-3xl)] items-center">
        <div className="order-2 md:order-1 flex flex-col gap-[var(--space-lg)]">
          <motion.span
            className="font-[family-name:var(--font-body)] text-[var(--text-label)] font-medium tracking-[0.08em] uppercase text-[var(--color-accent-secondary)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          >
            Residential Cleaning · New York City
          </motion.span>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,52px)] md:text-[var(--text-display)] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--color-surface)] [overflow-wrap:anywhere] min-w-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            A boutique housekeeping standard for the five boroughs.
          </motion.h1>

          <motion.p
            className="font-[family-name:var(--font-body)] text-[var(--text-body-lg)] leading-[1.6] text-[var(--color-text-on-dark)] max-w-[52ch]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          >
            Professional residential cleaning starting at $140. We handle the turnover so you can return to a calm, unhurried home.
          </motion.p>

          <motion.a
            href="#booking"
            className="inline-block bg-[var(--color-accent-primary)] text-[var(--color-surface)] font-[family-name:var(--font-body)] text-[var(--text-label)] font-medium tracking-[0.08em] uppercase py-[14px] px-[var(--space-xl)] rounded-[var(--radius-card)] no-underline whitespace-nowrap outline-2 outline-transparent outline-offset-1 transition-[background-color] duration-150 [transition-timing-function:var(--ease-out)] hover:bg-[var(--color-accent-primary-hover)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] active:bg-[var(--color-accent-primary-hover)] w-fit"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Service
          </motion.a>
        </div>

        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <figure className="m-0">
            {/* NOTE: fetchpriority="high" should be added to the underlying img in ProjectImage for LCP optimization */}
            <ProjectImage
              id="hero"
              className="w-full h-auto block rounded-[var(--radius-card)] object-cover aspect-[3/2] md:aspect-[4/5]"
            />
          </figure>
        </motion.div>
      </div>
    </motion.section>
  );
}
