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
          <a href="#brewing-story" className={styles.navLink}>
            Our Brew
          </a>
          <a href="#flavor-notes" className={styles.navLink}>
            Flavors
          </a>
          <a href="#stockists" className={styles.navLink}>
            Find Us
          </a>
        </div>
        <a href="#order" className={`btn-primary ${styles.navCta}`}>
          Order Now
        </a>
      </div>
    </nav>
  );
}
