import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={styles.navRoot}
    >
      <div className={styles.navInner}>
        <a href="/" className={styles.navWordmark}>
          Stillwater
        </a>
        <div className={styles.navLinks}>
          <a href="#the-method" className={styles.navLink}>
            The Method
          </a>
          <a href="#service-details" className={styles.navLink}>
            Service Details
          </a>
          <a href="#book" className={styles.navLink}>
            Book Now
          </a>
        </div>
        <a href="#book" className={`btn-primary ${styles.navCta}`}>
          Book a Service
        </a>
      </div>
    </nav>
  );
}
