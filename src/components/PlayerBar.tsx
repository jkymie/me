import {
  HeartIcon,
  ListIcon,
  NextIcon,
  PlayIcon,
  PrevIcon,
  RepeatIcon,
  ShuffleIcon,
  VolumeIcon,
} from "./icons";

// Barra do player, decorativa: mostra a "faixa atual" (o que estou fazendo agora).
export function PlayerBar() {
  return (
    <footer className="player-bar">
      {/* Faixa atual */}
      <div className="flex min-w-0 items-center gap-3">
        <span className="grid h-12 w-12 flex-none place-items-center rounded bg-gradient-to-br from-[#1f7a45] to-[#1db954] text-lg">
          💻
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold">
            Estagiando &amp; estudando
          </span>
          <span className="block truncate text-xs text-[var(--text-muted)]">
            Julia Okada
          </span>
        </span>
        <span className="icon-btn ml-2 hidden sm:grid" data-on="true">
          <HeartIcon size={16} filled />
        </span>
      </div>

      {/* Controles */}
      <div className="hidden flex-col items-center gap-2 min-[900px]:flex">
        <div className="flex items-center gap-5">
          <span className="icon-btn">
            <ShuffleIcon size={16} />
          </span>
          <span className="icon-btn">
            <PrevIcon size={18} />
          </span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-black transition-transform hover:scale-105">
            <PlayIcon size={16} />
          </span>
          <span className="icon-btn">
            <NextIcon size={18} />
          </span>
          <span className="icon-btn">
            <RepeatIcon size={16} />
          </span>
        </div>
        <div className="flex w-full max-w-[520px] items-center gap-2 text-[0.7rem] text-[var(--text-muted)]">
          <span className="tabular-nums">2:00</span>
          <span className="progress-track">
            <span className="progress-fill" style={{ width: "42%" }} />
          </span>
          <span className="tabular-nums">4:44</span>
        </div>
      </div>

      {/* Volume */}
      <div className="hidden items-center justify-end gap-3 text-[var(--text-muted)] min-[900px]:flex">
        <span className="icon-btn">
          <ListIcon size={16} />
        </span>
        <span className="icon-btn">
          <VolumeIcon size={18} />
        </span>
        <span className="progress-track max-w-[100px]">
          <span className="progress-fill" style={{ width: "70%" }} />
        </span>
      </div>
    </footer>
  );
}
