"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const descriptions = [
    "a 4th year COGS student.",
    1000,
    "a software engineer.",
    1000,
    "a UX designer.",
    1000,
    "a hackathon organizer.",
    1000,
    "a film nerd.",
    1000
  ];

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-center md:gap-28">
      <div className="text-center md:text-left">
        <h2 className="text-5xl md:text-8xl font-bold mb-4 mt-20 md:mt-0">Hi, I'm Indira</h2>
        <TypeAnimation
          className="text-2xl md:text-5xl text-pink-400 font-bold"
          sequence={descriptions}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          speed={25}
        />
      </div>
      <Image
        src="/icon.png"
        alt="Profile picture"
        width={580}
        height={580}
        className="rounded-full"
      />
    </section>
  );
}
