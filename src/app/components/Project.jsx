import Image from "next/image";
import Link from "next/link";
import { projectPages } from "../consts";
import { FaArrowLeft } from "react-icons/fa";

export default function DesignProjectPage({ params }) {
  const project = projectPages[params.slug];

  if (!project) return <div>Project not found.</div>;

  return (
    <div className="bg-white text-black">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-50">
            <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-black hover:text-black transition"
            >
            <FaArrowLeft className="w-4 h-4" />
            Back to Home
            </Link>
        </div>

      {/* Hero Image */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute bottom-8 left-8">
          <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          <p className="text-lg uppercase text-black">Role: {project.role}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto py-20 px-6 space-y-16">
        <p className="text-lg text-black max-w-3xl">{project.description}</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold mb-2">Problem</h2>
            <p className="text-black">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Process</h2>
            <p className="text-black">{project.process}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold mb-2">Solution</h2>
            <p className="text-black">{project.solution}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside text-black space-y-1">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Gallery</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {project.gallery.map((img, i) => (
            <img
                key={i}
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full mb-4 rounded-md shadow-md break-inside-avoid"
            />
            ))}
        </div>
        </div>
      </div>
    </div>
  );
}
