"use client";

import { useState, useEffect, Fragment } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socials } from "../consts";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Fragment>
      <header className="sticky top-0 z-50 w-full px-4 md:px-8 pt-4">
        <nav
          className={`mx-auto max-w-6xl flex justify-between items-center rounded-full px-5 md:px-6 py-3 transition-all duration-300 ${
            scrolled
              ? "bg-surface/75 backdrop-blur-md border border-line shadow-sm"
              : "bg-transparent border border-transparent"
          }`}
        >
          <a href="/#hero" className="text-xl font-bold tracking-tight">
            IS<span className="text-accent">.</span>
          </a>
          <ul className="hidden sm:flex items-center gap-8 text-[15px] font-medium text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-foreground transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={`mailto:${socials.email}`}
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-contrast text-on-contrast text-sm font-semibold hover:bg-accent transition-colors"
            >
              Say hi
            </a>
            <button
              className="sm:hidden text-foreground"
              aria-label="Open menu"
              onClick={() => setIsOpen(true)}
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-[98]"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed top-0 right-0 h-full w-72 bg-background z-[99] shadow-xl flex flex-col justify-between p-8 animate-slide-in">
            <button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="self-end"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            <ul className="flex flex-col gap-6 text-3xl font-semibold mt-10">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex gap-6 mt-10">
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="w-7 h-7 text-accent" />
              </a>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="w-7 h-7 text-accent" />
              </a>
              <a href={`mailto:${socials.email}`} aria-label="Email">
                <FaEnvelope className="w-7 h-7 text-accent" />
              </a>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
}
