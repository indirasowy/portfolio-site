import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socials } from "../consts";
import { Reveal } from "./ui";

export default function Footer() {
  return (
    <footer id="contact" className="px-4 md:px-8 pb-6 pt-10">
      <Reveal className="max-w-6xl mx-auto rounded-[32px] bg-zinc-900 text-white dark:bg-surface dark:border dark:border-line px-6 py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
        <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-pink-300 mb-4">
          Contact
        </p>
        <h2 className="relative text-4xl md:text-6xl font-bold tracking-tight">
          Let's build something{" "}
          <span className="font-serif italic font-normal text-pink-300">together</span>
        </h2>
        <p className="relative mt-5 text-lg text-white/70 max-w-xl mx-auto">
          I'm always happy to chat about new opportunities, collaborations, or
          your favourite movie.
        </p>
        <a
          href={`mailto:${socials.email}`}
          className="relative mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-900 font-semibold hover:bg-pink-200 transition-colors"
        >
          <FaEnvelope className="w-4 h-4" />
          {socials.email}
        </a>
        <div className="relative mt-8 flex justify-center gap-4 text-2xl">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/70 hover:text-white transition-colors">
            <FaGithub />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
            <FaLinkedin />
          </a>
        </div>
      </Reveal>
      <p className="mt-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Indira Sowy. Designed and built by me.
      </p>
    </footer>
  );
}
