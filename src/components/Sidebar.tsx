import {
  ArrowRightIcon,
  HomeIcon,
  LibraryIcon,
  ListIcon,
  PlusIcon,
  SearchIcon,
  SpotifyMark,
} from "./icons";

// "Playlists" da biblioteca = seções da página.
const LIBRARY = [
  { href: "#playlist", title: "This Is Julia Okada", subtitle: "Playlist · Julia", art: "🎧", round: false },
  { href: "#about", title: "Understanding The Self", subtitle: "Playlist · Sobre mim", art: "🧠", round: false },
  { href: "#skills", title: "Soundtrack Of My Stack", subtitle: "Playlist · Skills", art: "🎛️", round: false },
  { href: "#projects", title: "Projetos & Demos", subtitle: "Playlist · 4 faixas", art: "💾", round: false },
  { href: "#contact", title: "Let's Talk", subtitle: "Playlist · Contato", art: "📮", round: true },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Bloco de navegação */}
      <div className="panel px-5 py-4">
        <a href="#top" className="mb-5 flex items-center gap-2">
          <SpotifyMark size={34} className="text-[#1db954]" />
          <span className="font-display text-2xl font-extrabold">Julia</span>
        </a>
        <nav>
          <a href="#top" className="sidebar-link" data-active="true">
            <HomeIcon />
            Home
          </a>
          <a href="#projects" className="sidebar-link">
            <SearchIcon />
            Search
          </a>
        </nav>
      </div>

      {/* Biblioteca */}
      <div className="panel flex min-h-0 flex-1 flex-col px-2 py-4">
        <div className="mb-2 flex items-center justify-between px-3">
          <span className="sidebar-link gap-2 !py-0" data-active="true">
            <LibraryIcon />
            Your Library
          </span>
          <span className="flex items-center gap-3 text-[var(--text-muted)]">
            <PlusIcon size={18} />
            <ArrowRightIcon size={18} />
          </span>
        </div>

        <div className="mb-1 flex items-center justify-end gap-2 px-3 text-xs text-[var(--text-muted)]">
          Custom order
          <ListIcon size={16} />
        </div>

        <div className="scroll-area min-h-0 flex-1 px-1">
          {LIBRARY.map((item) => (
            <a key={item.href} href={item.href} className="library-item">
              <span
                className={`library-art ${item.round ? "library-art--round" : "library-art--square"}`}
              >
                {item.art}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-[var(--text)]">
                  {item.title}
                </span>
                <span className="block truncate text-xs text-[var(--text-muted)]">
                  {item.subtitle}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
