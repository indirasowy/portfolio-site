import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectPages } from "../consts";
import { FaArrowLeft } from "react-icons/fa";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Reveal } from "./ui";

function Block({ label, children }) {
  return (
    <Reveal className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-12 py-10 border-t border-line">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent pt-1">
        {label}
      </h2>
      <div className="text-lg text-body leading-relaxed">{children}</div>
    </Reveal>
  );
}

export default function DesignProjectPage({ slug }) {
  const project = projectPages[slug];

  if (!project) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow px-6 md:px-8 max-w-6xl mx-auto w-full">
        <div className="pt-8 md:pt-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line bg-surface text-sm font-medium hover:border-foreground transition-colors"
          >
            <FaArrowLeft className="w-3 h-3" />
            All projects
          </Link>
        </div>

        <Reveal className="mt-10 md:mt-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            UX Case Study
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{project.title}</h1>
          <p className="mt-5 text-xl text-muted">{project.description}</p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-soft text-accent-ink px-4 py-1.5 text-sm font-semibold">
            Role: {project.role}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-10 md:mt-14 w-full aspect-[16/9] rounded-[28px] overflow-hidden border border-line bg-surface">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Block label="Problem">
            <p>{project.problem}</p>
          </Block>
          <Block label="Process">
            <p>{project.process}</p>
          </Block>
          <Block label="Solution">
            <p>{project.solution}</p>
          </Block>
          <Block label="Features">
            <ul className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, i) => {
                const [name, ...rest] = feature.split(": ");
                return (
                  <li key={i} className="rounded-2xl border border-line bg-surface p-5">
                    <p className="font-semibold text-foreground">{name}</p>
                    {rest.length > 0 && (
                      <p className="mt-1 text-base text-muted">{rest.join(": ")}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </Block>
        </div>

        <section className="py-10 border-t border-line mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-8">
            Gallery
          </h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {project.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full mb-5 rounded-2xl border border-line break-inside-avoid"
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
