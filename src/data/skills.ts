export type SkillGroup = {
  /** Título do "álbum" de skills. */
  name: string;
  /** Emoji usado como capa — evita depender de imagens. */
  art: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Front-end",
    art: "🎨",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Back-end",
    art: "⚙️",
    items: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
  },
  {
    name: "Ferramentas",
    art: "🧰",
    items: ["Git", "Docker", "Linux", "CI/CD"],
  },
];

/** Lista achatada, para chips e afins. */
export const skills: string[] = skillGroups.flatMap((group) => group.items);
