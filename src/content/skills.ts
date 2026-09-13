export interface SkillCategory {
  area: string;
  description: string;
  skills: {
    name: string;
    highlights?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    area: "Frameworks & Languages",
    description: "Core frontend runtimes and typed languages",
    skills: [
      { name: "React.js" },
      { name: "React Native" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "JavaScript" },
    ],
  },
  {
    area: "Markup & Styling",
    description: "Interface construction and design systems",
    skills: [
      { name: "Docker" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
      { name: "Bootstrap" },
    ],
  },
  {
    area: "Integration & Backend",
    description: "Data flow between frontend and services",
    skills: [{ name: "REST APIs" }, { name: "Node.js" }],
  },
  {
    area: "Tooling & Quality",
    description: "Version control, delivery pipelines, and reliability",
    skills: [{ name: "Git" }, { name: "CI/CD" }, { name: "Testing" }],
  },
];
