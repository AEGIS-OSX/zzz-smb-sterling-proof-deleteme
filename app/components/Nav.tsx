export default function Nav() {
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="sticky top-0 z-50 w-full bg-[var(--color-canvas)]"
    >
      <div className="max-w-[1280px] mx-auto px-[var(--space-md)] md:px-[var(--space-xl)] h-16 flex items-center justify-between">
        <a href="/" className="font-[family-name:var(--font-display)] text-[20px] font-medium tracking-[-0.01em] text-[var(--color-text-primary)] no-underline">
          Stillwater
        </a>
        <div className="hidden md:flex items-center gap-[var(--space-xl)]">
          <a href="#story" className="font-[family-name:var(--font-body)] text-[var(--text-label)] font-medium tracking-[0.08em] uppercase text-[var(--color-text-secondary)] no-underline transition-colors duration-150 hover:text-[var(--color-text-primary)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-2">
            Story
          </a>
          <a href="#flavors" className="font-[family-name:var(--font-body)] text-[var(--text-label)] font-medium tracking-[0.08em] uppercase text-[var(--color-text-secondary)] no-underline transition-colors duration-150 hover:text-[var(--color-text-primary)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-2">
            Flavors
          </a>
          <a href="#stockists" className="font-[family-name:var(--font-body)] text-[var(--text-label)] font-medium tracking-[0.08em] uppercase text-[var(--color-text-secondary)] no-underline transition-colors duration-150 hover:text-[var(--color-text-primary)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-2">
            Stockists
          </a>
          <a href="#order" className="font-[family-name:var(--font-body)] text-[var(--text-label)] font-medium tracking-[0.08em] uppercase text-[var(--color-text-secondary)] no-underline transition-colors duration-150 hover:text-[var(--color-text-primary)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-2">
            Order
          </a>
        </div>
        <a href="#order" className="btn-primary py-[10px] px-[20px]">
          Order Now
        </a>
      </div>
    </nav>
  );
}