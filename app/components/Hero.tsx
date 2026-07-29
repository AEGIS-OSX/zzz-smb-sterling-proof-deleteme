import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroRoot} aria-label="Hero">
      <div className={`section-container ${styles.heroInner}`}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Small-batch · Cold brew</p>
          <h1 className={styles.heroHeadline}>
            Brewed slow.<br />Served still.
          </h1>
          <p className={styles.heroBody}>
            Stillwater is a single-origin cold brew steeped for 20 hours. No heat. No shortcuts. Just coffee and time.
          </p>
          <a href="#order" className={`btn-primary ${styles.heroCta}`}>
            Order Now
          </a>
        </div>
        <div className={styles.heroImageWrap} aria-hidden="true">
          <div className={styles.heroImagePlaceholder}>
            <span className={styles.heroImageLabel}>Stillwater bottle</span>
          </div>
        </div>
      </div>
    </section>
  );
}
