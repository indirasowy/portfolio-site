const projects = [
    {
      title: "UBCMA Membership Portal",
      time: "May 2024 – April 2025",
      image: "/projects/membership.png",
      tech: ["Next.js", "TypeScript", "Firebase", "Stripe"],
      description:
        "A membership portal for my marketing club's members to register for our events and find fellow members, with 300+ users.",
      link: "https://membership.ubcma.ca/"
    },
    {
      title: "UBCMA Job Board",
      time: "May 2023 – April 2024",
      image: "/projects/jobboard.png",
      tech: ["Next.js", "TypeScript", "Python", "tRPC"],
      description:
        "A job board for students to find marketing-related internships and jobs, with 200+ users.",
      link: "https://devpost.com/software/marketing-job-portal"
    },
    {
      title: "Communal Cars",
      time: "August 2022",
      image: "/projects/communalcars.png",
      tech: ["React Native", "Redux", "Express.js"],
      description:
        "A mobile app for users to rent out cars. Awarded as a Top 8 finalist and Most Creative Use of Twilio at Hack the 6ix.",
      link: "https://devpost.com/software/communal-cars"
    },
    {
      title: "Mapcessibility",
      time: "January 2024",
      image: "/projects/mapcessibility.png",
      tech: ["Next.js", "Firebase", "MappedIn"],
      description:
        "A map-based web application to find accessible indoor routes for people with disabilities, made at nwHacks.",
      link: "https://devpost.com/software/mapcessibility"
    },
    {
      title: "Inspiritzia",
      time: "January 2023",
      image: "/projects/inspiritzia.jpg",
      tech: ["React", "Python", "Flask", "SQLite"],
      description:
        "A fashion-based community platform for users to share outfits, made at girlCode",
      link: "https://devpost.com/software/inspiritzia"
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 bg-white rounded-2xl shadow-md p-4"
            >
              <div className="w-full sm:w-48 h-32 relative flex-shrink-0 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-semibold text-lg hover:underline">{project.title}</h3>
              </a>
                <p className="text-sm text-gray-500 mb-2">{project.time}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-pink-400 text-white text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  