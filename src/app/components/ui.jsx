"use client";

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, children }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
        {eyebrow}
      </p>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h2>
      {children && (
        <p className="mt-4 text-lg text-muted max-w-2xl">{children}</p>
      )}
    </Reveal>
  );
}

export function Tabs({ tabs, active, onChange }) {
  return (
    <div
      role="tablist"
      className="inline-flex flex-wrap gap-1 p-1 rounded-full bg-surface border border-line"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={active === tab.id}
          onClick={() => onChange(tab.id)}
          className={`relative px-4 md:px-5 py-2 rounded-full text-sm md:text-base font-semibold cursor-pointer transition-colors ${
            active === tab.id ? "text-on-contrast" : "text-muted hover:text-foreground"
          }`}
        >
          {active === tab.id && (
            <motion.span
              layoutId={`tab-pill-${tabs[0].id}`}
              className="absolute inset-0 rounded-full bg-contrast"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span className="relative">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

export function Tag({ children }) {
  return (
    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent-soft text-accent-ink">
      {children}
    </span>
  );
}
