"use client";

import { useState, useEffect, Fragment } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <Fragment>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md w-full px-8 md:px-16 py-8 md:py-12 flex justify-between items-center">
        <h1 className="text-xl font-bold">IS.</h1>
        <ul className="hidden sm:flex gap-12 text-xl font-medium">
          <li><a href="#hero" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#experience" className="hover:underline">Experience</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
        </ul>
        <button
          className="sm:hidden text-black"
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
        >
          <FaBars className="w-8 h-8" />
        </button>
      </nav>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-[98]"
            onClick={() => setIsOpen(false)}
          />

          <div
            className="fixed top-0 right-0 h-full w-64 bg-white z-[99] shadow-lg flex flex-col justify-between p-8 animate-slide-in"
          >
            <button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="self-end"
            >
              <FaTimes className="w-8 h-8" />
            </button>

            <ul className="flex flex-col gap-8 text-3xl font-semibold mt-10">
              <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
              <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
              <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            </ul>

            <div className="flex justify-center gap-8 mt-10">
              <a href="https://www.linkedin.com/in/indirasowy/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-8 h-8 text-pink-400" />
              </a>
              <a href="https://github.com/indirasowy" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-8 h-8 text-pink-400" />
              </a>
              <a href="mailto:indira.sowy@gmail.com">
                <FaEnvelope className="w-8 h-8 text-pink-400" />
              </a>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
}