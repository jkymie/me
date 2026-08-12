import { BellIcon, ChevronLeft, ChevronRight, UsersIcon } from "./icons";

// Barra flutuante sobre o hero: setas de navegação + ações da conta.
export function TopBar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="pointer-events-auto flex gap-2">
        <button
          type="button"
          className="icon-btn h-8 w-8 rounded-full bg-black/60"
          aria-label="Voltar"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          className="icon-btn h-8 w-8 rounded-full bg-black/60"
          aria-label="Avançar"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="pointer-events-auto flex items-center gap-2">
        <span className="icon-btn h-8 w-8 rounded-full bg-black/60">
          <BellIcon size={16} />
        </span>
        <span className="icon-btn h-8 w-8 rounded-full bg-black/60">
          <UsersIcon size={16} />
        </span>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#1db954] text-xs font-bold text-black">
          JO
        </span>
      </div>
    </div>
  );
}
