"use client";

import React, { useState } from 'react';

const experiences = [
    {
      company: "Meta",
      role: "Incoming Software Engineer Intern",
      logo: "/logos/meta.png",
      date: "MAY 2025",
      points: [],
    },
    {
      company: "University of British Columbia",
      role: "Teaching Assistant",
      logo: "/logos/ubc.png",
      date: "JAN 2025 - Present",
      points: [],
    },
    {
      company: "Salesforce",
      role: "Software Engineer Intern",
      logo: "/logos/salesforce.png",
      date: "MAY - AUGUST 2024",
      points: [],
    },
    {
      company: "Copperleaf Technologies",
      role: "Software Developer Intern",
      logo: "/logos/copperleaf.png",
      date: "MAY - DECEMBER 2023",
      points: [],
    },
    {
        company: "UBC CEDaR Space Lab",
        role: "Student Operations Engineer",
        logo: "/logos/cedar.png",
        date: "OCTOBER 2022 - APRIL 2023",
        points: [],
    },
    {
        company: "UBC Faculty of Applied Science",
        role: "Student UX Designer",
        logo: "/logos/apsc.png",
        date: "MAY 2022 - AUGUST 2022",
        points: [],
    },
    {
      company: "Dashlabs.ai (YC W21)",
      role: "Software Engineer Intern",
      logo: "/logos/dashlabs.png",
      date: "JUNE - AUGUST 2022",
      points: [],
    },
  ];
  
  const volunteering = [
    {
      company: "nwPlus",
      role: "Developer",
      logo: "/logos/nwplus.png",
      date: "APRIL 2024 – APRIL 2025",
      points: [],
    },
    {
      company: "UBC Marketing Association",
      role: "Vice President of Technology",
      logo: "/logos/ubcma.svg",
      date: "APRIL 2024 – APRIL 2025",
      points: [],
    },
    {
        company: "UBC Women in Computer Science",
        role: "Webmaster",
        logo: "/logos/wics.png",
        date: "MAY 2024 – JANUARY 2025",
        points: [],
    },
    {
        company: "UBC LaunchPad",
        role: "Designer and Developer",
        logo: "/logos/launchpad.png",
        date: "JANUARY 2023 – APRIL 2023",
        points: [],
    },
    {
        company: "The Creative Solution",
        role: "Software Developer",
        logo: "/logos/tcs.jpeg",
        date: "AUGUST 2022 – DECEMBER 2022",
        points: [],
    },
    {
        company: "Mosa",
        role: "Website Designer",
        logo: "/logos/mosa.jpeg",
        date: "FEBRUARY 2022 – JUNE 2022",
        points: [],
    },
    {
        company: "NNECT",
        role: "Graphic Designer",
        logo: "/logos/nnect.jpeg",
        date: "JANUARY 2022 – APRIL 2022",
        points: [],
    },
  ];
  
 
function ExperienceBlock({ data }) {
    return (
      <div className="space-y-12 border-l-2 border-gray-500 pl-6 mt-8">
        {data.map((exp, index) => (
          <div key={index} className="relative pl-6">
            <div className="absolute -left-[31px] top-2 w-3 h-3 bg-gray-500 rounded-full" />
            <div className="flex items-center gap-4 mb-2">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-6 h-6 object-contain"
              />
              <h3 className="text-2xl font-semibold">{exp.company}</h3>
            </div>
            <p className="font-semibold text-gray-900 mb-1 text-lg">{exp.role}</p>
            {exp.date && (
              <p className="uppercase text-sm font-semibold text-gray-500 mb-2">
                {exp.date}
              </p>
            )}
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  
  export default function ExperienceSection() {
    const [activeTab, setActiveTab] = useState("experience");
  
    return (
      <section id="experience" className="px-8 py-20 max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center">Experience</h2>
  
        {/* Toggle Tabs */}
        <div className="flex justify-center gap-4 mb-4">
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "experience"
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveTab("experience")}
          >
            Work Experience
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "volunteering"
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveTab("volunteering")}
          >
            Volunteering
          </button>
        </div>
  
        {/* Dynamic Content */}
        {activeTab === "experience" ? (
          <ExperienceBlock data={experiences} />
        ) : (
          <ExperienceBlock data={volunteering} />
        )}
      </section>
    );
  }