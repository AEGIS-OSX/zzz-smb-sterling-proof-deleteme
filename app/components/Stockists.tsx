import styles from "./Stockists.module.css";

const stockists = [
  { id: "s1", name: "Provisions Market", location: "Brooklyn, NY" },
  { id: "s2", name: "Forage & Co.", location: "Portland, OR" },
  { id: "s3", name: "The Good Cup", location: "Austin, TX" },
  { id: "s4", name: "Larder", location: "Chicago, IL" },
  { id: "s5", name: "Brimstone Coffee", location: "Nashville, TN" },
  { id: "s6", name: "Acre General", location: "Los Angeles, CA" },
];

export default function Stockists() {
  return (
    <section id="stockists" className={styles.root} aria-labelledby="stockists-heading">
      <div className={`section-container ${styles.inner}`}>
        <div className={styles.header}>
          <div className={styles.label}>Find Us</div>
          <h2 id="stockists-heading" className={styles.heading}>
            Stillwater is available at select retailers.
          </h2>
        </div>
        <ul className={styles.list} role="list">
          {stockists.map((s) => (
            <li key={s.id} className={styles.item}>
              <span className={styles.itemName}>{s.name}</span>
              <span className={styles.itemLocation}>{s.location}</span>
            </li>
          ))}
        </ul>
        <p className={styles.note}>
          Not near a stockist?{" "}
          <a href="#order" className={styles.noteLink}>
            Order direct.
          </a>
        </p>
      </div>
    </section>
  );
}
