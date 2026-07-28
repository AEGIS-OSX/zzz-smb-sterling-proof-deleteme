"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

export default function TheMethod() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[var(--color-canvas)] py-[var(--space-5xl)]"
    >
      <div className="mx-auto max-w-[1280px] px-[var(--space-xl)]">
        {/* Section Header */}
        <header className="mb-[var(--space-4xl)] max-w-[65ch]">
          <span className="block font-[family-name:var(--font-body)] text-[var(--text-label)] font-medium uppercase tracking-[0.08em] text-[var(--color-accent-primary)] mb-[var(--space-sm)]">
            The Method
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[var(--text-h1)] font-medium leading-[1.15] tracking-[-0.01em] text-[var(--color-text-primary)] mb-[var(--space-md)] [overflow-wrap:anywhere] min-w-0">
            The result, not the effort.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[var(--text-body-lg)] leading-[1.6] text-[var(--color-text-secondary)]">
            We approach residential cleaning with the discipline of a boutique hotel. No rushed schedules. No generic checklists. Our team focuses on the tactile details that signal a truly clean space: the crisp fold of a towel, the clarity of a window, the quiet of a room restored to order.
          </p>
        </header>

        {/* Features */}
        <div className="flex flex-col gap-[var(--space-4xl)]">
          {/* Feature 1: Meticulous Standards */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
            className="grid grid-cols-1 md:grid-cols-[65%_35%] items-center gap-[var(--space-3xl)]"
          >
            <div className="order-2 md:order-1">
              <h3 className="font-[family-name:var(--font-body)] text-[var(--text-h3)] font-medium leading-[1.3] text-[var(--color-text-primary)] mb-[var(--space-sm)]">
                Meticulous Standards
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[1.6] text-[var(--color-text-secondary)]">
                We don't just clean surfaces. We restore them. From deep-set hardwood grain to polished fixtures, we use professional-grade methods that respect your home's materials.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <ProjectImage
                id="feature_1"
                className="aspect-[3/2] md:aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover"
              />
            </div>
          </motion.div>

          {/* Feature 2: Unhurried Service */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-[35%_65%] items-center gap-[var(--space-3xl)]"
          >
            <div className="order-1">
              <ProjectImage
                id="feature_2"
                className="aspect-[3/2] md:aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover"
              />
            </div>
            <div className="order-2">
              <h3 className="font-[family-name:var(--font-body)] text-[var(--text-h3)] font-medium leading-[1.3] text-[var(--color-text-primary)] mb-[var(--space-sm)]">
                Unhurried Service
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[1.6] text-[var(--color-text-secondary)]">
                Quality takes time. We don't overbook our staff, ensuring every apartment receives the focus it requires to meet our internal benchmark.
              </p>
            </div>
          </motion.div>

          {/* Feature 3: Professional Discretion */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-[65%_35%] items-center gap-[var(--space-3xl)]"
          >
            <div className="order-2 md:order-1">
              <h3 className="font-[family-name:var(--font-body)] text-[var(--text-h3)] font-medium leading-[1.3] text-[var(--color-text-primary)] mb-[var(--space-sm)]">
                Professional Discretion
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[1.6] text-[var(--color-text-secondary)]">
                Our team is trained for residential environments. We work quietly and efficiently, respecting the privacy and sanctity of your personal space.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <ProjectImage
                id="feature_3"
                className="aspect-[3/2] md:aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
