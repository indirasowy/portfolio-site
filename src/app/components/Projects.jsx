"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { projects, designProjects, otherDesigns } from "../consts";
import { SectionHeading, Tabs, Tag } from "./ui";

function ProjectCard({ project, isInternal = false }) {
  const Wrapper = isInternal ? Link : "a";
  const wrapperProps = isInternal
    ? { href: `/${project.slug}` }
    : {
        href: project.link,
        target: "_blank",
        rel: "noopener noreferrer",
      };
  const Arrow = isInternal ? FaArrowRight : FiArrowUpRight;

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex flex-col h-full rounded-3xl border border-line bg-surface overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-accent-soft">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full group-hover:scale-[1.04] transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col flex-grow p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-bold text-xl">{project.title}</h3>
          <span className="flex-shrink-0 w-9 h-9 rounded-full border border-line flex items-center justify-center group-hover:bg-contrast group-hover:text-on-contrast group-hover:border-contrast transition-colors">
            <Arrow className="w-4 h-4" />
          </span>
        </div>
        <p className="text-sm text-muted mt-1">{project.time}</p>
        <p className="text-[15px] text-body mt-3 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

function ImageGallery({ items }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
        {items.map((item, index) => (
          <button
            key={index}
            className="group relative block w-full mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-line bg-surface cursor-zoom-in text-left"
            onClick={() => setSelected(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
            />
            <span className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setSelected(null)}
          >
            <FaTimes className="w-5 h-5" />
          </button>
          <figure className="max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img src={selected.image} alt={selected.title} className="w-full h-auto rounded-xl" />
            <figcaption className="text-white/80 text-center mt-3">{selected.title}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

const tabs = [
  { id: "projects", label: "Dev Projects" },
  { id: "design", label: "UX Case Studies" },
  { id: "gallery", label: "Other Designs" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section id="projects" className="px-6 md:px-8 py-20 md:py-28 max-w-6xl mx-auto">
      <SectionHeading eyebrow="Projects" title="Things I've made">
        Hackathon builds, club platforms, and design case studies.
      </SectionHeading>

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
        >
          {activeTab === "gallery" ? (
            <ImageGallery items={otherDesigns} />
          ) : (
            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {(activeTab === "projects" ? projects : designProjects).map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  isInternal={activeTab === "design"}
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
