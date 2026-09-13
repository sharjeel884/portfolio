export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  employmentType: string;
  context: string;
  responsibilities: string[];
  /** Optional: only populated where a verified figure exists. */
  technicalDecisions?: {
    decision: string;
    impact: string;
  }[];
  /** Optional: only populated where a verified figure exists. */
  measurableOutcomes?: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-tekxai",
    company: "Tekxai",
    role: "Senior Frontend Engineer",
    period: "Mar 2023 — Present",
    location: "Lahore",
    employmentType: "Full-Time",
    context: "Software and AI solutions company.",
    responsibilities: [
      "Deliver responsive web and mobile products using React.js, Next.js, React Native, and TypeScript.",
      "Build reusable component systems and dashboard workflows with a focus on accessibility, performance, and long-term maintainability.",
      "Integrate REST APIs and collaborate with backend engineers to design, troubleshoot, and optimize application data flows.",
      "Lead technical delivery for mid-size projects through sprint planning, code reviews, architecture decisions, and mentoring junior developers.",
      "Implement CI/CD workflows and frontend testing practices to improve code reliability and support faster release cycles.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "REST APIs",
      "CI/CD",
    ],
  },
  {
    id: "exp-azi-solutions",
    company: "Azi Solutions",
    role: "Frontend Developer",
    period: "Apr 2021 — Mar 2023",
    location: "Lahore",
    employmentType: "Full-Time",
    context:
      "Started as a Software Engineering Intern, progressed to Associate Software Engineer, and later moved into a Frontend Developer role.",
    responsibilities: [
      "Developed cross-platform interfaces with React.js and React Native, created reusable components, integrated REST APIs, and optimized application performance.",
      "Built user interfaces with Material UI, Tailwind CSS, and Bootstrap.",
      "Migrated frontend applications to Next.js.",
    ],
    technologies: [
      "React.js",
      "React Native",
      "Next.js",
      "Material UI",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
];
