import {
  DownloadIcon,
  HeartIcon,
  ListIcon,
  MoreIcon,
  PlayIcon,
  SearchIcon,
  ShuffleIcon,
} from "./icons";

// Linha de controles logo abaixo do hero (play, shuffle, curtir, ...).
export function ActionBar() {
  return (
    <div className="flex flex-wrap items-center gap-5 px-4 py-6 sm:px-6">
      <a href="#projects" className="play-fab" aria-label="Ver projetos">
        <PlayIcon size={26} />
      </a>
      <span className="icon-btn">
        <ShuffleIcon size={26} />
      </span>
      <span className="icon-btn" data-on="true">
        <HeartIcon size={26} filled />
      </span>
      <span className="icon-btn">
        <DownloadIcon size={26} />
      </span>
      <span className="icon-btn">
        <MoreIcon size={24} />
      </span>

      <div className="ml-auto flex items-center gap-4 text-[var(--text-muted)]">
        <span className="icon-btn">
          <SearchIcon size={18} />
        </span>
        <span className="flex items-center gap-2 text-xs font-semibold">
          Custom order
          <ListIcon size={16} />
        </span>
      </div>
    </div>
  );
}
