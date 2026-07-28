import ProjectImage from "./ProjectImage";
import styles from "./NYCContext.module.css";

export default function NYCContext() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--space-5xl)]">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-[var(--space-3xl)] items-center">
          <div>
            <ProjectImage id="nyc-context" className={styles.nycImage} />
          </div>
          <div className="flex flex-col gap-[var(--space-md)]">
            <span className="font-[family-name:var(--font-body)] text-[var(--text-label)] font-medium tracking-[0.08em] uppercase text-[var(--color-accent-primary)]">
              Why NYC Is Different
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[var(--text-h2)] font-medium text-[var(--color-text-primary)] leading-[1.2]">
              Apartments that demand precision.
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--text-body-lg)] text-[var(--color-text-secondary)] leading-[1.6] max-w-[52ch]">
              NYC apartments are compact, dense, and lived-in hard. We train specifically for pre-war layouts, galley kitchens, and the particular grime that comes with city living. Our teams know the boroughs — and they know how to work efficiently in tight spaces without cutting corners.
            </p>
            <div className="mt-[var(--space-md)]">
              <a href="#service-details" className="btn-primary">
                See Service Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
