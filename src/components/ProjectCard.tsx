import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-neutral-200 p-5 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600">
      <h3 className="font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {project.description}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded bg-neutral-100 px-2 py-0.5 text-xs dark:bg-neutral-800"
          >
            {t}
          </li>
        ))}
      </ul>
      {(project.href || project.repo) && (
        <div className="mt-4 flex gap-4 text-sm">
          {project.href && (
            <a className="underline" href={project.href} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
          {project.repo && (
            <a className="underline" href={project.repo} target="_blank" rel="noreferrer">
              Code
            </a>
          )}
        </div>
      )}
    </article>
  );
}
