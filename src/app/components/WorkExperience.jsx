"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experiences, volunteering } from "../consts";
import { SectionHeading, Tabs, Tag } from "./ui";

function ExperienceCard({ exp, isCurrent }) {
  return (
    <div className="relative pl-8 md:pl-12">
      <span
        className={`absolute left-0 top-7 -translate-x-1/2 w-3 h-3 rounded-full ring-4 ring-background ${
          isCurrent ? "bg-accent" : "bg-zinc-300 dark:bg-zinc-600"
        }`}
      />
      <div className="rounded-2xl border border-line bg-surface p-5 md:p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex-shrink-0 rounded-xl border border-line bg-white flex items-center justify-center overflow-hidden">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold leading-tight">{exp.company}</h3>
              <p className="text-muted font-medium">{exp.role}</p>
            </div>
          </div>
          <div className="sm:text-right text-sm text-muted flex-shrink-0">
            <p className="font-semibold text-foreground">{exp.date}</p>
            {exp.location && <p>{exp.location}</p>}
          </div>
        </div>

        {exp.points.length > 0 && (
          <ul className="mt-5 space-y-2 text-[15px] md:text-base text-body">
            {exp.points.map((point, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {exp.tech && (
          <div className="mt-5 flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const tabs = [
  { id: "experience", label: "Work" },
  { id: "volunteering", label: "Leadership & Volunteering" },
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("experience");
  const data = activeTab === "experience" ? experiences : volunteering;

  return (
    <section id="experience" className="px-6 md:px-8 py-20 md:py-28 max-w-6xl mx-auto">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <div className="mb-10">
        <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl space-y-6 ml-1.5 border-l border-line"
        >
          {data.map((exp) => (
            <ExperienceCard
              key={`${exp.company}-${exp.role}`}
              exp={exp}
              isCurrent={exp.date.includes("Present")}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
