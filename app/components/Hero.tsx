"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  }),
};

export default function Hero() {
  return (
    <section className="bg-[var(--color-text-primary)] pt-[var(--space-4xl)] md:pt-[var(--space-5xl)] pb-[var(--space-5xl)]">
      <div className="max-w-[1280px] mx-auto px-[var(--space-md)]">
        <div className="grid grid-cols-1 md:grid-cols-[58%_42%] gap-[var(--space-3xl)] items-center">
          <div className="flex flex-col items-start order-2 md:order-1">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="font-[family-name:var(--font-body)] text-[var(--text-label)] font-medium tracking-[0.08em] uppercase text-[var(--color-accent-secondary)] mb-[var(--space-md)]"
            >
              Small-batch cold brew
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="font-[family-name:var(--font-display)] text-[36px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--color-canvas)] break-words min-w-0 mb-[var(--space-md)]"
            >
              Stillwater. Brewed slow, served calm.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="font-[family-name:var(--font-body)] text-[var(--text-body-lg)] font-normal leading-[1.6] text-[var(--color-canvas-muted)] max-w-[52ch] mb-[var(--space-xl)]"
            >
              A small-batch cold brew for mornings that deserve better than a rush.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              <a href="#order" className="btn-primary">
                Order Now
              </a>
            </motion.div>
          </div>

          <div className="overflow-hidden h-[280px] md:h-auto md:min-h-[480px] order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="h-full w-full"
            >
              <ProjectImage id="hero" className="w-full h-full object-cover object-center block" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}