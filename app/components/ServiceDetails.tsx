import React from "react";

export default function ServiceDetails() {
  return (
    <section
      id="service-details"
      className="bg-[var(--color-canvas)] py-[var(--space-5xl)] px-[var(--space-lg)] md:px-[var(--space-2xl)]"
    >
      <div className="max-w-[var(--breakpoint-desktop)] mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] font-[500] text-[var(--color-text-primary)] mb-[var(--space-2xl)] text-left">
          Service Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-xl)] mb-[var(--space-xl)]">
          {/* Tier 1: Standard Clean */}
          <div className="bg-[var(--color-surface)] border-[1px] border-solid border-[var(--color-border)] rounded-[var(--radius-card)] p-[var(--space-2xl)] flex flex-col">
            <div className="flex flex-col mb-[var(--space-lg)]">
              <h3 className="font-[family-name:var(--font-display)] text-[length:var(--text-h3)] font-[500] text-[var(--color-text-primary)] mb-[var(--space-xs)]">
                Standard Clean
              </h3>
              <span className="font-[family-name:var(--font-mono)] text-[length:var(--text-mono-callout)] text-[var(--color-accent-primary)]">
                $140
              </span>
            </div>
            
            <p className="font-[family-name:var(--font-body)] text-[length:var(--text-body)] text-[var(--color-text-secondary)] mb-[var(--space-lg)]">
              Up to 2 bedrooms. Surfaces, floors, kitchen, bathroom. Approx. 2.5 hours.
            </p>

            <ul className="flex-grow space-y-[var(--space-sm)] mb-[var(--space-lg)]">
              {[
                "Kitchen surfaces & appliance exteriors",
                "Bathroom scrub & sanitize",
                "Vacuum & mop all floors",
                "Dusting throughout",
                "Trash removal",
              ].map((item) => (
                <li
                  key={item}
                  className="font-[family-name:var(--font-body)] text-[length:var(--text-body)] text-[var(--color-text-secondary)] pl-[var(--space-md)] border-l-[2px] border-solid border-[var(--color-border)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tier 2: Deep Clean */}
          <div className="bg-[var(--color-surface)] border-[1px] border-solid border-[var(--color-border)] rounded-[var(--radius-card)] p-[var(--space-2xl)] flex flex-col">
            <div className="flex flex-col mb-[var(--space-lg)]">
              <h3 className="font-[family-name:var(--font-display)] text-[length:var(--text-h3)] font-[500] text-[var(--color-text-primary)] mb-[var(--space-xs)]">
                Deep Clean
              </h3>
              <span className="font-[family-name:var(--font-mono)] text-[length:var(--text-mono-callout)] text-[var(--color-accent-primary)]">
                $240
              </span>
            </div>

            <p className="font-[family-name:var(--font-body)] text-[length:var(--text-body)] text-[var(--color-text-secondary)] mb-[var(--space-lg)]">
              Up to 2 bedrooms. Everything in Standard plus inside appliances, baseboards, and interior windows. Approx. 4 hours.
            </p>

            <ul className="flex-grow space-y-[var(--space-sm)] mb-[var(--space-lg)]">
              {[
                "Kitchen surfaces & appliance exteriors",
                "Bathroom scrub & sanitize",
                "Vacuum & mop all floors",
                "Dusting throughout",
                "Trash removal",
                "Inside oven & refrigerator",
                "Baseboards & window sills",
                "Interior windows",
              ].map((item) => (
                <li
                  key={item}
                  className="font-[family-name:var(--font-body)] text-[length:var(--text-body)] text-[var(--color-text-secondary)] pl-[var(--space-md)] border-l-[2px] border-solid border-[var(--color-border)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[var(--space-lg)]">
          <p className="font-[family-name:var(--font-body)] text-[length:var(--text-label)] text-[var(--color-text-muted)] uppercase tracking-[0.08em]">
            Add-ons available: inside cabinets (+$40), laundry fold (+$30), fridge deep-clean (+$25). Contact us to customize.
          </p>
          
          <a
            href="#book"
            className="inline-block bg-[var(--color-accent-primary)] text-[var(--color-surface)] px-[var(--space-lg)] py-[var(--space-md)] rounded-[var(--radius-card)] font-[family-name:var(--font-body)] font-[500] transition-colors hover:bg-[var(--color-accent-primary)]/90 btn-primary"
          >
            Book a Service
          </a>
        </div>
      </div>
    </section>
  );
}
