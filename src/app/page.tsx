import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <section className="mb-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m Julia 👋
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          Computer Science student and developer, currently interning and
          building things for the web.
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
