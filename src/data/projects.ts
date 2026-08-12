export type Project = {
  /** Nome da faixa na "playlist". */
  title: string;
  /** Aparece como "artista" abaixo do título — uso o stack aqui. */
  tech: string[];
  description: string;
  /** Coluna "Álbum" da lista: contexto do projeto (curso, trabalho, side project). */
  album: string;
  /** Coluna de duração — só decorativa, no formato m:ss. */
  duration: string;
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Example Project",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "A short description of what this project does and why it matters. Replace with your own work.",
    album: "Side Projects",
    duration: "3:42",
    repo: "https://github.com/jkymie/example",
  },
  {
    title: "Another Project",
    tech: ["Python", "PostgreSQL"],
    description:
      "Add a second project here — API, script, or app you built and are proud of.",
    album: "Faculdade",
    duration: "4:07",
    repo: "https://github.com/jkymie/example-2",
  },
  {
    title: "One More Project",
    tech: ["Node.js", "Express"],
    description:
      "A third slot so the playlist doesn't feel empty. Swap for real work.",
    album: "Estágio",
    duration: "2:55",
    repo: "https://github.com/jkymie/example-3",
  },
  {
    title: "Portfolio",
    tech: ["Next.js", "React", "CSS"],
    description:
      "Este site — um portfólio com cara de player de música, feito só com Next.js e CSS.",
    album: "Side Projects",
    duration: "1:58",
    repo: "https://github.com/jkymie/me",
  },
];
