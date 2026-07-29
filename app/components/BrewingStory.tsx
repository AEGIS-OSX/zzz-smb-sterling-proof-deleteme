import styles from "./BrewingStory.module.css";

export default function BrewingStory() {
  return (
    <section id="brewing-story" className={styles.root} aria-labelledby="brewing-story-heading">
      <div className={`section-container ${styles.inner}`}>
        <div className={styles.label}>The Brew</div>
        <h2 id="brewing-story-heading" className={styles.heading}>
          Twenty hours. One origin. No heat.
        </h2>
        <div className={styles.body}>
          <p>
            Stillwater starts with single-origin beans sourced from a single farm in Huila, Colombia. We grind coarse, steep cold for twenty hours, then press slow. No heat ever touches the coffee.
          </p>
          <p>
            The result is a concentrate that is naturally sweet, low in acidity, and dense with flavor. We bottle it still — no nitrogen, no carbonation — because the coffee speaks for itself.
          </p>
          <p>
            Every batch is numbered. Every bottle is filled within 48 hours of pressing. Shelf life is 14 days refrigerated. We do not compromise on freshness.
          </p>
        </div>
      </div>
    </section>
  );
}
