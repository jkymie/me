export type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Example Project",
    description:
      "A short description of what this project does and why it matters. Replace with your own work.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/jkymie/example",
  },
];
