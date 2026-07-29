import styles from "./OrderCta.module.css";

export default function OrderCta() {
  return (
    <section id="order" className={styles.root} aria-labelledby="order-heading">
      <div className={`section-container ${styles.inner}`}>
        <div className={styles.label}>Order</div>
        <h2 id="order-heading" className={styles.heading}>
          Ready to order?
        </h2>
        <p className={styles.body}>
          Stillwater ships refrigerated, direct to your door. Minimum order two bottles. Delivered within 48 hours of pressing.
        </p>
        <div className={styles.actions}>
          <a
            href="mailto:order@stillwatercold.com"
            className={`btn-primary ${styles.cta}`}
          >
            Order Now
          </a>
          <p className={styles.subtext}>
            Email us at{" "}
            <a href="mailto:order@stillwatercold.com" className={styles.email}>
              order@stillwatercold.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
