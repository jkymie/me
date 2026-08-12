import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { PlaylistHero } from "@/components/PlaylistHero";
import { ActionBar } from "@/components/ActionBar";
import { TrackList } from "@/components/TrackList";
import { PlayerBar } from "@/components/PlayerBar";

const SECTIONS = [
  { href: "#projects", label: "Projetos" },
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contato" },
];

const CONTACTS = [
  { label: "E-mail", value: "julia@example.com", href: "mailto:julia@example.com", art: "✉️" },
  { label: "GitHub", value: "github.com/jkymie", href: "https://github.com/jkymie", art: "🐙" },
  { label: "LinkedIn", value: "in/julia-okada", href: "https://www.linkedin.com/", art: "💼" },
];

export default function Home() {
  return (
    <div className="app-shell" id="top">
      <Sidebar />

      <div className="main-pane panel scroll-area">
        <TopBar />
        <PlaylistHero trackCount={projects.length} />

        <div className="content-fade pb-16">
          <ActionBar />

          {/* Nav em chips, substitui a sidebar no mobile */}
          <nav className="flex gap-2 overflow-x-auto px-4 pb-6 min-[900px]:hidden">
            {SECTIONS.map((section) => (
              <a key={section.href} href={section.href} className="chip whitespace-nowrap">
                {section.label}
              </a>
            ))}
          </nav>

          {/* Projetos = faixas da playlist */}
          <section id="projects" className="scroll-mt-4 px-2 sm:px-4">
            <h2 className="font-display mb-4 px-2 text-2xl font-bold">Projetos</h2>
            <TrackList projects={projects} />
          </section>

          {/* Sobre */}
          <section id="about" className="scroll-mt-4 px-4 pt-14 sm:px-6">
            <h2 className="font-display mb-4 text-2xl font-bold">Sobre a artista</h2>
            <div className="media-card max-w-3xl sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <span className="grid h-24 w-24 flex-none place-items-center rounded-full bg-gradient-to-br from-[#1f7a45] to-[#1db954] font-display text-2xl font-extrabold">
                  JO
                </span>
                <div className="text-sm leading-relaxed text-[var(--text-muted)]">
                  <p>
                    Sou estudante de Ciência da Computação e desenvolvedora
                    full-stack. Gosto de desmontar as coisas pra entender como
                    funcionam — de APIs no back-end ao CSS que segura a página
                    em pé.
                  </p>
                  <p className="mt-3">
                    Entre aulas e estágio, peguei o hábito de lançar projetos
                    pequenos e imperfeitos em vez de esperar pela ideia
                    perfeita.
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-widest text-[var(--text-faint)]">
                    Agora: estagiando · estudando · debugando às 2h
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills = "álbuns" */}
          <section id="skills" className="scroll-mt-4 px-4 pt-14 sm:px-6">
            <h2 className="font-display mb-4 text-2xl font-bold">
              Soundtrack of my stack
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.name} className="media-card">
                  <span className="mb-4 grid aspect-square w-full place-items-center rounded bg-gradient-to-br from-[#1a1a1a] to-[#2f6b45] text-4xl">
                    {group.art}
                  </span>
                  <h3 className="text-base font-bold">{group.name}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Contato */}
          <section id="contact" className="scroll-mt-4 px-4 pt-14 sm:px-6">
            <h2 className="font-display mb-4 text-2xl font-bold">Let&apos;s talk</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {CONTACTS.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="media-card"
                >
                  <span className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#1db954]/15 text-xl">
                    {contact.art}
                  </span>
                  <span className="block text-sm font-bold">{contact.label}</span>
                  <span className="block truncate text-xs text-[var(--text-muted)]">
                    {contact.value}
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-10 text-xs text-[var(--text-faint)]">
              © {new Date().getFullYear()} Julia Okada — feito com Next.js. Não
              é o Spotify, só uma homenagem.
            </p>
          </section>
        </div>
      </div>

      <PlayerBar />
    </div>
  );
}
