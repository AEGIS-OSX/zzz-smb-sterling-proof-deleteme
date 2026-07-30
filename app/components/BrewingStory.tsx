"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

export default function BrewingStory() {
  return (
    <motion.section
      id="story"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[var(--color-surface)] py-[var(--space-5xl)]"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--space-lg)] md:px-[var(--space-xl)]">
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-[var(--space-3xl)] items-center">
          <div>
            <ProjectImage id="feature_1" className="w-full h-[280px] md:h-[480px] object-cover rounded-[var(--radius-card)]" />
          </div>
          <div className="flex flex-col gap-[var(--space-md)]">
            <span className="font-[family-name:var(--font-body)] text-[var(--text-label)] font-medium tracking-[0.08em] uppercase text-[var(--color-accent-primary)]">
              The Process
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[var(--text-h2)] font-medium text-[var(--color-text-primary)] leading-[1.2]">
              Brewed slow. Filtered clean. Bottled fresh.
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--text-body-lg)] text-[var(--color-text-secondary)] leading-[1.6] max-w-[52ch]">
              We steep our beans for eighteen hours in cold, filtered water. No heat, no hurry. The result is a concentrate that is smooth, low in acidity, and rich in the subtle notes that high-heat brewing burns away. Every batch is tasted before it leaves our kitchen.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}