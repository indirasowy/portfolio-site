"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, designProjects, otherDesigns } from '../consts'

function ProjectCard({ project, isInternal = false }) {
    const Wrapper = isInternal ? Link : "a";
    const wrapperProps = isInternal
      ? { href: `/${project.slug}` }
      : {
          href: project.link,
          target: "_blank",
          rel: "noopener noreferrer",
        };
  
    return (
      <Wrapper {...wrapperProps}>
        <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
          <div className="w-full sm:w-48 h-32 relative flex-shrink-0 overflow-hidden rounded-xl">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg hover:underline">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{project.time}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-pink-400 text-white text-xs px-2 py-1 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-700">{project.description}</p>
          </div>
        </div>
      </Wrapper>
    );
  }
  
  function ImageGallery({ items }) {
    const [selected, setSelected] = useState(null);
  
    return (
      <>
        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg shadow-md w-full h-64 object-cover hover:scale-[1.02] transition"
              />
              <h4 className="text-lg font-semibold mt-3">{item.title}</h4>
            </div>
          ))}
        </div>
  
        {/* Modal */}
        {selected && (
          <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full relative max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-black text-2xl font-bold hover:text-pink-500"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
        )}
      </>
    );
  }
  
  export default function Projects() {
    const [activeTab, setActiveTab] = useState("projects");
  
    return (
      <section id="projects" className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center">Projects</h2>
  
        {/* Tab Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["projects", "design", "gallery"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {tab === "projects"
                ? "Dev Projects"
                : tab === "design"
                ? "UX Case Studies"
                : "Other Designs"}
            </button>
          ))}
        </div>
  
        {/* Content */}
        {activeTab === "gallery" ? (
          <ImageGallery items={otherDesigns} />
        ) : (
          <div className="grid gap-12 md:grid-cols-2">
            {(activeTab === "projects" ? projects : designProjects).map(
              (project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  isInternal={activeTab === "design"}
                />
              )
            )}
          </div>
        )}
      </section>
    );
  }