import type { Project } from "@/data/projects";

function TrackRow({ project, index }: { project: Project; index: number }) {
  return (
    <div className="track-row">
      <span className="track-index text-sm">{index + 1}</span>

      <span className="min-w-0">
        <span className="track-title block truncate">{project.title}</span>
        <span className="block truncate text-xs">{project.tech.join(", ")}</span>
      </span>

      <span className="track-album min-w-0 truncate text-sm">{project.album}</span>

      <span className="flex items-center justify-end gap-3 text-xs">
        <span className="track-links">
          {project.href && (
            <a href={project.href} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer">
              Code
            </a>
          )}
        </span>
        <span className="tabular-nums">{project.duration}</span>
      </span>
    </div>
  );
}

function Column({ items, offset }: { items: Project[]; offset: number }) {
  return (
    <div>
      <div className="track-head">
        <span className="track-index">#</span>
        <span>Título</span>
        <span className="track-album">Álbum</span>
        <span className="text-right">Tempo</span>
      </div>
      <div className="mt-2">
        {items.map((project, i) => (
          <TrackRow key={project.title} project={project} index={offset + i} />
        ))}
      </div>
    </div>
  );
}

// Duas colunas em telas largas, como na tela de playlist do desktop.
export function TrackList({ projects }: { projects: Project[] }) {
  const half = Math.ceil(projects.length / 2);

  return (
    <div className="grid gap-x-10 gap-y-8 px-2 sm:px-4 xl:grid-cols-2">
      <Column items={projects.slice(0, half)} offset={0} />
      {projects.length > half && (
        <Column items={projects.slice(half)} offset={half} />
      )}
    </div>
  );
}
