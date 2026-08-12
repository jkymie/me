// Ícones inline (nenhuma dependência externa). Todos herdam `currentColor`
// e usam viewBox 24x24, então dá pra controlar tamanho só com width/height.
type IconProps = { size?: number; className?: string };

function Svg({
  size = 20,
  className,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function SpotifyMark({ size = 32, className }: IconProps) {
  return (
    <Svg size={size} className={className}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.59 14.43a.78.78 0 0 1-1.07.26c-2.93-1.79-6.62-2.2-10.98-1.2a.78.78 0 1 1-.35-1.52c4.77-1.09 8.85-.62 12.14 1.39.37.23.48.71.26 1.07Zm1.22-2.72a.97.97 0 0 1-1.34.32c-3.35-2.06-8.46-2.66-12.42-1.45a.97.97 0 1 1-.57-1.86c4.53-1.37 10.16-.7 14.01 1.66.46.28.6.88.32 1.33Zm.11-2.84C14.1 8.48 7.6 8.27 3.77 9.44a1.17 1.17 0 1 1-.68-2.23C7.49 5.87 14.67 6.12 19.1 8.75a1.16 1.16 0 0 1-1.18 2.01v.11Z" />
    </Svg>
  );
}

export function HomeIcon(p: IconProps) {
  return (
    <Svg {...p} size={p.size ?? 24}>
      <path d="M12.5 3.25a.75.75 0 0 0-1 0l-8.25 7.5A.75.75 0 0 0 3 11.3V20a1 1 0 0 0 1 1h5.5v-6h5v6H20a1 1 0 0 0 1-1v-8.7a.75.75 0 0 0-.25-.55l-8.25-7.5Z" />
    </Svg>
  );
}

export function SearchIcon(p: IconProps) {
  return (
    <Svg {...p} size={p.size ?? 24}>
      <path d="M10.5 3a7.5 7.5 0 1 0 4.55 13.46l4.24 4.25a1 1 0 0 0 1.42-1.42l-4.25-4.24A7.5 7.5 0 0 0 10.5 3Zm0 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Z" />
    </Svg>
  );
}

export function LibraryIcon(p: IconProps) {
  return (
    <Svg {...p} size={p.size ?? 24}>
      <path d="M3 4h2v16H3V4Zm4 0h2v16H7V4Zm5.2.2 1.9-.5 4.2 15.5-1.9.5L12.2 4.2Z" />
    </Svg>
  );
}

export function PlayIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M8 4.5c0-.8.87-1.29 1.55-.88l10 6a1 1 0 0 1 0 1.72l-10 6A1.03 1.03 0 0 1 8 16.5v-12Z" />
    </Svg>
  );
}

export function ShuffleIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M15.5 4h4.25a.75.75 0 0 1 .75.75V9h-2V7.9l-4.3 4.3 4.3 4.3V15.4h2v4.25a.75.75 0 0 1-.75.75H15.5v-2h1.1l-4.1-4.1-5.29 5.29a1 1 0 0 1-.71.3H3v-2h3.09l5.29-5.29-5.3-5.3H3V5h3.29a1 1 0 0 1 .71.3l5.3 5.29 4.1-4.1H15.5V4Z" />
    </Svg>
  );
}

export function HeartIcon({ filled, ...p }: IconProps & { filled?: boolean }) {
  return (
    <Svg {...p}>
      {filled ? (
        <path d="M12 21s-8.5-5.2-8.5-11A4.9 4.9 0 0 1 12 7.2 4.9 4.9 0 0 1 20.5 10c0 5.8-8.5 11-8.5 11Z" />
      ) : (
        <path d="M12 7.2A4.9 4.9 0 0 0 3.5 10c0 5.8 8.5 11 8.5 11s8.5-5.2 8.5-11A4.9 4.9 0 0 0 12 7.2Zm0 11.3C9.4 16.7 5.5 13.3 5.5 10a2.9 2.9 0 0 1 5.2-1.7l1.3 1.7 1.3-1.7A2.9 2.9 0 0 1 18.5 10c0 3.3-3.9 6.7-6.5 8.5Z" />
      )}
    </Svg>
  );
}

export function DownloadIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm.75 5v6.19l2.03-2.03 1.06 1.06-3.84 3.84-3.84-3.84 1.06-1.06 2.03 2.03V7h1.5Z" />
    </Svg>
  );
}

export function MoreIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
    </Svg>
  );
}

export function ChevronLeft(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M14.7 5.3a1 1 0 0 1 0 1.4L9.4 12l5.3 5.3a1 1 0 0 1-1.4 1.4l-6-6a1 1 0 0 1 0-1.4l6-6a1 1 0 0 1 1.4 0Z" />
    </Svg>
  );
}

export function ChevronRight(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M9.3 5.3a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4-1.4L14.6 12 9.3 6.7a1 1 0 0 1 0-1.4Z" />
    </Svg>
  );
}

export function PlusIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M11.25 4h1.5v7.25H20v1.5h-7.25V20h-1.5v-7.25H4v-1.5h7.25V4Z" />
    </Svg>
  );
}

export function ArrowRightIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M13.3 4.3l6 6a1 1 0 0 1 0 1.4l-6 6-1.4-1.4 4.29-4.3H4v-2h12.19L11.9 5.7l1.4-1.4Z" />
    </Svg>
  );
}

export function ListIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 5h16v2H4V5Zm0 6h16v2H4v-2Zm0 6h10v2H4v-2Z" />
    </Svg>
  );
}

export function PrevIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6 5h2v14H6V5Zm12.5.6v12.8a.75.75 0 0 1-1.16.63l-9-6.4a.75.75 0 0 1 0-1.26l9-6.4a.75.75 0 0 1 1.16.63Z" />
    </Svg>
  );
}

export function NextIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M16 5h2v14h-2V5ZM5.5 5.6v12.8a.75.75 0 0 0 1.16.63l9-6.4a.75.75 0 0 0 0-1.26l-9-6.4a.75.75 0 0 0-1.16.63Z" />
    </Svg>
  );
}

export function RepeatIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M7 4h10a4 4 0 0 1 4 4v3h-2V8a2 2 0 0 0-2-2H7v2.5L2.5 5 7 1.5V4Zm10 16H7a4 4 0 0 1-4-4v-3h2v3a2 2 0 0 0 2 2h10v-2.5l4.5 3.5-4.5 3.5V20Z" />
    </Svg>
  );
}

export function VolumeIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12.5 3.6v16.8a.75.75 0 0 1-1.24.57L6.9 17H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.9l4.36-3.97a.75.75 0 0 1 1.24.57ZM16.4 8.1a5.2 5.2 0 0 1 0 7.8l-1.06-1.06a3.7 3.7 0 0 0 0-5.68L16.4 8.1Zm2.3-2.3a8.45 8.45 0 0 1 0 12.4l-1.06-1.06a6.95 6.95 0 0 0 0-10.28L18.7 5.8Z" />
    </Svg>
  );
}

export function BellIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 2a6 6 0 0 0-6 6v3.6L4.3 15a1 1 0 0 0 .9 1.5h4.05a2.75 2.75 0 0 0 5.5 0h4.05a1 1 0 0 0 .9-1.5L18 11.6V8a6 6 0 0 0-6-6Z" />
    </Svg>
  );
}

export function UsersIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M9 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm7 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM9 12.5c3.2 0 6 1.6 6 3.6V19H3v-2.9c0-2 2.8-3.6 6-3.6Zm7 .5c2.7 0 5 1.4 5 3.1V19h-4.5v-2.9c0-1.2-.6-2.2-1.6-3 .35-.07.72-.1 1.1-.1Z" />
    </Svg>
  );
}
