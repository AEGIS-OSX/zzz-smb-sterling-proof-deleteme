import { ProjectImage } from "@/app/components/ProjectImage";

export default function Nav() {
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="sticky top-0 z-50 bg-[var(--color-canvas)]"
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-[var(--space-xl)] max-md:px-[var(--space-md)]">
        <div className="flex items-center gap-[var(--space-sm)]">
          <ProjectImage id="logo" className="h-8 w-auto" />
          <span className="font-[family-name:var(--font-display)] text-[length:var(--text-h3)] text-[var(--color-text-primary)] font-medium">
            Stillwater
          </span>
        </div>
        <a href="#booking" className="nav-cta">
          Book a Service
        </a>
      </div>
      <style jsx>{`
        .nav-cta {
          display: inline-block;
          background-color: var(--color-accent-primary);
          color: var(--color-surface);
          font-family: var(--font-body);
          font-size: var(--text-label);
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 10px var(--space-lg);
          border-radius: var(--radius-card);
          text-decoration: none;
          white-space: nowrap;
          outline: 2px solid transparent;
          outline-offset: 1px;
          transition: background-color 0.15s var(--ease-out);
        }
        .nav-cta:hover {
          background-color: var(--color-accent-primary-hover);
        }
        .nav-cta:focus-visible {
          outline: 2px solid var(--color-focus);
        }
        .nav-cta:active {
          background-color: var(--color-accent-primary-hover);
        }
      `}</style>
    </nav>
  );
}
