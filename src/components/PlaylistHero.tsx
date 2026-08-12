import { SpotifyMark } from "./icons";

export function PlaylistHero({ trackCount }: { trackCount: number }) {
  return (
    <header id="playlist" className="playlist-hero px-4 pb-6 pt-16 sm:px-6 sm:pt-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
        {/* Capa */}
        <div className="w-[180px] shrink-0 sm:w-[200px]">
          <div className="cover-art">
            <span className="px-3 text-center">
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.25em] text-white/70">
                This is
              </span>
              <span className="font-display block text-2xl font-extrabold leading-tight">
                Julia
                <br />
                Okada
              </span>
            </span>
          </div>
        </div>

        {/* Texto */}
        <div className="min-w-0">
          <p className="text-xs font-semibold">Public Playlist</p>
          <h1 className="font-display mt-2 text-[clamp(2.25rem,7vw,5rem)] font-extrabold leading-[0.95]">
            This Is Julia Okada
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/80">
            Uma playlist sobre mim: estudante de Ciência da Computação e
            desenvolvedora full-stack. Cada faixa aqui é um projeto, uma
            tecnologia ou um pedaço do caminho até agora.
          </p>
          <p className="mt-4 flex flex-wrap items-center gap-x-1 gap-y-1 text-sm">
            <SpotifyMark size={18} className="text-[#1db954]" />
            <span className="font-semibold">Julia Okada</span>
            <span className="text-white/70">
              {" "}
              • São Paulo, BR • {trackCount} faixas • sempre em atualização
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}
