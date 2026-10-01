import Image from "next/image";
import { skills } from "../consts";
import { Reveal, SectionHeading } from "./ui";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-8 py-20 md:py-28 max-w-6xl mx-auto">
      <SectionHeading eyebrow="About" title="A little about me" />

      <div className="grid md:grid-cols-[360px_1fr] gap-10 md:gap-16 items-start">
        <Reveal className="relative w-full max-w-[360px] mx-auto aspect-square rounded-[32px] overflow-hidden shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
          <Image
            src="/me.png"
            alt="Photo of Indira"
            fill
            sizes="360px"
            className="object-cover"
          />
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <p className="text-2xl md:text-3xl font-semibold leading-snug">
              I'm Indira, a software engineer and designer who recently graduated
              from the University of British Columbia with a degree in{" "}
              <span className="font-serif italic font-normal text-accent">
                Cognitive Systems
              </span>
              , blending computer science and psychology.
            </p>
            <p className="mt-6 text-lg text-muted">
              I love building software that people actually enjoy using, from
              fundraising tools reaching a billion users at Meta to mobile
              infrastructure and security at Wealthsimple. My background in design means I
              care as much about how something feels as how it works.
            </p>
            <p className="mt-4 text-lg text-muted">
              Outside of work, I spent much of university organizing hackathons
              with nwPlus, designing for BizTech, and building tools for student
              clubs. I'm also a Major League Hacking Top 50 Hacker.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} className="mt-16 md:mt-20 rounded-3xl border border-line bg-surface p-6 md:p-10">
        <h3 className="text-xl font-bold mb-6">Things I work with</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
                {group}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full border border-line bg-background"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
