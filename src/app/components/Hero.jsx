"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { socials } from "../consts";

const descriptions = [
  "software engineer.",
  1200,
  "UX designer.",
  1200,
  "UBC COGS grad.",
  1200,
  "hackathon organizer.",
  1200,
  "film nerd.",
  1200,
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative px-6 md:px-8 pt-10 pb-20 md:pt-16 md:pb-28 max-w-6xl mx-auto grid md:grid-cols-[1.25fr_1fr] items-center gap-12 md:gap-8"
    >
      <div className="order-2 md:order-1 text-center md:text-left">
        <motion.a
          {...fadeUp(0)}
          href="#experience"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Currently SWE Intern @ Wealthsimple
        </motion.a>

        <motion.h1
          {...fadeUp(0.1)}
          className="mt-6 text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95]"
        >
          Hi, I'm{" "}
          <span className="font-serif italic font-normal text-accent">Indira</span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="mt-6 text-2xl md:text-3xl font-semibold">
          I'm a{" "}
          <TypeAnimation
            sequence={descriptions}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={40}
            className="text-accent"
          />
        </motion.p>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-5 text-lg text-muted max-w-xl mx-auto md:mx-0"
        >
          Recent Cognitive Systems graduate from UBC who builds products at the
          intersection of engineering and design. Previously @ Meta and Salesforce.
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-contrast text-on-contrast font-semibold hover:bg-accent transition-colors"
          >
            See my work
            <FaArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3.5 rounded-full border border-line bg-surface hover:border-foreground transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3.5 rounded-full border border-line bg-surface hover:border-foreground transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="order-1 md:order-2 relative mx-auto w-64 sm:w-80 md:w-full max-w-md aspect-square"
      >
        <div className="absolute inset-0 rounded-full bg-accent-soft dark:bg-pink-200" />
        <div className="absolute -inset-4 rounded-full border border-dashed border-accent/30" />
        <Image
          src="/icon.png"
          alt="Illustration of Indira drinking bubble tea"
          fill
          priority
          sizes="(min-width: 768px) 450px, 320px"
          className="relative object-contain mix-blend-multiply scale-110"
        />
      </motion.div>
    </section>
  );
}
