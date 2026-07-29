import styles from "./FlavorNotes.module.css";

const notes = [
  {
    id: "note-1",
    name: "Dark Chocolate",
    description:
      "A deep cocoa bitterness that rounds out the finish. Present from first sip, never harsh.",
  },
  {
    id: "note-2",
    name: "Brown Sugar",
    description:
      "Natural sweetness from the cold extraction. No added sugar. The bean does the work.",
  },
  {
    id: "note-3",
    name: "Stone Fruit",
    description:
      "A faint cherry and dried apricot note that lifts the mid-palate. Subtle, not sweet.",
  },
];

export default function FlavorNotes() {
  return (
    <section id="flavor-notes" className={styles.root} aria-labelledby="flavor-notes-heading">
      <div className={`section-container ${styles.inner}`}>
        <div className={styles.header}>
          <div className={styles.label}>Tasting Notes</div>
          <h2 id="flavor-notes-heading" className={styles.heading}>
            Three notes. One cup.
          </h2>
        </div>
        <ul className={styles.grid} role="list">
          {notes.map((note) => (
            <li key={note.id} className={styles.card}>
              <div className={styles.cardIndex} aria-hidden="true" />
              <h3 className={styles.cardName}>{note.name}</h3>
              <p className={styles.cardDesc}>{note.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
