export interface Profile {
  name: string;
  role: string;
  specialization: string;
  supportingStatement: string;
  backendPositioning: string;
  location: string;
  phone: string;
  workArrangement: string;
  availability: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  yearsOfExperience: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  coreTechnologies: {
    name: string;
    category: string;
    tagline: string;
  }[];
  engineeringPrinciples: {
    title: string;
    description: string;
  }[];
  learningGoals: string[];
}

export const profileData: Profile = {
  name: "Sharjeel Khalid",
  role: "Frontend Engineer",
  specialization: "React, React Native, Next.js, TypeScript",
  supportingStatement:
    "Frontend Engineer with 4+ years of experience delivering high-performance, accessible web and mobile applications. Strong in React, React Native, Next.js, and TypeScript, with hands-on experience building scalable component systems, integrating REST APIs, improving performance, and leading code reviews.",
  backendPositioning:
    "Effective at turning product requirements into maintainable frontend architecture and reliable user experiences, working closely with backend engineers to design, troubleshoot, and optimize application data flows.",
  location: "Lahore, Pakistan",
  phone: "+92 322 4669050",
  workArrangement: "Remote or Hybrid",
  availability: "Open to frontend engineering roles",
  email: "sharjeelkhalid416@gmail.com",
  github: "https://github.com/sharjeel884",
  linkedin: "https://www.linkedin.com/in/sharjeelkhalid07",
  resumeUrl: "/resume.pdf",
  yearsOfExperience: "4+",
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of the Punjab",
    location: "Lahore",
    period: "Nov 2016 — Mar 2021",
  },
  metrics: [
    {
      label: "Frontend Experience",
      value: "4+ Years",
      description: "Building production web and mobile applications",
    },
    {
      label: "Current Role",
      value: "Senior Frontend Engineer",
      description: "Leading technical delivery for mid-size projects at Tekxai",
    },
    {
      label: "Published Package",
      value: "onscreen-recorder",
      description: "Screen-recording React component available on npm",
    },
  ],
  coreTechnologies: [
    {
      name: "React & Next.js",
      category: "Web Engineering",
      tagline: "Component systems, dashboard workflows, Next.js migrations",
    },
    {
      name: "React Native",
      category: "Mobile Engineering",
      tagline: "Cross-platform interfaces shared with the web codebase",
    },
    {
      name: "TypeScript",
      category: "Language & Type Safety",
      tagline: "Typed component APIs and maintainable frontend architecture",
    },
    {
      name: "REST APIs",
      category: "Integration",
      tagline: "API integration and data flow optimization with backend teams",
    },
  ],
  engineeringPrinciples: [
    {
      title: "Accessible by Default",
      description:
        "Build reusable component systems with accessibility, performance, and long-term maintainability treated as requirements rather than follow-up work.",
    },
    {
      title: "Maintainable Architecture",
      description:
        "Turn product requirements into frontend architecture that stays readable as a team and a codebase grow.",
    },
    {
      title: "Reliability Through Process",
      description:
        "Support faster release cycles with CI/CD workflows, frontend testing practices, and consistent code review.",
    },
    {
      title: "Collaborative Delivery",
      description:
        "Lead sprint planning and architecture decisions, and mentor junior developers so knowledge is not siloed.",
    },
  ],
  learningGoals: [
    "Deeper React Native performance profiling on lower-end Android devices",
    "Headless commerce patterns beyond Shopify Hydrogen",
    "Broader automated testing coverage across frontend release pipelines",
  ],
};
