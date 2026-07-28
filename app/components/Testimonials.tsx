import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: `I've had three cleaning services in the past two years. Stillwater is the first one I've kept.`,
    attribution: "Maya R., Upper West Side",
    layout: "left",
  },
  {
    quote: `They remembered that I keep my cast iron on the stove and worked around it. That's the detail that matters.`,
    attribution: "James T., Park Slope",
    layout: "offset",
  },
  {
    quote: "Booking took four minutes. The apartment was done before I got home from work.",
    attribution: "Priya S., Astoria",
    layout: "indent",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What Our Clients Say</h2>
        {testimonials.map((item, index) => {
          const wrapperClass =
            item.layout === "offset"
              ? styles.offsetRight
              : item.layout === "indent"
                ? styles.indentLeft
                : styles.alignLeft;

          return (
            <div key={index} className={`${styles.quoteCard} ${wrapperClass}`}>
              <span className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className={styles.quoteText}>
                {item.quote}
              </blockquote>
              <footer className={styles.attribution}>
                &mdash; {item.attribution}
              </footer>
            </div>
          );
        })}
      </div>
    </section>
  );
}
