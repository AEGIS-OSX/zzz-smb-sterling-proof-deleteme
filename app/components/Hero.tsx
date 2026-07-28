"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";
import styles from "./Hero.module.css";

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
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.heroImageCol}>
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className={styles.imageWrapper}
            >
              <ProjectImage id="hero" className={styles.heroImage} />
            </motion.div>
          </div>

          <div className={styles.heroContent}>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className={styles.eyebrow}
            >
              Boutique Housekeeping · NYC
            </motion.p>
            
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className={styles.headline}
            >
              A boutique housekeeping standard for the five boroughs.
            </motion.h1>
            
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className={styles.subheadline}
            >
              Professional residential cleaning starting at $140. We handle the turnover so you can return to a calm, unhurried home.
            </motion.p>
            
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              <a href="#book" className="btn-primary hero-cta">
                Book a Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
