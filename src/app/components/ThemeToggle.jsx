"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "light");

    // Follow the system setting until the visitor picks a theme themselves.
    const media = matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      let saved = null;
      try {
        saved = localStorage.getItem("theme");
      } catch {}
      if (saved) return;
      const next = e.matches ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="w-9 h-9 rounded-full border border-line bg-surface flex items-center justify-center text-foreground hover:border-foreground transition-colors"
    >
      {/* Render nothing until mounted so server and client markup match. */}
      {theme && (isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />)}
    </button>
  );
}
