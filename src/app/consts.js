
export const experiences = [
    {
      company: "Meta",
      role: "Incoming Software Engineer Intern",
      logo: "/logos/meta.png",
      date: "MAY 2025",
      points: [],
    },
    {
      company: "University of British Columbia",
      role: "Teaching Assistant",
      logo: "/logos/ubc.png",
      date: "JAN 2025 - Present",
      points: [],
    },
    {
      company: "Salesforce",
      role: "Software Engineer Intern",
      logo: "/logos/salesforce.png",
      date: "MAY - AUGUST 2024",
      points: [],
    },
    {
      company: "Copperleaf Technologies",
      role: "Software Developer Intern",
      logo: "/logos/copperleaf.png",
      date: "MAY - DECEMBER 2023",
      points: [],
    },
    {
        company: "UBC CEDaR Space Lab",
        role: "Student Operations Engineer",
        logo: "/logos/cedar.png",
        date: "OCTOBER 2022 - APRIL 2023",
        points: [],
    },
    {
        company: "UBC Faculty of Applied Science",
        role: "Student UX Designer",
        logo: "/logos/apsc.png",
        date: "MAY 2022 - AUGUST 2022",
        points: [],
    },
    {
      company: "Dashlabs.ai (YC W21)",
      role: "Software Engineer Intern",
      logo: "/logos/dashlabs.png",
      date: "JUNE - AUGUST 2022",
      points: [],
    },
  ];
  
  export const volunteering = [
    {
      company: "nwPlus",
      role: "Developer",
      logo: "/logos/nwplus.png",
      date: "APRIL 2024 – APRIL 2025",
      points: [],
    },
    {
      company: "UBC Marketing Association",
      role: "Vice President of Technology",
      logo: "/logos/ubcma.svg",
      date: "APRIL 2024 – APRIL 2025",
      points: [],
    },
    {
        company: "UBC Women in Computer Science",
        role: "Webmaster",
        logo: "/logos/wics.png",
        date: "MAY 2024 – JANUARY 2025",
        points: [],
    },
    {
        company: "UBC LaunchPad",
        role: "Designer and Developer",
        logo: "/logos/launchpad.png",
        date: "JANUARY 2023 – APRIL 2023",
        points: [],
    },
    {
        company: "The Creative Solution",
        role: "Software Developer",
        logo: "/logos/tcs.jpeg",
        date: "AUGUST 2022 – DECEMBER 2022",
        points: [],
    },
    {
        company: "Mosa",
        role: "Website Designer",
        logo: "/logos/mosa.jpeg",
        date: "FEBRUARY 2022 – JUNE 2022",
        points: [],
    },
    {
        company: "NNECT",
        role: "Graphic Designer",
        logo: "/logos/nnect.jpeg",
        date: "JANUARY 2022 – APRIL 2022",
        points: [],
    },
  ];

export const projects = [
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

 export const designProjects = [
    {
      title: "Alliance",
      time: "March 2022",
      image: "/projects/alliance.png",
      tech: ["User Research", "Prototyping", "UI Design"],
      description: "A website to connect creatives together to work on projects and grow their portfolios, made at a hackathon.",
      slug: "alliance",
    },
    {
      title: "Notion for PMs",
      time: "October - November 2022",
      image: "/projects/notion.png",
      tech: ["User Research", "UI Design"],
      description: "A repurposed Notion the Product Management/agile market, made for UBC Product Managemnt Club's fellowship.",
      slug: "notion-for-pms",
    },
    {
      title: "entreprenHER",
      time: "October - November 2022",
      image: "/projects/entreprenher.png",
      tech: ["UI Design", "HTML", "CSS"],
      description: "A web application to find and support local female-owned businesses in your area, done for a hackathon, done for cmd-f.",
      slug: "entreprenher",
    },
    {
        title: "onlyProfs",
        time: "January 2023",
        image: "/projects/onlyprofs.png",
        tech: ["UI Design", "React"],
        description: "A platform for professors to earn passive income by uploading lecture materials and resources for students, done for nwHacks.",
        slug: "onlyprofs",
    },
    {
        title: "REACT Lab",
        time: "July - August 2022",
        image: "/projects/reactlab.png",
        tech: ["User Research", "Prototyping", "UI Design"],
        description: "A website displaying research projects by a university lab on transportation systems.",
        slug: "react-lab",
    },
  ];  


export const projectPages = {
    "alliance": {
      title: "Alliance",
      role: "UX Researcher and Designer",
      heroImage: "/projects/alliance/alliance-comp.png",
      description: `A website to connect creative independents together to work on projects and grow their portfolios, done for a team hackathon.`,
      problem: `For this hackathon, our team wanted to address a problem we noticed in the creative and tech industry. The tech industry is a growing community consisting of students, freelancers, and employees taking on different fields. A certain branch of the tech industry that exercises “creative independence” are those in Design, Engineering, and Product. In this branch, projects play a significant role in upping one’s portfolio. However, when projects require collaborative work, tech aspirants, especially those who are new to the industry or field, may not know who to reach out to. This is because they have limited resources, knowledge, and no community to reach out to.`,
      process: `For research, I crafted had an initial survey of individuals in the industries of design, engineering, and product who were interested in working on projects. Participants were chosen were invited to an hour interview in an attempt to understand how collaboration is scouted by tech aspirants and the challenges they face. The research found that individuals struggled to get experience working on collaborative projects without having to apply for actual jobs. Moreover, they faced challenges looking for collaborators who were willing to work with them without some sort of compensation. Our team concluded that there are many individuals who want to collaborate, but don't know where to find like-minded people.`,
      solution: `Our team created a website that connects tech aspirants who exercise “creative independence” to one another for collaborative work on projects they can add to their experiences and portfolios. This website also aims to build a peer-to-peer network or a “creative independent” community that fosters creativity and innovation by allowing them to brainstorm various projects to work on together. Its main goal is to be the gateway for their career through upskilling and collaboration.`,
      features: [
          "Personalized Onboarding: Users answer questions about their field, interests, experience, and skills to build their profile.",
          "Discovery Feed: Explore user-submitted projects with detailed goals, collaboration needs, and creative inspirations.",
          "Collaboration Matching: Get suggested users and projects based on your background and goals.",
          "Project Details View: Learn more about each project and apply directly through the platform."
      ],
      gallery: [
        "/projects/alliance/postits.png",
        "/projects/alliance/persona1.png",
        "/projects/alliance/persona2.png",
        "/projects/alliance/mockups.png",
        "/projects/alliance.png",
        "/projects/alliance/discover.png",
        "/projects/alliance/project.png",
        "/projects/alliance/signup.png",
      ],
    },
    "notion-for-pms": {
      title: "UBCMA Membership Portal",
      role: "Software Developer",
      heroImage: "/design/ubcma/hero.png",
      description: `UBCMA stands as UBC's only marketing focused club...`,
      overview: `The fundamental goal of the membership portal is to serve as a platform for students to engage with us and manage their membership...`,
      opportunity: `This inefficiency in our system was an opportunity for our dev team to streamline membership and event signups...`,
      techStack: `The frontend was built with React and Next.js using ShadCN...`,
      features: [
        "Authentication system",
        "Event + member portal integration",
        "Admin dashboard + data tables",
      ],
      gallery: [
        "/design/ubcma/1.png",
        "/design/ubcma/2.png",
        "/design/ubcma/3.png",
        "/design/ubcma/4.png",
      ],
    },
    "entreprenher": {
      title: "UBCMA Membership Portal",
      role: "Software Developer",
      heroImage: "/design/ubcma/hero.png",
      description: `UBCMA stands as UBC's only marketing focused club...`,
      overview: `The fundamental goal of the membership portal is to serve as a platform for students to engage with us and manage their membership...`,
      opportunity: `This inefficiency in our system was an opportunity for our dev team to streamline membership and event signups...`,
      techStack: `The frontend was built with React and Next.js using ShadCN...`,
      features: [
        "Authentication system",
        "Event + member portal integration",
        "Admin dashboard + data tables",
      ],
      gallery: [
        "/design/ubcma/1.png",
        "/design/ubcma/2.png",
        "/design/ubcma/3.png",
        "/design/ubcma/4.png",
      ],
    },
    "onlyprofs": {
      title: "UBCMA Membership Portal",
      role: "Software Developer",
      heroImage: "/design/ubcma/hero.png",
      description: `UBCMA stands as UBC's only marketing focused club...`,
      overview: `The fundamental goal of the membership portal is to serve as a platform for students to engage with us and manage their membership...`,
      opportunity: `This inefficiency in our system was an opportunity for our dev team to streamline membership and event signups...`,
      techStack: `The frontend was built with React and Next.js using ShadCN...`,
      features: [
        "Authentication system",
        "Event + member portal integration",
        "Admin dashboard + data tables",
      ],
      gallery: [
        "/design/ubcma/1.png",
        "/design/ubcma/2.png",
        "/design/ubcma/3.png",
        "/design/ubcma/4.png",
      ],
    },
    "react-lab": {
      title: "UBCMA Membership Portal",
      role: "Software Developer",
      heroImage: "/design/ubcma/hero.png",
      description: `UBCMA stands as UBC's only marketing focused club...`,
      overview: `The fundamental goal of the membership portal is to serve as a platform for students to engage with us and manage their membership...`,
      opportunity: `This inefficiency in our system was an opportunity for our dev team to streamline membership and event signups...`,
      techStack: `The frontend was built with React and Next.js using ShadCN...`,
      features: [
        "Authentication system",
        "Event + member portal integration",
        "Admin dashboard + data tables",
      ],
      gallery: [
        "/design/ubcma/1.png",
        "/design/ubcma/2.png",
        "/design/ubcma/3.png",
        "/design/ubcma/4.png",
      ],
    },
  };
  
 export const otherDesigns = [
    {
      title: "Productivity App Design",
      image: "/projects/productibility.png",
    },
    {
      title: "Project Management App Design",
      image: "/projects/assembly.png",
    },
    {
      title: "University Club App Design",
      image: "/projects/clubhub.png",
    },
    {
      title: "Website Design for a Non-Profit",
      image: "/projects/gtb.png",
    },
    {
      title: "Website Design for a Non-Profit",
      image: "/projects/elevate.png",
    },
    {
      title: "Women Networking Website Design",
      image: "/projects/nextconnect.png",
    },
    {
      title: "Skincare Company Instagram Graphics",
      image: "/projects/mdhair.png",
    },
    {
      title: "Food Startup Instagram Graphics",
      image: "/projects/nnect.png",
    },
    {
      title: "Networking Event Instagram Graphics",
      image: "/projects/companycrawl.jpeg",
    },
    {
      title: "Poster for an Online Event",
      image: "/projects/samahumss.png",
    },
    {
       title: "Newsletter Design for a Non-Profit",
       image: "/projects/newsletter.png",
    },
  ];
